'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Resume',
    description: 'Craft an ATS-optimized resume that gets you interviews',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    href: '/resources/resume-beats-ats',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    title: 'Interview',
    description: 'Master behavioral questions and negotiate like a pro',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    href: '/resources/interview-questions',
    color: 'bg-accent-100 text-accent-600',
  },
  {
    title: 'Negotiation',
    description: 'Get the salary you deserve with proven scripts',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: '/resources/salary-negotiation-script',
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'LinkedIn',
    description: 'Optimize your profile to attract recruiters',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    href: '/resources/linkedin-profile-optimization',
    color: 'bg-blue-100 text-blue-600',
  },
];

const guides = [
  {
    title: 'The Complete Job Search Playbook',
    description: 'A comprehensive guide covering everything from identifying your ideal role to accepting an offer.',
    href: '/guides/job-search-playbook',
    readTime: '25 min read',
  },
  {
    title: 'Interview Preparation: From Application to Offer',
    description: 'Master every stage of the interview process with proven strategies and real examples.',
    href: '/guides/interview-preparation',
    readTime: '30 min read',
  },
];

const articles = [
  {
    title: 'How to Write a Resume That Beats ATS Systems',
    description: 'Learn the exact formatting and keyword strategies that get your resume past automated screening.',
    href: '/resources/resume-beats-ats',
    category: 'Resume',
  },
  {
    title: '10 Interview Questions You\'ll Definitely Be Asked',
    description: 'Prepare winning answers for the most common behavioral and technical interview questions.',
    href: '/resources/interview-questions',
    category: 'Interview',
  },
  {
    title: 'The Salary Negotiation Script That Works',
    description: 'Word-for-word scripts and tactics to negotiate 10-20% higher compensation.',
    href: '/resources/salary-negotiation-script',
    category: 'Negotiation',
  },
];

const stats = [
  { number: '+187k', label: 'professionals finding their dream job' },
  { number: '85%', label: 'Jobs Filled via Networking' },
  { number: '70%', label: 'Never Posted Publicly' },
  { number: '6 sec', label: 'Avg. Resume Review Time' },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-bg-primary py-20 md:py-32">
        <div className="bg-texture" />
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="tag mb-6">+187k professionals finding their dream job</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6 leading-tight">
              Land your next job,{' '}
              <span className="text-primary-500">faster</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed max-w-2xl">
              Practical, actionable career advice on resume writing, interview preparation,
              salary negotiation, and LinkedIn optimization. No fluff—just strategies that work.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/guides/job-search-playbook" className="btn-primary">
                Read the Playbook
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/resources" className="btn-secondary">
                Browse Resources
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -right-32 top-20 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -left-32 bottom-20 w-64 h-64 bg-accent-200 rounded-full opacity-20 blur-3xl" />
      </section>

      {/* Topic Pillars */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Master Every Stage of Your Job Search</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              From crafting the perfect resume to negotiating your offer, we&apos;ve got you covered.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pillars.map((pillar) => (
              <motion.div key={pillar.title} variants={fadeInUp}>
                <Link href={pillar.href} className="card block h-full group">
                  <div className={`w-14 h-14 rounded-xl ${pillar.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {pillar.icon}
                  </div>
                  <h3 className="font-display text-xl text-text-primary mb-2">{pillar.title}</h3>
                  <p className="text-text-secondary">{pillar.description}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-500">
        <div className="container-wide">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="stat-number text-white mb-2">{stat.number}</div>
                <p className="text-primary-100 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-20 bg-bg-primary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12"
          >
            <div>
              <h2 className="section-title">Comprehensive Guides</h2>
              <p className="text-lg text-text-secondary max-w-xl">
                In-depth resources that cover every aspect of your job search journey.
              </p>
            </div>
            <Link href="/guides" className="link-underline mt-4 md:mt-0">
              View all guides
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {guides.map((guide) => (
              <motion.div key={guide.title} variants={fadeInUp}>
                <Link href={guide.href} className="card block group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-100 to-transparent rounded-bl-full opacity-50" />
                  <span className="text-sm text-text-muted mb-2 block">{guide.readTime}</span>
                  <h3 className="font-display text-2xl text-text-primary mb-3 group-hover:text-primary-500 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-text-secondary mb-4">{guide.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary-500 font-medium">
                    Read guide
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12"
          >
            <div>
              <h2 className="section-title">Latest Resources</h2>
              <p className="text-lg text-text-secondary max-w-xl">
                Actionable tips and strategies you can apply today.
              </p>
            </div>
            <Link href="/resources" className="link-underline mt-4 md:mt-0">
              View all resources
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {articles.map((article) => (
              <motion.div key={article.title} variants={fadeInUp}>
                <Link href={article.href} className="group block">
                  <div className="bg-neutral-100 rounded-xl h-48 mb-4 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                    <span className="tag">{article.category}</span>
                  </div>
                  <h3 className="font-display text-xl text-text-primary mb-2 group-hover:text-primary-500 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-text-secondary text-sm">{article.description}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-bg-accent">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Get Career Tips Delivered Weekly</h2>
            <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
              Join +187k professionals finding their dream job.
              No spam, just practical tips that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-accent whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-text-muted mt-4">
              Unsubscribe anytime. No spam, we promise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LinkedIn CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-4 text-white">
                Join Our LinkedIn Community
              </h2>
              <p className="text-primary-100 text-lg max-w-xl">
                Follow us for daily career tips, job search strategies, and inspiration.
                Join +187k professionals finding their dream job.
              </p>
            </div>
            <Link
              href="https://www.linkedin.com/company/how-to-find-a-job"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-accent-500 text-white hover:bg-accent-600 flex-shrink-0"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Follow on LinkedIn
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
