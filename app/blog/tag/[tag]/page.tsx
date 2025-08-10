import { getAllTags, getPostsByTag } from "@/lib/getPostData";
import BlogCard from "@/components/blogcard";

export async function generateStaticParams() {
  return getAllTags();
}

export default async function TagPage(props: { params: Promise<{ tag: string }> }) {
  const params = await props.params;
  const tagParam = params.tag;
  const matchingPosts = await getPostsByTag(tagParam);

  // Display original tag (with accents) from first matched post or fallback to slug
  const displayTag = matchingPosts.length > 0 ? matchingPosts[0].tag : tagParam;

  return (
    <section className="section">
      <h3 className="h3">Categoria: {displayTag}</h3>
      {matchingPosts.length === 0 && <p>No posts found for this tag.</p>}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matchingPosts.map(post => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </ul>
    </section>
  );
}
