import Icon from './Icon';
import { techIcons, type TechIcon } from '@/data/skills';

interface SkillGridProps {
  category?: TechIcon['category'];
  names?: string[];
}

export default function SkillGrid({ category, names }: SkillGridProps) {
  const items = techIcons.filter((t) => {
    if (names) return names.includes(t.name);
    if (category) return t.category === category;
    return true;
  });

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {items.map((t) => (
        <li
          key={t.name}
          className="card p-4 flex items-center gap-3 hover:-translate-y-0.5 transition"
        >
          <Icon file={t.file} alt={`${t.name} logo`} size={32} />
          <span className="text-sm font-medium text-slate-800">{t.name}</span>
        </li>
      ))}
    </ul>
  );
}
