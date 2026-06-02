/**
 * templestay.com의 죽은 이미지 URL을 신규 CDN(ts-cdn.com)으로 변환한다.
 *
 * 기존: https://www.templestay.com/fe/file/imgView.do?...&val1=/templePrg/2025/7/28&val2=20250728045554156_1
 * 변환: https://ts-cdn.com/ups/templePrg/2025/7/28/20250728045554156_1.webp
 *       (= https://ts-cdn.com/ups + val1 + '/' + val2(확장자 제거) + '.webp')
 *
 * templestay.com 호스트가 아니면(이미 CDN이거나 블로그 등 외부 이미지) 원본을 그대로 반환한다.
 */
const convertTempleImageUrl = (url?: string | null): string => {
  if (!url) return '';
  if (!url.includes('templestay.com')) return url;

  try {
    const { searchParams } = new URL(url);
    const val1 = searchParams.get('val1'); // 예: /templePrg/2025/7/28, /old/RsImage
    const val2 = searchParams.get('val2'); // 예: 20250728045554156_1, L_20319.png

    if (val1 && val2) {
      const fileName = val2.replace(/\.(png|jpe?g|webp|gif)$/i, '');
      return `https://ts-cdn.com/ups${val1}/${fileName}.webp`;
    }
  } catch {
    // URL 파싱 실패 시 원본 반환
  }

  return url;
};

export default convertTempleImageUrl;
