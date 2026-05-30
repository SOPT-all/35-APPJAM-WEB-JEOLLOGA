import {
  templeDetailQueryOptions,
  templeImagesQueryOptions,
  templeReviewsQueryOptions,
} from '@apis/templeInfo/prefetch';
import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
import type { Metadata } from 'next';

import TempleDetailClient from './TempleDetailClient';

const API_URL = process.env.NEXT_PUBLIC_APP_BASE_URL;
const SITE_URL = 'https://www.gototemplestay.com';

interface TempleDetailData {
  templestayName: string;
  templeName: string;
  address: string;
  price: number;
}

const fetchTempleDetail = async (id: number): Promise<TempleDetailData | null> => {
  try {
    const res = await fetch(`${API_URL}/v2/api/templestay/details/${id}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data ?? null;
  } catch {
    return null;
  }
};

const fetchFirstImageUrl = async (id: number): Promise<string | null> => {
  try {
    const res = await fetch(`${API_URL}/v2/api/templestay/images/${id}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data?.imgUrls?.[0]?.imgurl ?? null;
  } catch {
    return null;
  }
};

const extractRegion = (address?: string): string => {
  if (!address) return '';
  return address.split(' ')[0].replace(/(특별시|광역시|특별자치시|특별자치도)$/, '');
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ templestayId: string }>;
}): Promise<Metadata> => {
  const { templestayId } = await params;
  const id = Number(templestayId);
  const detail = await fetchTempleDetail(id);

  if (!detail) {
    return { title: '절로가 | 템플스테이를 만나는 가장 쉬운 방법' };
  }

  const imageUrl = await fetchFirstImageUrl(id);
  const title = `${detail.templeName} | ${detail.templestayName}`;
  const description = [
    detail.templeName,
    extractRegion(detail.address),
    detail.price ? `1박 ${detail.price.toLocaleString()}원` : '',
  ]
    .filter(Boolean)
    .join(' · ');

  const ogImages = imageUrl
    ? [{ url: imageUrl, alt: `${detail.templestayName} 대표 이미지` }]
    : [{ url: '/img_og.png', width: 1200, height: 630, alt: '절로가 Open Graph 이미지' }];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/detail/${id}`,
      siteName: '절로가',
      images: ogImages,
      locale: 'ko_KR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImages.map((img) => img.url),
    },
    alternates: {
      canonical: `${SITE_URL}/detail/${id}`,
    },
  };
};

const TempleDetailPage = async ({ params }: { params: Promise<{ templestayId: string }> }) => {
  const { templestayId } = await params;
  const id = Number(templestayId);
  if (!Number.isInteger(id) || id <= 0) {
    throw new Error(`Invalid templestay ID: ${templestayId}`);
  }
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(templeDetailQueryOptions(id)),
    queryClient.prefetchQuery(templeImagesQueryOptions(id)),
    queryClient.prefetchQuery(templeReviewsQueryOptions(id, 1)),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TempleDetailClient id={id} />
    </HydrationBoundary>
  );
};

export default TempleDetailPage;
