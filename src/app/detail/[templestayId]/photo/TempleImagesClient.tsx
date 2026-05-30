'use client';
import { useGetTempleImages } from '@apis/templeInfo';
import PageName from '@components/common/pageName/PageName';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import ImageWithFallback from '@components/common/imageWithFallback/ImageWithFallback';

import * as styles from './style.css';

interface TemplePhotoPageProps {
  templestayId: number;
}

const TempleImageClient = ({ templestayId }: TemplePhotoPageProps) => {
  const { data, isLoading, isError } = useGetTempleImages(templestayId);

  if (isLoading) {
    return <ExceptLayout type="loading" />;
  }

  if (isError) {
    return <ExceptLayout type="networkError" />;
  }

  if (!data || !data.imgUrls.length) {
    return <p>No temple images available</p>;
  }

  return (
    <div className={styles.photoContainer}>
      <div className={styles.headerBox}>
        <PageName title="사진" />
      </div>
      <div className={styles.photoGrid}>
        {data.imgUrls.map((photo) => (
          <ImageWithFallback
            key={photo.imgurl}
            width={162}
            height={162}
            src={photo.imgurl}
            alt="템플스테이 사진"
            className={styles.photoItem}
          />
        ))}
      </div>
    </div>
  );
};

export default TempleImageClient;
