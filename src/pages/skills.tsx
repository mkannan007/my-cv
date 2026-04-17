import Seo from '@/components/Seo';
import SkillGrid from '@/components/SkillGrid';
import { aiTools, businessDomains, coreSkills, documentTools } from '@/data/cv';

export default function SkillsPage() {
  return (
    <>
      <Seo
        title="Skills — Kannan Muthu Manickam"
        description="Core technical skills, AI tools, document tools and business domains."
        path="/skills"
      />
      <h1 className="text-3xl font-bold text-slate-900">Skills</h1>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-slate-900">Core technical skills</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {coreSkills.map((g) => (
            <div key={g.label} className="card p-5">
              <h3 className="font-semibold text-brand-700">{g.label}</h3>
              <p className="mt-1 text-slate-700 text-sm">{g.items.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">Tech stack</h2>
        <div className="mt-4">
          <SkillGrid />
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="card p-5">
          <h2 className="font-semibold text-slate-900">AI tools</h2>
          <ul className="mt-2 text-sm text-slate-700 space-y-1">
            {aiTools.map((t) => (
              <li key={t}>• {t}</li>
            ))}
          </ul>
        </div>
        <div className="card p-5">
          <h2 className="font-semibold text-slate-900">Document tools</h2>
          <ul className="mt-2 text-sm text-slate-700 space-y-1">
            {documentTools.map((t) => (
              <li key={t}>• {t}</li>
            ))}
          </ul>
        </div>
        <div className="card p-5">
          <h2 className="font-semibold text-slate-900">Business domains</h2>
          <ul className="mt-2 text-sm text-slate-700 space-y-1">
            {businessDomains.map((t) => (
              <li key={t}>• {t}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
