import Seo from '@/components/Seo';
import {
  aboutSentence,
  aiTools,
  businessDomains,
  certifications,
  clientsAndServices,
  coreSkills,
  documentTools,
  education,
  person,
  responsibilities,
  roles,
} from '@/data/cv';

export default function ResumePage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <>
      <Seo
        title="Resume — Kannan Muthu Manickam"
        description="Printable HTML resume for Kannan Muthu Manickam, AI Software Engineer."
        path="/resume"
      />

      <div className="no-print mb-6 flex flex-wrap gap-3">
        <button
          onClick={() => typeof window !== 'undefined' && window.print()}
          className="px-5 py-2.5 rounded-full bg-brand-500 text-white font-medium hover:bg-brand-600"
        >
          Print / Save as PDF
        </button>
        <a
          href={`${basePath}/resume.pdf`}
          className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-800 font-medium hover:bg-brand-50"
          download
        >
          Download original PDF
        </a>
      </div>

      <article className="bg-white rounded-2xl shadow-soft border border-slate-100 p-8 leading-relaxed text-slate-800">
        <header className="border-b border-slate-200 pb-4">
          <h1 className="text-3xl font-bold text-slate-900">{person.name}</h1>
          <p className="text-brand-600 font-semibold">{person.title}</p>
          <p className="text-sm text-slate-600">{person.tagline}</p>
          <p className="mt-2 text-sm">
            {person.location} · {person.phone} ·{' '}
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </p>
          <p className="text-sm">
            <a href={person.website}>{person.website}</a> ·{' '}
            <a href={person.linkedin}>{person.linkedin}</a> ·{' '}
            <a href={person.github}>{person.github}</a>
          </p>
        </header>

        <section className="mt-6">
          <h2 className="text-lg font-semibold text-slate-900">About me</h2>
          <p className="mt-2">{aboutSentence}</p>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Core technical skills</h2>
            <ul className="mt-2 text-sm space-y-1">
              {coreSkills.map((g) => (
                <li key={g.label}>
                  <strong>{g.label}:</strong> {g.items.join(', ')}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">AI tools</h2>
              <p className="text-sm">{aiTools.join(', ')}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Document tools</h2>
              <p className="text-sm">{documentTools.join(', ')}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Business domains</h2>
              <p className="text-sm">{businessDomains.join(', ')}</p>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Education</h2>
            <ul className="mt-2 text-sm space-y-1">
              {education.map((e) => (
                <li key={e.degree}>
                  <strong>{e.degree}</strong> — {e.institution}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Certification</h2>
            <ul className="mt-2 text-sm space-y-1">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold text-slate-900">Work experience</h2>
          <ul className="mt-2 space-y-3">
            {roles.map((r) => (
              <li key={r.company + r.start}>
                <div className="flex justify-between text-sm">
                  <strong>{r.company}</strong>
                  <span>{r.start} – {r.end}</span>
                </div>
                <div className="text-sm text-brand-600">{r.title}</div>
                <div className="text-xs text-slate-600">{r.location} · {r.type}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold text-slate-900">Clients and services</h2>
          <ul className="mt-2 text-sm space-y-2">
            {clientsAndServices.map((p) => (
              <li key={p.client}>
                <strong>{p.client}</strong> — {p.location}
                {p.via ? ` (${p.via})` : ''}: {p.description}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Key responsibilities, contributions and knowledge
          </h2>
          <div className="mt-2 grid gap-4 md:grid-cols-2 text-sm">
            {responsibilities.map((r) => (
              <div key={r.area}>
                <h3 className="font-semibold">{r.area}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {r.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
