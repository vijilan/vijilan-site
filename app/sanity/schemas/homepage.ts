import { defineField, defineType } from 'sanity'

export const homepageSchema = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({ name: 'heroHeadline', title: 'Hero Headline', type: 'string' }),
    defineField({ name: 'heroSubheadline', title: 'Hero Subheadline', type: 'text', rows: 3 }),
    defineField({ name: 'heroPrimaryCta', title: 'Primary CTA Label', type: 'string' }),
    defineField({ name: 'heroPrimaryCtaHref', title: 'Primary CTA Link', type: 'string' }),
    defineField({ name: 'heroSecondaryCta', title: 'Secondary CTA Label', type: 'string' }),
    defineField({ name: 'heroSecondaryCtaHref', title: 'Secondary CTA Link', type: 'string' }),
    defineField({
      name: 'stats',
      title: 'Stats Band',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value (e.g. 500+)', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'productsSectionHeadline',
      title: 'Products Section Headline',
      type: 'string',
    }),
    defineField({
      name: 'productsSectionSubheadline',
      title: 'Products Section Subheadline',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'whyVijilan',
      title: 'Why Vijilan Section',
      type: 'object',
      fields: [
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({ name: 'subheadline', title: 'Subheadline', type: 'text', rows: 2 }),
        defineField({
          name: 'pillars',
          title: 'Pillars',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'icon', title: 'Icon Name (lucide)', type: 'string' }),
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 3 }),
            defineField({ name: 'author', title: 'Author Name', type: 'string' }),
            defineField({ name: 'role', title: 'Author Role', type: 'string' }),
            defineField({ name: 'company', title: 'Company', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'ctaBandHeadline',
      title: 'CTA Band Headline',
      type: 'string',
    }),
    defineField({
      name: 'ctaBandSubheadline',
      title: 'CTA Band Subheadline',
      type: 'text',
      rows: 2,
    }),
    defineField({ name: 'ctaBandPrimaryCta', title: 'CTA Band Primary Button', type: 'string' }),
    defineField({ name: 'ctaBandPrimaryCtaHref', title: 'CTA Band Primary Link', type: 'string' }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2 }),
  ],
})
