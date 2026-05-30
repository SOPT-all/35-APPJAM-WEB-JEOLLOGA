'use client';

import useFetchFilteredListV2 from '@apis/filter';
import { useAddWishlistV2, useRemoveWishlistV2 } from '@apis/wish';
import Icon from '@assets/svgs';
import SearchCardList from '@components/card/templeStayCard/searchCardList/SearchCardList';
import BottomSheet from '@components/common/bottmsheet/BottomSheet';
import SortBtn from '@components/common/button/sortBtn/SortBtn';
import SearchEmpty from '@components/common/empty/searchEmpty/SearchEmpty';
import ModalContainer from '@components/common/modal/ModalContainer';
import Pagination from '@components/common/pagination/Pagination';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import FilterTypeBox from '@components/filter/filterTypeBox/FilterTypeBox';
import Header from '@components/header/Header';
import SearchHeader from '@components/search/searchHeader/SearchHeader';
import { SortOption, SORT_LABELS, SORT_OPTIONS } from '@constants/sort';
import { getStorageValue } from '@hooks/useLocalStorage';
import useNavigateTo from '@hooks/useNavigateTo';
import {
  parseFilters,
  toApiParams,
  buildFilterQuery,
  isPriceChanged,
  FILTER_GROUPS,
  DEFAULT_MIN,
  DEFAULT_MAX,
  type FilterGroup,
  type SearchFilterState,
} from '@utils/searchFilters';
import { getCookie } from 'cookies-next';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import useEventLogger from 'src/gtm/hooks/useEventLogger';

import * as styles from './searchResultPage.css';

export default function SearchResultPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const filterState = parseFilters(new URLSearchParams(searchParams.toString()));
  const queryParams = toApiParams(filterState);

  const pushFilters = (next: SearchFilterState) => {
    const queryString = buildFilterQuery(next);
    router.push(queryString ? `/searchResult?${queryString}` : '/searchResult');
  };

  const [isSortSheetOpen, setIsSortSheetOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutate: addWish } = useAddWishlistV2();
  const { mutate: removeWish } = useRemoveWishlistV2();

  const { data, isLoading } = useFetchFilteredListV2(queryParams);

  const templestays = data?.content || [];
  const totalPages = data?.totalPages || 1;
  const currentPage = data?.currentPage || 1;

  const isInitialLoading = isLoading && !data;

  const handleToggleWishlist = (templestayId: number, liked: boolean) => {
    const userNickname = getCookie('userNickname');

    if (!userNickname) {
      setIsModalOpen(true);
      return;
    }

    if (liked) {
      removeWish(templestayId);
    } else {
      addWish(templestayId);
    }
  };

  const searchText = filterState.search;
  const selectedOption: SortOption = filterState.sort as SortOption;

  const activeFilters: string[] = FILTER_GROUPS.filter((group) => filterState[group].length > 0);

  if (isPriceChanged(filterState.min, filterState.max)) {
    activeFilters.push('price');
  }

  const handlePageChange = (newPage: number) => {
    pushFilters({ ...filterState, page: newPage });
  };

  const handleSortChange = (option: SortOption) => {
    setIsSortSheetOpen(false);
    pushFilters({ ...filterState, sort: option, page: 1 });
  };

  const handleResetGroup = (groupKey: string) => {
    const next: SearchFilterState = { ...filterState, page: 1 };

    if (groupKey === 'price') {
      next.min = DEFAULT_MIN;
      next.max = DEFAULT_MAX;
    } else {
      next[groupKey as FilterGroup] = [];
    }

    pushFilters(next);
  };

  const navigateToLogin = useNavigateTo('/loginStart');
  const { logClickEvent } = useEventLogger('searchReault');

  const handleLogin = () => {
    navigateToLogin();
    logClickEvent('click_login', { screen: 'modal_login_wish' });
  };

  const closeModal = () => {
    setIsModalOpen(false);

    logClickEvent('click_cancel', { screen: 'modal_login_wish' });
  };

  const prevPath = getStorageValue('prevPage') || '';

  if (isInitialLoading) {
    return <ExceptLayout type="loading" />;
  }

  return (
    <div className={styles.container}>
      {isModalOpen && (
        <ModalContainer
          modalTitle="로그인 하시겠어요?"
          modalBody="찜하려면 로그인이 필요해요."
          isOpen={isModalOpen}
          handleClose={closeModal}
          handleSubmit={handleLogin}
          leftBtnLabel="취소"
          rightBtnLabel="로그인하기"
        />
      )}

      <div className={styles.headerContainer}>
        {searchText ? <SearchHeader searchText={searchText} prevPath={prevPath} /> : <Header />}
        <FilterTypeBox
          activeFilters={activeFilters}
          onResetGroup={handleResetGroup}
          searchText={searchText}
        />
      </div>

      {templestays.length === 0 ? (
        <div className={styles.emptyContainer}>
          <SearchEmpty text={searchText || undefined} />
        </div>
      ) : (
        <div className={styles.bodyContainer}>
          <div>
            <div className={styles.sortWrapper}>
              <SortBtn
                text={SORT_LABELS[selectedOption]}
                onClick={() => setIsSortSheetOpen(true)}
              />
            </div>

            <BottomSheet isOpen={isSortSheetOpen} onClose={() => setIsSortSheetOpen(false)}>
              <div className={styles.sortSheetContent}>
                {Object.entries(SORT_OPTIONS).map(([key, value]) => {
                  const isActive = value === selectedOption;

                  return (
                    <button
                      key={key}
                      onClick={() => handleSortChange(value)}
                      className={`${styles.sortOptionButton} ${isActive && styles.active}`}>
                      {SORT_LABELS[value as SortOption]}
                      {isActive && <Icon.IcnCheckBlack />}
                    </button>
                  );
                })}
              </div>
            </BottomSheet>

            <div className={styles.cardListWrapper}>
              <SearchCardList
                data={templestays}
                layout="horizontal"
                onToggleWishlist={handleToggleWishlist}
                onRequireLogin={() => setIsModalOpen(true)}
              />
            </div>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            color="white"
          />
        </div>
      )}
    </div>
  );
}
