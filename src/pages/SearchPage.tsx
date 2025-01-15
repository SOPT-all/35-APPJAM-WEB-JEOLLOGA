import DetailTitle from '@components/detailTitle/DetailTitle';
import RecentBtnBox from '@components/search/recentBtn/RecentBtnBox';
import SearchHeader from '@components/search/searchHeader/SearchHeader';

const recentData = [
  { id: 1, content: '불ㅇ사' },
  { id: 2, content: '봉인사' },
  { id: 3, content: '숙구사' },
  { id: 4, content: '불ㅇ사' },
  { id: 5, content: '봉인사' },
  { id: 6, content: '숙구사' },
  { id: 7, content: '불ㅇ사' },
  { id: 8, content: '불ㅇ사' },
  { id: 9, content: '봉인사' },
  { id: 10, content: '숙구사' },
];

const SearchPage = () => {
  return (
    <>
      <SearchHeader />
      <DetailTitle title="최근 검색" isTotal size="small" rightBtnLable="전체 삭제" />
      <RecentBtnBox data={recentData} />
    </>
  );
};

export default SearchPage;
