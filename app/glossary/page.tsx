'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { glossaryTerms } from '@/lib/content';

export default function GlossaryPage() {
  // Group terms by first letter
  const groupedTerms = glossaryTerms.reduce((acc, term) => {
    const letter = term.term.charAt(0).toUpperCase();
    if (!acc[letter]) {
      acc[letter] = [];
    }
    acc[letter].push(term);
    return acc;
  }, {} as Record<string, typeof glossaryTerms>);

  const sortedLetters = Object.keys(groupedTerms).sort();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-bg-primary py-16 md:py-24">
        <div className="bg-texture" />
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-4xl md:text-5xl text-text-primary mb-4">
              Career Glossary
            </h1>
            <p className="text-xl text-text-secondary">
              Essential terms and concepts every job seeker should know. From ATS to STAR method, we&apos;ve got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-6 bg-white border-b border-neutral-200 sticky top-[73px] z-40">
        <div className="container-wide">
          <div className="flex gap-4 overflow-x-auto pb-2 -mb-2">
            {sortedLetters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-100 text-text-primary font-medium hover:bg-primary-100 hover:text-primary-600 transition-colors flex-shrink-0"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Terms List */}
      <section className="py-16 bg-bg-primary">
        <div className="container-wide">
          {sortedLetters.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-32">
              <h2 className="font-display text-3xl text-primary-500 mb-6 pb-2 border-b border-neutral-200">
                {letter}
              </h2>
              <div className="grid gap-4">
                {groupedTerms[letter].map((term, index) => (
                  <motion.div
                    key={term.slug}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={`/glossary/${term.slug}`}
                      className="card block group hover:border-primary-200"
                    >
                      <h3 className="font-display text-xl text-text-primary mb-2 group-hover:text-primary-500 transition-colors">
                        {term.term}
                      </h3>
                      <p className="text-text-secondary">
                        {term.shortDefinition}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Want to Learn More?</h2>
            <p className="text-lg text-text-secondary mb-8">
              Dive deeper with our comprehensive guides and practical resources.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/guides" className="btn-primary">
                Read Guides
              </Link>
              <Link href="/resources" className="btn-secondary">
                Browse Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
