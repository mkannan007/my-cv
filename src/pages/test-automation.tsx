import Seo from '@/components/Seo';
import SkillGrid from '@/components/SkillGrid';
import { responsibilities } from '@/data/cv';

export default function TestAutomationPage() {
  const ta = responsibilities.find((r) => r.area === 'Test Automation');
  const dm = responsibilities.find((r) => r.area === 'Defect Management');
  const ci = responsibilities.find((r) => r.area === 'CI/CD & Monitoring');

  return (
    <>
      <Seo
        title="Test Automation — Kannan Muthu Manickam"
        description="E2E test automation with Playwright, WebDriverIO, Cypress and TypeScript across UI, API and mobile."
        path="/test-automation"
      />
      <h1 className="text-3xl font-bold text-slate-900">Test Automation</h1>
      <p className="mt-2 text-slate-600 max-w-3xl">
        Full-stack automation frameworks covering UI, API and mobile — authored in TypeScript,
        executed in CI with Jenkins, GitHub Actions, GitLab CI and Azure DevOps.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Automation stack</h2>
        <div className="mt-4">
          <SkillGrid category="automation" />
        </div>
      </section>

      {ta && (
        <section className="mt-10 card p-6">
          <h2 className="text-xl font-semibold text-slate-900">Automation practices</h2>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
            {ta.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        {ci && (
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900">{ci.area}</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
              {ci.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        )}
        {dm && (
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900">{dm.area}</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
              {dm.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}
