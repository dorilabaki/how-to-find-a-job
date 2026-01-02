import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://howtofindajob.com'),
  title: {
    default: 'How To Find A Job - Land Your Next Role, Faster',
    template: '%s | How To Find A Job',
  },
  description: 'Expert career advice on job searching, resume writing, interview preparation, and salary negotiation. Join 187,000+ professionals landing better jobs.',
  keywords: ['job search', 'resume writing', 'interview preparation', 'career advice', 'salary negotiation', 'LinkedIn optimization'],
  authors: [{ name: 'How To Find A Job' }],
  creator: 'How To Find A Job',
  publisher: 'How To Find A Job',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://howtofindajob.com',
    siteName: 'How To Find A Job',
    title: 'How To Find A Job - Land Your Next Role, Faster',
    description: 'Expert career advice on job searching, resume writing, interview preparation, and salary negotiation.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'How To Find A Job',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How To Find A Job - Land Your Next Role, Faster',
    description: 'Expert career advice on job searching, resume writing, interview preparation, and salary negotiation.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <OrganizationSchema />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'How To Find A Job',
    url: 'https://howtofindajob.com',
    logo: 'https://howtofindajob.com/logo.png',
    description: 'How To Find A Job helps you land the right job, faster. We share practical tips on job searching, interview prep, resume writing, and career growth.',
    sameAs: [
      'https://www.linkedin.com/company/how-to-find-a-job',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'https://howtofindajob.com/contact',
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '187249',
      unitText: 'followers',
    },
    knowsAbout: [
      'Job Search Tips',
      'Interview Preparation',
      'Resume Writing',
      'Career Advice',
      'Salary Negotiation',
      'LinkedIn Optimization',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
