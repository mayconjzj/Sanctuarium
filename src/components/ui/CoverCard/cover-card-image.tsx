import Image from 'next/image';

import { cn } from '@/lib/tailwind-merge';

export type CoverCardImageProps = React.AllHTMLAttributes<HTMLImageElement> & {
  name: string;
  src: string;
};

export const CoverCardImage = ({ name, src }: CoverCardImageProps) => {
  return (
    <Image
      src={src}
      alt={name}
      fill
      priority
      aria-label={`Foto de perfil do colaborador ${name}`}
      className={cn('object-cover object-center inset-0 -z-10')}
    />
  );
};
