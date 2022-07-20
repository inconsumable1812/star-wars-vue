import type { Planets } from '../types';

type QueryParameters = {
  page: string;
};
type Response = Partial<Planets>;

export type { QueryParameters, Response };
