const CAREER_START = new Date(2021, 3, 1); // 1 April 2021

const getYearsOfExperience = (from = CAREER_START, now = new Date()) => {
  let years = now.getFullYear() - from.getFullYear();
  const beforeAnniversary =
    now.getMonth() < from.getMonth() ||
    (now.getMonth() === from.getMonth() && now.getDate() < from.getDate());

  if (beforeAnniversary) years -= 1;
  return Math.max(0, years);
};

const yearsOfExperience = getYearsOfExperience();

const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Ideas", imgPath: `${import.meta.env.BASE_URL}images/ideas.svg` },
  { text: "Concepts", imgPath: `${import.meta.env.BASE_URL}images/concepts.svg` },
  { text: "Designs", imgPath: `${import.meta.env.BASE_URL}images/designs.svg` },
  { text: "Code", imgPath: `${import.meta.env.BASE_URL}images/code.svg` },
  { text: "Ideas", imgPath: `${import.meta.env.BASE_URL}images/ideas.svg` },
  { text: "Concepts", imgPath: `${import.meta.env.BASE_URL}images/concepts.svg` },
  { text: "Designs", imgPath: `${import.meta.env.BASE_URL}images/designs.svg` },
  { text: "Code", imgPath: `${import.meta.env.BASE_URL}images/code.svg` },
];

const counterItems = [
  { value: yearsOfExperience, suffix: "+", label: "Years of Experience" },
  { value: 18, suffix: "+", label: "Shipped Products" },
  { value: 5, suffix: "", label: "Companies" },
];

const logoIconsList = [
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-1.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-2.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-3.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-4.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-5.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-6.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-7.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-8.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-9.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-10.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-11.png`,
  },
];

const services = [
  {
    icon: "ai",
    title: "AI Agents & Voice",
    desc: "Production AI agents for WhatsApp, inbound voice calling, and LLM-backed workflows — tenant-aware, logged, and wired into real products, not demos.",
    tags: ["WhatsApp agents", "LiveKit", "LLMs", "Voice AI"],
  },
  {
    icon: "mobile",
    title: "Cross-Platform Mobile Apps",
    desc: "React Native apps for iOS and Android, shipped to the App Store and Google Play — including tablet-only and low-connectivity builds.",
    tags: ["React Native", "iOS", "Android", "App Store"],
  },
  {
    icon: "web",
    title: "Web Apps & Dashboards",
    desc: "Next.js and React products: admin panels, booking flows, expense portals, and marketing sites with clean, usable UI.",
    tags: ["Next.js", "React", "Dashboards", "SaaS"],
  },
  {
    icon: "backend",
    title: "Backend, APIs & Real-time",
    desc: "Node.js services, REST APIs, Firebase, WebSockets, and auth so web and mobile clients stay in sync.",
    tags: ["Node.js", "REST", "Firebase", "WebSockets"],
  },
  {
    icon: "payments",
    title: "Payments & Commerce",
    desc: "Stripe and Razorpay checkout, wallets, deposits, and in-app payments for rentals, restaurants, and appointments.",
    tags: ["Stripe", "Razorpay", "Wallets", "Checkout"],
  },
  {
    icon: "maps",
    title: "Maps, Bookings & Logistics",
    desc: "Google Maps, Mapbox, appointment systems, and multi-stop delivery flows for land and sea-based operations.",
    tags: ["Mapbox", "Google Maps", "Bookings", "Delivery"],
  },
  {
    icon: "pos",
    title: "Hospitality & POS Systems",
    desc: "SaaS restaurant stacks: online ordering, QR table orders, POS, kitchen display, and multi-tenant branding.",
    tags: ["POS", "KDS", "QR ordering", "Multi-tenant"],
  },
];

const abilities = services;

const toolkitExtras = [
  "TypeScript",
  "MobX",
  "Redux",
  "Stripe",
  "Razorpay",
  "AWS",
  "Firebase",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Google Maps",
  "Mapbox",
  "WebSockets",
  "Docker",
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: `${import.meta.env.BASE_URL}images/logos/react.png`,
  },
  {
    name: "React Native Developer",
    imgPath: `${import.meta.env.BASE_URL}images/logos/react-native.png`,
  },
  {
    name: "TailwindCSS Developer",
    imgPath: `${import.meta.env.BASE_URL}images/logos/tailwindcss.svg`,
  },
  {
    name: "Material UI",
    imgPath: `${import.meta.env.BASE_URL}images/logos/material-ui.png`,
  },
  {
    name: "Three.js",
    imgPath: `${import.meta.env.BASE_URL}images/logos/three.png`,
  },
  {
    name: "Git Version control",
    imgPath: `${import.meta.env.BASE_URL}images/logos/git.svg`,
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: `${import.meta.env.BASE_URL}models/react_logo-transformed.glb`,
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Mobile App Developer",
    modelPath: `${import.meta.env.BASE_URL}models/react_logo-transformed1.glb`,
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: `${import.meta.env.BASE_URL}models/three.js-transformed.glb`,
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git Version control",
    modelPath: `${import.meta.env.BASE_URL}models/git-svg-transformed.glb`,
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    id: 1,
    company: "Dogra Technologies Pvt. Ltd.",
    title: "React Native Developer",
    review:
      "Built and maintained cross-platform mobile apps across multiple domains. Worked with teams to ship scalable features, integrate APIs, and take products from development through deployment.",
    imgPath: `${import.meta.env.BASE_URL}images/dogra-logo.webp`,
    logoPath: `${import.meta.env.BASE_URL}images/dogra.webp`,
    companyUrl: "https://dogratech.com/",
    responsibilities: [
      "Developed and maintained multiple React Native apps for iOS and Android.",
      "Integrated APIs and optimized performance for production use.",
      "Collaborated with teams to ship user-friendly features from build to release.",
    ],
  },
  {
    id: 2,
    company: "Vesure Pvt. Ltd.",
    title: "React Native Developer",
    review:
      "Designed, developed, and published mobile applications for Android and iOS, including store releases and appointment and hospital products with Razorpay payments.",
    imgPath: `${import.meta.env.BASE_URL}images/exp0.png`,
    logoPath: `${import.meta.env.BASE_URL}images/logo0.png`,
    responsibilities: [
      "Specialized in building and deploying React Native apps for Android and iOS.",
      "Kept performance and compatibility stable across a wide range of devices.",
      "Published applications on Google Play Store and Apple App Store.",
      "Shipped appointment and hospital information products with Razorpay checkout.",
    ],
  },
  {
    id: 3,
    company: "Yes It Labs",
    title: "React Native Developer",
    review:
      "Led cross-platform mobile development in a client-facing environment — UI architecture, custom components, and reliable releases for iOS and Android.",
    imgPath: `${import.meta.env.BASE_URL}images/exp1.png`,
    logoPath: `${import.meta.env.BASE_URL}images/logo1.png`,
    responsibilities: [
      "Led React Native development for iOS and Android client products.",
      "Designed app architecture and custom UI components.",
      "Resolved package conflicts and kept releases stable.",
      "Deployed apps to the Play Store and App Store.",
    ],
  },
  {
    id: 4,
    company: "Total Synergy Concept",
    title: "React Developer",
    review:
      "Shaped website architecture and interfaces in React, and built React Native apps alongside — reusable UI, clean code, and uninterrupted delivery.",
    imgPath: `${import.meta.env.BASE_URL}images/exp2.png`,
    logoPath: `${import.meta.env.BASE_URL}images/logo2.png`,
    responsibilities: [
      "Architected websites and crafted intuitive React interfaces.",
      "Delivered cross-platform mobile applications with React Native.",
      "Built custom UI components and reusable, reliable code.",
      "Resolved package version conflicts to keep projects moving.",
    ],
  },
  {
    id: 5,
    company: "Sigroo Technologies Pvt. Ltd.",
    title: "Software Developer",
    review:
      "Built websites, web apps, and mobile apps end to end — React.js on the web, React Native on mobile, plus testing and modern UI work.",
    imgPath: `${import.meta.env.BASE_URL}images/exp3.png`,
    logoPath: `${import.meta.env.BASE_URL}images/logo3.png`,
    responsibilities: [
      "Developed websites, web applications, and mobile applications.",
      "Built and tested scalable React.js web apps.",
      "Designed and tested cross-platform React Native apps.",
      "Contributed to the company site: blogs, UI fixes, Google Maps, and contact forms.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: `${import.meta.env.BASE_URL}images/logo1.png`,
  },
  {
    name: "logo2",
    imgPath: `${import.meta.env.BASE_URL}images/logo2.png`,
  },
  {
    name: "logo3",
    imgPath: `${import.meta.env.BASE_URL}images/logo3.png`,
  },
];

const shot = (file) => `${import.meta.env.BASE_URL}images/projects/${file}`;
const img = (file) => `${import.meta.env.BASE_URL}images/${file}`;

const projectFilters = ["All", "Frontend", "Mobile", "Full-stack"];

const projects = [
  {
    id: "energy-choice",
    title: "Energy Choice Parts",
    subtitle: "Industrial / automotive parts e-commerce",
    categories: ["Frontend"],
    role: "Lead frontend — Next.js, payments",
    stack: ["Next.js", "Redux", "Stripe"],
    summary:
      "Led development of a parts marketplace with a clear buying flow and Stripe checkout for vehicle and industrial clients.",
    about:
      "Energy Choice needed a catalogue that industrial buyers could actually complete a purchase in. I owned the storefront architecture: search and filter for vehicle and machine parts, a straightforward cart, and Stripe checkout so orders did not stall at payment. The case was less about a pretty shop and more about a reliable buying path for people who already know the SKU they need.",
    highlights: [
      "Designed a robust, intuitive storefront for sourcing parts.",
      "Integrated Stripe for secure card payments.",
      "Owned conceptualization, architecture, and delivery of the buying experience.",
    ],
    featured: true,
    imgPath: img("project1.png"),
    cover: "#1b2a4a",
  },
  {
    id: "metapos",
    title: "MetaPOS",
    subtitle: "Hospitality SaaS for restaurant chains",
    categories: ["Frontend", "Mobile"],
    role: "Full-stack / mobile",
    stack: [
      "React",
      "React Native",
      "MobX",
      "Material-UI",
      "Firebase",
      "WebSockets",
      "Stripe",
      "Barcode",
    ],
    summary:
      "A multi-tenant hospitality bundle — online ordering, QR table orders, POS, kitchen display, and booking — that restaurants run without their own infrastructure.",
    about:
      "MetaPOS is a full hospitality operating system, not a single screen. Restaurants get online ordering, QR table service, POS, kitchen display, and booking without standing up their own servers. I worked across web and React Native, with MobX for live ticket state, WebSockets for kitchen updates, Firebase for tenancy, and Stripe for payments. The hard problem was keeping dine-in, delivery, and kitchen tickets in sync while each venue still felt like its own branded product.",
    highlights: [
      "Online ordering website for customers.",
      "Table booking, QR table ordering, and table management.",
      "Mobile app for delivery and dine-in orders.",
      "POS, Kitchen Display System (KDS), and Package Display (PADS).",
      "Offline-capable, multi-tenant SaaS with isolated data and custom branding.",
    ],
    featured: true,
    imgPath: img("project2.png"),
    cover: "#3d2a1a",
  },
  {
    id: "vk-enterprises",
    title: "V.K. Enterprises",
    subtitle: "Hardware showcase application",
    categories: ["Full-stack"],
    role: "Frontend / mobile",
    stack: ["React Native", "React"],
    summary:
      "A hardware catalogue app so customers can browse products and company offerings without a storefront visit.",
    about:
      "V.K. Enterprises needed a digital catalogue that matched how hardware buyers actually shop: scan categories, compare items, and leave with a shortlist. I built the showcase in React Native and React so the same product story works in a pocket and on a desktop, with layout and photography treated as the product rather than a thin wrapper around a spreadsheet.",
    highlights: [
      "Product showcase built for browsing on mobile and web.",
      "Focused on clear catalogue UX for industrial hardware.",
    ],
    featured: true,
    imgPath: img("project3.png"),
    cover: "#3a1f2a",
  },
  {
    id: "ficomobility",
    title: "FicoMobility",
    subtitle: "Car rental website and mobile app",
    categories: ["Frontend", "Mobile"],
    role: "Full-stack — web + mobile",
    stack: [
      "Next.js",
      "React Native",
      "MobX",
      "Material-UI",
      "Firebase",
      "Google Maps",
      "Razorpay",
    ],
    summary:
      "End-to-end rental product for car owners and renters: listing approval, maps, wallets, and payments covering rent, deposit, and forecast charges.",
    about:
      "FicoMobility connects car owners who want utilization with renters who want a vehicle for a defined window. I built the Next.js site and React Native app around one rental flow: owner listing and approval, map-based pickup, wallet payouts, and Razorpay charges that split rent, deposit, and forecast fees. Google Maps keeps location honest; MobX and Firebase keep booking state consistent across web and mobile.",
    highlights: [
      "Next.js website and React Native app with a shared rental flow.",
      "Owner registration and approval workflow.",
      "Wallet payouts for owners; renters pay rent, deposit, and forecast charges via Razorpay.",
      "Google Maps for pickup and vehicle context.",
    ],
    featured: false,
    liveUrl: "https://www.ficomobility.com",
    imgPath: shot("fico-cover.jpeg"),
    gallery: [shot("fico-cover.jpeg"), shot("fico-logo.jpeg")],
    cover: "#d8dce3",
  },
  {
    id: "boatbites",
    title: "BoatBites",
    subtitle: "Sea-water food delivery ecosystem",
    categories: ["Mobile"],
    role: "Lead — customer app, driver app, admin, restaurant",
    stack: ["React Native", "Redux", "Mapbox", "REST APIs"],
    summary:
      "A four-surface delivery system for food to boats: customer app, driver app, restaurant app, and a web admin — routed over water with Mapbox.",
    about:
      "BoatBites is food, drinks, ice, and essentials delivered to the water instead of a street address. I led the customer app, driver app, restaurant app, and web admin so a diner on a boat can order, a jet-ski driver can find them, and a marina kitchen can fire the ticket. Mapbox routing and APIs had to tolerate weak connectivity at sea. The marketing site at boatbites.app is the public face of that same product: Anchor. Order. Enjoy.",
    highlights: [
      "Customer app: menus, orders, and live delivery tracking from boats.",
      "Driver app: sea-based requests, navigation, and completions.",
      "Restaurant app: menus, accept orders, coordinate with drivers.",
      "Admin dashboard: users, restaurants, orders, and open/close status.",
      "Mapbox / Argo maps and APIs tuned for low-connectivity at sea.",
    ],
    featured: true,
    liveUrl: "https://boatbites.app/",
    imgPath: shot("boatbites.png"),
    cover: "#0f2f44",
  },
  {
    id: "voice-ai",
    title: "AI Voice Platform",
    subtitle: "Multi-tenant inbound AI calling",
    categories: ["Full-stack"],
    role: "Full-stack — web, API, AI server",
    stack: [
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "LiveKit",
      "Asterisk",
      "PostgreSQL",
      "Docker",
    ],
    summary:
      "Personal multi-tenant voice platform: inbound calls hit a published agent, LiveKit carries the media, and a Python AI server runs STT, LLM, and TTS in real time.",
    about:
      "This is my personal AI Voice Platform (the AiVoice repo). Phase 1 is inbound calling: a tenant publishes an agent, assigns a number, and the stack answers live. The web dashboard controls agents and numbers; a Node API owns webhooks and OpenAPI docs; a Python 3.12 AI server does speech. Docker Compose brings up Postgres and the services. In the dashboard you can join the LiveKit room from the browser and talk to the agent without a carrier. Outbound campaigns are deliberately out of scope so the inbound runtime stays solid.",
    highlights: [
      "Web dashboard, Node API, and Python AI server as separate services.",
      "LiveKit rooms for real-time media; Asterisk / SIP trunks for telephony.",
      "Inbound webhook simulation and in-browser test calls.",
      "Multi-tenant agents, numbers, and Postgres-backed call records.",
    ],
    featured: false,
    imgPath: shot("voice.jpg"),
    cover: "#2a1a3d",
  },
  {
    id: "bob-inspection",
    title: "BOB Inspection",
    subtitle: "Tablet-only inspection management",
    categories: ["Mobile"],
    role: "Mobile — iOS & Android (tablet)",
    stack: ["React Native", "Redux", "Formik"],
    summary:
      "Inspection app built only for tablets, with complex multi-form flows. Live on the App Store and Google Play.",
    about:
      "BOB Inspection is a tablet-only product on purpose. Inspectors fill multi-step forms in the field, not on a phone keyboard. I used React Native, Redux, and Formik so long inspection trees stay valid as they move between sections. Shipping to the App Store and Google Play meant the layout had to hold up on real tablets, not a stretched phone UI.",
    highlights: [
      "Redux state and Formik for multi-step inspection forms.",
      "Tablet-only layout — not a phone or web port.",
      "Shipped to Apple App Store and Google Play Store.",
    ],
    featured: false,
    imgPath: shot("inspection.jpg"),
    cover: "#1a2f3d",
  },
  {
    id: "vesure-appointments",
    title: "VeSure Appointment System",
    subtitle: "Bookings and payments for small businesses",
    categories: ["Mobile"],
    role: "Mobile — iOS & Android",
    stack: ["React Native", "Razorpay"],
    summary:
      "Small businesses take bookings and payments in one app. Owners see the calendar and daily/monthly revenue.",
    about:
      "VeSure Appointments is a booking and payments app for small businesses that do not need a full hospital stack. Customers pick a slot and pay with Razorpay; owners log in to see the calendar and daily or monthly revenue. I built it in React Native for iOS and Android so the same business can take the next booking from a phone.",
    highlights: [
      "Customers book and pay through Razorpay.",
      "Owner login to manage appointments and revenue.",
      "Deployed on iOS and Android.",
    ],
    featured: false,
    liveUrl: "https://www.vesuretech.com/saas-products",
    imgPath: shot("vesure-ams.png"),
    gallery: [shot("vesure-ams.png"), shot("vesure-saas-page.png"), shot("vesure-saas.jpg")],
    cover: "#2d2416",
  },
  {
    id: "vesure-hospital",
    title: "VeSure Hospital Information",
    subtitle: "Clinic appointments for patients and doctors",
    categories: ["Mobile"],
    role: "Mobile — iOS & Android",
    stack: ["React Native", "Firebase", "Razorpay"],
    summary:
      "Patients pick a doctor and slot, pay online or at the clinic. Doctors approve or cancel in real time.",
    about:
      "The hospital information app is the clinic-facing counterpart: patients choose a doctor and slot, then pay now or at the desk. Doctors approve or cancel in real time over Firebase so the waiting room list stays true. React Native plus Razorpay covers iOS and Android without a separate web booking desk.",
    highlights: [
      "Doctor and slot booking with pay-now or pay-later.",
      "Doctor accounts to approve or cancel appointments live.",
      "Firebase-backed data across iOS and Android.",
    ],
    featured: false,
    liveUrl: "https://www.vesuretech.com/saas-products",
    imgPath: shot("vesure-his.jpg"),
    gallery: [shot("vesure-his.jpg"), shot("vesure-saas-page.png"), shot("vesure-saas.jpg")],
    cover: "#16262d",
  },
  {
    id: "gubbins",
    title: "Gubbins Delivery",
    subtitle: "Local parcel booking for Delhi",
    categories: ["Mobile"],
    role: "Mobile",
    stack: ["React Native", "Razorpay"],
    summary:
      "Users book riders with pickup, drop, weight, and a time window — including multi-stop routes — and pay in-app.",
    about:
      "Gubbins is local parcel booking for Delhi: pickup, drop, weight, and a time window, including multi-stop routes. I built the customer React Native app so a booking is a form, not a phone call, and Razorpay closes payment before a rider is assigned.",
    highlights: [
      "Custom booking form: locations, weight, date and time.",
      "Single or multiple pickups and drop-offs.",
      "Razorpay for secure online payment.",
    ],
    featured: false,
    liveUrl: "https://www.gub-bins.in/",
    imgPath: shot("gubbins.png"),
    gallery: [shot("gubbins.png"), shot("gubbins-og.png"), shot("gubbins-logo.png")],
    cover: "#2d1a1a",
  },
  {
    id: "gubbins-partner",
    title: "Gubbins Delivery Partner",
    subtitle: "Rider shift and order app",
    categories: ["Mobile"],
    role: "Mobile",
    stack: ["React Native", "Google Maps API"],
    summary:
      "Riders start and end shifts with a photo and GPS, then navigate assigned pickups and drops in Google Maps.",
    about:
      "The partner app is what riders actually live in. Shift start and end require a photo and GPS so attendance is not honor-based. Assigned orders include payment-collection notes, and tapping an address opens Google Maps for turn-by-turn — the right tool for last-mile instead of a custom map that fights the city.",
    highlights: [
      "Shift start/end with camera photo and current location.",
      "Assigned orders with payment-collection notes.",
      "Tap an address to open turn-by-turn directions in Google Maps.",
    ],
    featured: false,
    liveUrl: "https://www.gub-bins.in/delivery-jobs-in-delhi-ncr",
    imgPath: shot("gubbins-rider-page.png"),
    gallery: [
      shot("gubbins-rider-page.png"),
      shot("gubbins-partner.png"),
      shot("gubbins-rider.png"),
    ],
    cover: "#1a2d24",
  },
  {
    id: "splatter",
    title: "Splatter Expense Portal",
    subtitle: "Employee claims and manager approvals",
    categories: ["Frontend"],
    role: "Frontend",
    stack: ["React", "MobX", "WebSockets"],
    summary:
      "Employees submit expense claims; managers approve or reject them in a live workflow.",
    about:
      "Splatter is an internal expense portal: employees submit claims, managers approve or reject, and the list updates live. I built the React frontend with MobX and WebSockets so status changes do not require a refresh. User testing drove the iterations — the workflow had to be obvious to people who file expenses once a month, not daily power users.",
    highlights: [
      "Claim listing and submission UI for employees.",
      "Manager review, approve, and reject flow.",
      "Iterated from user testing to tighten the experience.",
    ],
    featured: false,
    imgPath: shot("expense.jpg"),
    cover: "#24162d",
  },
  {
    id: "robot-maker",
    title: "Robot Maker",
    subtitle: "Block-based language learning",
    categories: ["Frontend"],
    role: "Frontend",
    stack: ["React", "MobX", "PayPal"],
    summary:
      "An interactive, block-based coding tool for beginners and children — snap blocks together instead of typing syntax.",
    about:
      "Robot Maker teaches programming without a blank editor. Learners snap blocks instead of typing syntax, which is the whole product thesis. I built the React + MobX workspace and wired PayPal for paid access. The case study is interaction design: keep the canvas playful without hiding the computational ideas underneath.",
    highlights: [
      "Visual block programming without traditional syntax.",
      "Concept set aimed at first-time learners.",
      "PayPal for product payments.",
    ],
    featured: false,
    imgPath: shot("robot-maker.jpg"),
    cover: "#162d2a",
  },
  {
    id: "inforead",
    title: "InfoRead",
    subtitle: "AI-ranked personalized reading",
    categories: ["Frontend", "Mobile"],
    role: "Product engineering — web + mobile",
    stack: ["React Native", "JavaScript", "Firebase"],
    summary:
      "Personalized reading with AI article scores, browse and trending feeds, and a mobile companion for recents and favorites.",
    about:
      "InfoRead is a reading product with an AI layer on top of a magazine-style feed. The live web app at inforead.infonesta.com scores articles, surfaces browse / trending / topics, and lets readers save a list. I also built the React Native companion so recents, favorites, and recommendations travel on iOS and Android, with Firebase behind the user dashboard. The case is discovery: get someone from a scored headline to a finished article without a noisy news homepage.",
    highlights: [
      "Live web feed with AI article scoring and library lists.",
      "Browse, trending, topics, and search on the public site.",
      "Mobile companion: recents, favorites, and personalized recommendations.",
      "Firebase-backed user dashboard on iOS and Android.",
    ],
    featured: true,
    liveUrl: "https://inforead.infonesta.com/",
    imgPath: shot("inforead.png"),
    cover: "#1a2030",
  },
  {
    id: "relayai",
    title: "RelayAI",
    subtitle: "WhatsApp AI agent SaaS",
    categories: ["Full-stack"],
    role: "Solo — Next.js SaaS",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Auth.js",
      "OpenAI",
      "Anthropic",
      "Gemini",
      "WhatsApp Cloud API",
    ],
    summary:
      "Personal multi-tenant SaaS: inbound WhatsApp messages hit a tenant agent, an LLM replies, and every turn is stored with usage and audit logs.",
    about:
      "RelayAI (the AiWhatsapp repo) is a production-shaped Next.js SaaS for inbound WhatsApp automation. A customer message lands on a Meta webhook, RelayAI resolves tenant, number, and agent, the Agent Engine calls OpenAI, Anthropic, or Gemini, and the reply goes out through WhatsApp Cloud API. Conversations, executions, usage, and audit logs stay in Postgres. Auth.js handles sessions. Outbound campaigns, bulk send, RAG, and billing are intentionally out of scope so the inbound agent loop stays the product.",
    highlights: [
      "Tenant, number, and agent resolution on every Meta webhook.",
      "Pluggable LLM adapters: OpenAI, Anthropic, and Gemini.",
      "In-process job queue via next/server after() — no Redis.",
      "Auth.js credentials/JWT with an OAuth-ready account model.",
    ],
    featured: false,
    imgPath: shot("whatsapp.jpg"),
    cover: "#102918",
  },
  {
    id: "meridian",
    title: "Meridian",
    subtitle: "SaaS that sells industry websites",
    categories: ["Full-stack"],
    role: "Solo — platform + demo tenant Aurelia",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Auth.js",
      "Razorpay",
      "Stripe",
    ],
    summary:
      "Personal SaaS for industry sites: each customer gets a tenant with CMS, optional shop, and optional clinic booking. Aurelia is the demo storefront.",
    about:
      "Meridian sells industry websites (ecommerce, fashion, health, wellness, services). Each customer is a tenant with CMS, optional shop, and optional clinic booking. The demo storefront is Aurelia. I completed catalog and variants, guest and signed-in cart, checkout, orders, and coupons, then Razorpay, Stripe, and mock payments with signed webhooks, server-side verification, and refunds. Later phases added security headers, session revocation, rate limiting, audit logs, and a staff admin. Auth.js, Prisma, and Postgres sit under a Next.js 16 App Router.",
    highlights: [
      "Multi-tenant CMS, menus, media library, and section builder.",
      "Catalog, inventory, cart, coupons, and order lifecycle.",
      "Razorpay and Stripe with webhook verification and refunds.",
      "RBAC, audit logs, health checks, and deployment packaging.",
    ],
    featured: false,
    imgPath: shot("meridian.jpg"),
    cover: "#2a1824",
  },
  {
    id: "stockly",
    title: "Stockly",
    subtitle: "Multi-tenant stock for shops",
    categories: ["Mobile", "Full-stack"],
    role: "Solo — web, API, React Native",
    stack: [
      "Next.js",
      "React Native CLI",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "pnpm",
    ],
    summary:
      "Personal stock system for pharmacies, retail, and grocery: one account on web, Android, and iOS, plus a Super Admin console.",
    about:
      "Stockly is a pnpm monorepo for shops that live on inventory accuracy. The same account works on web, Android, and iOS. A Super Admin console is a separate /admin surface. I built the Next.js web app, a Node API with Swagger, Prisma on Postgres, and a React Native CLI app (not Expo). Demo tenants cover pharmacy and retail so barcode lookup, staff roles, and stock movements can be exercised without a production shop.",
    highlights: [
      "Shared account model across web and native apps.",
      "Pharmacy and retail tenant roles with a Super Admin console.",
      "Prisma migrations, seed data, and OpenAPI on the API.",
      "React Native CLI mobile — not an Expo wrapper.",
    ],
    featured: false,
    imgPath: shot("stockly.jpg"),
    cover: "#1a2430",
  },
  {
    id: "scan3d",
    title: "Scan3D",
    subtitle: "Mobile 3D object scanner",
    categories: ["Mobile", "Full-stack"],
    role: "Solo — mobile, API, reconstruction worker",
    stack: [
      "React Native CLI",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Python",
      "OpenCV",
      "Open3D",
      "GLB",
    ],
    summary:
      "Personal scanner: capture frames on a phone, reconstruct on a Python worker, and always export a viewable textured GLB.",
    about:
      "Scan3D is a production-shaped 3D scanner, not a demo mesh in the browser. A React Native CLI app uploads frames over HTTP and WebSocket. FastAPI enqueues a job on Redis. A Python worker tries photogrammetry first (OpenCV / Open3D) and, if multi-view geometry is weak, still exports a textured GLB proxy so the product workflow always completes. Postgres stores metadata only; frames and models live on disk. Transparent, glossy, or textureless objects can fail reconstruction — the fallback export is part of the case study, not a footnote.",
    highlights: [
      "React Native CLI capture app with live job status.",
      "FastAPI + Redis queue + Celery-style Python worker.",
      "Photogrammetry path with a guaranteed GLB fallback.",
      "Metadata in Postgres; scan files in filesystem storage.",
    ],
    featured: false,
    imgPath: shot("scan3d.jpg"),
    cover: "#1c1a2d",
  },
];

const about = {
  name: "Pawan Kumar",
  title: "Full-stack web & mobile developer",
  location: "Rohtak, Haryana, India",
  email: "pk.pawankumar663@gmail.com",
  phone: "+91 97294 01903",
  phoneHref: "tel:+919729401903",
  emailHref: "mailto:pk.pawankumar663@gmail.com",
  summary:
    `I build production web apps, APIs, and React Native products — from restaurant SaaS and rentals to store-released inspection and hospital apps. ${yearsOfExperience}+ years across five companies, plus personal platforms for voice AI, WhatsApp agents, multi-tenant sites, stock, and 3D scanning.`,
  focus: [
    "React and Next.js web products",
    "React Native for iOS and Android",
    "Node.js, Firebase, and REST APIs",
    "Stripe / Razorpay payments and maps",
  ],
};

const education = [
  {
    school: "Maharishi Dayanand University, Rohtak",
    degree: "M.Tech — Computer Science & Engineering",
    dates: "July 2016 – May 2018",
  },
  {
    school: "Shri Baba Mast Nath Engineering College, Rohtak",
    degree: "B.Tech — Computer Science & Engineering",
    dates: "July 2011 – May 2015",
  },
];

const certifications = [
  {
    name: "React (Basic)",
    issuer: "HackerRank",
  },
  {
    name: "JavaScript (Intermediate)",
    issuer: "HackerRank",
  },
  {
    name: "Computer Systems Security",
    issuer: "IIT Kanpur",
  },
  {
    name: "Computer Hardware & Networking",
    issuer: "ZAD Group of Institutions",
  },
];

const socialImgs = [
  {
    name: "x",
    imgPath: `${import.meta.env.BASE_URL}images/x.png`,
    link: "https://x.com/pawankumar663",
  },
  {
    name: "linkedin",
    imgPath: `${import.meta.env.BASE_URL}images/linkedin.png`,
    link: "https://www.linkedin.com/in/pawan-kumar-91b748155/",
  },
  {
    name: "Github",
    imgPath: `${import.meta.env.BASE_URL}images/github.png`,
    link: "https://github.com/pawankumar663",
  },
  {
    name: "indeed",
    imgPath: `${import.meta.env.BASE_URL}images/indeed.png`,
    link: "https://profile.indeed.com/p/pawank-lwp74wt",
  },
  {
    name: "Whatsapp",
    imgPath: `${import.meta.env.BASE_URL}images/whatsapp.png`,
    link: "https://wa.me/919729401903?text=Hi",
  },
];

export {
  yearsOfExperience,
  words,
  abilities,
  services,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
  projectFilters,
  about,
  education,
  certifications,
  toolkitExtras,
};
