import { groq } from 'next-sanity'

export const homepageQuery = groq`
  *[_type == "homepage"][0] {
    heroHeadline,
    heroSubheadline,
    heroPrimaryCta,
    heroPrimaryCtaHref,
    heroSecondaryCta,
    heroSecondaryCtaHref,
    stats,
    productsSectionHeadline,
    productsSectionSubheadline,
    whyVijilan,
    testimonials,
    ctaBandHeadline,
    ctaBandSubheadline,
    ctaBandPrimaryCta,
    ctaBandPrimaryCtaHref,
    seoTitle,
    seoDescription
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    navCta,
    footerTagline,
    footerLinks,
    socialLinks,
    legalText
  }
`

export const allProductsQuery = groq`
  *[_type == "product"] | order(_createdAt asc) {
    name,
    "slug": slug.current,
    tagline,
    accentColor
  }
`

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    name,
    "slug": slug.current,
    tagline,
    heroHeadline,
    heroSubheadline,
    heroCta,
    heroCtaHref,
    accentColor,
    features,
    pricingTiers,
    faqs,
    seoTitle,
    seoDescription
  }
`

export const guardPageQuery = groq`
  *[_type == "guardPage"][0] {
    heroHeadline,
    heroSubheadline,
    heroCta,
    heroCtaHref,
    benefits,
    tiers,
    faqs,
    seoTitle,
    seoDescription
  }
`
