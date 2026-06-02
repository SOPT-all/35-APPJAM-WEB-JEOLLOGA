'use client';

import { skeletonOverlay } from '@components/common/skeleton/skeleton.css';
import convertTempleImageUrl from '@utils/convertImageUrl';
import Image, { ImageProps } from 'next/image';
import { useEffect, useRef, useState } from 'react';

// 문자열 src(원격 URL)는 죽은 templestay.com URL을 ts-cdn으로 미리 변환
const resolveSrc = (src: ImageProps['src']): ImageProps['src'] =>
  typeof src === 'string' ? convertTempleImageUrl(src) : src;

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
  unoptimized = true,
  ...rest
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(() => resolveSrc(src));
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // src가 바뀌면(다른 아이템 재사용 등) 상태도 새 src로 초기화
  useEffect(() => {
    setImgSrc(resolveSrc(src));
    setIsError(false);
    setIsLoaded(false);
  }, [src]);

  useEffect(() => {
    if (imgRef.current?.complete) setIsLoaded(true);
  }, [imgSrc]);

  return (
    <>
      {/* 원격 크롤링/CDN 이미지(이미 webp 등 최적화된 포맷) 전용이라 Vercel 이미지 최적화 할당량 보호를 위해 unoptimized */}
      <Image
        {...rest}
        ref={imgRef}
        src={imgSrc}
        alt={alt}
        unoptimized={unoptimized}
        style={{
          ...style,
          ...(isError && { objectFit: 'contain' as const }),
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.4s ease-in-out',
        }}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setImgSrc(fallbackSrc);
          setIsError(true);
        }}
      />
      {Boolean(rest.fill) && !isLoaded && <span aria-hidden className={skeletonOverlay} />}
    </>
  );
};

export default ImageWithFallback;
