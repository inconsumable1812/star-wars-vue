import type { QueryParameters, Response } from './types';

const fetch = async (
  queryParameters: QueryParameters
): Promise<Response | globalThis.Error> => {
  try {
    const response = await globalThis.fetch(
      `https://swapi.dev/api/planets/?${Object.entries(queryParameters).reduce(
        (acc, [key, value]) => `${acc}&${key}=${value}`,
        ''
      )}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    return error as globalThis.Error;
  }
};

export { fetch };
