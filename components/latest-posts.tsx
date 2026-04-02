import Link from 'next/link'
import { articles } from '@/lib/articles'
import { ArrowRight } from 'lucide-react'

interface LatestPostsProps {
  limit?: number
  showViewAll?: boolean
}

export function LatestPosts({ limit = 3, showViewAll = true }: LatestPostsProps) {
  const latestArticles = articles.slice(0, limit)

  if (latestArticles.length === 0) return null

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Articles Récents du Blog</h2>
          <p className="text-muted-foreground text-lg">
            Découvrez nos derniers articles sur les diagnostics immobiliers et les réformes 2024-2025
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {latestArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-[#2d8a5e] to-[#1a5a3f] flex items-center justify-center">
                <span className="text-white text-sm font-semibold">{article.category}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#2d8a5e] uppercase">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(article.publishedAt).toLocaleDateString('fr-FR')}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-3 group-hover:text-[#2d8a5e] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-[#2d8a5e] font-semibold text-sm">
                  Lire l&apos;article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {showViewAll && articles.length > limit && (
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#2d8a5e] text-white rounded-lg hover:bg-[#238a50] transition-colors font-semibold"
            >
              Voir tous les articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
