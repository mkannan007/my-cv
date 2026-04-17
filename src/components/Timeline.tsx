import type { Role } from '@/data/cv';

interface TimelineProps {
  roles: Role[];
}

export default function Timeline({ roles }: TimelineProps) {
  return (
    <ol className="relative border-l border-slate-200 ml-2">
      {roles.map((role) => (
        <li key={role.company + role.start} className="mb-8 ml-6">
          <span className="absolute -left-1.5 mt-2 h-3 w-3 rounded-full bg-brand-500 ring-4 ring-brand-100" />
          <article className="card p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-slate-900">{role.company}</h3>
              <span className="text-xs font-medium text-slate-500">
                {role.start} – {role.end}
              </span>
            </div>
            <p className="text-brand-600 font-medium">{role.title}</p>
            <p className="text-sm text-slate-600 mt-1">
              {role.location} · {role.type}
            </p>
            {role.bullets && role.bullets.length > 0 && (
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
                {role.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </article>
        </li>
      ))}
    </ol>
  );
}
