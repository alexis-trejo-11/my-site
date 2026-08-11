import collectionJson from './drugstore-platform.json';
import { parseCollection } from '../collection-schema';

export const DrugstorePlattform = parseCollection(collectionJson, 'drugstore-platform.json');
