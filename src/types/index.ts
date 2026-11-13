export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface Category {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
}

export interface Step {
  id: string;
  step: string;
  title: string;
  description: string;
  tone: "brand" | "coral" | "sun";
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface FeaturedCourse {
  eyebrow: string;
  title: string;
  description: string;
  instructor: string;
  tags: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
}

export interface Avatar {
  src: string;
  alt: string;
}

export interface CollageImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ContactInfo {
  id: string;
  label: string;
  value: string;
  href?: string;
  icon: "mail" | "clock";
}
