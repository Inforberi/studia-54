// import client from "../lib/graphql-client";

// export const getData = async ({ request, options }) => {
//   try {
//     // Выполняем запрос через GraphQL клиента
//     const data = await client.request(request, { ...options });

//     // Если есть ошибки в данных, выбрасываем исключение
//     if (data.errors) {
//       throw new Error(`GraphQL error: ${JSON.stringify(data.errors)}`);
//     }

//     return data; // Возвращаем данные, если ошибок нет
//   } catch (error) {
//     console.error("Ошибка при запросе данных:", error);
//     throw error; // Пробрасываем ошибку дальше, если нужна обработка выше
//   }
// };

import client from "../lib/graphql-client";

interface GetDataOptions {
  request: string;
  options?: Record<string, unknown>;
}

export const getData = async <T>({
  request,
  options,
}: GetDataOptions): Promise<T> => {
  try {
    const data: T = await client.request(request, { ...options });

    return data;
  } catch (error) {
    console.error("Ошибка при запросе данных:", error);
    throw error;
  }
};
