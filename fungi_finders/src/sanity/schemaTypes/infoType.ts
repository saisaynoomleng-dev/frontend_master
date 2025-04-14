import { defineArrayMember, defineField, defineType } from 'sanity';
import { BiDetail } from 'react-icons/bi';

export const infoType = defineType({
  name: 'info',
  type: 'document',
  icon: BiDetail,
  fields: [
    defineField({
      name: 'info',
      title: 'Our Info',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'info',
      },
    }),
    defineField({
      name: 'infos',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'infoCard' },
        }),
      ],
    }),
  ],
});
