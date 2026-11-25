import raw from '@/data/images.json';

export type ImageKey = keyof typeof raw;
type Img = { remote: string; local: string; alt: string; localOnly?: boolean };

const useLocal = process.env.NEXT_PUBLIC_LOCAL_IMAGES === '1';

/** Returns the image source (remote original by default, or self-hosted /public/images) and alt text. */
export function getImage(key: ImageKey): { src: string; alt: string; isIllustrative: boolean } {
  const i = (raw as Record<string, Img>)[key];
  return { src: useLocal || i.localOnly ? `/images/${i.local}` : i.remote, alt: i.alt, isIllustrative: Boolean(i.localOnly) };
}
