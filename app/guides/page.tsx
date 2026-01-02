'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { guides } from '@/lib/content';

export default function GuidesPage() {
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
              Comprehensive Guides
            </h1>
            <p className="text-xl text-text-secondary">
              In-depth resources that cover every aspect of your job search journey from start to finish.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guides List */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid gap-8">
            {guides.map((guide, index) => (
              <motion.article
                key={guide.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/guides/${guide.slug}`} className="card block group">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="lg:flex-1">
                      <div className="flex items-center gap-4 text-sm text-text-muted mb-3">
                        <span className="tag bg-accent-100 text-accent-700">Guide</span>
                        <span>{guide.readTime}</span>
                      </div>
                      <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-3 group-hover:text-primary-500 transition-colors">
                        {guide.title}
                      </h2>
                      <p className="text-text-secondary text-lg">
                        {guide.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-primary-500 font-medium lg:flex-shrink-0">
                      Read Guide
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Guides */}
      <section className="py-16 bg-bg-primary">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Why Use Our Guides?</h2>
            <p className="text-lg text-text-secondary mb-12 max-w-xl mx-auto">
              Unlike scattered blog posts, our guides give you a complete roadmap from start to finish.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl text-text-primary mb-2">Complete Coverage</h3>
                <p className="text-text-secondary">Every step explained, nothing left to guesswork</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-accent-100 text-accent-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl text-text-primary mb-2">Actionable Steps</h3>
                <p className="text-text-secondary">Real tactics you can implement today</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl text-text-primary mb-2">Time-Tested</h3>
                <p className="text-text-secondary">Proven by 187,000+ job seekers</p>
              </div>
            </div>
          </motion.div>
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
            <h2 className="section-title">Looking for Quick Tips?</h2>
            <p className="text-lg text-text-secondary mb-8">
              Check out our resources for bite-sized, actionable advice.
            </p>
            <Link href="/resources" className="btn-primary">
              Browse Resources
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
