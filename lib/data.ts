export const PHONE = "02 5112 2969";
export const PHONE_HREF = "tel:0251122969";
export const EMAIL = "info@tradewiserenovations.com";
export const ADDRESS = "PO Box 2956 Tuggeranong DC, ACT 2901";
export const ABN = "66 688 317 099";
export const FACEBOOK = "https://www.facebook.com/TradeWiseRenovations/";
export const INSTAGRAM = "https://www.instagram.com/tradewiserenovations/";

export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Services",
    children: [
      { label: "Bathroom Renovations", href: "/bathroom-renovations" },
      { label: "Kitchen Renovations", href: "/service/kitchen-renovations" },
      { label: "Interior Renovations", href: "/service/interior-renovations" },
      { label: "Home Renovations", href: "/service/home-renovations" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  {
    label: "Guides",
    children: [
      { label: "Kitchen Renovations Canberra", href: "/kitchen-renovations-canberra" },
      { label: "Home Renovations Canberra", href: "/home-renovations-canberra" },
      { label: "Bathroom Renovations Canberra", href: "/bathroom-renovations-canberra" },
      { label: "Kitchen Design Canberra", href: "/kitchen-design-canberra" },
      { label: "Interior Designer Canberra", href: "/interior-designer-canberra" },
      { label: "Home Renovations Tuggeranong", href: "/home-renovations-tuggeranong" },
    ],
  },
  { label: "Promotions", href: "/promotions" },
];

export const PROCESS_STEPS = [
  { n: 1, title: "Get In Touch" },
  { n: 2, title: "Meet On Site" },
  { n: 3, title: "Submit Quotation" },
  { n: 4, title: "Quotation Acceptance" },
  { n: 5, title: "Schedule Work" },
  { n: 6, title: "Proceed With Work" },
  { n: 7, title: "Job Completion" },
  { n: 8, title: "Customer Satisfaction" },
];

export const VALUE_PROPS = [
  { title: "Family Owned and Operated", icon: "family" },
  { title: "Over 30 Years Experience", icon: "experience" },
  { title: "Collaborative", icon: "collaborative" },
  { title: "Customer Service Orientated", icon: "service" },
];

export type Testimonial = { name: string; quote: string };

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Leah Gault",
    quote:
      "Angelo, Adenn, Zoe and the whole team were prompt and professional and have done a stunning job with our house. They were incredibly patient, and helped guide us through the process. Super friendly team, would definitely recommend going with Tradewise Renovations.",
  },
  {
    name: "Fiona Morris",
    quote:
      "Angelo and the team have designed and renovated our kitchen, ensuite, laundry and bathroom. They gave us great design options and completed the work to perfection. The quality of the work and all the trades people involved were excellent. The team were all lovely and I can't imagine that we could have got better designs or results elsewhere.",
  },
  {
    name: "Lydia Stove",
    quote:
      "This is the second time we've engaged TradeWise, and once again, they've exceeded our expectations. From start to finish, TradeWise project-managed every detail with professionalism and care. Their team of highly skilled, friendly, and reliable tradespeople handled everything. We are absolutely thrilled with the results.",
  },
  {
    name: "Jackie and Finn, Chapman",
    quote:
      "Angelo, Adenn, Emily and Zoe and their team at Tradewise did a fantastic job on our renovation: kitchen, three bathrooms and laundry. The quality of their work is truly excellent. The renovations were completed on time and on budget. We could not recommend them more highly.",
  },
  {
    name: "Chris Hatherly",
    quote:
      "We can't recommend Angelo, Zoe, Adenn and the team at Tradewise Renovations highly enough. Our original box-y 1960s house is now an entirely new family home. The team kept in close communication throughout the six months of work and went above and beyond the original scope in several areas.",
  },
  {
    name: "Yvonne & Michael Fisher",
    quote:
      "Wonderful experience working with Angelo and the team at TradeWise on our kitchen renovation. Their attention to detail and management of all aspects of the project were first rate and we are extremely happy with our beautiful new kitchen.",
  },
];

export const FAQS = [
  {
    q: "Can I make site visits to the house during construction?",
    a: "During a large-scale interior renovation, you will need to be accompanied by us anytime you wish to do a site visit. This is for your safety. However, we are always more than happy to arrange regular site visits, and will keep you up to date on our progress throughout the renovation.",
  },
  {
    q: "Can I stay in my house during the renovation?",
    a: "This depends on the style and scope of the renovation. If it is a small renovation and you do not have any asthmatics in the house who could be affected by rising dust, then it will likely be OK. Keep in mind that renovations can be dusty and dirty, so you may prefer to find somewhere to stay while it is completed. If it is a large scale renovation, you will need to find temporary accommodation. Either way, we will endeavour to fit in with your circumstances, and may be able to stage the renovation so that you can continue living in the house.",
  },
  {
    q: "Can I change the design during the renovation?",
    a: "It's always possible to make design changes – but please remember that significant changes will come at a cost, so it's always best to try and get the design right before we start. We try to remain as flexible as possible during the renovation, so if you need changes just have a chat with us about it. We can advise any variations to the contract price, and you can decide if you want to continue as is or make the change.",
  },
  {
    q: "What's the difference between remodelling and renovating a home?",
    a: "Renovate and remodel are often used interchangeably, so most people believe they mean the same thing. The technical definition of renovation is to “refresh” or “revive”, while a remodel is to “remake”. At TradeWise Renovations, we're happy to do either to help you achieve your vision.",
  },
  {
    q: "What do I need to bring at the first visit?",
    a: "You don't need to bring anything – we will come to you because it allows us to see the space and understand what we will be working with. We will use this time to get a solid grasp of what you want to achieve, and we can discuss next steps with you during this initial consultation.",
  },
];

export const SERVICES = [
  {
    title: "Bathroom Renovations",
    href: "/bathroom-renovations",
    blurb: "Turn your bathroom into a private oasis",
    image: "/images/2026/02/TW2416-13.jpg",
  },
  {
    title: "Kitchen Renovations",
    href: "/service/kitchen-renovations",
    blurb: "Functional, stylish and built to last",
    image: "/images/2026/02/3449_tradewisereno_029-2.jpg",
  },
  {
    title: "Interior Renovations",
    href: "/service/interior-renovations",
    blurb: "Upgrade your home to suit your style",
    image: "/images/2026/02/3449_tradewisereno_015.jpg",
  },
  {
    title: "Home Renovations",
    href: "/service/home-renovations",
    blurb: "Canberra's leading home renovation experts",
    image: "/images/2026/02/3552_Tradewise_001-1.jpg",
  },
];
