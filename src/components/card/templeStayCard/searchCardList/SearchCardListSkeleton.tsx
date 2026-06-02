import TempleStayCardSkeleton from '../templeStayCardSkeleton/TempleStayCardSkeleton';
import container from './searchCardList.css';

interface SearchCardListSkeletonProps {
  count?: number;
}

const SearchCardListSkeleton = ({ count = 5 }: SearchCardListSkeletonProps) => {
  return (
    <section className={container}>
      {Array.from({ length: count }).map((_, index) => (
        <TempleStayCardSkeleton key={index} />
      ))}
    </section>
  );
};

export default SearchCardListSkeleton;
