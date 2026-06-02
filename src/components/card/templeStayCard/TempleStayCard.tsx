'use client';
const errorImage = '/assets/images/img_gray_light_leaf_medium.png';
import { WishItemV2 } from '@apis/wish/type';
import InfoSection from '@components/card/templeStayCard/InfoSection';
import FlowerIcon from '@components/common/icon/flowerIcon/FlowerIcon';
import ImageWithFallback from '@components/common/imageWithFallback/ImageWithFallback';
import { getCookie } from 'cookies-next';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import useEventLogger from 'src/gtm/hooks/useEventLogger';

import * as styles from './templeStayCard.css';

interface TempleStayCardProps {
  item: WishItemV2;
  layout: 'vertical' | 'horizontal';
  size?: 'default' | 'small';
  onToggleWishlist: (templestayId: number, currentLiked: boolean) => void;
  onRequireLogin?: () => void;
  link: string;
}

const TempleStayCard = ({
  item,
  layout,
  size = 'default',
  onToggleWishlist,
  link,
  onRequireLogin,
}: TempleStayCardProps) => {
  const [isWished, setIsWished] = useState(item.wish);

  const { logClickEvent } = useEventLogger('templestay_card');
  const pathname = usePathname();
  const isWishPage = pathname === '/wishList';

  const onClickWishBtn = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    const userNickname = getCookie('userNickname');
    if (!userNickname) {
      onRequireLogin?.();
      return;
    }

    onToggleWishlist(item.templestayId, isWished);
    setIsWished((prev) => !prev);

    logClickEvent(`click_wish_${isWished ? 'remove' : 'add'}`, {
      label: item.templeName,
      screen: `${isWishPage ? 'wish' : 'templestay_card'}`,
    });
  };

  return (
    <a
      href={link}
      className={styles.container({ layout, size })}
      onClick={() =>
        logClickEvent('click_card_detail', {
          label: String(item.templestayId),
        })
      }>
      {item.imgUrl ? (
        <section className={styles.imgSection({ layout, size })}>
          <ImageWithFallback
            className={styles.image({ layout })}
            src={item.imgUrl}
            alt={item.templeName + ' 대표사진'}
            fill
            style={{ objectFit: 'cover' }}
          />
          <button className={styles.wishBtn} onClick={onClickWishBtn}>
            <FlowerIcon isActive={isWished} />
          </button>
        </section>
      ) : (
        <div className={styles.emptyImgSection({ layout, size })}>
          <img src={errorImage} alt="빈이미지"></img>
        </div>
      )}

      <InfoSection
        templeName={item.templeName}
        templestayName={item.templestayName}
        region={item.region}
        type={item.type}
        size={size}
      />
    </a>
  );
};

export default TempleStayCard;
