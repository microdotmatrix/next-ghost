import Link from "next/link"

import { getPageBySlug, getPages } from "../../../lib/ghost"

// This page does not export a revalidate or dynamic property.
// This means this page is indefinitely cached.
// This is same as getStaticProps.

// This replaces getStaticPaths.
export async function generateStaticParams() {
  const pages = await getPages()

  return pages?.map((page) => ({
    slug: page.slug?.split("/"),
  }))
}

export default async function PostPage(props) {
  const page = await getPageBySlug(props?.params?.slug)

  if (!page) {
    return null
  }

  return (
    <article>
      <Link href="/">Back</Link>
      <h1>{page.title}</h1>
      {page?.html && <div dangerouslySetInnerHTML={{ __html: page.html }} />}
    </article>
  )
}
