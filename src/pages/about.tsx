import Seo from '@/components/Seo';
import { aboutSentence, certifications, education, person } from '@/data/cv';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About — Kannan Muthu Manickam"
        description="About Kannan Muthu Manickam, AI Software Engineer based in Birmingham, UK."
        path="/about"
      />
      <section className="card p-8">
        <h1 className="text-3xl font-bold text-slate-900">About me</h1>
        <p className="mt-4 text-slate-700 leading-relaxed text-lg">{aboutSentence}</p>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2 text-sm">
          <div>
            <dt className="font-semibold text-slate-900">Location</dt>
            <dd className="text-slate-700">{person.location}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Phone</dt>
            <dd className="text-slate-700">{person.phone}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Email</dt>
            <dd className="text-slate-700">
              <a className="hover:text-brand-600" href={`mailto:${person.email}`}>
                {person.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Website</dt>
            <dd className="text-slate-700">
              <a className="hover:text-brand-600" href={person.website}>
                {person.website}
              </a>
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-slate-900">Education</h2>
          <ul className="mt-3 space-y-2 text-slate-700">
            {education.map((e) => (
              <li key={e.degree}>
                <span className="font-medium text-slate-900">{e.degree}</span> — {e.institution}
              </li>
            ))}
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-slate-900">Certification</h2>
          <ul className="mt-3 space-y-2 text-slate-700">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
