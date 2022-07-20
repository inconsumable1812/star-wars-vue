import type { Peoples } from '../types';

type QueryParameters = {
  page: string;
};
type Response = Partial<Peoples>;

export type { QueryParameters, Response };
