import { defineField, defineType } from 'sanity'

export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteName', title: 'Site Name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),

    // ── Logo fields ──────────────────────────────────────────────────────────
    defineField({
      name: 'logo',
      title: 'Logo — Light (for dark backgrounds)',
      description: 'Used in the Navbar and Footer. Upload the white/light version of the Vijilan wordmark. SVG or PNG recommended.',
      type: 'image',
      options: { accept: 'image/svg+xml,image/png,image/webp', hotspot: false },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string', initialValue: 'Vijilan' }),
      ],
    }),
    defineField({
      name: 'logoDark',
      title: 'Logo — Dark (for light backgrounds)',
      description: 'Optional. Upload the dark/navy version for use on light surfaces.',
      type: 'image',
      options: { accept: 'image/svg+xml,image/png,image/webp', hotspot: false },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string', initialValue: 'Vijilan' }),
      ],
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      description: 'Square icon used in browser tabs. 32×32 or 64×64 PNG recommended.',
      type: 'image',
      options: { accept: 'image/png,image/x-icon,image/svg+xml', hotspot: false },
    }),
    // ──────────────────────────────────────────────────────────

    defineField({
      name: 'navCta',
      title: 'Nav CTA Button',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Label', type: 'string' }),
        defineField({ name: 'href', title: 'Link', type: 'string' }),
      ],
    }),
    defineField({
      name: 'footerTagline',
      title: 'Footer Tagline',
      type: 'string',
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Link Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'heading', title: 'Column Heading', type: 'string' }),
            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({ name: 'label', title: 'Label', type: 'string' }),
                    defineField({ name: 'href', title: 'Link', type: 'string' }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
        defineField({ name: 'twitter', title: 'Twitter/X URL', type: 'url' }),
        defineField({ name: 'youtube', title: 'YouTube URL', type: 'url' }),
      ],
    }),
    defineField({ name: 'legalText', title: 'Footer Legal Text', type: 'string' }),
  ],
})
