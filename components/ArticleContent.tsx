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
      className="prose"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
