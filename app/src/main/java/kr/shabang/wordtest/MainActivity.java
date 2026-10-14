package kr.shabang.wordtest;

import android.content.ActivityNotFoundException;
import android.content.ContentValues;
import android.graphics.Rect;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.speech.tts.TextToSpeech;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.activity.ComponentActivity;
import androidx.activity.OnBackPressedCallback;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.core.content.FileProvider;

import com.google.mlkit.vision.common.InputImage;
import com.google.mlkit.vision.text.Text;
import com.google.mlkit.vision.text.TextRecognition;
import com.google.mlkit.vision.text.TextRecognizer;
import com.google.mlkit.vision.text.korean.KoreanTextRecognizerOptions;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.Locale;

public class MainActivity extends ComponentActivity {
  private WebView web;
  private TextToSpeech tts;
  private boolean ttsReady = false;
  private boolean pageReady = false;
  private String pendingJs = null;
  private Uri photoUri = null;
  private TextRecognizer recognizer;

  private ActivityResultLauncher<Uri> takePicture;
  private ActivityResultLauncher<String> getContent;
  private ActivityResultLauncher<String[]> openDoc;

  @Override
  protected void onCreate(Bundle saved) {
    super.onCreate(saved);
    if (saved != null) {
      String u = saved.getString("photoUri");
      if (u != null) photoUri = Uri.parse(u);
    }

    takePicture = registerForActivityResult(new ActivityResultContracts.TakePicture(), ok -> {
      if (Boolean.TRUE.equals(ok) && photoUri != null) runOcr(photoUri);
      else deliverOcr("{\"error\":\"cancel\"}");
    });
    getContent = registerForActivityResult(new ActivityResultContracts.GetContent(), uri -> {
      if (uri != null) runOcr(uri);
      else deliverOcr("{\"error\":\"cancel\"}");
    });
    openDoc = registerForActivityResult(new ActivityResultContracts.OpenDocument(), uri -> {
      if (uri != null) readBackup(uri);
    });

    web = new WebView(this);
    setContentView(web);
    WebSettings s = web.getSettings();
    s.setJavaScriptEnabled(true);
    s.setDomStorageEnabled(true);
    s.setAllowFileAccess(true);
    s.setMediaPlaybackRequiresUserGesture(false);
    s.setTextZoom(100);
    web.setWebViewClient(new WebViewClient());
    web.addJavascriptInterface(new Bridge(), "Android");
    web.loadUrl("file:///android_asset/index.html");

    tts = new TextToSpeech(this, status -> {
      if (status == TextToSpeech.SUCCESS) {
        tts.setLanguage(Locale.US);
        tts.setSpeechRate(0.85f);
        ttsReady = true;
      }
    });

    getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
      @Override
      public void handleOnBackPressed() {
        web.evaluateJavascript("(window.appBack?appBack():false)", v -> {
          if (!"true".equals(v)) {
            setEnabled(false);
            getOnBackPressedDispatcher().onBackPressed();
            setEnabled(true);
          }
        });
      }
    });
  }

  @Override
  protected void onSaveInstanceState(Bundle out) {
    super.onSaveInstanceState(out);
    if (photoUri != null) out.putString("photoUri", photoUri.toString());
  }

  @Override
  protected void onDestroy() {
    if (tts != null) tts.shutdown();
    if (recognizer != null) recognizer.close();
    super.onDestroy();
  }

  private void runJs(String js) {
    runOnUiThread(() -> {
      if (pageReady) web.evaluateJavascript(js, null);
      else pendingJs = (pendingJs == null ? "" : pendingJs + ";") + js;
    });
  }

  private void deliverOcr(String json) {
    runJs("window.onOcr&&window.onOcr(" + json + ")");
  }

  private void runOcr(Uri uri) {
    runJs("window.onOcrProgress&&window.onOcrProgress('사진에서 글자를 읽는 중…')");
    try {
      InputImage img = InputImage.fromFilePath(this, uri);
      if (recognizer == null) recognizer = TextRecognition.getClient(new KoreanTextRecognizerOptions.Builder().build());
      final int w = img.getWidth();
      recognizer.process(img)
          .addOnSuccessListener(text -> {
            try {
              JSONArray lines = new JSONArray();
              for (Text.TextBlock b : text.getTextBlocks()) {
                for (Text.Line l : b.getLines()) {
                  Rect r = l.getBoundingBox();
                  if (r == null) continue;
                  JSONObject o = new JSONObject();
                  o.put("t", l.getText());
                  o.put("x", r.left);
                  o.put("y", r.top);
                  o.put("w", r.width());
                  o.put("h", r.height());
                  lines.put(o);
                }
              }
              JSONObject res = new JSONObject();
              res.put("w", w);
              res.put("lines", lines);
              deliverOcr(res.toString());
            } catch (Exception e) {
              deliverOcr(errJson(e));
            }
          })
          .addOnFailureListener(e -> deliverOcr(errJson(e)));
    } catch (Exception e) {
      deliverOcr(errJson(e));
    }
  }

  private String errJson(Exception e) {
    try {
      JSONObject o = new JSONObject();
      o.put("error", String.valueOf(e.getMessage()));
      return o.toString();
    } catch (Exception x) {
      return "{\"error\":\"unknown\"}";
    }
  }

  private void readBackup(Uri uri) {
    try (InputStream in = getContentResolver().openInputStream(uri);
         BufferedReader br = new BufferedReader(new InputStreamReader(in, StandardCharsets.UTF_8))) {
      StringBuilder sb = new StringBuilder();
      String line;
      while ((line = br.readLine()) != null) sb.append(line).append('\n');
      runJs("window.onBackup&&window.onBackup(" + JSONObject.quote(sb.toString()) + ")");
    } catch (Exception e) {
      runJs("window.onBackup&&window.onBackup('')");
    }
  }

  private class Bridge {
    @JavascriptInterface
    public void ready() {
      runOnUiThread(() -> {
        pageReady = true;
        if (pendingJs != null) {
          web.evaluateJavascript(pendingJs, null);
          pendingJs = null;
        }
      });
    }

    @JavascriptInterface
    public void takePhoto() {
      runOnUiThread(() -> {
        try {
          File dir = new File(getCacheDir(), "photos");
          if (!dir.exists()) dir.mkdirs();
          File f = new File(dir, "shot.jpg");
          photoUri = FileProvider.getUriForFile(MainActivity.this, getPackageName() + ".files", f);
          takePicture.launch(photoUri);
        } catch (ActivityNotFoundException e) {
          deliverOcr("{\"error\":\"카메라 앱이 없어요\"}");
        } catch (Exception e) {
          deliverOcr(errJson(e));
        }
      });
    }

    @JavascriptInterface
    public void pickPhoto() {
      runOnUiThread(() -> {
        try {
          getContent.launch("image/*");
        } catch (Exception e) {
          deliverOcr(errJson(e));
        }
      });
    }

    @JavascriptInterface
    public void speak(String t) {
      if (ttsReady && t != null) tts.speak(t, TextToSpeech.QUEUE_FLUSH, null, "w");
    }

    @JavascriptInterface
    public String saveFile(String name, String data) {
      try {
        byte[] bytes = data.getBytes(StandardCharsets.UTF_8);
        if (Build.VERSION.SDK_INT >= 29) {
          ContentValues v = new ContentValues();
          v.put(MediaStore.Downloads.DISPLAY_NAME, name);
          v.put(MediaStore.Downloads.MIME_TYPE, "application/json");
          v.put(MediaStore.Downloads.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS);
          Uri u = getContentResolver().insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, v);
          if (u == null) return "저장 위치를 만들지 못함";
          try (OutputStream os = getContentResolver().openOutputStream(u)) { os.write(bytes); }
        } else {
          File dir = getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS);
          if (dir == null) return "저장 공간 없음";
          try (FileOutputStream os = new FileOutputStream(new File(dir, name))) { os.write(bytes); }
        }
        return "ok";
      } catch (Exception e) {
        return String.valueOf(e.getMessage());
      }
    }

    @JavascriptInterface
    public void pickBackup() {
      runOnUiThread(() -> {
        try {
          openDoc.launch(new String[]{"application/json", "application/octet-stream", "text/plain"});
        } catch (Exception ignored) { }
      });
    }
  }
}
