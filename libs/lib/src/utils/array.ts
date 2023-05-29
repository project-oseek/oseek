export const range = (n: number, start?: number) => Array.from({ length: n }, (_, i) => i + (start ?? 0));
