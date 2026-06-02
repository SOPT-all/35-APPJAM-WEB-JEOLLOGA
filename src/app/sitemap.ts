import type { MetadataRoute } from 'next';

const API_URL = process.env.NEXT_PUBLIC_APP_BASE_URL;
const SITE_URL = 'https://www.gototemplestay.com';

// 목록 API에서 전체 templestayId를 한 번에 수집
const fetchAllTemplestayIds = async (): Promise<number[]> => {
  try {
    const res = await fetch(`${API_URL}/v2/api/templestay?page=1&size=1000`, {
      next: { revalidate: 86400 }, // 하루 1회 갱신
    });
    if (!res.ok) return [];
    const json = await res.json();
    const content: Array<{ templestayId?: number }> = json?.data?.content ?? [];
    return content
      .map((item) => item.templestayId)
      .filter((id): id is number => typeof id === 'number');
  } catch {
    return [];
  }
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
