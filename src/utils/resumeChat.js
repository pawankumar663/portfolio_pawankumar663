import {
  about,
  certifications,
  education,
  expCards,
  projects,
  services,
  socialImgs,
  yearsOfExperience,
} from "../constants/index.js";

const STOP_WORDS = new Set([
  "a", "an", "the", "and", "or", "of", "to", "in", "for", "on", "at",
  "is", "are", "was", "were", "do", "does", "did", "can", "could",
  "you", "your", "me", "my", "i", "we", "he", "his", "him",
  "what", "who", "where", "when", "why", "how", "about", "tell",
  "please", "give", "show", "list", "with", "from", "this", "that",
  "any", "some", "has", "have", "had", "pawan", "kumar",
  "explain", "detail", "details", "elaborate", "more", "full",
]);

const SKILLS = [
  { name: "React", aliases: ["react", "reactjs", "react.js"] },
  { name: "React Native", aliases: ["react native", "reactnative", "rn"] },
  { name: "Next.js", aliases: ["next", "nextjs", "next.js"] },
  { name: "Node.js", aliases: ["node", "nodejs", "node.js"] },
  { name: "Express.js", aliases: ["express", "expressjs", "express.js"] },
  { name: "JavaScript", aliases: ["javascript", "js"] },
  { name: "TypeScript", aliases: ["typescript", "ts"] },
  { name: "HTML", aliases: ["html"] },
  { name: "CSS", aliases: ["css"] },
  { name: "Tailwind CSS", aliases: ["tailwind", "tailwindcss"] },
  { name: "Material-UI", aliases: ["material ui", "material-ui", "mui"] },
  { name: "Ant Design", aliases: ["ant design", "antd"] },
  { name: "Redux", aliases: ["redux"] },
  { name: "MobX", aliases: ["mobx"] },
  { name: "Firebase", aliases: ["firebase"] },
  { name: "AWS", aliases: ["aws", "amazon web services"] },
  { name: "REST APIs", aliases: ["rest", "rest api", "apis", "api"] },
  { name: "Stripe", aliases: ["stripe"] },
  { name: "Razorpay", aliases: ["razorpay", "razerpay"] },
  { name: "PayPal", aliases: ["paypal"] },
  { name: "Google Maps", aliases: ["google maps", "maps", "gps"] },
  { name: "Mapbox", aliases: ["mapbox"] },
  { name: "WebSockets", aliases: ["websocket", "websockets"] },
  { name: "MongoDB", aliases: ["mongodb", "mongo"] },
  { name: "PostgreSQL", aliases: ["postgres", "postgresql", "postgress"] },
  { name: "MySQL", aliases: ["mysql", "sql server", "sql"] },
  { name: "Oracle", aliases: ["oracle"] },
  { name: "Git", aliases: ["git", "github", "bitbucket"] },
  { name: "Docker", aliases: ["docker"] },
  { name: "Python", aliases: ["python"] },
  { name: "Java", aliases: ["java"] },
  { name: "C / C++", aliases: ["c", "c++", "cpp"] },
  { name: "ASP.NET", aliases: ["asp.net", "aspnet", "dotnet"] },
  { name: "Xcode", aliases: ["xcode"] },
  { name: "App Store / Play Store", aliases: ["app store", "play store", "ios", "android"] },
];

const linkedIn = socialImgs.find((item) => item.name === "linkedin")?.link;
const github = socialImgs.find((item) => item.name === "Github")?.link;
const whatsapp = socialImgs.find((item) => item.name === "Whatsapp")?.link;

const normalize = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9+.#\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const tokens = (text) =>
  normalize(text)
    .split(" ")
    .filter((word) => word.length > 1 && !STOP_WORDS.has(word));

const includesAny = (text, phrases) =>
  phrases.some((phrase) => {
    if (phrase.includes(" ") || /[^a-z0-9]/i.test(phrase)) {
      return text.includes(phrase);
    }
    return new RegExp(`\\b${phrase}\\b`, "i").test(text);
  });

const wantsDetail = (query) =>
  includesAny(query, [
    "explain",
    "in detail",
    "detailed",
    "elaborate",
    "tell me more",
    "more about",
    "full detail",
    "full details",
    "walk through",
    "walk me through",
    "break down",
    "breakdown",
    "describe in detail",
  ]);

const pick = (shortText, longText, detailed) =>
  detailed ? longText : shortText;

const projectDocs = projects.map((project) => ({
  type: "project",
  title: project.title,
  text: `${project.title} ${project.subtitle} ${project.summary} ${project.about || ""} ${project.role} ${project.stack.join(" ")} ${project.highlights.join(" ")} ${project.categories.join(" ")}`,
  project,
}));

const jobDocs = expCards.map((job) => ({
  type: "job",
  title: job.company,
  text: `${job.company} ${job.title} ${job.review} ${job.responsibilities.join(" ")}`,
  job,
}));

const relatedProjects = (skill) =>
  projects
    .filter((project) =>
      normalize(`${project.title} ${project.stack.join(" ")} ${project.summary}`).includes(
        skill.aliases[0]
      )
    )
    .map((project) => project.title);

const shortProject = (project) =>
  `${project.title} is ${project.subtitle.toLowerCase()}. Pawan shipped it with ${project.stack.slice(0, 3).join(", ")}. Ask me to explain if you want the full story.`;

const longProject = (project) =>
  `${project.title} is ${project.subtitle.toLowerCase()}. ${project.about || project.summary} He worked as ${project.role.toLowerCase()}, using ${project.stack.join(", ")}. In practice that meant:\n${project.highlights.map((item) => `• ${item}`).join("\n")}`;

const shortJob = (job) =>
  `At ${job.company} he was a ${job.title}, focused on shipping production apps. Ask me to explain that role for the full picture.`;

const longJob = (job) =>
  `At ${job.company} Pawan worked as a ${job.title}. ${job.review}\n${job.responsibilities.map((item) => `• ${item}`).join("\n")}`;

const scoreDoc = (queryTokens, doc) => {
  const haystack = normalize(doc.text);
  let score = 0;
  queryTokens.forEach((token) => {
    if (haystack.includes(token)) score += token.length > 4 ? 2 : 1;
    if (normalize(doc.title).includes(token)) score += 4;
  });
  return score;
};

const findSkill = (query) =>
  SKILLS.find((skill) =>
    skill.aliases.some((alias) => {
      if (alias.length <= 2) return query.split(" ").includes(alias);
      return query.includes(alias);
    })
  );

export const suggestedQuestions = [
  "Who is Pawan?",
  "How many years of experience?",
  "What are his skills?",
  "Tell me about MetaPOS",
  "Explain MetaPOS",
  "How can I contact him?",
];

export function answerResumeQuery(rawQuery) {
  const query = normalize(rawQuery);
  const detailed = wantsDetail(query);

  if (!query) {
    return "Ask about Pawan’s work, skills, or how to reach him.";
  }

  if (/^(hi|hello|hey|yo|hola|namaste)(\s|$)/.test(query) || /^(good\s(morning|evening|afternoon))/.test(query)) {
    return pick(
      `Hey. I’m Pawan’s resume bot — ${yearsOfExperience}+ years in web and mobile. What do you want to know?`,
      `Hi. I answer from Pawan Kumar’s resume. He’s a full-stack web and mobile developer with ${yearsOfExperience}+ years of experience across five companies. You can ask about skills, a project, education, or contact. Say “explain” if you want a longer answer.`,
      detailed
    );
  }

  if (includesAny(query, ["thank", "thanks", "thx"])) {
    return "Glad it helped. Ask another one anytime.";
  }

  if (includesAny(query, ["resume", "cv", "curriculum"])) {
    return pick(
      "Grab the PDF from the Resume button up top, or ask me a specific question here.",
      "The Resume button in the header downloads his latest PDF. Here I can walk through experience, skills, education, certifications, and projects. For a deep dive on any item, ask me to explain it.",
      detailed
    );
  }

  if (includesAny(query, ["contact", "email", "phone", "whatsapp", "linkedin", "github", "reach", "hire", "available", "availability", "freelance"])) {
    return pick(
      `Email ${about.email} or call ${about.phone}. He’s in ${about.location}.`,
      `Pawan is based in ${about.location} and open to roles or project work.\nEmail: ${about.email}\nPhone: ${about.phone}${linkedIn ? `\nLinkedIn: ${linkedIn}` : ""}${github ? `\nGitHub: ${github}` : ""}${whatsapp ? `\nWhatsApp: ${whatsapp}` : ""}\nThe contact form on this page also reaches him directly.`,
      detailed
    );
  }

  if (includesAny(query, ["where", "location", "based", "live", "city", "rohtak", "haryana", "address"])) {
    return pick(
      `He’s based in ${about.location}.`,
      `Pawan lives and works from ${about.location}. You can reach him at ${about.email} or ${about.phone}.`,
      detailed
    );
  }

  if (includesAny(query, ["who are you", "who is pawan", "about pawan", "introduce", "profile", "summary", "yourself"])) {
    return pick(
      `${about.name} is a ${about.title} with ${yearsOfExperience}+ years building web, mobile, and API products.`,
      `${about.name} is a ${about.title}. ${about.summary} Day to day that means ${about.focus.join(", ").toLowerCase()}.`,
      detailed
    );
  }

  if (
    includesAny(query, ["year", "years", "how long", "career start"]) &&
    !includesAny(query, ["company", "companies", "employer", "dogra", "vesure", "sigroo", "synergy", "yes it"])
  ) {
    return pick(
      `${yearsOfExperience}+ years, starting 1 April 2021.`,
      `Pawan’s professional clock starts on 1 April 2021, so that’s ${yearsOfExperience}+ years today. In that time he’s worked at five companies and shipped 14+ products — React Native apps on both stores, Next.js/React web apps, and backend work with Node, Firebase, and payments.`,
      detailed
    );
  }

  if (includesAny(query, ["educat", "degree", "college", "university", "m.tech", "mtech", "b.tech", "btech", "study", "studied", "qualification"])) {
    return pick(
      "M.Tech in CSE (2018) after a B.Tech in CSE (2015), both in Rohtak.",
      `He completed an M.Tech in Computer Science & Engineering at Maharishi Dayanand University, Rohtak (July 2016 – May 2018), after a B.Tech in CSE at Shri Baba Mast Nath Engineering College, Rohtak (July 2011 – May 2015).`,
      detailed
    );
  }

  if (includesAny(query, ["certif", "hackerrank", "iit"])) {
    return pick(
      "HackerRank React and JavaScript, plus IIT Kanpur systems security and a hardware/networking cert.",
      `Certifications on his resume:\n${certifications.map((item) => `• ${item.name} — ${item.issuer}`).join("\n")}`,
      detailed
    );
  }

  if (includesAny(query, ["company", "companies", "employer", "work history", "worked at", "experience", "career", "job", "jobs", "role"])) {
    const namedJob = jobDocs
      .map((doc) => ({ doc, score: scoreDoc(tokens(query), doc) }))
      .sort((a, b) => b.score - a.score)[0];
    if (namedJob && namedJob.score >= 6) {
      return pick(shortJob(namedJob.doc.job), longJob(namedJob.doc.job), detailed);
    }
    return pick(
      "Five companies: Dogra, Vesure, Yes It Labs, Total Synergy, and Sigroo — mostly React Native, with React web mixed in.",
      `He’s worked at five companies, newest first:\n${expCards.map((job) => `• ${job.title} at ${job.company} — ${job.review}`).join("\n")}\nAsk me to explain a company for a deeper look.`,
      detailed
    );
  }

  const matchedSkill = findSkill(query);
  const askingSkill =
    Boolean(matchedSkill) &&
    includesAny(query, [
      "skill", "stack", "tech", "know", "use", "using",
      "work with", "familiar", "expert", "proficient",
    ]);

  if (askingSkill && matchedSkill) {
    const related = relatedProjects(matchedSkill);
    return pick(
      `Yes — ${matchedSkill.name} is in his toolkit.`,
      `Yes. ${matchedSkill.name} shows up in Pawan’s resume and shipped work.${related.length ? ` You’ll see it in ${related.slice(0, 5).join(", ")}.` : ""} His core stack around it is React, React Native, Next.js, Node.js, Firebase, and Stripe/Razorpay.`,
      detailed
    );
  }

  if (includesAny(query, ["skill", "skills", "stack", "tech", "technolog", "language", "framework", "database", "tools"])) {
    return pick(
      "React, React Native, and Next.js on the front; Node and Firebase on the back; Stripe and Razorpay for payments.",
      `Here’s the fuller toolkit from his resume.\nLanguages: JavaScript, HTML, CSS, SQL, Java, C/C++, ASP.NET.\nFrameworks: React, React Native, Next.js, Express, Tailwind, Material-UI, Ant Design.\nPlatforms: Firebase, AWS, REST APIs, Google Maps, Stripe, Razorpay, Git, Bitbucket, Xcode, App Store and Play Console.\nData: MongoDB, PostgreSQL, SQL Server, Oracle.\nHe also uses Redux, MobX, WebSockets, Mapbox, Docker, and Python on the Voice AI calling system.`,
      detailed
    );
  }

  if (includesAny(query, ["mobile", "android", "ios", "app store", "play store", "react native"])) {
    const mobile = projects.filter((project) => project.categories.includes("Mobile"));
    return pick(
      "Yes — React Native for iOS and Android, including App Store and Play Store releases.",
      `Mobile is a large part of his work. He builds React Native apps for iOS and Android and has published to both stores. That includes tablet-only inspection software and apps used in low-connectivity settings. Examples: ${mobile.map((project) => project.title).join(", ")}.`,
      detailed
    );
  }

  if (includesAny(query, ["backend", "api", "node", "server", "firebase"])) {
    return pick(
      "Yes — Node, REST APIs, Firebase, and real-time work, including a Voice AI calling system.",
      `He does backend as well as UI. Typical pieces are Node.js, Express, REST APIs, Firebase, WebSockets, and payment integrations. The Voice AI Calling System is the clearest full-stack example: React on the front, Node on the server, Python models, Asterisk for telephony, and LiveKit for live audio.`,
      detailed
    );
  }

  if (includesAny(query, ["frontend", "ui", "website", "web app"])) {
    return pick(
      "Yes — React and Next.js for sites, dashboards, and SaaS admin.",
      `On the web he uses React and Next.js for storefronts, dashboards, and SaaS. Energy Choice Parts is e-commerce with Stripe. MetaPOS, FicoMobility, and InfoRead mix frontend with mobile. Splatter is an expense portal with live updates. Robot Maker is a block-based learning UI.`,
      detailed
    );
  }

  if (includesAny(query, ["service", "offer", "freelance", "what can he", "what does he"])) {
    return pick(
      "Web apps, React Native apps, APIs, payments, maps/logistics, and restaurant/POS systems.",
      `He typically takes on:\n${services.map((item) => `• ${item.title}: ${item.desc}`).join("\n")}`,
      detailed
    );
  }

  const queryTokens = tokens(query);
  const rankedProjects = projectDocs
    .map((doc) => ({ doc, score: scoreDoc(queryTokens, doc) }))
    .sort((a, b) => b.score - a.score);

  if (rankedProjects[0]?.score >= 4) {
    const top = rankedProjects.filter((item) => item.score >= 4).slice(0, 2);
    const hit = rankedProjects[0].doc.project;
    const uniqueHit =
      top.length === 1 || rankedProjects[0].score >= (rankedProjects[1]?.score || 0) + 3;

    if (includesAny(query, ["project", "projects", "portfolio", "work", "built", "ship"])) {
      if (uniqueHit) return pick(shortProject(hit), longProject(hit), detailed);
    } else if (rankedProjects[0].score >= 6) {
      return pick(shortProject(hit), longProject(hit), detailed);
    }
  }

  if (includesAny(query, ["project", "projects", "portfolio", "work"])) {
    return pick(
      "Highlights: Energy Choice Parts, MetaPOS, and V.K. Enterprises — plus rentals, delivery, and hospital apps. Name one and I’ll summarise it.",
      `Featured work includes Energy Choice Parts (parts e-commerce), MetaPOS (restaurant SaaS), and V.K. Enterprises (hardware catalogue). Other shipped products cover car rentals (FicoMobility), sea-food delivery (BoatBites), tablet inspections (BOB), appointments, hospital booking, Delhi parcel delivery, an expense portal, and a Voice AI calling system. Ask me to explain any name for the full write-up.`,
      detailed
    );
  }

  const rankedJobs = jobDocs
    .map((doc) => ({ doc, score: scoreDoc(queryTokens, doc) }))
    .sort((a, b) => b.score - a.score);
  if (rankedJobs[0]?.score >= 6) {
    return pick(shortJob(rankedJobs[0].doc.job), longJob(rankedJobs[0].doc.job), detailed);
  }

  if (matchedSkill) {
    return pick(
      `Yes — he uses ${matchedSkill.name}.`,
      `Yes, ${matchedSkill.name} is on his resume and in shipped work. Say “explain ${matchedSkill.name}” if you want where he used it.`,
      detailed
    );
  }

  return pick(
    `I don’t have that on the resume. Try skills, a project name, or ${about.email}.`,
    `That isn’t in Pawan’s resume, so I won’t guess. Ask about experience, skills, education, or a project such as MetaPOS, BoatBites, or FicoMobility — or email ${about.email}. Add “explain” when you want the long version.`,
    detailed
  );
}
