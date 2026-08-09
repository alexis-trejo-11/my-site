import { CollectionModel } from '../api-tester.model';
import { CollegeArchitectureCollege } from './collections/college-architecture-college';
import { DrugstorePlattform } from './collections/drugstore-plattrform';
import { Sandbox } from './sandbox';

export * from './sandbox';

export type CollectionId = number;

export const COLLECTIONS: Record<CollectionId, CollectionModel> = Object.freeze({
  0: Sandbox,
  1: CollegeArchitectureCollege,
  2: DrugstorePlattform,
});
