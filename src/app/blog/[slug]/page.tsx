import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/data';
import Image from 'next/image';
import { format } from 'date-fns';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
              {post.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </span>
            <time dateTime={post.publishedAt.toISOString()} className="text-sm text-gray-500">
              {format(post.publishedAt, 'MMMM d, yyyy')}
            </time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="text-gray-900 font-medium">{post.author.name}</div>
                <div className="text-sm text-gray-500">{post.readTime} min read</div>
              </div>
            </div>
          </div>
        </header>

        <div className="relative aspect-video mb-8 overflow-hidden rounded-lg">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 font-medium">
            {post.excerpt}
          </p>
          <div className="whitespace-pre-wrap text-gray-700">
            {post.content}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
