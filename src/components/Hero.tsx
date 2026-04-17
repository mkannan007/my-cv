import Link from 'next/link';
import { aboutSentence, person } from '@/data/cv';

export default function Hero() {
  return (
    <section className="gradient-hero rounded-3xl p-8 sm:p-12 shadow-soft border border-white">
      <p className="uppercase tracking-widest text-xs text-brand-700 font-semibold">
        {person.tagline}
      </p>
      <h1 className="mt-2 text-3xl sm:text-5xl font-bold text-slate-900">
        {person.name}
      </h1>
      <p className="mt-1 text-lg sm:text-xl text-brand-600 font-semibold">{person.title}</p>
      <p className="mt-6 max-w-3xl text-slate-700 leading-relaxed">{aboutSentence}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/experience"
          className="px-5 py-2.5 rounded-full bg-brand-500 text-white font-medium shadow-soft hover:bg-brand-600"
        >
          View experience
        </Link>
        <Link
          href="/projects"
          className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-800 font-medium hover:bg-brand-50"
        >
          Projects & clients
        </Link>
        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-800 font-medium hover:bg-brand-50"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
