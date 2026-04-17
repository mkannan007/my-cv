import Seo from '@/components/Seo';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { businessDomains, coreSkills } from '@/data/cv';

export default function HomePage() {
  return (
    <>
      <Seo
        title="Kannan Muthu Manickam — AI Software Engineer"
        description="AI Software Engineer · Full Stack Developer & Tester with 12+ years of IT experience. React, Next.js, TypeScript, Playwright, CI/CD."
        path="/"
      />
      <Hero />

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-slate-900">Core skills at a glance</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {coreSkills.map((g) => (
              <li key={g.label}>
                <span className="font-semibold text-slate-900">{g.label}:</span>{' '}
                {g.items.join(', ')}
              </li>
            ))}
          </ul>
          <Link href="/skills" className="mt-5 inline-block text-brand-600 font-medium hover:underline">
            Browse all skills →
          </Link>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-slate-900">Business domains</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {businessDomains.map((d) => (
              <li
                key={d}
                className="px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-medium border border-brand-100"
              >
                {d}
              </li>
            ))}
          </ul>
          <Link
            href="/projects"
            className="mt-5 inline-block text-brand-600 font-medium hover:underline"
          >
            See client work →
          </Link>
        </div>
      </section>
    </>
  );
}
