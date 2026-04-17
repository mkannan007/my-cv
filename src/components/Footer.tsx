import { person } from '@/data/cv';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {person.name}</p>
        <ul className="flex flex-wrap gap-4">
          <li>
            <a className="hover:text-brand-600" href={person.website} target="_blank" rel="noreferrer">
              {person.website}
            </a>
          </li>
          <li>
            <a className="hover:text-brand-600" href={person.linkedin} target="_blank" rel="noreferrer">
              {person.linkedin}
            </a>
          </li>
          <li>
            <a className="hover:text-brand-600" href={person.github} target="_blank" rel="noreferrer">
              {person.github}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
