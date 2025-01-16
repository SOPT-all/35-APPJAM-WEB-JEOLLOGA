import TextBtn from '@components/common/button/textBtn/TextBtn';
import DetailTitle from '@components/detailTitle/DetailTitle';

import * as styles from './naverMap.css';

const mapData = {
  address: '서울 용산구 청파로 387',
  latitude: 37.55433,
  longitude: 126.9686,
};

const NaverMap = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(mapData.address);
    alert('주소가 복사되었습니다.');
  };

  return (
    <>
      <DetailTitle title="지도" />
      <div>
        <div className={styles.addressDetailStyle}>
          <p>{mapData.address}</p>
          <TextBtn text="복사하기" leftIcon="IcnPaste" onClick={copyToClipboard} />
        </div>
      </div>
    </>
  );
};

export default NaverMap;
