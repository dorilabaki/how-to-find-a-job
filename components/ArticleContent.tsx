'use client';

import { motion } from 'framer-motion';

interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  // Simple markdown-like parsing
  const parseContent = (text: string) => {
    const lines = text.trim().split('\n');
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];
    let listType: 'ul' | 'ol' | null = null;
    let blockquoteLines: string[] = [];
    let inBlockquote = false;

    const flushList = () => {
      if (listItems.length > 0 && listType) {
        const ListTag = listType;
        elements.push(
          <ListTag key={elements.length} className={listType === 'ul' ? 'list-disc' : 'list-decimal'}>
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
            ))}
          </ListTag>
        );
        listItems = [];
        listType = null;
      }
    };

    const flushBlockquote = () => {
      if (blockquoteLines.length > 0) {
        elements.push(
          <blockquote key={elements.length}>
            {blockquoteLines.map((line, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: parseInline(line) }} />
            ))}
          </blockquote>
        );
        blockquoteLines = [];
        inBlockquote = false;
      }
    };

    const parseInline = (text: string): string => {
      return text
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/`(.+?)`/g, '<code class="bg-neutral-100 px-1.5 py-0.5 rounded text-sm">$1</code>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary-500 underline">$1</a>');
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Empty line
      if (trimmedLine === '') {
        flushList();
        flushBlockquote();
        return;
      }

      // Blockquote
      if (trimmedLine.startsWith('>')) {
        flushList();
        inBlockquote = true;
        blockquoteLines.push(trimmedLine.substring(1).trim());
        return;
      } else if (inBlockquote) {
        flushBlockquote();
      }

      // Headers
      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={elements.length}>{trimmedLine.substring(3)}</h2>
        );
        return;
      }

      if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={elements.length}>{trimmedLine.substring(4)}</h3>
        );
        return;
      }

      // Horizontal rule
      if (trimmedLine === '---') {
        flushList();
        elements.push(<hr key={elements.length} className="my-8 border-neutral-200" />);
        return;
      }

      // Unordered list
      if (trimmedLine.startsWith('- ')) {
        if (listType !== 'ul') {
          flushList();
          listType = 'ul';
        }
        listItems.push(trimmedLine.substring(2));
        return;
      }

      // Ordered list
      const orderedMatch = trimmedLine.match(/^\d+\.\s+(.+)/);
      if (orderedMatch) {
        if (listType !== 'ol') {
          flushList();
          listType = 'ol';
        }
        listItems.push(orderedMatch[1]);
        return;
      }

      // Regular paragraph
      flushList();
      elements.push(
        <p key={elements.length} dangerouslySetInnerHTML={{ __html: parseInline(trimmedLine) }} />
      );
    });

    flushList();
    flushBlockquote();

    return elements;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="prose"
    >
      {parseContent(content)}
    </motion.div>
  );
}
