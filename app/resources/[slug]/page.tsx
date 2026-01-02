import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/lib/content';
import { ArticleContent } from '@/components/ArticleContent';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: ['How To Find A Job'],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Organization',
      name: 'How To Find A Job',
      url: 'https://howtofindajob.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'How To Find A Job',
      logo: {
        '@type': 'ImageObject',
        url: 'https://howtofindajob.com/logo.png',
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://howtofindajob.com/resources/${article.slug}`,
    },
  };

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article Header */}
      <article>
        <header className="bg-gradient-to-b from-primary-50 to-bg-primary py-16 md:py-24">
          <div className="container-narrow">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-primary-500 mb-6 hover:text-primary-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Resources
            </Link>
            <span className="tag mb-4">{article.category}</span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4">
              {article.title}
            </h1>
            <p className="text-xl text-text-secondary mb-6">
              {article.description}
            </p>
            <div className="flex items-center gap-4 text-text-muted">
              <span>{article.readTime}</span>
              <span>•</span>
              <span>Updated {new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="py-12 bg-white">
          <div className="container-narrow">
            <ArticleContent content={article.content} />
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-bg-primary">
        <div className="container-wide">
          <h2 className="section-title mb-8">Continue Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/resources/${related.slug}`}
                className="group"
              >
                <div className="bg-neutral-100 rounded-xl h-40 mb-4 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <span className="tag">{related.category}</span>
                </div>
                <h3 className="font-display text-lg text-text-primary group-hover:text-primary-500 transition-colors">
                  {related.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl text-white mb-4">
            Want More Career Tips?
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Join 187,000+ professionals getting weekly job search advice.
          </p>
          <Link
            href="https://www.linkedin.com/company/how-to-find-a-job"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-white text-primary-500 hover:bg-neutral-100"
          >
            Follow on LinkedIn
          </Link>
        </div>
      </section>
    </>
  );
}
