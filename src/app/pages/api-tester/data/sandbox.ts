import sandboxJson from './sandbox.json';
import { parseCollection } from './collection-schema';

export const Sandbox = parseCollection(sandboxJson, 'sandbox.json');
