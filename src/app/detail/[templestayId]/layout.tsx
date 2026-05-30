import type { Metadata } from 'next';
import type { ReactNode } from 'react';

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

// 레이아웃에 정의해 detail 페이지와 하위 라우트(blog, photo, map)가 동일한 메타데이터를 상속
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

const TempleDetailLayout = ({ children }: { children: ReactNode }) => children;

export default TempleDetailLayout;
