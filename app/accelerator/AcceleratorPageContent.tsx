'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const toolkitItems = [
  {
    title: 'ATS-Optimized Resume Template',
    description:
      "A proven one-page structure with the exact sections, order, and formatting that passes automated screening systems and catches a recruiter's eye.",
    detail: 'Includes: Contact block · Professional Summary · Core Skills · Experience bullets · Education · Optional sections',
    color: 'bg-primary-100 text-primary-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'STAR Method Interview Framework',
    description:
      'Fill-in-the-blank templates for 12 high-frequency behavioral questions using the Situation–Task–Action–Result structure hiring managers expect.',
    detail: 'Covers: Problem-solving · Leadership · Conflict · Failure · Collaboration · Time management · and more',
    color: 'bg-accent-100 text-accent-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: 'Salary Negotiation Scripts',
    description:
      'Word-for-word scripts for countering an initial offer, asking for more base salary, and negotiating benefits — without risking the offer.',
    detail: 'Scripts for: First counter · Benefits ask · Remote/flexibility · Equity · Competing offer · Base vs. bonus tradeoff',
    color: 'bg-green-100 text-green-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'LinkedIn Profile Checklist',
    description:
      'A 20-point checklist covering every section of your profile to maximize visibility with recruiters and signal you are open to the right roles.',
    detail: 'Covers: Headline formula · About section · Experience bullets · Skills · Open to Work settings · Connection strategy',
    color: 'bg-blue-100 text-blue-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const communityStats = [
  { number: '+187k', label: 'professionals in our community' },
  { number: '85%', label: 'of jobs filled via networking' },
  { number: '6 sec', label: 'average resume review time' },
  { number: '10–20%', label: 'typical salary increase from negotiating' },
];

function EmailCaptureForm({ ctaLabel = 'Get Free Toolkit' }: { ctaLabel?: string }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'duplicate'>('idle');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        router.push('/accelerator/thank-you');
        return;
      }

      const data = await res.json();
      if (res.status === 409) {
        setStatus('duplicate');
        setMessage(data.error || "You're already on the list! Check your inbox.");
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-3 max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          disabled={status === 'loading'}
          aria-label="Email address"
          className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-60 bg-white"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-accent whitespace-nowrap disabled:opacity-60"
        >
          {status === 'loading' ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : ctaLabel}
        </button>
      </div>
      {message && (
        <p className={`mt-2 text-sm font-medium ${status === 'duplicate' ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
      <p className="mt-3 text-sm text-text-muted">
        Free. No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}

export default function AcceleratorPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-bg-primary py-20 md:py-32">
        <div className="bg-texture" />
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="tag mb-6">Free Toolkit · Instant Access</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6 leading-tight">
              Land your next role,{' '}
              <span className="text-primary-500">faster</span>
            </h1>
            <p className="text-xl text-text-secondary mb-4 leading-relaxed max-w-2xl">
              Get the exact resume template, STAR method interview framework, salary negotiation
              scripts, and LinkedIn checklist used by 187,000+ job seekers. Completely free.
            </p>
            <ul className="mb-8 space-y-2 text-text-secondary">
              {[
                'ATS-optimized resume template with proven section order',
                'STAR method framework with fill-in-the-blank answer templates',
                'Word-for-word salary negotiation scripts',
                '20-point LinkedIn profile checklist',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <EmailCaptureForm />
            <div className="mt-8 flex items-center gap-3 text-sm text-text-muted">
              <div className="flex -space-x-2">
                {[
                  { bg: '#1a2744', initials: 'JD' },
                  { bg: '#c9952a', initials: 'SK' },
                  { bg: '#2563eb', initials: 'ML' },
                  { bg: '#16a34a', initials: 'TR' },
                ].map(({ bg, initials }) => (
                  <div
                    key={initials}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold"
                    style={{ backgroundColor: bg }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span>Joined by <strong className="text-text-primary">+187k</strong> professionals</span>
            </div>
          </motion.div>
        </div>
        <div className="absolute -right-32 top-20 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -left-32 bottom-20 w-64 h-64 bg-accent-200 rounded-full opacity-20 blur-3xl" />
      </section>

      {/* What's Inside */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Everything You Need to Land Interviews</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Four immediately actionable tools, each targeting a critical stage of the job search.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {toolkitItems.map((item) => (
              <motion.div key={item.title} variants={fadeInUp}>
                <div className="card h-full">
                  <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="font-display text-xl text-text-primary mb-2">{item.title}</h3>
                  <p className="text-text-secondary mb-4">{item.description}</p>
                  <div className="bg-neutral-50 rounded-lg px-3 py-2 text-sm text-text-muted">
                    {item.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 bg-primary-500">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Trusted by a Community of Job Seekers
            </h2>
            <p className="text-primary-100 text-lg max-w-xl mx-auto">
              The same frameworks used by our LinkedIn community to land roles at top companies.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {communityStats.map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                <div className="stat-number text-white mb-2">{stat.number}</div>
                <p className="text-primary-100 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-bg-accent">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            </div>
            <h2 className="section-title">Get Your Free Toolkit Now</h2>
            <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
              Join +187k professionals who use these exact tools to land interviews and negotiate
              better offers. Instant access, completely free.
            </p>
            <div className="flex justify-center">
              <EmailCaptureForm ctaLabel="Send Me the Toolkit" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Explore More */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-text-muted mb-6">Want to dive deeper?</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/guides/job-search-playbook" className="btn-secondary">
                Read the Playbook
              </Link>
              <Link href="/resources" className="link-underline self-center">
                Browse all resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
