import Link from 'next/link';

const footerLinks = {
  resources: [
    { name: 'All Articles', href: '/resources' },
    { name: 'Resume Tips', href: '/resources/resume-beats-ats' },
    { name: 'Interview Prep', href: '/resources/interview-questions' },
    { name: 'Salary Negotiation', href: '/resources/salary-negotiation-script' },
  ],
  guides: [
    { name: 'Job Search Playbook', href: '/guides/job-search-playbook' },
    { name: 'Interview Guide', href: '/guides/interview-preparation' },
    { name: 'Glossary', href: '/glossary' },
    { name: 'FAQ', href: '/faq' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'LinkedIn Feed', href: '/feed' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary-500 to-primary-600 text-white">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
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
              <span className="font-display text-xl text-white">How To Find A Job</span>
            </Link>
            <p className="text-primary-100 mb-6 leading-relaxed">
              Helping 187,000+ professionals land their dream jobs with practical, actionable career advice.
            </p>
            <Link
              href="https://www.linkedin.com/company/how-to-find-a-job"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-300 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Follow on LinkedIn
            </Link>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display text-lg mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="font-display text-lg mb-4 text-white">Guides</h3>
            <ul className="space-y-3">
              {footerLinks.guides.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-400/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-200 text-sm">
            &copy; {new Date().getFullYear()} How To Find A Job. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <span className="text-primary-200">
              #JobSearch #Interview #Resume #CareerAdvice
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
