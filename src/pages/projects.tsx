import Seo from '@/components/Seo';
import { businessDomains, clientsAndServices } from '@/data/cv';

export default function ProjectsPage() {
  return (
    <>
      <Seo
        title="Projects & Clients — Kannan Muthu Manickam"
        description="Notable clients and projects across telecom, e-commerce, banking, logistics and insurance."
        path="/projects"
      />
      <h1 className="text-3xl font-bold text-slate-900">Clients & services</h1>
      <p className="mt-2 text-slate-600 max-w-2xl">
        Selected engagements delivered across the UK, France and India.
      </p>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        {clientsAndServices.map((p) => (
          <article key={p.client} className="card p-6 hover:-translate-y-0.5 transition">
            <header className="flex items-baseline justify-between gap-2">
              <h2 className="text-lg font-semibold text-slate-900">{p.client}</h2>
              {p.via && <span className="text-xs text-slate-500">{p.via}</span>}
            </header>
            <p className="text-sm text-brand-600 font-medium">{p.location}</p>
            <p className="mt-3 text-slate-700">{p.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 card p-6">
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
      </section>
    </>
  );
}
