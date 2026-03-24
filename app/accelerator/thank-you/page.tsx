'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

const starSteps = [
  {
    letter: 'S',
    label: 'Situation',
    color: 'bg-primary-100 text-primary-700',
    template: '"In my role as [Title] at [Company], [specific situation with context]. This was significant because [why it mattered to the business/team]."',
    tip: 'Keep it to 1–2 sentences. Set the scene without over-explaining.',
  },
  {
    letter: 'T',
    label: 'Task',
    color: 'bg-accent-100 text-accent-700',
    template: '"My responsibility was to [specific goal or deliverable]. I needed to [main objective], while [any constraint — deadline, budget, team size]."',
    tip: 'Clarify YOUR role specifically, not the team\'s.',
  },
  {
    letter: 'A',
    label: 'Action',
    color: 'bg-blue-100 text-blue-700',
    template: '"I [action verb] [what you did]. Next, I [second step]. I also [third step], which involved [key decision or skill]."',
    tip: 'Use "I," not "we." Interviewers want to know what YOU did. 3–4 concrete steps is ideal.',
  },
  {
    letter: 'R',
    label: 'Result',
    color: 'bg-green-100 text-green-700',
    template: '"As a result, [specific outcome + quantified metric if possible]. This led to [broader impact on the team, company, or customer]."',
    tip: 'Numbers make results memorable: %, $, time saved, headcount, growth rate.',
  },
];

const resumeSections = [
  {
    number: '01',
    title: 'Contact Block',
    content: 'Full Name · email@example.com · (555) 555-5555 · linkedin.com/in/yourname · City, State',
    note: 'No photo, no full address. LinkedIn URL is more valuable than street address.',
  },
  {
    number: '02',
    title: 'Professional Summary (2–3 lines)',
    content: '[Role title] with [X] years of experience in [core domain]. Known for [key differentiator]. Seeking [target role type] where I can [value you bring].',
    note: 'Tailor this to each job. Mirror keywords from the job description.',
  },
  {
    number: '03',
    title: 'Core Skills (8–12 items)',
    content: 'List skills in 2–3 columns. Mix technical and transferable skills. Include tools, platforms, methodologies relevant to your target role.',
    note: 'ATS systems scan this section. Use the exact terms from job postings.',
  },
  {
    number: '04',
    title: 'Work Experience (reverse chronological)',
    content: 'Job Title · Company Name · Month Year – Month Year\n• [Action verb] + [what you did] + [result/impact]\n• Reduced [X] by [Y%] by [method used]\n• Led [initiative] resulting in [outcome]',
    note: 'Each bullet = [Verb] + [Task] + [Result]. Aim for 3–5 bullets per role.',
  },
  {
    number: '05',
    title: 'Education',
    content: 'Degree · Institution · Graduation Year\n(GPA optional — only include if 3.5+)',
    note: 'Move Education above Experience only if you are a recent graduate (<2 years out).',
  },
  {
    number: '06',
    title: 'Optional Sections',
    content: 'Certifications · Side Projects · Publications · Languages · Volunteer Work',
    note: 'Only add if directly relevant to the roles you are targeting.',
  },
];

const strongVerbs = [
  'Led', 'Built', 'Launched', 'Reduced', 'Increased', 'Streamlined',
  'Designed', 'Negotiated', 'Managed', 'Spearheaded', 'Developed', 'Delivered',
];

export default function ThankYouPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-bg-primary py-20">
        <div className="bg-texture" />
        <div className="container-narrow relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className="tag mb-4">You're in</span>
            <h1 className="font-display text-4xl md:text-5xl text-text-primary mb-4 leading-tight">
              Your toolkit is on its way
            </h1>
            <p className="text-xl text-text-secondary max-w-lg mx-auto">
              Check your inbox — and while you wait, here is a preview of what you will be working with.
            </p>
          </motion.div>
        </div>
        <div className="absolute -right-32 top-20 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -left-32 bottom-20 w-64 h-64 bg-accent-200 rounded-full opacity-20 blur-3xl" />
      </section>

      {/* STAR Framework Preview */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <span className="tag">From the Toolkit</span>
            </div>
            <h2 className="section-title">The STAR Method Answer Framework</h2>
            <p className="text-lg text-text-secondary max-w-2xl">
              The STAR method is the gold standard for answering behavioral interview questions — the kind
              that start with "Tell me about a time when..." Use this template to structure every answer.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4 mb-12"
          >
            {starSteps.map((step, i) => (
              <motion.div key={step.letter} variants={fadeInUp}>
                <div className="card">
                  <div className="flex items-start gap-5">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${step.color} flex items-center justify-center font-display text-2xl font-semibold`}>
                      {step.letter}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display text-lg text-text-primary">{step.label}</h3>
                        <span className="text-sm text-text-muted">Step {i + 1} of 4</span>
                      </div>
                      <blockquote className="border-l-4 border-accent-300 pl-4 mb-3 italic text-text-secondary">
                        {step.template}
                      </blockquote>
                      <p className="text-sm text-text-muted bg-neutral-50 rounded-lg px-3 py-2">
                        <span className="font-medium text-text-secondary">Pro tip:</span> {step.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Example question */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-500 rounded-2xl p-8 text-white"
          >
            <p className="text-primary-200 text-sm font-medium mb-3 uppercase tracking-wide">Example Answer — "Tell me about a time you solved a complex problem."</p>
            <div className="space-y-3 text-primary-100 leading-relaxed">
              <p><span className="font-semibold text-white">S:</span> "As a project manager at [Company], our team was 3 weeks behind on a product launch with no clear owner for six open tasks."</p>
              <p><span className="font-semibold text-white">T:</span> "My job was to coordinate across four departments and get the launch back on track within two weeks."</p>
              <p><span className="font-semibold text-white">A:</span> "I ran a 30-minute standup to reprioritize tasks by impact, assigned clear owners with daily check-ins, and escalated two unresolvable blockers to leadership the same afternoon."</p>
              <p><span className="font-semibold text-white">R:</span> "We launched on schedule. The product hit 10,000 users in the first month — 25% ahead of the internal target."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Structure Preview */}
      <section className="py-20 bg-bg-primary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <span className="tag">From the Toolkit</span>
            </div>
            <h2 className="section-title">ATS-Optimized Resume Structure</h2>
            <p className="text-lg text-text-secondary max-w-2xl">
              This section order is deliberately chosen. ATS systems parse top-to-bottom — and
              recruiters who do read your resume spend most of their 6 seconds on the top third.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4 mb-12"
          >
            {resumeSections.map((section) => (
              <motion.div key={section.number} variants={fadeInUp}>
                <div className="card">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center font-display text-primary-500 font-semibold">
                      {section.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg text-text-primary mb-2">{section.title}</h3>
                      <p className="text-text-secondary mb-3 whitespace-pre-line">{section.content}</p>
                      <p className="text-sm text-text-muted bg-accent-50 border border-accent-100 rounded-lg px-3 py-2">
                        <span className="font-medium text-accent-700">Note:</span> {section.note}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Strong action verbs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="font-display text-xl text-text-primary mb-4">Strong Resume Bullet Verbs</h3>
            <p className="text-text-secondary text-sm mb-4">
              Every bullet point should open with an action verb. Avoid starting with "Responsible for" or "Helped with."
            </p>
            <div className="flex flex-wrap gap-2">
              {strongVerbs.map((verb) => (
                <span key={verb} className="tag">{verb}</span>
              ))}
            </div>
            <p className="mt-4 text-sm text-text-muted bg-neutral-50 rounded-lg px-3 py-2">
              <span className="font-medium text-text-secondary">Bullet formula:</span>{' '}
              [Action verb] + [What you did] + [Method or detail] + [Quantified result]
            </p>
          </motion.div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Ready to Go Deeper?
            </h2>
            <p className="text-primary-100 text-lg max-w-xl mx-auto">
              Explore our full guides and resources to master every stage of the job search.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                href: '/guides/job-search-playbook',
                title: 'Complete Job Search Playbook',
                desc: 'A step-by-step guide from identifying target roles to signing the offer.',
                label: 'Read the guide',
              },
              {
                href: '/guides/interview-preparation',
                title: 'Interview Preparation Guide',
                desc: 'Master every interview format — phone screen, panel, case study, and final round.',
                label: 'Read the guide',
              },
              {
                href: '/resources/salary-negotiation-script',
                title: 'Salary Negotiation Deep Dive',
                desc: 'The full playbook on when to negotiate, what to say, and how to handle pushback.',
                label: 'Read the article',
              },
            ].map((item) => (
              <motion.div key={item.href} variants={fadeInUp}>
                <Link
                  href={item.href}
                  className="block bg-white/10 hover:bg-white/20 rounded-xl p-6 transition-colors group h-full"
                >
                  <h3 className="font-display text-xl text-white mb-2 group-hover:text-accent-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-primary-200 text-sm mb-4">{item.desc}</p>
                  <span className="inline-flex items-center gap-2 text-accent-300 text-sm font-medium">
                    {item.label}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link href="/resources" className="btn-primary bg-accent-500 hover:bg-accent-600 text-white">
              Browse All Resources
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
