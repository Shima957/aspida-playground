import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_zapyl } from './book/_bookId';
import type { Methods as Methods_1swob1w } from './books';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/book';
  const PATH1 = '/books';
  const GET = 'GET';

  return {
    book: {
      _bookId: (val1: number | string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_zapyl['get']['resBody'], BasicHeaders, Methods_zapyl['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_zapyl['get']['resBody'], BasicHeaders, Methods_zapyl['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
    },
    books: {
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1swob1w['get']['resBody'], BasicHeaders, Methods_1swob1w['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1swob1w['get']['resBody'], BasicHeaders, Methods_1swob1w['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
