import { isPriceChanged, parseFilters } from '@utils/searchFilters';
import type { Metadata } from 'next';

import SearchResultPageClient from './SearchResultPageClient';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const toURLSearchParams = (params: { [key: string]: string | string[] | undefined }) => {
  const usp = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) value.forEach((v) => usp.append(key, v));
    else if (value !== undefined) usp.set(key, value);
  });
  return usp;
};

export const generateMetadata = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> => {
  const params = await searchParams;
  const filter = parseFilters(toURLSearchParams(params));
  const keyword = filter.search;

  // 제목: 검색어 우선, 없으면 지역·유형으로 구성
  const titleLabel = keyword || [...filter.region, ...filter.type].join(' ');
  const title = keyword
    ? `${keyword} 템플스테이 검색 결과 | 절로가`
    : titleLabel
      ? `${titleLabel} 템플스테이 | 절로가`
      : '템플스테이 검색 결과 | 절로가';

  // 설명: 검색어 + 선택한 필터 조건을 모두 나열
  const conditions: string[] = [];
  if (keyword) conditions.push(`'${keyword}'`);
  if (filter.region.length) conditions.push(filter.region.join('·'));
  if (filter.type.length) conditions.push(filter.type.join('·'));
  if (filter.activity.length) conditions.push(filter.activity.join('·'));
  if (filter.etc.length) conditions.push(filter.etc.join('·'));
  if (isPriceChanged(filter.min, filter.max)) conditions.push(`${filter.min}~${filter.max}만원`);

  const description = conditions.length
    ? `${conditions.join(', ')} 조건의 템플스테이 검색 결과예요. 마음에 드는 템플스테이를 찾아 지친 일상에 특별한 휴식을 더해보세요.`
    : '원하는 조건의 템플스테이를 찾아 지친 일상에 특별한 휴식을 더해보세요.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
};

const SearchResult = () => <SearchResultPageClient />;

export default SearchResult;
