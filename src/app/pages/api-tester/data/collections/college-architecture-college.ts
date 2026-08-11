import collectionJson from './college-architecture-college.json';
import { parseCollection } from '../collection-schema';

export const CollegeArchitectureCollege = parseCollection(
  collectionJson,
  'college-architecture-college.json',
);
