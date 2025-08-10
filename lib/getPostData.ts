import fs from "fs";
import path from "path";
import mammoth from "mammoth";
import slugify from "slugify";

export type PostData = {
  slug: string;
  title: string;
  date: string;
  author: string;
  tag: string;   // slugified tag
  image: string;
  body: string[];
};

async function loadPostFromFile(file: string): Promise<PostData> {
  const contentDir = path.join(process.cwd(), "content");
  const filePath = path.join(contentDir, file);
  const fileBuffer = fs.readFileSync(filePath);

  const { value: text } = await mammoth.extractRawText({ buffer: fileBuffer });
  const lines = text.split("\n").map(l => l.trim()).filter(Boolean);
  const [title, date, author, tagRaw, image, ...body] = lines;

  const tag = slugify(tagRaw || "", { lower: true });

  return {
    slug: slugify(file.replace(/\.docx$/, ""), { lower: true }),
    title,
    date,
    author,
    tag,
    image,
    body,
  };
}

export async function getPostDataBySlug(slug: string): Promise<PostData> {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir);

  const matchedFile = files.find(
    (file) => slugify(file.replace(/\.docx$/, ""), { lower: true }) === slug
  );

  if (!matchedFile) throw new Error(`Post not found for slug: ${slug}`);

  return loadPostFromFile(matchedFile);
}

export function getAllPostSlugs() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir);

  return files
    .filter((file) => file.endsWith(".docx"))
    .map((file) => ({
      slug: slugify(file.replace(/\.docx$/, ""), { lower: true }),
    }));
}

export async function getAllTags() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".docx"));

  const tags = new Set<string>();
  for (const file of files) {
    const post = await loadPostFromFile(file);
    if (post.tag) tags.add(post.tag);
  }

  return Array.from(tags).map(tag => ({ tag }));
}

export async function getPostsByTag(tag: string): Promise<PostData[]> {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".docx"));

  const posts: PostData[] = [];
  for (const file of files) {
    const post = await loadPostFromFile(file);
    if (post.tag === tag) posts.push(post);
  }

  return posts;
}
