import Link from "next/link";
import {compareDesc, format, parseISO} from "date-fns";
import {allPosts, Post} from "contentlayer/generated";

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link className="text-blue-700 hover:text-blue-900 dark:text-blue-400" href={post.url}>
          {post.title}
        </Link>
      </h2>
      <time className="mb-2 block text-xs text-gray-600" dateTime={post.date}>
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div
        dangerouslySetInnerHTML={{__html: post.body.html}}
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
      />
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a: any, b: any) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>
      {posts.map((post: any, idx: any) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
