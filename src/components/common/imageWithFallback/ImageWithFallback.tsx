'use client';

import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

const DEFAULT_FALLBACK = '/assets/images/img_pink_light_smile.png';

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: string;
}

/**
 * next/image 래퍼. 이미지 로드 실패(404/403/410 등) 시 폴백 이미지로 대체한다.
 * 폴백 이미지는 일러스트(플레이스홀더)라 잘리지 않도록 objectFit: contain으로 표시한다.
 */
const ImageWithFallback = ({
  src,
  fallbackSrc = DEFAULT_FALLBACK,
  alt,
  style,
  ...rest
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  // src가 바뀌면(다른 아이템 재사용 등) 상태도 새 src로 초기화
  useEffect(() => {
    setImgSrc(src);
    setIsError(false);
  }, [src]);

  return (
    // 원격 크롤링/CDN 이미지(이미 webp 등 최적화된 포맷) 전용이라 Vercel 이미지 최적화 할당량 보호를 위해 unoptimized
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      unoptimized
      style={isError ? { ...style, objectFit: 'contain' } : style}
      onError={() => {
        setImgSrc(fallbackSrc);
        setIsError(true);
      }}
    />
  );
};

export default ImageWithFallback;
