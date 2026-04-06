export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  color: string;
  description: string;
}

export const projects: Project[] = [
  { id: '1', title: 'Project Alpha', category: '品牌策划', image: 'https://picsum.photos/seed/p1/800/1422', color: '#E0E0E0', description: 'Brand strategy and identity design.' },
  { id: '2', title: 'Project Beta', category: '品牌策划', image: 'https://picsum.photos/seed/p2/800/1422', color: '#D5D5D5', description: 'Social media campaign and content creation.' },
  { id: '3', title: 'Project Gamma', category: '品牌策划', image: 'https://picsum.photos/seed/p3/800/1422', color: '#C0C0C0', description: 'AI-generated content and visual exploration.' },
  { id: '4', title: 'Project Delta', category: '品牌策划', image: 'https://picsum.photos/seed/p4/800/1422', color: '#B0B0B0', description: 'Miscellaneous creative experiments.' },
  { id: '5', title: 'Project Epsilon', category: '品牌策划', image: 'https://picsum.photos/seed/p5/800/1422', color: '#A0A0A0', description: 'Corporate rebranding and positioning.' },
  { id: '6', title: 'Project Zeta', category: '品牌策划', image: 'https://picsum.photos/seed/p6/800/1422', color: '#909090', description: 'Viral marketing and influencer strategy.' },
  { id: '7', title: 'Project Eta', category: '电商策划', image: 'https://picsum.photos/seed/p7/800/1422', color: '#808080', description: 'E-commerce strategy and campaign execution.' },
  { id: '8', title: 'Project Theta', category: '电商策划', image: 'https://picsum.photos/seed/p8/800/1422', color: '#707070', description: 'Online store optimization and user journey mapping.' },
  { id: '9', title: 'Project Iota', category: '电商策划', image: 'https://picsum.photos/seed/p9/800/1422', color: '#E0E0E0', description: 'E-commerce platform development and performance marketing.' },
  { id: '10', title: 'Project Kappa', category: '电商策划', image: 'https://picsum.photos/seed/p10/800/1422', color: '#D5D5D5', description: 'Customer acquisition and retention strategies for online retail.' },
  { id: '11', title: 'Project Lambda', category: '电商策划', image: 'https://picsum.photos/seed/p11/800/1422', color: '#C0C0C0', description: 'E-commerce video content and product showcases.' },
  { id: '12', title: 'Project Mu', category: '电商策划', image: 'https://picsum.photos/seed/p12/800/1422', color: '#B0B0B0', description: 'Building online communities and driving customer loyalty for e-commerce brands.' },
  { id: '13', title: 'Project Nu', category: 'AIGC', image: 'https://picsum.photos/seed/p13/800/1422', color: '#A0A0A0', description: 'Brand guidelines and typography.' },
  { id: '14', title: 'Project Xi', category: 'AIGC', image: 'https://picsum.photos/seed/p14/800/1422', color: '#909090', description: 'Video production and motion graphics.' },
  { id: '15', title: 'Project Omicron', category: 'AIGC', image: 'https://picsum.photos/seed/p15/800/1422', color: '#808080', description: 'Automated video generation and editing.' },
  { id: '16', title: 'Project Pi', category: 'AIGC', image: 'https://picsum.photos/seed/p16/800/1422', color: '#707070', description: 'Sound design and audio engineering.' },
  { id: '17', title: 'Project Rho', category: 'AIGC', image: 'https://picsum.photos/seed/p17/800/1422', color: '#E0E0E0', description: 'Packaging design and product strategy.' },
  { id: '18', title: 'Project Sigma', category: 'AIGC', image: 'https://picsum.photos/seed/p18/800/1422', color: '#D5D5D5', description: 'Community management and engagement.' },
  { id: '19', title: 'Project Tau', category: 'Other', image: 'https://picsum.photos/seed/p19/800/1422', color: '#C0C0C0', description: 'Custom AI model training and deployment.' },
  { id: '20', title: 'Project Upsilon', category: 'Other', image: 'https://picsum.photos/seed/p20/800/1422', color: '#B0B0B0', description: 'Virtual reality and augmented reality.' },
];

export const categories = ['All', '品牌策划', '电商策划', 'AIGC', 'Other'];
