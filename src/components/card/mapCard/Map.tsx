import LocBtn from '@components/card/mapCard/LocBtn';
import mapStyle from '@components/card/mapCard/map.css';
import REGION_INFOS from '@constants/regionInfos';

const Map = () => {
  return (
    <div className={mapStyle}>
      {Object.entries(REGION_INFOS).map(([region, { top, left }]) => (
        <LocBtn key={region} region={region} top={top} left={left} />
      ))}
    </div>
  );
};

export default Map;
