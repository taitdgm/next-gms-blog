import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <div className="prose dark:prose-invert">
        {allPosts.map((post) => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h2>{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
      </div>
    </Container>
  );
}
