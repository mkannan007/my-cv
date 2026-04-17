import Image from 'next/image';

interface IconProps {
  file: string;
  alt: string;
  size?: number;
  className?: string;
}

export default function Icon({ file, alt, size = 28, className }: IconProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <Image
      src={`${basePath}/assets/tech/${file}`}
      alt={alt}
      width={size}
      height={size}
      className={className}
    />
  );
}
