import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { articles } from '@/lib/articles'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find(a => a.slug === slug)

  if (!article) {
    return {
      title: 'Article non trouvé',
    }
  }

  return {
    title: `${article.title} | Blog ENEOS HABITAT`,
    description: article.excerpt,
    alternates: {
      canonical: `https://www.eneoshabitat.fr/blog/${slug}`
    }
  }
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles.find(a => a.slug === slug)

  if (!article) {
    notFound()
  }

  const recentArticles = articles
    .filter(a => a.slug !== slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2)

  // BlogPosting JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: `https://www.eneoshabitat.fr${article.image}`,
    author: {
      '@type': 'Organization',
      name: 'ENEOS HABITAT',
      url: 'https://www.eneoshabitat.fr'
    },
    datePublished: article.publishedAt || article.date,
    dateModified: article.publishedAt || article.date,
    articleBody: article.content.replace(/<[^>]*>/g, ''),
    publisher: {
      '@type': 'Organization',
      name: 'ENEOS HABITAT',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.eneoshabitat.fr/logo.png'
      }
    }
  }

  return (
    <main>
      {/* JSON-LD BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-slate-900">Accueil</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-slate-900">Blog</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">{article.title}</span>
          </div>
        </div>
      </div>

      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </span>
                <span className="text-slate-600">
                  {new Date(article.date).toLocaleDateString('fr-FR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-600">{article.readingTime} min de lecture</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {article.title}
              </h1>
            </header>

            {/* Featured Image */}
            <div className="relative h-96 w-full rounded-lg overflow-hidden mb-8">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Author/CTA */}
            <div className="bg-emerald-50 rounded-lg p-8 mb-12">
              <p className="text-slate-700 mb-6">
                Besoin d'un diagnostic immobilier professionnel ? ENEOS HABITAT réalise tous les diagnostics obligatoires en Gironde avec expertise et rapidité.
              </p>
              <Button 
                asChild 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3"
              >
                <Link href="/devis">
                  Demander un Devis Gratuit
                </Link>
              </Button>
            </div>

            {/* Recent Articles */}
            {recentArticles.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Articles Récents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {recentArticles.map((recent) => (
                    <Link 
                      key={recent.slug}
                      href={`/blog/${recent.slug}`}
                      className="group"
                    >
                      <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                        <Image
                          src={recent.image}
                          alt={recent.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
                        {recent.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {new Date(recent.date).toLocaleDateString('fr-FR')}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </article>
    </main>
  )
}
