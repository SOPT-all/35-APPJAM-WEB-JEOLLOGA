import LocBtn from '@components/card/mapCard/LocBtn';
import REGION_INFOS from '@constants/regionInfos';

import * as styles from './map.css';

const Map = () => {
  return (
    <div className={styles.mapStyle}>
      {Object.entries(REGION_INFOS).map(([region, { top, left }]) => (
        <LocBtn key={region} region={region} top={top} left={left} />
      ))}
    </div>
  );
};

export default Map;
