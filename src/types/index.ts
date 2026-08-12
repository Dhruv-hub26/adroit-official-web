export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: {
    title: string;
    description: string;
    icon: string;
    href: string;
    badge?: string;
  }[];
}

export interface MetricStat {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  category: 'Enterprise' | 'EdTech' | 'Global Talent';
  rating: number;
  quote: string;
  metrics?: string;
}

export interface FeaturePillar {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  ctaText: string;
  mockupType: 'assessment' | 'interview' | 'ai-agents';
}

export interface DemoFormData {
  fullName: string;
  email: string;
  company: string;
  companySize: string;
  productInterest: string;
  message?: string;
}
