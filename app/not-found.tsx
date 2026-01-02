import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="container-narrow text-center">
        <h1 className="font-display text-6xl md:text-8xl text-primary-500 mb-4">404</h1>
        <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-text-secondary text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/resources" className="btn-secondary">
            Browse Resources
          </Link>
        </div>
      </div>
    </div>
  );
}
