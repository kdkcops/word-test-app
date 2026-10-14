// 사진 인식 결과(줄 단위 글자 + 위치)를 "영어 단어 | 한글 뜻" 목록으로 정리
// lines: [{t:"emotion 감정", x, y, w, h}], imgW: 사진 가로 크기
(function (root) {
  const HANGUL = /[가-힣]/;
  const LATIN = /[A-Za-z]/;
  const POS_EN = /^(?:n|v|vt|vi|adj|a|adv|ad|prep|conj|pron|int|phr)\.\s*/i;
  const POS_KO = /^(?:[\[\(〔【<]?[명동형부전접대감][\]\)〕】>]?\s+|[\[\(〔【<][명동형부전접대감][\]\)〕】>]\s*)/;
  const BULLET = /^[\s\d.)\]:·•▪■□☐☑✓✔○●◎◇◆★☆\-–—*#]+/;

  function cleanWord(s) {
    return s.replace(BULLET, "").replace(/[“”"]/g, "").replace(/\s+/g, " ").trim()
      .replace(/[.,:;]+$/, "");
  }
  function cleanMeaning(s) {
    let m = s.trim();
    for (let i = 0; i < 3; i++) m = m.replace(POS_EN, "").replace(POS_KO, "");
    m = m.replace(/^[\s.:=\-–—·|]+/, "").replace(/\s+/g, " ").trim();
    return m;
  }
  // 영어 단어(최대 4단어 숙어)인지
  function isWordLike(s) {
    return /^[A-Za-z][A-Za-z'’\-]*(?:\s+[A-Za-z~][A-Za-z'’\-~]*){0,3}$/.test(s) && s.length <= 40;
  }

  function parseLines(lines, imgW) {
    const L = lines
      .map(l => ({ ...l, t: (l.t || "").trim() }))
      .filter(l => l.t)
      .map(l => ({ ...l, cy: l.y + l.h / 2, hasK: HANGUL.test(l.t), hasE: LATIN.test(l.t) }));
    const out = [];
    const used = new Set();

    // 1) 한 줄에 영어와 한글이 같이 있는 경우
    L.forEach((l, i) => {
      if (!(l.hasK && l.hasE)) return;
      const t = l.t.replace(BULLET, "");
      const m = /^([A-Za-z][A-Za-z'’\-]*(?:\s+[A-Za-z~][A-Za-z'’\-~]*){0,3})\s*(.*)$/.exec(t);
      if (!m) return;
      const rest = m[2];
      if (!HANGUL.test(rest)) return;
      // 영어 뒤 품사 기호(n. v.)가 단어에 붙은 경우 분리
      let w = m[1].trim();
      const posTail = /\s+(?:n|v|vt|vi|a|ad|adj|adv|prep|conj|pron|int)\.?$/i.exec(w);
      if (posTail) w = w.slice(0, posTail.index);
      const k = cleanMeaning(rest);
      if (!w || !k) return;
      out.push({ w: cleanWord(w), k, x: l.x, y: l.y });
      used.add(i);
    });

    // 2) 영어 줄과 한글 줄이 따로 있는 경우: 같은 높이 오른쪽 → 바로 아래 순서로 짝짓기
    const eng = [], kor = [];
    L.forEach((l, i) => {
      if (used.has(i)) return;
      if (l.hasE && !l.hasK) {
        const w = cleanWord(l.t);
        if (isWordLike(w)) eng.push({ ...l, i, word: w });
      } else if (l.hasK && !/[A-Za-z]{3,}\s+[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(l.t)) {
        kor.push({ ...l, i });
      }
    });
    const kUsed = new Set();
    eng.forEach(e => {
      let best = null, bestScore = Infinity;
      kor.forEach(k => {
        if (kUsed.has(k.i)) return;
        const hh = Math.max(e.h, k.h);
        const dy = Math.abs(e.cy - k.cy);
        if (dy < hh * 0.6 && k.x > e.x + e.w * 0.5) {
          const sc = k.x - (e.x + e.w);
          if (sc > -e.h && sc < (imgW || 4000) * 0.6 && sc < bestScore) { best = k; bestScore = sc; }
        }
      });
      if (!best) {
        kor.forEach(k => {
          if (kUsed.has(k.i)) return;
          const gap = k.y - (e.y + e.h);
          if (gap >= -e.h * 0.3 && gap < e.h * 1.2 && Math.abs(k.x - e.x) < e.h * 3) {
            const sc = 10000 + gap;
            if (sc < bestScore) { best = k; bestScore = sc; }
          }
        });
      }
      if (best) {
        const k = cleanMeaning(best.t);
        if (k && HANGUL.test(k)) { out.push({ w: e.word, k, x: e.x, y: e.y }); kUsed.add(best.i); }
      }
    });

    // 3) 읽는 순서(왼쪽 열 위→아래, 그다음 오른쪽 열)로 정렬 + 중복 제거
    const half = (imgW || 0) / 2;
    out.sort((a, b) => {
      const ca = half && a.x > half ? 1 : 0, cb = half && b.x > half ? 1 : 0;
      return ca - cb || a.y - b.y || a.x - b.x;
    });
    const seen = new Set(), res = [];
    out.forEach(o => {
      const key = o.w.toLowerCase();
      if (!o.w || seen.has(key)) return;
      seen.add(key);
      res.push({ w: o.w, k: o.k });
    });
    return res;
  }
  root.parseOcrLines = parseLines;
  if (typeof module !== "undefined") module.exports = { parseLines };
})(typeof window !== "undefined" ? window : globalThis);
