import smallMarker from '@assets/images/icn_map_small.png';
import { useEffect } from 'react';

interface MapContainerProps {
  latitude: number;
  longitude: number;
  size: 'small' | 'large';
}

const MapContainer = ({ latitude, longitude, size }: MapContainerProps) => {
  useEffect(() => {
    const { naver } = window;

    const isSmall = size === 'small';

    const mapOptions = {
      center: new naver.maps.LatLng(latitude, longitude),
      zoom: isSmall ? 16 : 19,
      disableDoubleClickZoom: isSmall,
      scrollWheel: !isSmall,
      draggable: !isSmall,
      pinchZoom: !isSmall,
      keyboardShortcuts: !isSmall,
    };

    const map = new naver.maps.Map('map', mapOptions);

    new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map,
      icon: {
        url: smallMarker,
        size: new naver.maps.Size(48, 48),
        scaledSize: new naver.maps.Size(48, 48),
        anchor: new naver.maps.Point(24, 24),
      },
    });
  }, [latitude, longitude, size]);

  return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
};

export default MapContainer;
