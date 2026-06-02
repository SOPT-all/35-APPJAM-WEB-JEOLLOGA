import useGetRanking from '@apis/ranking';
import { useAddWishlistV2, useRemoveWishlistV2 } from '@apis/wish';
import PopularCard from '@components/card/popularCard/PopularCard';
import CarouselIndex from '@components/carousel/popularCarousel/CarouselIndex';
import PopularCarouselSkeleton from '@components/carousel/popularCarousel/PopularCarouselSkeleton';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import useInfiniteCarousel from '@hooks/useInfiniteCarousel';
import { useQueryClient } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import useEventLogger from 'src/gtm/hooks/useEventLogger';

import * as styles from './popularCarousel.css';

interface PopularCarouselProps {
  onRequireLogin: () => void;
}

const PopularCarousel = ({ onRequireLogin }: PopularCarouselProps) => {
  const queryClient = useQueryClient();
  const addWishlistMutation = useAddWishlistV2();
  const removeWishlistMutation = useRemoveWishlistV2();
  const { logClickEvent } = useEventLogger('home_popularity_component');
  const router = useRouter();

  const { data, isLoading, isError } = useGetRanking();

  const {
    slides,
    currentIndex,
    isAnimate,
    dragOffset,
    displayIndex,
    totalOriginalSlides,
    isSwiped,
    handlers,
  } = useInfiniteCarousel({
    data: data || [],
  });

  if (isLoading) return <PopularCarouselSkeleton />;
  if (isError) return <ExceptLayout type="networkError" />;

  const handleLikeToggle = (templestayId: number) => {
    const userNickname = getCookie('userNickname');
    if (!userNickname) {
      onRequireLogin();
      return;
    }

    const targetTemple = data?.find((temple) => temple.id === templestayId);
    if (!targetTemple) return;

    const currentIsWished = targetTemple.wish;

    const mutation = currentIsWished ? removeWishlistMutation : addWishlistMutation;
    mutation.mutate(templestayId, {
      onError: () => {
        queryClient.invalidateQueries({ queryKey: ['ranking'] });
      },
    });
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.slideList}
        style={{
          transform: `translateX(calc(-${currentIndex * (33.5 + 2)}rem + ${dragOffset}px))`,
          transition: isAnimate ? 'transform 0.5s ease-in-out' : 'none',
        }}
        {...handlers}>
        {slides.map((temple, index) => (
          <PopularCard
            key={temple.uniqueKey}
            ranking={temple.rank}
            templestayName={temple.templestayName}
            templeLoc={temple.region}
            templeImg={temple.imgUrl}
            isLiked={temple.wish}
            templeName={temple.templeName}
            templestayId={temple.id}
            onLikeToggle={handleLikeToggle}
            onClick={() => {
              if (isSwiped) return;

              logClickEvent('click_popularity_card', {
                label: temple.id,
              });

              router.push(`/detail/${temple.id}`);
            }}
            priority={index === 1}
          />
        ))}
      </div>

      <CarouselIndex total={totalOriginalSlides} displayIndex={displayIndex} />
    </div>
  );
};

export default PopularCarousel;
