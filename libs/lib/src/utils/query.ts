const PRIMARY_KEY = 'GENERATED_BY_QUERY_KEY';

/**
 * React Query에서 query key를 생성하는 함수입니다.
 *
 * @param page 해당 페이지를 특정하는 path
 * @param name 해당 함수 목적
 * @param parameter 상세 param
 * @return Array with "GENERATED_BY_QUERY_KEY"
 */
export const generateQueryKey =
  <Parameter extends object>(page: string, name: string) =>
  (parameter: Parameter | null = null) => {
    if (parameter === null) {
      return [PRIMARY_KEY, page, name] as const;
    }

    return [PRIMARY_KEY, page, name, parameter] as const;
  };
