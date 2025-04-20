import { createClient } from "@sanity/client";



export const client = createClient({
  projectId: "j60cg7cz",
  dataset: "production",
  apiVersion: "v2025-04-17",
  useCdn: true,
});

/*

sette opp en for å skrive til klient
*/
export const writeClient = createClient({
  projectId: "j60cg7cz",
  dataset: "production",
  apiVersion: "v2025-04-17",
  useCdn: true,
  token:
    "skvr2ls5HgOApz4gOpU8l5hDodm4A07JTGiOg22myVZdqI2lrdgcHrpsCylBSEY1THOBW1dL0dj6URS2ChEoO6hzRoCTnehKgiU0mTSm3d0ZSTS9gWmemIWQhXBxCXXlL6KsjT2yqXSBgfvzZIA7Unk4JwEazRBfCpNyma44mg9lU6pvv5Ot",
});

