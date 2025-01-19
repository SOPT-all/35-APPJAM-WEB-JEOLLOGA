import WishCardList from '@components/card/templeStayCard/wishCardList/WishCardList';
import PageName from '@components/common/pageName/PageName';
import useNavigateTo from '@hooks/useNavigateTo';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const mockData = [
  {
    id: 1,
    templeName: '대원사(보성)',
    templestayName: '차 한 잔의 행복',
    tag: '탱투가 다녀간',
    region: '전남',
    type: '휴식형',
    imgUrl: 'https://github.com/user-attachments/assets/e018d4af-d61e-42a1-90d9-96351d653124',
    liked: true,
  },
  {
    id: 2,
    templeName: '수원사',
    templestayName: '지금 행복하기',
    tag: '연예인이 다녀간',
    region: '경기',
    type: '체험형',
    imgUrl: 'https://github.com/user-attachments/assets/e018d4af-d61e-42a1-90d9-96351d653124',
    liked: true,
  },
  {
    id: 3,
    templeName: '봉은사',
    templestayName: '명상 차담 템플스테이',
    tag: '연예인이 다녀간',
    region: '서울',
    type: '체험형',
    imgUrl: 'https://github.com/user-attachments/assets/e018d4af-d61e-42a1-90d9-96351d653124',
    liked: true,
  },
];

const WishListPage = () => {
  const handleToBack = useNavigateTo(-1);
  // const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  return (
    <div>
      <PageName onLeftClick={handleToBack} title="위시리스트" />
      <WishCardList data={mockData} layout="vertical" />
    </div>
  );
};

export default WishListPage;
