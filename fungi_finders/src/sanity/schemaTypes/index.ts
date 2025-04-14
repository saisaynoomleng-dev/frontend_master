import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { mushroomType } from './mushroomType';
import { infoType } from './infoType';
import { infoCardType } from './infoCard';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [mushroomType, blockContentType, infoType, infoCardType],
};
