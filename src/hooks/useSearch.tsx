export const useSearch = () => {
  const escapeRegExp = (str: string) =>
    str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const charPattern = (ch: string) => {
    // 초성만 입력했을 때
    if (/[ㄱ-ㅎ]/.test(ch)) {
      const chStart: any = {
        ㄱ: "가".charCodeAt(0),
        ㄲ: "까".charCodeAt(0),
        ㄴ: "나".charCodeAt(0),
        ㄷ: "다".charCodeAt(0),
        ㄸ: "따".charCodeAt(0),
        ㄹ: "라".charCodeAt(0),
        ㅁ: "마".charCodeAt(0),
        ㅂ: "바".charCodeAt(0),
        ㅃ: "빠".charCodeAt(0),
        ㅅ: "사".charCodeAt(0),
        ㅆ: "싸".charCodeAt(0),
        ㅇ: "아".charCodeAt(0),
        ㅈ: "자".charCodeAt(0),
        ㅊ: "차".charCodeAt(0),
        ㅋ: "카".charCodeAt(0),
        ㅌ: "타".charCodeAt(0),
        ㅍ: "파".charCodeAt(0),
        ㅎ: "하".charCodeAt(0),
      };
      const start: number = chStart[ch];
      const last: number = start + 587;

      return `[${ch}\\u${start.toString(16)}-\\u${last.toString(16)}]`;
    } else if (/[가-히]/.test(ch)) {
      const startCode = "가".charCodeAt(0);
      const charCode = ch.charCodeAt(0) - startCode;

      if (charCode % 28 <= 0) {
        const start = Math.floor(charCode / 28) * 28 + startCode;
        const last = start + 27;
        return `[\\u${start.toString(16)}-\\u${last.toString(16)}]`;
      } else return ch;
    } else return escapeRegExp(ch);
  };

  // 퍼지 문자열 검색
  const createFuzzyMatcher = (keyword: string) => {
    const pattern = keyword.split("").map(charPattern).join(".*?");
    return new RegExp(pattern);
  };

  return { createFuzzyMatcher };
};
