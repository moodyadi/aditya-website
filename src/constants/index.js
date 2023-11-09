import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  cts,
  school,
  mit,
  moodya,
  moodyb,
  moodyc,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "DevOps",
    icon: mobile,
  },
  {
    title: "Amazon Web Services",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Programmer Analyst",
    company_name: "Cognizant",
    icon: cts,
    iconBg: "#383E56",
    date: "March 2022 - Current",
    points: [
      "I Work with and provide essential support for DevOps CI/CD tools such as GIT, Jenkins, OpenShift, Ansible, IBM UrbanCode, SonarQube, and troubleshoot issues as they arise.",
      "Contribution in stable and efficient deployment and migration processes, ensuring minimal disruption to production systems",
      "While working, I have diligently cultivated foundational expertise in key technologies and languages.",
      "These include MERN (MongoDB, Express.js, React, Node.js), Apache HTTP Servers, AWS, Docker, SonarCloud, Kubernetes, and Jenkins.",
    ],
  },
  {
    title: "Engineering Graduate",
    company_name: "MIT AOE, Pune",
    icon: mit,
    iconBg: "#E6DEDD",
    date: "Aug 2017 - Aug 2021",
    points: [
      "Completed UG Degree in Mechanical Engineering from Savitribai Phule University, Pune",
      "CGPA: 7.57",
    ],
  },
  {
    title: "Higher & Secondary School",
    company_name: "Maharastra State Board",
    icon: school,
    iconBg: "#383E56",
    date: "June 2014  - June 2017",
    points: [
      "Completed HSC (12th) with 86.56%",
      "Completed SSC (10th) with 94.80%",
    ],
  },
  /*{
    title: "Job Title",
    company_name: "logoo",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },*/
];

/*const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]; */

const projects = [
  {
    name: "Old Delhi-पुरानी दिल्ली",
    description:
      "Humayun's Tomb: A 16th-century Mughal Architectural Masterpiece, where love and artistry intertwine, inspiring the Taj Mahal's grandeur.",
    tags: [
      {
        name: "travel",
        color: "blue-text-gradient",
      },
      {
        name: "photography",
        color: "green-text-gradient",
      },
      {
        name: "architecture",
        color: "pink-text-gradient",
      },
    ],
    image: moodya,
    source_code_link: "https://www.instagram.com/moodyadi/com/",
  },
  {
    name: "Hopeful Bloom",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "solitude Bloom",
        color: "blue-text-gradient",
      },
      {
        name: "minimalism",
        color: "green-text-gradient",
      },
      {
        name: "surrealart",
        color: "pink-text-gradient",
      },
    ],
    image: moodyb,
    source_code_link: "https://www.instagram.com/moodyadi/com/",
  },
  {
    name: "Ethereal Mistfleet",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "yamuna ghat",
        color: "blue-text-gradient",
      },
      {
        name: "winter",
        color: "green-text-gradient",
      },
      {
        name: "art of visuals",
        color: "pink-text-gradient",
      },
    ],
    image: moodyc,
    source_code_link: "https://www.instagram.com/moodyadi/com/",
  },
];

export { services, technologies, experiences, projects };
