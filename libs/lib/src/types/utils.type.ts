/**
 * @description
 * 두 Object 타입을 받고, 중복되는 key가 있을 경우 첫번째 object의 타입을 반환합니다.
 */
export type Combine<T, K> = T & Omit<K, keyof T>;
