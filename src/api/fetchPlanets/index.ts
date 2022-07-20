import { fetch as fetchPlanets } from './fetch';
import {
  QueryParameters as PlanetsQueryParameters,
  Response as PlanetsResponse
} from './types';

export type { PlanetsQueryParameters, PlanetsResponse };

export { fetchPlanets };
