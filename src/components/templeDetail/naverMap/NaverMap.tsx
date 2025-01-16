import TextBtn from '@components/common/button/textBtn/TextBtn';
import DetailTitle from '@components/detailTitle/DetailTitle';
import { useEffect } from 'react';

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

  useEffect(() => {
    const { naver } = window;

    const mapOptions = {
      center: new naver.maps.LatLng(mapData.latitude, mapData.longitude),
      zoom: 16,
    };

    const map = new naver.maps.Map('map', mapOptions);

    new naver.maps.Marker({
      position: new naver.maps.LatLng(mapData.latitude, mapData.longitude),
      map,
    });
  }, []);

  return (
    <>
      <DetailTitle title="지도" />
      <div className={styles.mapContainerStyle}>
        <div className={styles.addressDetailStyle}>
          <p>{mapData.address}</p>
          <TextBtn text="복사하기" leftIcon="IcnPaste" onClick={copyToClipboard} />
        </div>
        <div id="map" className={styles.mapStyle}></div>
      </div>
    </>
  );
};

export default NaverMap;
