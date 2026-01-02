import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guides, articles } from '@/lib/content';
import { ArticleContent } from '@/components/ArticleContent';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return { title: 'Guide Not Found' };
  }

  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: 'article',
      publishedTime: guide.publishedAt,
      authors: ['How To Find A Job'],
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  // HowTo schema for guides
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guide.title,
    description: guide.description,
    totalTime: guide.readTime,
    author: {
      '@type': 'Organization',
      name: 'How To Find A Job',
    },
    publisher: {
      '@type': 'Organization',
      name: 'How To Find A Job',
      logo: {
        '@type': 'ImageObject',
        url: 'https://howtofindajob.com/logo.png',
      },
    },
  };

  const relatedArticles = articles.slice(0, 3);
  const otherGuide = guides.find((g) => g.slug !== guide.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Guide Header */}
      <article>
        <header className="bg-gradient-to-b from-primary-50 to-bg-primary py-16 md:py-24">
          <div className="container-narrow">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 text-primary-500 mb-6 hover:text-primary-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Guides
            </Link>
            <span className="tag bg-accent-100 text-accent-700 mb-4">Comprehensive Guide</span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4">
              {guide.title}
            </h1>
            <p className="text-xl text-text-secondary mb-6">
              {guide.description}
            </p>
            <div className="flex items-center gap-4 text-text-muted">
              <span>{guide.readTime}</span>
              <span>•</span>
              <span>Updated {new Date(guide.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            </div>
          </div>
        </header>

        {/* Guide Content */}
        <div className="py-12 bg-white">
          <div className="container-narrow">
            <ArticleContent content={guide.content} />
          </div>
        </div>
      </article>

      {/* Other Guide */}
      {otherGuide && (
        <section className="py-16 bg-bg-accent">
          <div className="container-wide">
            <h2 className="section-title mb-8">Continue Your Journey</h2>
            <Link href={`/guides/${otherGuide.slug}`} className="card block group">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="lg:flex-1">
                  <span className="tag bg-accent-100 text-accent-700 mb-3">Guide</span>
                  <h3 className="font-display text-2xl text-text-primary mb-3 group-hover:text-primary-500 transition-colors">
                    {otherGuide.title}
                  </h3>
                  <p className="text-text-secondary">
                    {otherGuide.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-primary-500 font-medium">
                  Read Guide
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="section-title mb-8">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="group"
              >
                <div className="bg-neutral-100 rounded-xl h-40 mb-4 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <span className="tag">{article.category}</span>
                </div>
                <h3 className="font-display text-lg text-text-primary group-hover:text-primary-500 transition-colors">
                  {article.title}
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
            Follow for Daily Career Tips
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
