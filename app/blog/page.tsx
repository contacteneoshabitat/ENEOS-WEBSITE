import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Blog | ENEOS HABITAT — Articles sur les Diagnostics Immobiliers',
  description: 'Découvrez nos articles d\'expertise sur les diagnostics immobiliers, DPE, amiante, et conseils pour vendre ou louer votre bien immobilier en Gironde.'
}

export default function BlogPage() {
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog ENEOS HABITAT</h1>
            <p className="text-xl text-slate-300">
              Conseils d'experts sur les diagnostics immobiliers, l'efficacité énergétique, et la vente immobilière
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {sortedArticles.map((article) => (
              <article key={article.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 text-slate-900">
                    {article.title}
                  </h2>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                    <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                    <span>•</span>
                    <span>{article.readingTime} min de lecture</span>
                  </div>

                  {/* Excerpt */}
                  <p className="text-slate-700 mb-6">
                    {article.excerpt}
                  </p>

                  {/* Link */}
                  <Link 
                    href={`/blog/${article.slug}`}
                    className="inline-block text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                  >
                    Lire l'article →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-emerald-50 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Besoin d'un diagnostic pour votre bien ?
            </h2>
            <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
              ENEOS HABITAT réalise tous les diagnostics immobiliers obligatoires en Gironde. Devis gratuit sous 24h.
            </p>
            <Button 
              asChild 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
            >
              <Link href="/devis">
                Demander un Devis Gratuit
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
