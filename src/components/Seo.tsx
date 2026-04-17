import Head from 'next/head';
import { person } from '@/data/cv';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

const SITE_URL = 'https://mkannan007.dev';

export default function Seo({ title, description, path = '/' }: SeoProps) {
  const url = `${SITE_URL}${path}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.title,
    url: person.website,
    email: `mailto:${person.email}`,
    telephone: person.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Birmingham',
      addressRegion: 'England',
      addressCountry: 'UK',
    },
    sameAs: [person.linkedin, person.github],
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
