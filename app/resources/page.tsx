'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { getPublishedArticles } from '@/lib/content';

const categories = ['All', 'Resume', 'Interview', 'Negotiation', 'LinkedIn', 'Job Search'];

export default function ResourcesPage() {
  const articles = getPublishedArticles();
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
              Resources
            </h1>
            <p className="text-xl text-text-secondary">
              Actionable tips and strategies for every stage of your job search.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-neutral-200 sticky top-[73px] z-40">
        <div className="container-wide">
          <div className="flex gap-4 overflow-x-auto pb-2 -mb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  category === 'All'
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 text-text-secondary hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-bg-primary">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/resources/${article.slug}`} className="group block">
                  <div className="bg-neutral-100 rounded-xl h-48 mb-4 flex items-center justify-center group-hover:bg-primary-100 transition-colors relative overflow-hidden">
                    <span className="tag">{article.category}</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                  </div>
                  <div className="flex items-center gap-4 text-sm text-text-muted mb-2">
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="font-display text-xl text-text-primary mb-2 group-hover:text-primary-500 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-text-secondary text-sm line-clamp-2">
                    {article.description}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
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
            <h2 className="section-title">Want the Complete Picture?</h2>
            <p className="text-lg text-text-secondary mb-8">
              Check out our comprehensive guides for end-to-end coverage of your job search journey.
            </p>
            <Link href="/guides" className="btn-primary">
              Explore Guides
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
