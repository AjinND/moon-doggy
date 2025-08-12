// src/components/home/BlogPreview.tsx
import LoadingLink from '@/components/ui/LoadingLink';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { BlogPost } from '@/lib/types';

interface BlogPreviewProps {
  posts: BlogPost[];
}
export default function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest from the Blog</h2>
          <LoadingLink href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
            View All Posts →
          </LoadingLink>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <LoadingLink href={`/blog/${post.slug}`} className="block">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
                    {post.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <span>{post.author.name}</span>
                    </div>
                    <span>·</span>
                    <time dateTime={post.publishedAt.toISOString()}>
                      {formatDistanceToNow(post.publishedAt, { addSuffix: true })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </LoadingLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}