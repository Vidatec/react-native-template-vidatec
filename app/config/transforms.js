/**
 * app/config/transforms
 * ---
 * Place functions that transform an input here (eg, adding to a url, creating a slug)
 */

export function slugify (text: string): string {
  return text.toLowerCase().replace(' ', '-');
}
