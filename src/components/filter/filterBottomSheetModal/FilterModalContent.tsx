import useFetchFilteredListV2 from '@apis/filter';
import ButtonBar from '@components/common/button/buttonBar/ButtonBar';
import Divider from '@components/common/divider/Divider';
import FilterBox from '@components/filter/filterBox/FilterBox';
import FILTERS from '@constants/filters';
import {
  parseFilters,
  toApiParams,
  buildFilterQuery,
  toggleFilterValue,
  FILTER_GROUPS,
  DEFAULT_MIN,
  DEFAULT_MAX,
  type FilterGroup,
  type SearchFilterState,
} from '@utils/searchFilters';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import useEventLogger from 'src/gtm/hooks/useEventLogger';
import titleMap from 'src/type/titleMap';

import * as styles from './filterModalContent.css';

interface Props {
  onComplete?: () => void;
  scrollRef: React.RefObject<HTMLDivElement>;
  searchText?: string;
  isOpen: boolean;
}

// 필터명 → 그룹 역매핑 (예: '경기' → 'region')
const FILTER_TO_GROUP: Record<string, FilterGroup> = {};
Object.entries(FILTERS).forEach(([group, names]) => {
  if (group === 'price') return;
  (names as string[]).forEach((name) => {
    FILTER_TO_GROUP[name] = group as FilterGroup;
  });
});

const FilterModalContent = ({ onComplete, scrollRef, searchText, isOpen }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { logClickEvent } = useEventLogger('filter_tag');

  const [draft, setDraft] = useState<SearchFilterState>(() =>
    parseFilters(new URLSearchParams(searchParams.toString())),
  );

  // 모달이 열릴 때마다 현재 URL 기준으로 draft 재초기화
  useEffect(() => {
    if (isOpen) {
      setDraft(parseFilters(new URLSearchParams(searchParams.toString())));
    }
  }, [isOpen, searchParams]);

  const filtersState = useMemo(() => {
    const state: Record<string, number> = {};
    FILTER_GROUPS.forEach((group) => {
      draft[group].forEach((name) => {
        state[name] = 1;
      });
    });
    return state;
  }, [draft]);

  const previewParams = useMemo(
    () => toApiParams({ ...draft, search: searchText ?? draft.search, page: 1 }),
    [draft, searchText],
  );
  const { data } = useFetchFilteredListV2(previewParams);
  const totalCount = data?.totalElements || 0;

  const handleToggleFilter = (filterName: string) => {
    const group = FILTER_TO_GROUP[filterName];
    if (!group) return;
    setDraft((prev) => ({ ...prev, [group]: toggleFilterValue(prev[group], filterName) }));
  };

  const handlePriceChange = (price: { minPrice: number; maxPrice: number }) => {
    setDraft((prev) => ({ ...prev, min: price.minPrice, max: price.maxPrice }));
  };

  const handleReset = () => {
    setDraft((prev) => ({
      ...prev,
      region: [],
      type: [],
      activity: [],
      etc: [],
      min: DEFAULT_MIN,
      max: DEFAULT_MAX,
    }));
  };

  const searchFilter = () => {
    const queryString = buildFilterQuery({ ...draft, search: searchText, page: 1 });
    router.push(queryString ? `/searchResult?${queryString}` : '/searchResult');
    logClickEvent('click_list', { label: '' });
    onComplete?.();
  };

  return (
    <>
      <main className={styles.main} ref={scrollRef}>
        {Object.entries(FILTERS).map(([key, items]) => (
          <div key={key}>
            <FilterBox
              title={titleMap[key]}
              items={items}
              id={key}
              filtersState={filtersState}
              onToggleFilter={handleToggleFilter}
              price={{ minPrice: draft.min, maxPrice: draft.max }}
              onPriceChange={handlePriceChange}
            />
            <Divider />
          </div>
        ))}
      </main>
      <ButtonBar
        type="reset"
        label={`${totalCount}개의 템플스테이 보기`}
        largeBtnClick={searchFilter}
        handleResetFilter={handleReset}
        isDisabled={totalCount === 0}
      />
    </>
  );
};
export default FilterModalContent;
