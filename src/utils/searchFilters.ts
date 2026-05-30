import { TemplestaySearchParamsV2 } from '@apis/filter/type';
import { SORT_OPTIONS } from '@constants/sort';

/**
 * 검색 결과 페이지의 필터 상태. URL searchParams와 1:1로 대응
 * 적용된 필터의 유일한 source of truth는 URL,
 * 이 객체는 URL을 파싱/직렬화하기 위함.
 */
export interface SearchFilterState {
  region: string[];
  type: string[];
  activity: string[];
  etc: string[];
  min: number;
  max: number;
  search: string;
  sort: string;
  page: number;
  size: number;
}

export const FILTER_GROUPS = ['region', 'type', 'activity', 'etc'] as const;
export type FilterGroup = (typeof FILTER_GROUPS)[number];

export const DEFAULT_MIN = 0;
export const DEFAULT_MAX = 30;

// ?region=경기,서울 / ?region=경기&region=서울 두 형식 모두 배열로 파싱
const getList = (sp: URLSearchParams, key: string): string[] =>
  sp
    .getAll(key)
    .flatMap((value) => value.split(','))
    .map((value) => value.trim())
    .filter(Boolean);

/** URL searchParams → 필터 상태 객체 */
export const parseFilters = (sp: URLSearchParams): SearchFilterState => ({
  region: getList(sp, 'region'),
  type: getList(sp, 'type'),
  activity: getList(sp, 'activity'),
  etc: getList(sp, 'etc'),
  min: Number(sp.get('min') ?? DEFAULT_MIN),
  max: Number(sp.get('max') ?? DEFAULT_MAX),
  search: sp.get('search') ?? '',
  sort: sp.get('sort') ?? SORT_OPTIONS.RECOMMEND,
  page: Number(sp.get('page') ?? 1),
  size: Number(sp.get('size') ?? 5),
});

/** 필터 상태 객체 → URL 쿼리스트링(기본값은 생략해 URL을 깔끔하게 유지) */
export const buildFilterQuery = (filter: Partial<SearchFilterState>): string => {
  const sp = new URLSearchParams();

  FILTER_GROUPS.forEach((group) => {
    filter[group]?.forEach((value) => sp.append(group, value));
  });

  if (filter.min && filter.min > DEFAULT_MIN) sp.set('min', String(filter.min));
  if (filter.max !== undefined && filter.max < DEFAULT_MAX) sp.set('max', String(filter.max));
  if (filter.search) sp.set('search', filter.search);
  if (filter.sort && filter.sort !== SORT_OPTIONS.RECOMMEND) sp.set('sort', filter.sort);
  if (filter.page && filter.page > 1) sp.set('page', String(filter.page));

  return sp.toString();
};

/** 필터 상태 객체 → 목록 API 파라미터(그룹은 콤마 조인) */
export const toApiParams = (filter: SearchFilterState): TemplestaySearchParamsV2 => {
  const join = (values: string[]) => (values.length ? values.join(',') : undefined);

  return {
    region: join(filter.region),
    type: join(filter.type),
    activity: join(filter.activity),
    etc: join(filter.etc),
    min: filter.min,
    max: filter.max,
    sort: filter.sort,
    search: filter.search,
    page: filter.page,
    size: filter.size,
  };
};

/** 특정 그룹의 필터 값을 토글한 새 배열 반환 */
export const toggleFilterValue = (values: string[], name: string): string[] =>
  values.includes(name) ? values.filter((value) => value !== name) : [...values, name];

/** 가격이 기본 범위(0~30)에서 벗어났는지 */
export const isPriceChanged = (min: number, max: number): boolean =>
  min > DEFAULT_MIN || max < DEFAULT_MAX;
