import { BiDetail } from 'react-icons/bi';
import { GiMushroomGills } from 'react-icons/gi';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('mushroom')
        .title('All Mushrooms')
        .icon(GiMushroomGills),
      S.divider(),
      S.documentTypeListItem('info').title('All Info').icon(BiDetail),
    ]);
