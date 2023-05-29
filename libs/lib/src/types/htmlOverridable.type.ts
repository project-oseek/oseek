import { ComponentPropsWithRef, ElementType } from 'react';
import { Combine } from '@oseek/lib/types/utils.type';

type CombineElementProps<T extends ElementType, K = unknown> = Combine<K, ComponentPropsWithRef<T>>;

/**
 * @description
 * 컴포넌트가 여러 HTML을 지원하고 싶을 때 사용합니다.
 * ```tsx
 *   const Component = <T extends ElementType = 'div'>({
 *    as,
 *    isLoading,
 *    children,
 *    ...props
 *    }: HTMLOverridableProps<T, { isLoading: boolean }>) => {
 *     const Component = as ?? 'div';
 *     return (
 *       <Component {...props}>
 *         {children}
*        </Component>
 *     )
 *   }
 * ```
 */
export type HTMLOverridableProps<T extends ElementType, K = unknown> = CombineElementProps<T,  K> & {
  as?: T;
};
