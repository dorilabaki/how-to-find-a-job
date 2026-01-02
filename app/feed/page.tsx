'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const samplePosts = [
  {
    id: 1,
    content: "🎯 The #1 mistake in salary negotiation?\n\nAccepting too quickly.\n\nWhen you receive an offer, say:\n\"Thank you! I'm excited about this opportunity. I'd like to take some time to review the full package.\"\n\nThis buys you time to:\n→ Research market rates\n→ Prepare your counter\n→ Make a strategic decision\n\nNever negotiate on the spot.",
    likes: 2847,
    comments: 156,
    reposts: 423,
  },
  {
    id: 2,
    content: "Resume tip that changed everything:\n\n❌ \"Responsible for managing projects\"\n✅ \"Led 12 projects worth $2.3M, delivering 95% on-time\"\n\nThe difference?\n\n→ Specificity\n→ Numbers\n→ Impact\n\nHiring managers skim for 6 seconds.\nMake those seconds count.",
    likes: 4521,
    comments: 287,
    reposts: 891,
  },
  {
    id: 3,
    content: "Interview hack I wish I knew earlier:\n\nWhen they ask \"Do you have any questions?\"\n\nDon't ask about salary (yet).\n\nAsk THIS instead:\n\n\"What would success look like in this role in the first 90 days?\"\n\nWhy it works:\n→ Shows you're already thinking about contributing\n→ Gives you insight into expectations\n→ Demonstrates strategic thinking\n\nSave salary questions for later rounds.",
    likes: 3156,
    comments: 198,
    reposts: 567,
  },
  {
    id: 4,
    content: "85% of jobs are filled through networking.\n\nYet most people apply online and hope for the best.\n\nHere's a better approach:\n\n1️⃣ Identify 10 target companies\n2️⃣ Find employees on LinkedIn\n3️⃣ Send a genuine connection request\n4️⃣ Ask for a 15-min chat (not a job)\n5️⃣ Build relationship first\n\nReferrals get callbacks.\nCold applications get ignored.",
    likes: 5234,
    comments: 342,
    reposts: 1205,
  },
  {
    id: 5,
    content: "Red flags in job postings:\n\n🚩 \"We're a family here\"\n🚩 \"Must wear many hats\"\n🚩 \"Work hard, play hard\"\n🚩 \"Competitive salary\" (no range)\n🚩 Posted for 90+ days\n🚩 Unrealistic requirements\n\nThese often signal:\n→ Poor boundaries\n→ Understaffing\n→ Below-market pay\n→ High turnover\n\nTrust the red flags.",
    likes: 6789,
    comments: 521,
    reposts: 1456,
  },
];

export default function FeedPage() {
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
              LinkedIn Feed
            </h1>
            <p className="text-xl text-text-secondary mb-6">
              A preview of the career advice we share daily with our 187,000+ followers. Follow us for fresh tips in your feed.
            </p>
            <Link
              href="https://www.linkedin.com/company/how-to-find-a-job"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Follow on LinkedIn
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feed */}
      <section className="py-16 bg-bg-primary">
        <div className="container-narrow">
          <div className="space-y-6">
            {samplePosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                {/* Post Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">How To Find A Job</h3>
                    <p className="text-sm text-text-muted">187,249 followers</p>
                  </div>
                </div>

                {/* Post Content */}
                <div className="mb-4">
                  <p className="text-text-primary whitespace-pre-line leading-relaxed">
                    {post.content}
                  </p>
                </div>

                {/* Post Stats */}
                <div className="flex items-center gap-6 pt-4 border-t border-neutral-100 text-sm text-text-muted">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    {post.likes.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {post.comments.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    {post.reposts.toLocaleString()}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-text-secondary mb-4">
              Want more? Follow us for daily career tips in your LinkedIn feed.
            </p>
            <Link
              href="https://www.linkedin.com/company/how-to-find-a-job"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Follow on LinkedIn
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Topics We Cover */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="section-title text-center mb-12">Topics We Cover Daily</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['#JobSearch', '#Interview', '#Resume', '#CareerAdvice', '#SalaryNegotiation', '#LinkedInTips', '#Hiring', '#Networking', '#CareerGrowth', '#JobHunting'].map((tag) => (
              <span key={tag} className="tag text-base py-2 px-4">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
