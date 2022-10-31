import GhostContentAPI from "@tryghost/content-api"

export const ghost = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_API_KEY,
  version: "v5.0",
})

export async function getPosts() {
  return await ghost.posts.browse()
}

export async function getPostBySlug(slug: string) {
  console.log("fetching posts")
  return await ghost.posts.read({ slug }, { formats: ["html", "plaintext"] })
}

export async function getPages() {
  return await ghost.pages.browse()
}

export async function getPageBySlug(slug: string) {
  console.log("fetching pages")
  return await ghost.pages.read({ slug }, { formats: ["html", "plaintext"] })
}