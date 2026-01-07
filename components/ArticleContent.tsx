'use client';

import { motion } from 'framer-motion';
import { marked } from 'marked';

interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  const htmlContent = marked(content);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-text-primary prose-h2:text-[1.75rem] prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-[1.375rem] prose-h3:mt-10 prose-h3:mb-4 prose-h4:text-lg prose-h4:mt-8 prose-h4:mb-3 prose-p:text-text-secondary prose-p:leading-[1.8] prose-p:mb-6 prose-a:text-primary-500 prose-a:underline prose-a:underline-offset-2 prose-strong:text-text-primary prose-strong:font-semibold prose-li:text-text-secondary prose-li:mb-3 prose-li:leading-[1.75] prose-ul:my-8 prose-ul:pl-6 prose-ul:list-disc prose-ol:my-8 prose-ol:pl-6 prose-ol:list-decimal prose-hr:my-12 prose-hr:border-neutral-200 prose-blockquote:my-8 prose-blockquote:border-primary-500 prose-blockquote:bg-primary-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-code:bg-neutral-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:bg-neutral-900 prose-pre:text-white prose-pre:rounded-xl prose-pre:p-6 prose-pre:my-8"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
