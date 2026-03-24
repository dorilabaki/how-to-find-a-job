import type { Metadata } from 'next';
import AcceleratorPageContent from './AcceleratorPageContent';

export const metadata: Metadata = {
  title: 'Free Job Search Accelerator Toolkit',
  description:
    'Get instant access to the ATS-optimized resume template, STAR method interview framework, salary negotiation scripts, and LinkedIn checklist trusted by 187,000+ job seekers.',
  openGraph: {
    title: 'Free Job Search Accelerator Toolkit | How To Find A Job',
    description:
      'Resume template + STAR framework + salary negotiation scripts + LinkedIn checklist. Instant access, completely free.',
    url: 'https://howtofindajob.org/accelerator',
    type: 'website',
    siteName: 'How To Find A Job',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Job Search Accelerator Toolkit | How To Find A Job',
    description:
      'Resume template + STAR framework + salary negotiation scripts + LinkedIn checklist. Instant access, completely free.',
  },
  alternates: {
    canonical: 'https://howtofindajob.org/accelerator',
  },
};

export default function AcceleratorPage() {
  return <AcceleratorPageContent />;
}
