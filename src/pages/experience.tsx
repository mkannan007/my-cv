import Seo from '@/components/Seo';
import Timeline from '@/components/Timeline';
import { responsibilities, roles } from '@/data/cv';

export default function ExperiencePage() {
  return (
    <>
      <Seo
        title="Experience — Kannan Muthu Manickam"
        description="12+ years of software engineering and test automation experience across telecom, e-commerce, banking, logistics and insurance."
        path="/experience"
      />
      <h1 className="text-3xl font-bold text-slate-900">Work experience</h1>
      <p className="mt-2 text-slate-600 max-w-2xl">
        12+ years across AI-driven full stack development, test automation and CI/CD.
      </p>

      <section className="mt-8">
        <Timeline roles={roles} />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">
          Key responsibilities, contributions and knowledge
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {responsibilities.map((r) => (
            <div key={r.area} className="card p-5">
              <h3 className="font-semibold text-brand-700">{r.area}</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                {r.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
