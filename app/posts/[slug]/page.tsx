"use client";

import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-components";

interface PostProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PostProps) {
  const post = allPosts.find((post) => {
    return post.slugAsParams === params.slug;
  });

  if (!post) {
    notFound();
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  );
}
