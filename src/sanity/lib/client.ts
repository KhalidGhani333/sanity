import { createClient } from 'next-sanity'



export const client = createClient({
  projectId: "ljyjqkvs", 
  dataset: 'production',             
  apiVersion: 'v2025-01-05', 
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
