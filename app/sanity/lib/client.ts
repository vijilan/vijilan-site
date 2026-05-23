import { createClient } from '@sanity/client'
import { unstable_cache } from 'next/cache'

export const projectId = 'k5bows3p'
export const dataset = 'production'
export const apiVersion = '2024-01-01'

const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  perspective: 'published',
})

// Wrap fetch in unstable_cache for proper Next.js ISR support
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sanityFetch<T = any>(
  query: string,
  params: Record<string, unknown> = {},
  tags: string[] = []
): Promise<T> {
  const cachedFetch = unstable_cache(
    async () => sanityClient.fetch<T>(query, params),
    [query, JSON.stringify(params)],
    { revalidate: 60, tags }
  )
  return cachedFetch()
}

// Direct client for non-cached usage
export const client = sanityClient
