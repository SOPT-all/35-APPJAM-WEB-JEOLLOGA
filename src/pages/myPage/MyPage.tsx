import PageName from '@components/common/pageName/PageName';
import Footer from '@components/footer/Footer';
import UserInfo from '@components/userInfo/userInfo';
import useNavigateTo from '@hooks/useNavigateTo';

const MyPage = () => {
  const handleToBack = useNavigateTo(-1);
  return (
    <div>
      <PageName title="마이페이지" onLeftClick={handleToBack} isLikeBtn={false} />
      <UserInfo />
      <Footer />
    </div>
  );
};

export default MyPage;
