'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Practical Over Theoretical',
    description: 'Every piece of advice we share has been tested and proven to work in real job searches.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'No Fluff',
    description: 'We cut through the noise to give you exactly what you need—nothing more, nothing less.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Always Current',
    description: 'The job market evolves fast. Our advice stays updated with the latest trends and technologies.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    title: 'Community First',
    description: '187,000+ professionals trust us. We build content based on real questions from real job seekers.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const specialties = [
  'Job Search Tips',
  'Interview Preparation',
  'Resume Writing',
  'Career Advice',
  'Salary Negotiation',
  'LinkedIn Optimization',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-bg-primary py-20 md:py-28">
        <div className="bg-texture" />
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl text-text-primary mb-6">
              Helping You Land the Right Job, Faster
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              How To Find A Job started with a simple mission: provide practical,
              actionable career advice that actually works in today&apos;s competitive job market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose"
          >
            <h2>Our Story</h2>
            <p>
              We&apos;ve all been there—staring at a blank resume, preparing for an interview with
              butterflies in our stomach, or wondering if we should negotiate that offer. The job
              search process can feel overwhelming, confusing, and sometimes downright frustrating.
            </p>
            <p>
              That&apos;s why we created How To Find A Job. We cut through the noise and provide
              clear, actionable advice that helps you navigate every step of your career journey.
              No vague platitudes. No outdated tactics. Just real strategies that real people use
              to land real jobs.
            </p>
            <p>
              Today, our LinkedIn community has grown to over 187,000 professionals who trust us
              for daily career tips, job search strategies, and the motivation to keep pushing forward.
            </p>

            <h2>What We Cover</h2>
            <p>
              Our content spans the entire job search journey, from preparing your materials to
              negotiating your offer:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 mt-8 mb-12"
          >
            {specialties.map((specialty) => (
              <span key={specialty} className="tag">
                {specialty}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-bg-primary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Values</h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              These principles guide everything we create and share.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card flex gap-4"
              >
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl text-text-primary mb-2">{value.title}</h3>
                  <p className="text-text-secondary">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary-500">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="stat-number text-white">187K+</div>
              <p className="text-primary-100 text-lg">LinkedIn Followers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="stat-number text-white">100+</div>
              <p className="text-primary-100 text-lg">Career Resources</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="stat-number text-white">Daily</div>
              <p className="text-primary-100 text-lg">Content Updates</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Ready to Land Your Next Role?</h2>
            <p className="text-lg text-text-secondary mb-8">
              Start with our comprehensive guides or browse our latest resources.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/guides/job-search-playbook" className="btn-primary">
                Read the Job Search Playbook
              </Link>
              <Link href="/resources" className="btn-secondary">
                Browse All Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
