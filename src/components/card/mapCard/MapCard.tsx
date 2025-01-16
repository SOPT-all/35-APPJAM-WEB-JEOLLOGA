import Icon from '@assets/svgs';
import Map from '@components/card/mapCard/Map';
import React from 'react';

import * as styles from './mapCard.css';

const MapCard = () => {
  return (
    <section className={styles.mapWrapper}>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>원하는 지도를 골라보세요!</h2>
        <Icon.IcnDoubleArrowDown />
      </div>
      <Map />
    </section>
  );
};

export default MapCard;
