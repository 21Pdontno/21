export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  color: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Acme Corp',
    category: 'E-commerce',
    image: 'https://picsum.photos/seed/acme/800/1422',
    color: '#E0E0E0',
    description: 'A modern e-commerce platform built for scale and performance.',
  },
  {
    id: '2',
    title: 'Globex',
    category: 'Corporate',
    image: 'https://picsum.photos/seed/globex/800/1422',
    color: '#D5D5D5',
    description: 'Global corporate identity and digital presence overhaul.',
  },
  {
    id: '3',
    title: 'Soylent',
    category: 'Branding',
    image: 'https://picsum.photos/seed/soylent/800/1422',
    color: '#C0C0C0',
    description: 'Complete brand refresh and packaging design system.',
  },
  {
    id: '4',
    title: 'Initech',
    category: 'SaaS',
    image: 'https://picsum.photos/seed/initech/800/1422',
    color: '#B0B0B0',
    description: 'Next-generation software as a service platform design.',
  },
  {
    id: '5',
    title: 'Umbrella',
    category: 'Corporate',
    image: 'https://picsum.photos/seed/umbrella/800/1422',
    color: '#A0A0A0',
    description: 'Secure and reliable corporate infrastructure visualization.',
  },
  {
    id: '6',
    title: 'Massive Dynamic',
    category: 'Tech',
    image: 'https://picsum.photos/seed/massive/800/1422',
    color: '#909090',
    description: 'Advanced technology showcase and interactive experiences.',
  },
  {
    id: '7',
    title: 'Stark Ind.',
    category: 'Innovation',
    image: 'https://picsum.photos/seed/stark/800/1422',
    color: '#808080',
    description: 'Cutting-edge innovation and product design portfolio.',
  },
  {
    id: '8',
    title: 'Wayne Ent.',
    category: 'Corporate',
    image: 'https://picsum.photos/seed/wayne/800/1422',
    color: '#707070',
    description: 'Philanthropic and corporate initiatives digital platform.',
  },
];

export const categories = ['All', 'E-commerce', 'Corporate', 'Branding', 'SaaS', 'Tech', 'Innovation'];
