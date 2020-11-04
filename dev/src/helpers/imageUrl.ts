import defaultImage from 'assets/images/default-image.png';
import { CDN_ENDPOINT } from 'settings';

export default function imageUrl(image: string | { base64: string }): string {
  if (!image) return defaultImage;
  if (typeof image === 'string') return `${CDN_ENDPOINT}/${image}`;
  return image.base64;
}
