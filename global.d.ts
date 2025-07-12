export {};  // щоб цей файл був модулем

declare global {
  interface Window {
    __INITIAL_PRODUCTS__?: any;  // або string / потрібний тип
  }
}
