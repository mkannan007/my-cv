import Link from 'next/link';
import { useRouter } from 'next/router';
import { headerBlock } from '@/data/cv';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/test-automation', label: 'Test Automation' },
  { href: '/contact', label: 'Contact' },
  { href: '/resume', label: 'Resume' },
];

export default function Header() {
  const { pathname } = useRouter();
  return (
    <header className="sticky top-0 z-30 glass">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <p
          data-testid="header-block"
          className="text-[11px] sm:text-xs text-slate-600 truncate"
          aria-label="Contact summary"
        >
          {headerBlock}
        </p>
        <nav className="mt-2 flex flex-wrap gap-1" aria-label="Primary">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition ${
                  active
                    ? 'bg-brand-500 text-white border-brand-500 shadow-soft'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-brand-50 hover:border-brand-100'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
