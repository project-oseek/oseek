import { useQuery } from '@tanstack/react-query';
import { codeAPI, CodeResDto } from '@oseek/apis';

export const useGetLocation = () => {
  const { data } = useQuery({
    queryKey: ['jeju_location'],
    queryFn: () => codeAPI.findCodesAxios('jeju_location'),
  });
  return { data: (data?.data || []) as CodeResDto[] };
};
