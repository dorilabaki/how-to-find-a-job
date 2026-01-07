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
      className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-text-primary prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-text-secondary prose-p:mb-4 prose-a:text-primary-500 prose-strong:text-text-primary prose-li:text-text-secondary prose-ul:my-4 prose-ol:my-4 prose-hr:my-8 prose-hr:border-neutral-200 prose-blockquote:border-primary-500 prose-blockquote:bg-primary-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-code:bg-neutral-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
