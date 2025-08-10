import Image from "next/image"
import Link from "next/link"
import slugify from "slugify"

export const BlogInfo = ({ post }: any) => {
  return (
    <small className="text-xs whitespace-normal">
      Publicado por <strong>{post.author}</strong> en <Link href={`/blog/tag/${slugify(post.tag, { lower: true })}`} className="text-blue-600 underline">{post.tag}</Link> en {post.date}
    </small>
  )
}
export default function BlogCard({ post }: any) {
  return (
    <li key={post.slug}>
      <div className="relative h-48 w-full">
        <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} className="rounded-t-md" />
      </div>
      <div className="border rounded-b-md p-4 pt-0">
        <h4 className="mt-2 text-lg font-bold">{post.title}</h4>
        <BlogInfo post={post} />
        <p className="text-sm mt-2 line-clamp-3">
          {post.body.join(" ").slice(0, 150)}...
        </p>
        <Link href={`/blog/${post.slug}`} className="text-blue-600 mt-2 block">
          Leer más →
        </Link>
      </div>
    </li>
  )
}