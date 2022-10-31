import { Suspense, lazy } from 'react'
import List from '../components/posts/List'
import { getPosts } from "../lib/ghost"


export default async function Home() {
  const posts = await getPosts();
  
  return (
    <>
      <Suspense fallback={"Loading.."}>
        <List posts={posts} />
      </Suspense>
    </>
  )
}
