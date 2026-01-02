import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { glossaryTerms } from '@/lib/content';
import { ArticleContent } from '@/components/ArticleContent';

interface Props {
  params: Promise<{ term: string }>;
}

export async function generateStaticParams() {
  return glossaryTerms.map((term) => ({
    term: term.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { term: slug } = await params;
  const term = glossaryTerms.find((t) => t.slug === slug);

  if (!term) {
    return { title: 'Term Not Found' };
  }

  return {
    title: `${term.term} - Career Glossary`,
    description: term.shortDefinition,
  };
}

export default async function GlossaryTermPage({ params }: Props) {
  const { term: slug } = await params;
  const term = glossaryTerms.find((t) => t.slug === slug);

  if (!term) {
    notFound();
  }

  // Definition schema for glossary terms
  const definitionSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term.term,
    description: term.shortDefinition,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Career Glossary',
      url: 'https://howtofindajob.com/glossary',
    },
  };

  const otherTerms = glossaryTerms.filter((t) => t.slug !== term.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definitionSchema) }}
      />

      {/* Term Header */}
      <article>
        <header className="bg-gradient-to-b from-primary-50 to-bg-primary py-16 md:py-24">
          <div className="container-narrow">
            <Link
              href="/glossary"
              className="inline-flex items-center gap-2 text-primary-500 mb-6 hover:text-primary-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Glossary
            </Link>
            <span className="tag mb-4">Definition</span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4">
              {term.term}
            </h1>
            <p className="text-xl text-text-secondary">
              {term.shortDefinition}
            </p>
          </div>
        </header>

        {/* Full Definition */}
        <div className="py-12 bg-white">
          <div className="container-narrow">
            <ArticleContent content={term.fullDefinition} />
          </div>
        </div>
      </article>

      {/* Other Terms */}
      <section className="py-16 bg-bg-primary">
        <div className="container-wide">
          <h2 className="section-title mb-8">Related Terms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherTerms.map((otherTerm) => (
              <Link
                key={otherTerm.slug}
                href={`/glossary/${otherTerm.slug}`}
                className="card group"
              >
                <h3 className="font-display text-lg text-text-primary mb-2 group-hover:text-primary-500 transition-colors">
                  {otherTerm.term}
                </h3>
                <p className="text-text-secondary text-sm line-clamp-2">
                  {otherTerm.shortDefinition}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-narrow text-center">
          <h2 className="section-title">Put This Knowledge to Work</h2>
          <p className="text-lg text-text-secondary mb-8">
            Learn how to apply these concepts in your job search.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/guides/job-search-playbook" className="btn-primary">
              Read the Job Search Playbook
            </Link>
            <Link href="/resources" className="btn-secondary">
              Browse Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
