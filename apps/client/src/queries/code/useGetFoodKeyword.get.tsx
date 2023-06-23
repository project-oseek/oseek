import { useQuery } from '@tanstack/react-query';
import { codeAPI } from '@oseek/apis';

export const useGetFoodKeyword = () => {
  const { data } = useQuery({
    queryKey: ['foodKeyword'],
    queryFn: () => codeAPI.findCodesAxios('food_keyword'),
  });
  return { data: data?.data };
};
