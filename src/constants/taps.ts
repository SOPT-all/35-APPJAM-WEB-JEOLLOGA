export const TAPS = {
  filter: ['지역', '유형', '목적', '체험', '가격', '기타'],
  detail: ['리뷰', '프로그램 일정', '가격', '템플스테이 정보', '지도'],
} as const;

export type TapType = keyof typeof TAPS;
