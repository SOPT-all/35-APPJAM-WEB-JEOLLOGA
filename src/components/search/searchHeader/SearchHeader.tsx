import Icon from '@assets/svgs';
import SearchBar from '@components/search/searchBar/SearchBar';
import searchHeaderStyle from '@components/search/searchHeader/searchHeader.css';

const SearchHeader = () => {
  return (
    <header className={searchHeaderStyle}>
      <Icon.IcnArrowBlackLeft />
      <SearchBar />
    </header>
  );
};

export default SearchHeader;
