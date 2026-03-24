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
              It started with 127 applications and zero callbacks. A friend with solid experience
              was doing everything &quot;right&quot; but getting nowhere. Then we looked at their resume.
              Buried lead. Generic headline. No keywords. We rewrote it in an afternoon. Three
              interviews that week.
            </p>
            <p>
              That experience revealed something: most job search advice is either outdated
              (&quot;send a handwritten thank you note&quot;) or too generic (&quot;network more&quot;). What
              actually works today is specific, tactical, and often counterintuitive.
            </p>
            <p>
              So we started sharing what we learned on LinkedIn. The tactics that recruiters don&apos;t
              publicize. The resume hacks that beat ATS filters. The negotiation scripts that work.
              Each tip tested on real job searches before we post it.
            </p>
            <p>
              187,000+ professionals later, How To Find A Job has become the go-to resource for
              anyone who wants to stop applying blindly and start getting responses.
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

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm text-primary-500 font-medium uppercase tracking-wide mb-2">Community Voices</p>
            <h2 className="section-title">What Job Seekers Say</h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              Real feedback from our LinkedIn community of 187,000+ career-focused professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <p className="text-text-secondary text-sm mb-4 italic">&quot;Preparation is the baseline. Positioning is the differentiator. Candidates who win speak in results, trade-offs, and priorities. They translate experience into what breaks if they&apos;re not hired.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">PG</div>
                <div>
                  <p className="font-medium text-text-primary text-sm">Dr Patrice Green</p>
                  <p className="text-xs text-text-muted">Career Strategist</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <p className="text-text-secondary text-sm mb-4 italic">&quot;I always lead with honesty in interviews. If we don&apos;t vibe as people when everyone is on their best behavior, it&apos;s never going to work in the grind. My honesty is a bit like a tuning fork.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">HM</div>
                <div>
                  <p className="font-medium text-text-primary text-sm">Hannah M.</p>
                  <p className="text-xs text-text-muted">Process & Efficiency Professional</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <p className="text-text-secondary text-sm mb-4 italic">&quot;This is a goldmine for job seekers. Understanding the &apos;Real Question&apos; behind interview questions is 90% of the battle. Saving this for my network.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">BK</div>
                <div>
                  <p className="font-medium text-text-primary text-sm">Bipin Kumar</p>
                  <p className="text-xs text-text-muted">Digital Marketing Expert</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card"
            >
              <p className="text-text-secondary text-sm mb-4 italic">&quot;No matter how many years we have worked, industries are ever changing. These types of posts are awesome for staying current.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">KP</div>
                <div>
                  <p className="font-medium text-text-primary text-sm">Kassandra Parker</p>
                  <p className="text-xs text-text-muted">Management Analyst, NIH</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="card"
            >
              <p className="text-text-secondary text-sm mb-4 italic">&quot;Most CVs go through complex software now. They use algorithms rather than people reading them. Understanding this changes everything about how you apply.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">FM</div>
                <div>
                  <p className="font-medium text-text-primary text-sm">Fernando M.</p>
                  <p className="text-xs text-text-muted">Office Administrator</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="card"
            >
              <p className="text-text-secondary text-sm mb-4 italic">&quot;I really like the diagram and agree with 95%. Career summary has taken the place of career objective. The summary should be a brief overview of experience and skills.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">KD</div>
                <div>
                  <p className="font-medium text-text-primary text-sm">Ken Ducharme</p>
                  <p className="text-xs text-text-muted">Principal Support Engineer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-bg-primary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm text-primary-500 font-medium uppercase tracking-wide mb-2">Success Stories</p>
            <h2 className="section-title">Career Transformations</h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              How professionals used these strategies to land their dream roles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <p className="text-sm text-primary-500 font-medium mb-2">Personal Branding</p>
              <h3 className="font-display text-xl text-text-primary mb-3">LeverBrands: LinkedIn Visibility Strategy</h3>
              <p className="text-text-secondary text-sm mb-4">
                LeverBrands, a personal branding agency, developed a LinkedIn optimization framework
                that helps professionals stand out. Their clients see an average 3x increase in
                profile views and 40% more inbound recruiter messages within 90 days of implementing
                their headline and summary rewrites.
              </p>
              <p className="text-xs text-text-muted">Key tactic: Keyword-rich headlines + specific metrics</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <p className="text-sm text-primary-500 font-medium mb-2">Famous Comeback</p>
              <h3 className="font-display text-xl text-text-primary mb-3">Steve Jobs: Fired Then Rehired</h3>
              <p className="text-text-secondary text-sm mb-4">
                In 1985, Steve Jobs was pushed out of Apple, the company he founded. Rather than
                dwelling on rejection, he started NeXT and Pixar. When Apple acquired NeXT in 1997,
                Jobs returned as CEO and led Apple to become the world&apos;s most valuable company.
                His lesson: &quot;Getting fired was the best thing that could have ever happened to me.&quot;
              </p>
              <p className="text-xs text-text-muted">Key lesson: Career setbacks can become springboards</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <p className="text-sm text-primary-500 font-medium mb-2">Negotiation Win</p>
              <h3 className="font-display text-xl text-text-primary mb-3">The $15K Email</h3>
              <p className="text-text-secondary text-sm mb-4">
                A member of our community received a job offer $15,000 below market rate. Using
                our salary negotiation script, they responded with specific market data and
                their unique value proposition. Result: the company increased the offer by
                $18,000 plus a signing bonus. Total time invested: one email, 20 minutes.
              </p>
              <p className="text-xs text-text-muted">Key tactic: Data-backed counter offers</p>
            </motion.div>
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
