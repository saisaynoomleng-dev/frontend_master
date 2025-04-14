import { defineQuery } from 'next-sanity';

export const MUSHROOMS_QUERY = defineQuery(`*[_type == 'mushroom' 
 && defined(slug.current)]{
  name,
  type,
  season,
  note,
  description,
  slug
 } | order(name)`);

export const INFO_QUERY = defineQuery(`*[_type == 'info' 
 && defined(slug.current)][0]{
  info,
  infos[]->{
    description,
    title,
    mainImage{
      alt,
      asset->{
      url
      }
    }
  }
 }`);
