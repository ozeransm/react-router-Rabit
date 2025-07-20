export {}; // щоб цей файл був модулем

declare global {
  interface Window {
    __INITIAL_PRODUCTS__?: any; // або string / потрібний тип
  }
}
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}