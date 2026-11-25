
export type NavLink = { label: string; href: string };

/** All plumbing destinations point to redesigned local routes. */
export const plumbingNav: NavLink[] = [
  { label: 'Emergency Plumbing', href: '/emergency-plumbing/' },
  { label: 'Drain Cleaning', href: '/drain-cleaning/' },
  { label: 'Hydro Jetting', href: '/hydro-jetting/' },
  { label: 'Sewer Repair', href: '/sewer-repair/' },
  { label: 'Water Heater Repair & Installation', href: '/water-heater-service/' },
  { label: 'Leak Detection', href: '/leak-detection/' },
  { label: 'Pipe Repair', href: '/pipe-repair/' },
  { label: 'Repiping', href: '/repiping/' },
  { label: 'Water Line Repair', href: '/water-line-repair/' },
  { label: 'Gas Line Services', href: '/gas-line-plumbing/' },
  { label: 'Sump Pump Services', href: '/sump-pump/' },
  { label: 'French Drain Services', href: '/french-drains/' },
  { label: 'Toilet Repair & Installation', href: '/toilet-repair/' },
  { label: 'Faucet & Fixture Repair', href: '/faucet-repair/' },
  { label: 'Garbage Disposal Services', href: '/garbage-disposal/' },
  { label: 'Frozen Pipe Repair', href: '/frozen-pipe-repair/' },
  { label: 'Plumbing Remodeling', href: '/plumbing-remodeling/' },
  { label: 'Commercial Plumbing', href: '/commercial-plumbing/' },
];
export const plumbingAll: NavLink = { label: 'View all plumbing services', href: '/plumbing-services/' };

export const electricalNav: NavLink[] = [
  { label: 'Emergency Electrician', href: '/emergency-electrician/' },
  { label: 'Electrical Repair', href: '/electrical-repair/' },
  { label: 'Electrical Panel Upgrades', href: '/electrical-panel-upgrades/' },
  { label: 'EV Charger Installation', href: '/ev-charger-installation/' },
  { label: 'Generator Installation', href: '/generator-installation/' },
  { label: 'Lighting Installation', href: '/lighting-installation/' },
  { label: 'Whole-Home Rewiring', href: '/whole-home-rewiring/' },
  { label: 'Safety Inspections', href: '/electrical-safety-inspections/' },
];
export const electricalAll: NavLink = { label: 'View all electrical services', href: '/electrical-services/' };

export type NavGroup = { heading?: string; links: NavLink[] };
const pick = (list: NavLink[], labels: string[]): NavLink[] => labels.map((label) => {
  const hit = list.find((l) => l.label === label);
  if (!hit) throw new Error(`nav: "${label}" not found`);
  return hit;
});
export const plumbingGroups: NavGroup[] = [
  { heading: 'Emergency & Repairs', links: pick(plumbingNav, ['Emergency Plumbing', 'Leak Detection', 'Pipe Repair', 'Frozen Pipe Repair']) },
  { heading: 'Drains & Sewer', links: pick(plumbingNav, ['Drain Cleaning', 'Hydro Jetting', 'Sewer Repair', 'Sump Pump Services', 'French Drain Services']) },
  { heading: 'Water Systems', links: pick(plumbingNav, ['Water Heater Repair & Installation', 'Repiping', 'Water Line Repair']) },
  { heading: 'Installations', links: pick(plumbingNav, ['Gas Line Services', 'Toilet Repair & Installation', 'Faucet & Fixture Repair', 'Garbage Disposal Services', 'Plumbing Remodeling', 'Commercial Plumbing']) },
];
export const electricalGroups: NavGroup[] = [
  { heading: 'Electrical Repairs', links: pick(electricalNav, ['Emergency Electrician', 'Electrical Repair', 'Lighting Installation']) },
  { heading: 'Panels & Safety', links: pick(electricalNav, ['Electrical Panel Upgrades', 'Safety Inspections', 'Whole-Home Rewiring']) },
  { heading: 'Installations', links: pick(electricalNav, ['EV Charger Installation', 'Generator Installation']) },
];
export const topLinks = { home: { label: 'Home', href: '/' }, about: { label: 'About', href: '/#about' }, serviceAreas: { label: 'Service Areas', href: '#service-areas' } };
export const aboutLinks: NavLink[] = [
  { label: 'About Us', href: '/#about' }, { label: 'Reviews', href: '/#reviews' }, { label: 'Projects', href: '/#projects' },
  { label: 'Plumbing Financing', href: '/plumbing-financing/' }, { label: 'Contact Us', href: '/#quote' }, { label: 'Blog', href: '/blog/' },
];
