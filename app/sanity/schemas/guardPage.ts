import { defineField, defineType } from 'sanity'

export const guardPageSchema = defineType({
  name: 'guardPage',
  title: 'Vijilan Guard™ Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroHeadline', title: 'Hero Headline', type: 'string' }),
    defineField({ name: 'heroSubheadline', title: 'Hero Subheadline', type: 'text', rows: 3 }),
    defineField({ name: 'heroCta', title: 'Hero CTA Label', type: 'string' }),
    defineField({ name: 'heroCtaHref', title: 'Hero CTA Link', type: 'string' }),
    defineField({
      name: 'benefits',
      title: 'Partner Benefits',
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
    defineField({
      name: 'tiers',
      title: 'Partner Tiers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Tier Name', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
            defineField({ name: 'requirements', title: 'Requirements', type: 'array', of: [{ type: 'string' }] }),
            defineField({ name: 'perks', title: 'Perks', type: 'array', of: [{ type: 'string' }] }),
          ],
        },
      ],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string' }),
            defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 3 }),
          ],
        },
      ],
    }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2 }),
  ],
})
