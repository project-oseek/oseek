import { useQuery } from '@tanstack/react-query';
import { noticeAPI } from '@oseek/apis';

export const useGetNotice = () => {
  const { data } = useQuery({
    queryKey: ['notice'],
    queryFn: () => noticeAPI.findNoticesAxios(),
  });
  return { data: data?.data };
};
