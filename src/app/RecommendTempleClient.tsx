'use client';

import useGetTypeRandom, { useGetTypeRecommend } from '@apis/recommend';
import {
  TypeRandomResponse,
  TypeRandomTemplestay,
  TypeRecommendResponse,
} from '@apis/recommend/type';
import { ApiResponse } from '@apis/response';
import { useGetMyPage } from '@apis/user';
import { useAddWishlistV2, useRemoveWishlistV2 } from '@apis/wish';
import { titleWithIconStyle, typeIconStyle } from '@app/homePage.css';
import RecommendListSkeleton from '@components/card/recommendCard/RecommendListSkeleton';
import TempleStayCard from '@components/card/templeStayCard/TempleStayCard';
import ModalContainer from '@components/common/modal/ModalContainer';
import DetailTitle from '@components/detailTitle/DetailTitle';
import { TestType } from '@constants/test';
import useNavigateTo from '@hooks/useNavigateTo';
import useScrollToTarget from '@hooks/useScrollToTarget';
import { useQueryClient } from '@tanstack/react-query';
import getTestType from '@utils/getTestType';
import { getCookie } from 'cookies-next';
import Image from 'next/image';
import { useState } from 'react';
import useEventLogger from 'src/gtm/hooks/useEventLogger';

import styles from '../components/card/recommendCard/recommendCard.css';

interface RecommendTempleClientProps {
  isLoggedIn: boolean;
}

const RecommendTempleClient = ({ isLoggedIn }: RecommendTempleClientProps) => {
  useScrollToTarget();
  const queryClient = useQueryClient();
  const addWishlistMutation = useAddWishlistV2();
  const removeWishlistMutation = useRemoveWishlistV2();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: myPageData } = useGetMyPage(isLoggedIn);
  const userType = myPageData?.data?.type as TestType;
  const userName = myPageData?.data?.nickname;
  const hasType = myPageData?.data?.hasType;
  const userTypeImage = userType ? getTestType(userType)?.image : null;

  const { data: typeRecommendData, isLoading: isTypeRecommendLoading } = useGetTypeRecommend(
    isLoggedIn && hasType,
  );

  const { data: typeRandomData, isLoading: isTypeRandomLoading } = useGetTypeRandom();

  const navigateToLogin = useNavigateTo('/loginStart');
  const { logClickEvent } = useEventLogger('home');

  const handleLogin = () => {
    navigateToLogin();
    logClickEvent('click_login', { screen: 'modal_login_wish' });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    logClickEvent('click_cancel', { screen: 'modal_login_wish' });
  };

  const handleToggleWishlist = (templestayId: number, currentLiked: boolean) => {
    const userNickname = getCookie('userNickname');
    if (!userNickname) {
      setIsModalOpen(true);
      return;
    }

    queryClient.setQueryData<ApiResponse<TypeRandomResponse>>(['typeRandom'], (old) => {
      if (!old?.data?.results) return old;
      return {
        ...old,
        data: {
          ...old.data,
          results: old.data.results.map((item: TypeRandomTemplestay) =>
            item.templestayId === templestayId ? { ...item, wish: !currentLiked } : item,
          ),
        },
      };
    });

    queryClient.setQueryData<ApiResponse<TypeRecommendResponse>>(['typeRecommend'], (old) => {
      if (!old?.data?.results) return old;
      return {
        ...old,
        data: {
          ...old.data,
          results: old.data.results.map((item: TypeRandomTemplestay) =>
            item.templestayId === templestayId ? { ...item, wish: !currentLiked } : item,
          ),
        },
      };
    });

    const mutation = currentLiked ? removeWishlistMutation : addWishlistMutation;
    mutation.mutate(templestayId, {
      onError: () => {
        // 에러 발생 시 원래대로 롤백
        queryClient.invalidateQueries({ queryKey: ['typeRandom'] });
        queryClient.invalidateQueries({ queryKey: ['typeRecommend'] });
      },
    });
  };

  const displayData =
    isLoggedIn && hasType && typeRecommendData && typeRecommendData.length > 0
      ? typeRecommendData
      : typeRandomData;
  const isLoading = isLoggedIn && hasType ? isTypeRecommendLoading : isTypeRandomLoading;

  const title =
    isLoggedIn && userName && hasType && userType && userTypeImage ? (
      <>
        <div className={titleWithIconStyle}>
          <span>휴식하는 아기 동자</span>
          <Image
            src={userTypeImage}
            alt={userType}
            width={28}
            height={28}
            className={typeIconStyle}
          />
        </div>
        {userName}님만의 템플스테이 추천
      </>
    ) : (
      '오늘의 템플스테이 추천'
    );

  const subtitle =
    isLoggedIn && hasType
      ? '성향 테스트를 기준으로 추천되고 있어요!'
      : '성향 테스트를 통해 맞춤형 추천을 받을 수 있어요!';

  if (isLoading) {
    return (
      <>
        <DetailTitle title={title} subtitle={subtitle} />
        <RecommendListSkeleton />
      </>
    );
  }

  return (
    <>
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

      <DetailTitle title={title} subtitle={subtitle} />

      <section className={styles.container}>
        {displayData &&
          displayData.slice(0, 3).map((temple) => (
            <TempleStayCard
              key={temple.templestayId}
              item={{
                templestayId: temple.templestayId,
                templeName: temple.templeName,
                templestayName: temple.templestayName,
                region: temple.region,
                type: temple.type,
                imgUrl: temple.imgUrl,
                wish: temple.wish || false,
              }}
              layout="vertical"
              onToggleWishlist={handleToggleWishlist}
              onRequireLogin={() => setIsModalOpen(true)}
              link={`/detail/${temple.templestayId}`}
              size="small"
            />
          ))}
      </section>
    </>
  );
};

export default RecommendTempleClient;
