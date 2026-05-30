import {
  templeDetailQueryOptions,
  templeImagesQueryOptions,
  templeReviewsQueryOptions,
} from '@apis/templeInfo/prefetch';
import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';

import TempleDetailClient from './TempleDetailClient';

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
