'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LeadMagnetBanner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-accent-500 to-accent-600 py-8"
    >
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-white">
            <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-white text-lg leading-tight">
                Free Job Search Accelerator Toolkit
              </p>
              <p className="text-accent-100 text-sm mt-0.5">
                Resume template · STAR framework · Negotiation scripts · LinkedIn checklist
              </p>
            </div>
          </div>
          <Link
            href="/accelerator"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-accent-600 font-semibold px-6 py-3 rounded-lg hover:bg-accent-50 transition-colors shadow-md whitespace-nowrap"
          >
            Get It Free
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
