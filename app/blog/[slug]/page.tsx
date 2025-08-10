import Image from "next/image";
import { getAllPostSlugs, getPostDataBySlug } from "@/lib/getPostData";
import { BlogInfo } from "@/components/blogcard";

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = await getPostDataBySlug(params.slug);

  return (
    <article className="section">
      <h3 className="h3">{post.title}</h3>
      <BlogInfo post={post} />
      <div className="relative w-full h-[300px]">
        <Image src={post.image} fill alt={post.title} style={{ objectFit: "cover" }} />
      </div>
      {post.body.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </article>
  );
}
