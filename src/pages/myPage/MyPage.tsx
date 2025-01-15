import PageName from '@components/common/pageName/PageName';
import Footer from '@components/footer/Footer';
import UserInfo from '@components/userInfo/userInfo';
import { useNavigate } from 'react-router-dom';

import myPageContainerStyle from './mypage.css';

const MyPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/HomePage');
  };
  return (
    <div className={myPageContainerStyle}>
      <PageName title="마이페이지" onLeftClick={handleBackClick} isLikeBtn={false} />
      <UserInfo />
      <Footer />
    </div>
  );
};

export default MyPage;
