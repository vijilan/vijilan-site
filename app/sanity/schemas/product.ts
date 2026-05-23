import { defineField, defineType } from 'sanity'

export const productSchema = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short one-line description shown in nav and cards',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroCta',
      title: 'Hero CTA Label',
      type: 'string',
    }),
    defineField({
      name: 'heroCtaHref',
      title: 'Hero CTA Link',
      type: 'string',
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color (hex)',
      type: 'string',
      description: 'e.g. #00D4FF for cyan',
    }),
    defineField({
      name: 'features',
      title: 'Features',
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
      name: 'pricingTiers',
      title: 'Pricing Tiers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Tier Name', type: 'string' }),
            defineField({ name: 'price', title: 'Price Label', type: 'string', description: 'e.g. $2,500/mo or Contact Us' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
            defineField({ name: 'isPopular', title: 'Mark as Popular', type: 'boolean' }),
            defineField({ name: 'isGated', title: 'Hide price (show Contact Us)', type: 'boolean' }),
            defineField({
              name: 'features',
              title: 'Included Features',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({ name: 'ctaLabel', title: 'CTA Button Label', type: 'string' }),
            defineField({ name: 'ctaHref', title: 'CTA Button Link', type: 'string' }),
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
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'tagline' },
  },
})
