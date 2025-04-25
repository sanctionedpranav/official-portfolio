export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Translating ideas into interactive UI with clear communication.",
    description: "Strong client collaboration.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Timezone-flexible workflows.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My frontend stack.",
    description: "React.js, Next.js, TypeScript, Redux, Tailwind, GSAP. .",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "User-focused engineering.",
    description: "I build performant, accessible, scalable web interfaces.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Building a JS animation library.",
    description: "Custom animation tools using Framer Motion + GSAP.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://linkedin.com/in/sanctionedpranav",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://linkedin.com/in/sanctionedpranav",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://linkedin.com/in/sanctionedpranav",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://linkedin.com/in/sanctionedpranav",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Pranav was a seamless experience. He was instrumental in building reusable UI systems using Tailwind and React, and always prioritized accessibility and performance. His understanding of modern frontend architecture — from routing in Next.js to state management in Redux — made him an irreplaceable part of the development team. I'd trust him with any production frontend system.",
    name: "Simran Kaur",
    title: "Frontend Lead at Hostinger",
  },
  {
    quote:
      "Pranav brought a lot of stability to our codebase. He writes clean, modular components and always considers scalability in his approach. He’s someone who quietly solves hard problems and makes the overall development process more predictable.",
    name: "Ravi Ahuja",
    title: "Senior Software Engineer at AvalonTribe",
  },
  {
    quote:
      "I appreciated Pranav’s ability to break down frontend tasks into actionable components. He was especially good at handling edge cases and making sure the user experience stayed smooth even under dynamic data or unusual flows.",
    name: "Neeraj Kulkarni",
    title: "Product Engineer at Docker",
  },
  {
    quote:
      "Pranav worked with us on a Next.js project that had strict performance and accessibility targets. His contributions helped us meet our Core Web Vitals goals without compromising on visual fidelity. He takes feedback well and works collaboratively.",
    name: "Ishita Joshi",
    title: "Project Manager at Appwrite",
  },
  {
    quote:
      "What I liked most about working with Pranav was his consistency. Whether it was a layout issue or integrating a third-party library, he approached it methodically and always delivered working solutions. A very dependable team member.",
    name: "Rahul Babu",
    title: "Tech Lead at Accenture",
  },
];

export const companies = [
  {
    id: 1,
    name: 'AvalonTribe',
    img: '/avalonTribe.png',
    customClassName: 'w-20 sm:w-28',
  },
  {
    id: 2,
    name: 'National Informatics Centre (NIC)',
    img: '/nic-logo.svg',
    customClassName: 'w-24 sm:w-64',
  },
  {
    id: 3,
    name: 'OrangeMantra',
    img: '/orangemantra-logo.svg',
    customClassName: 'w-28 sm:w-56 invert',
  },
  {
    id: 4,
    name: 'Magic EdTech',
    img: '/magicedtech.svg',
    customClassName: 'w-24 sm:w-28',
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer - AvalonTribe Infotech",
    desc: "Led UI development from scratch using React.js and Redux Saga for performance-focused products.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    modalContent: {
      paragraph:
        "At AvalonTribe, I played a key role in building robust frontend systems for large-scale web applications. My work directly impacted the delivery speed and quality of multiple projects, particularly in creating scalable admin panels and managing complex states using Redux Saga.",
      responsibilities: [
        "Developed modular, reusable components using React.js and TailwindCSS across 4+ projects.",
        "Built a fully functional Admin Panel, improving user management workflows by 40%.",
        "Integrated RESTful APIs using Express.js and Node.js for seamless frontend-backend communication.",
        "Reduced development cycles by 30% through component reuse and Tailwind design consistency.",
        "Streamlined Git workflows and deployment processes, minimizing version conflicts and bugs.",
      ],
    },
  },
  {
    id: 2,
    title: "UI Developer - National Informatics Centre (NIC)",
    desc: "Redesigned government-facing portals with performance-first approach and clean accessibility standards.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    modalContent: {
      paragraph:
        "As part of NIC (via Velocis Systems), I contributed to government web infrastructure by revamping critical UI systems, focusing on responsive design and WCAG compliance. My work helped improve accessibility and data representation across multiple devices.",
      responsibilities: [
        "Revamped a key government dashboard, improving load performance and UI structure.",
        "Used React.js to engineer high-performance UIs with dynamic data visualization components.",
        "Ensured accessibility and responsiveness across all screen sizes for public-facing applications.",
        "Designed and implemented dynamic widgets to enhance user interactivity and engagement.",
        "Boosted usability metrics by 15% by restructuring UX flow and improving clarity of content.",
      ],
    },
  },
  {
    id: 3,
    title: "Frontend Developer - OrangeMantra Pvt. Ltd.",
    desc: "Contributed to 3+ live projects including full redesign of the company website for better UX.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    modalContent: {
      paragraph:
        "At OrangeMantra, I worked on multiple enterprise projects, ensuring delivery of responsive, high-performance web pages. I also led the UI overhaul of the corporate website to align with branding and user experience standards.",
      responsibilities: [
        "Redesigned OrangeMantra’s official site, integrating new UI components and interactions.",
        "Enhanced website loading speed by 30% using image optimization and lazy-loading.",
        "Applied performance optimization techniques such as memoization and dynamic imports.",
        "Worked with stakeholders to gather frontend requirements and rapidly deploy feature updates.",
        "Used Git for version control to manage sprint-based releases across teams.",
      ],
    },
  },
  {
    id: 4,
    title: "Web Developer - Magic Software (Stratosphere IT)",
    desc: "Developed scalable React applications and transitioned legacy systems to component-based architecture.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    modalContent: {
      paragraph:
        "During my time at Magic Software (via Stratosphere IT), I transformed traditional monolithic pages into modern React-based systems, enhancing maintainability, cross-device compatibility, and user satisfaction.",
      responsibilities: [
        "Migrated legacy UI codebases to modular, component-driven React applications.",
        "Improved app performance by 30% by reducing re-renders and optimizing component hierarchy.",
        "Implemented responsive layouts for maximum usability on desktop, tablet, and mobile.",
        "Collaborated with QA and backend teams to ensure consistent delivery pipelines.",
        "Used SVN Tortoise for versioning and deployment, streamlining release cycles.",
      ],
    },
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    label: "Github",
    link: "https://github.com/sanctionedpranav", // Replace with your actual GitHub URL
  },
  {
    id: 2,
    img: "/link.svg",
    label: "LinkedIn",
    link: "https://linkedin.com/in/sanctionedpranav", // Replace with your LinkedIn URL
  },
];

export const approachSteps = [
  {
    phase: "Phase 1",
    title: "Understanding Requirements",
    description:
      "I begin with product discovery and tech assessment — defining scope, setting expectations, and translating business goals into frontend architecture.",
    bg: "bg-gradient-to-br from-[#1f1b3a] to-[#3c2677]",
    animationSpeed: 5.1,
    colors: undefined,
  },
  {
    phase: "Phase 2",
    title: "Design Systems & Development",
    description:
      "I architect modular, performant UIs with React, Tailwind, and Next.js — prioritizing accessibility, scalability, and code maintainability from the start.",
    bg: "bg-gradient-to-br from-[#2b0a3d] to-[#8e2de2]",
    animationSpeed: 3,
    colors: [
      [236, 72, 153],
      [232, 121, 249],
    ],
  },
  {
    phase: "Phase 3",
    title: "Testing, Feedback & Handoff",
    description:
      "I ensure smooth deployment, bug fixes, and responsive feedback loops — handing over clean code and docs, and staying available for iterations.",
    bg: "bg-gradient-to-br from-[#083344] to-[#0ea5e9]",
    animationSpeed: 3,
    colors: [[125, 211, 252]],
  },
];