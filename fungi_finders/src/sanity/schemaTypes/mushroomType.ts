import { defineField, defineType } from 'sanity';
import { GiMushroomGills } from 'react-icons/gi';
import { CapitalizeText } from '@/app/_lib/actions';

export const mushroomType = defineType({
  name: 'mushroom',
  icon: GiMushroomGills,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Mushroom Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'season',
      title: 'Growing Season',
      type: 'string',
      options: {
        list: [
          { title: 'Spring', value: 'spring' },
          { title: 'Summer', value: 'summer' },
          { title: 'Fall', value: 'fall' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Mushroom Type',
      type: 'string',
      options: {
        list: [
          { title: 'Toxic', value: 'toxic' },
          { title: 'edible', value: 'edible' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'note',
      title: 'Important Notes',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      type: 'type',
      season: 'season',
    },
    prepare({ name, type, season }) {
      const nameFormatted = name || 'Unspecify Name';
      return {
        title: nameFormatted,
        subtitle: `Type: ${CapitalizeText(type)} | Season: ${CapitalizeText(season)}`,
        media: GiMushroomGills,
      };
    },
  },
});
