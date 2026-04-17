import Seo from '@/components/Seo';
import { person } from '@/data/cv';

export default function ContactPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <>
      <Seo
        title="Contact — Kannan Muthu Manickam"
        description="Get in touch with Kannan Muthu Manickam."
        path="/contact"
      />
      <h1 className="text-3xl font-bold text-slate-900">Contact</h1>
      <p className="mt-2 text-slate-600">Based in Birmingham, UK — open to frontend, backend and full stack development roles & automation test roles.</p>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="card p-6">
          <h2 className="text-xl font-semibold text-slate-900">Direct</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="font-semibold text-slate-900">Email</dt>
              <dd>
                <a className="text-brand-600 hover:underline" href={`mailto:${person.email}`}>
                  {person.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Phone</dt>
              <dd className="text-slate-700">{person.phone}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Location</dt>
              <dd className="text-slate-700">{person.location}</dd>
            </div>
          </dl>
          <a
            href={`${basePath}/kannan_cv.pdf`}
            className="mt-6 inline-block px-5 py-2.5 rounded-full bg-brand-500 text-white font-medium hover:bg-brand-600"
            download
          >
            Download resume (PDF)
          </a>
        </article>

        <article className="card p-6">
          <h2 className="text-xl font-semibold text-slate-900">Online</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a className="text-brand-600 hover:underline" href={person.website}>
                {person.website}
              </a>
            </li>
            <li>
              <a className="text-brand-600 hover:underline" href={person.linkedin}>
                {person.linkedin}
              </a>
            </li>
            <li>
              <a className="text-brand-600 hover:underline" href={person.github}>
                {person.github}
              </a>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
