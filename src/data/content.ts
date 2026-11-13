import type {
  Avatar,
  Category,
  CollageImage,
  ContactInfo,
  FeaturedCourse,
  FooterColumn,
  NavLink,
  Stat,
  Step,
  Testimonial,
} from "@/types";

const img = (file: string) => `/images/${file}`;

export const navLinks: NavLink[] = [
  { label: "Courses", href: "#courses" },
  { label: "For Teams", href: "#featured" },
  { label: "Community", href: "#people" },
  { label: "About", href: "#contact" },
];

const avatarWoman: Avatar = {
  src: img("cd5b16f833b6628676c12fe58db162f13dc573fa.jpg"),
  alt: "Smiling woman with dark wavy hair",
};
const avatarSuit: Avatar = {
  src: img("9b418ee0de843643bd39bac16852bca2c545880b.jpg"),
  alt: "Smiling man in a dark suit with arms crossed",
};
const avatarSweater: Avatar = {
  src: img("e76edff7f8d1b928dbe76583829ffb008dce8881.jpg"),
  alt: "Man in a grey sweater",
};
const avatarBun: Avatar = {
  src: img("c9f8218176ba6026165949bf508bd875d98b84b2.jpg"),
  alt: "Smiling woman with her hair in a bun",
};

export const heroAvatars: Avatar[] = [avatarBun, avatarSweater, avatarSuit];

export const ctaAvatars: Avatar[] = [avatarBun, avatarSweater, avatarSuit, avatarWoman];

export const hero = {
  eyebrow: "Learn at your own pace",
  title: "Build skills that actually move you forward.",
  description:
    "Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.",
  image: img("dfd2b1e079b3cde57b7f8dd7324c6ca21839dbd5.jpg"),
  imageWidth: 900,
  imageHeight: 1100,
  imageAlt: "Smiling woman with glasses working on a laptop in front of a wall of colorful sticky notes",
  trustedBy: "Trusted by 24,000+ learners",
};

export const categories: Category[] = [
  {
    id: "product-design",
    number: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
    href: "#featured",
  },
  {
    id: "technology",
    number: "02",
    title: "Technology",
    description: "Build a stronger understanding of the tools shaping digital products.",
    href: "#featured",
  },
  {
    id: "business",
    number: "03",
    title: "Business",
    description: "Develop practical skills for better decisions and stronger teams.",
    href: "#featured",
  },
  {
    id: "creative",
    number: "04",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
    href: "#featured",
  },
];

export const featuredCourse: FeaturedCourse = {
  eyebrow: "Most popular this month",
  title: "Designing products people understand.",
  description:
    "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
  instructor: "with Maya Chen · Senior Product Designer",
  tags: ["8 lessons", "2h 40min", "Intermediate"],
  image: img("fc63af3622dbbc93f781fafdfc95a5b1442333b4.jpg"),
  imageWidth: 700,
  imageHeight: 500,
  imageAlt: "Designer prototyping a product on a desk with trays of colorful material samples, sketches and sticky notes",
};

export const steps: Step[] = [
  {
    id: "choose",
    step: "Step 01",
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    tone: "brand",
  },
  {
    id: "learn",
    step: "Step 02",
    title: "Learn from experience",
    description:
      "Follow concise lessons created by professionals who use these skills.",
    tone: "coral",
  },
  {
    id: "practice",
    step: "Step 03",
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    tone: "sun",
  },
];

export const testimonial: Testimonial = {
  quote:
    "The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.",
  name: "Alex Morgan",
  role: "Product Manager",
  avatar: "/images/41dbd95539264b46661146ee082ace5434ee6572 (1).jpg",
};

export const stats: Stat[] = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
];

export const people = {
  eyebrow: "The people",
  title: "Meet international students & teachers",
  description:
    "Morbi et egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.",
  cta: "Explore teachers and students",
};

export const collageImages: CollageImage[] = [
  { src: img("171be3e6313d9c62f0b8b27a3c44be7e1a4fec5f.jpg"), alt: "Smiling student with curly hair and glasses holding a red binder in front of a historic building", width: 1880, height: 1253 },
  { src: img("42829083643d3d3426b400f534ec9fcc15e6565b.jpg"), alt: "Student in a black headscarf and orange coat holding a coffee cup and books", width: 1043, height: 1300 },
  { src: img("34d5ee5b655254a0b3a8438dfbc82f688568c18a.jpg"), alt: "Graduate in a navy cap and gown holding a red diploma folder", width: 859, height: 1300 },
  { src: img("8754d7808b37230eb59c917f933955454b609c8c.jpg"), alt: "Woman studying at a white table with a laptop and open books", width: 1880, height: 1253 },
  { src: img("2bbc00114d87dd26b42a7d7110280822e53b80f7.jpg"), alt: "Child watching a teacher give an online lesson on a desktop computer", width: 1880, height: 1255 },
  { src: img("18c49a6b82108a4b9d1a6ed9b6ce5d5027983e05.jpg"), alt: "Student in a blue hoodie reading an open book beside a green apple", width: 1880, height: 1253 },
  { src: img("e3146828651bde32b846b387b31a233555834fa8.jpg"), alt: "Teacher and young student singing together by a window", width: 868, height: 1300 },
  { src: img("ccc445d7b326e3db59af94900224376e3c3ff0d2.jpg"), alt: "Man with glasses taking notes from an open book with a tablet beside him", width: 975, height: 1300 },
  { src: img("74b644736c3e4f3144415c0d81d78d6446a8be29.jpg"), alt: "Smiling girl waving at a computer during a video lesson", width: 1880, height: 1255 },
  { src: img("3498ce6b563e1970d8313a14a827068b2226757b.jpg"), alt: "Group of learners gathered around a laptop, smiling", width: 1880, height: 1253 },
];

export const contactInfo: ContactInfo[] = [
  {
    id: "email",
    label: "Email",
    value: "contact@luma.com",
    href: "mailto:contact@luma.com",
    icon: "mail",
  },
  {
    id: "response",
    label: "Response Time",
    value: "Up to 24 hours on business days",
    icon: "clock",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "Courses", href: "#courses" },
      { label: "Categories", href: "#courses" },
      { label: "Instructors", href: "#people" },
      { label: "For Teams", href: "#featured" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#contact" },
      { label: "Careers", href: "#contact" },
      { label: "Journal", href: "#contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#contact" },
      { label: "Contact", href: "#contact" },
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
];
