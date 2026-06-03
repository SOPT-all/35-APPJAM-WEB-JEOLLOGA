import type { MetadataRoute } from 'next';

const API_URL = process.env.NEXT_PUBLIC_APP_BASE_URL;
const SITE_URL = 'https://www.gototemplestay.com';

// 목록 API에서 전체 templestayId를 한 번에 수집 (size를 크게 주면 단일 페이지로 응답)
const fetchAllTemplestayIds = async (): Promise<number[]> => {
  if (!API_URL) {
    throw new Error('sitemap: NEXT_PUBLIC_APP_BASE_URL 환경변수가 설정되지 않았습니다.');
  }

  const res = await fetch(`${API_URL}/v2/api/templestay?page=1&size=1000`, {
    next: { revalidate: 86400 }, // 하루 1회 갱신
  });
  if (!res.ok) {
    throw new Error(`sitemap: 템플스테이 목록 조회 실패 (status ${res.status})`);
  }

  const json = await res.json();
  const content: Array<{ templestayId?: number }> = json?.data?.content ?? [];
  const ids = content
    .map((item) => item.templestayId)
    .filter((id): id is number => typeof id === 'number');

  if (ids.length === 0) {
    throw new Error('sitemap: 템플스테이 ID를 가져오지 못했습니다 (빈 응답).');
  }

  return ids;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const ids = await fetchAllTemplestayIds();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'daily', priority: 1 },
  ];

  const detailEntries: MetadataRoute.Sitemap = ids.map((id) => ({
    url: `${SITE_URL}/detail/${id}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticEntries, ...detailEntries];
}
