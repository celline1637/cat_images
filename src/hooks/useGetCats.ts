import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface Cat {
  id: string;
  url: string;
  width: number;
  height?: number;
  breeds?: any;
  categories?: any;
}

interface Page {
  items: Cat[];
  nextPage: number;
  hasMore: boolean;
}

const getCatList = async (page: number) => {
  const res = await axios.get('https://api.thecatapi.com/v1/images/search', {
    params: {
      page,
      limit: 12,
      api_key: 'live_k77YJ1Sa3RsUfqEwbuKzrsevPSBW7iCoeeTZKSuj0ahl51TyYwbMXoLhVwwyIIvF',
    },
  });

  const items: Cat[] = res.data;
  return {
    items,
    nextPage: page + 1,
    hasMore: false,
  };
};

export const useGetCats = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery<Page, Error>(
    ['cats'],
    ({ pageParam = 1 }) => getCatList(pageParam),
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage, _pages) => {
        return lastPage.hasMore ? lastPage.nextPage : undefined;
      },
    }
  );

  return {
    data: data?.pages.map((page) => page.items).flat(),
    isLoading,
    fetchNextPage,
    hasNextPage,
  };
};
