import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const GA_MEASUREMENT_ID = 'G-BDWHVVC0B6';

export const metadata: Metadata = {
  metadataBase: new URL('https://howtofindajob.org'),
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
    url: 'https://howtofindajob.org',
    siteName: 'How To Find A Job',
    title: 'How To Find A Job - Land Your Next Role, Faster',
    description: 'Expert career advice on job searching, resume writing, interview preparation, and salary negotiation.',
    images: [
      {
        url: '/logo.jpeg',
        width: 400,
        height: 400,
        alt: 'How To Find A Job',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How To Find A Job - Land Your Next Role, Faster',
    description: 'Expert career advice on job searching, resume writing, interview preparation, and salary negotiation.',
    images: ['/logo.jpeg'],
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
        <meta name="google-site-verification" content="ZoKgxvLO5xbVxMrgdqsnSKUGijtSmDc7SqCmUzqp7Fo" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
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
    url: 'https://howtofindajob.org',
    logo: 'https://howtofindajob.org/logo.jpeg',
    description: 'How To Find A Job helps you land the right job, faster. We share practical tips on job searching, interview prep, resume writing, and career growth.',
    sameAs: [
      'https://www.linkedin.com/company/how-to-find-a-job',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'https://howtofindajob.org/contact',
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
