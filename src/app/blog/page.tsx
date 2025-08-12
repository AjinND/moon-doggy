"use client";

import { blogPosts } from "@/lib/data";
import Image from "next/image";
import { format } from "date-fns";
import LoadingLink from "@/components/ui/LoadingLink";

export default function BlogPage() {

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Insights, stories, and updates from the art world
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <LoadingLink href={`/blog/${post.slug}`}>
                <div className="relative h-56 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
                      {post.category
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </span>
                    <time
                      dateTime={post.publishedAt.toISOString()}
                      className="text-sm text-gray-500"
                    >
                      {format(post.publishedAt, "MMM d, yyyy")}
                    </time>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <span className="text-sm text-gray-700">
                        {post.author.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {post.readTime} min read
                    </span>
                  </div>
                </div>
              </LoadingLink>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
