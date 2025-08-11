import BlogCard from "@/components/blogcard";
import { getPostDataBySlug, getAllPostSlugs } from "@/lib/getPostData";

export default async function BlogIndex() {
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(
    slugs.map(({ slug }) => getPostDataBySlug(slug))
  );

  return (
    <section className="section">
      <h3 className="h3">Más recientes</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post =>
          <BlogCard post={post} key={post} />
        )}
      </ul>
    </section>
  );
}