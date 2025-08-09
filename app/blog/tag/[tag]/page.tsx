import fs from "fs";
import path from "path";
import mammoth from "mammoth";
import Link from "next/link";
import slugify from "slugify";

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".docx"));

  const tagsSet = new Set<string>();

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const buffer = fs.readFileSync(filePath);
    const { value: text } = await mammoth.extractRawText({ buffer });
    const lines = text.split("\n").map(l => l.trim()).filter(Boolean);

    // assuming the tag is on line 4 (index 3)
    const tagLine = lines[3] || "";
    tagsSet.add(slugify(tagLine, { lower: true }));
  }

  return Array.from(tagsSet).map(tag => ({ tag }));
}

export default async function TagPage({ params }: { params: { tag: string } }) {
  const { tag } = params;
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".docx"));

  // Filter posts by tag
  const posts = [];

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const buffer = fs.readFileSync(filePath);
    const { value: text } = await mammoth.extractRawText({ buffer });
    const lines = text.split("\n").map(l => l.trim()).filter(Boolean);
    const title = lines[0] || "Untitled";
    const fileTag = slugify(lines[3] || "", { lower: true });

    if (fileTag === tag) {
      posts.push({
        slug: slugify(file.replace(/\.docx$/, ""), { lower: true }),
        title,
      });
    }
  }

  if (posts.length === 0) {
    return <p>No posts found for tag "{tag}"</p>;
  }

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1>Posts tagged "{tag}"</h1>
      <ul>
        {posts.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
