import Link from "next/link"
import Image from "next/image"
import { getPosts } from "../../lib/ghost"

// I want this page to refetch data on every visit.
// revalidate = 0 means I'm telling Next.js to refetch data for this page
// for every visit.
export const revalidate = 0

async function generateStaticParams() { 
  const posts = await getPosts()
  return posts?.map((post) => {
    feature_image: post.feature_image.toString()
  })
}

export default async function List(props, {params}) {
  const posts = props.posts
  const feature_image = params.posts.feature_image
  return (
    <div>
      <div className="grid grid-cols-4 gap-8">
        {posts.map((post, index) => (
          <article key={index}>
            <Link href={`/posts/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
            <div className="w-full max-h-[20em] overflow-hidden">
              
            </div>
            {post.excerpt && <p>{post.excerpt}</p>}
          </article>
        ))}
      </div>
    </div>
  )
}