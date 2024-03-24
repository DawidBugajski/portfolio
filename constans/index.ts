export const LOGO_GITHUB = '/github.svg';

export const LOGOS = [
  { src: '/typescript.svg', alt: 'TypeScript' },
  { src: '/javascript.svg', alt: 'Javascript' },
  { src: '/react.svg', alt: 'React' },
  { src: '/nextjs.svg', alt: 'Next.js' },
  { src: '/vue.svg', alt: 'Vue' },
  { src: '/redux.svg', alt: 'Redux / Redux Toolkit' },
  { src: '/tailwind.svg', alt: 'Tailwind CSS' },
  { src: '/styled-components.svg', alt: 'Styled Components' },
  { src: '/sass.svg', alt: 'SASS' },
  { src: '/bootstrap.svg', alt: 'Bootstrap' },
  { src: '/git.svg', alt: 'Git' },
  { src: '/prestashop.svg', alt: 'Presta' },
  { src: '/joomla.svg', alt: 'Joomla' },
  { src: '/mongo.svg', alt: 'MongoDB' },
  { src: '/php.svg', alt: 'PHP' },
  { src: '/mysql.svg', alt: 'MySQL' },
  { src: '/node.svg', alt: 'Node.js' },
  { src: '/adobexd.svg', alt: 'Adobe XD' },
  { src: '/figma.svg', alt: 'Figma' },
];

export const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
];

export const EXPERIENCE = [
  {
    startYear: '2023',
    title: 'Frontend Developer',
    content:
      'In my current role as a Frontend Developer at Emotivo, I specialize in crafting cutting-edge interfaces using React, enriched with the robust functionality of JavaScript and TypeScript. Working within an Agile Scrum framework, I collaborate closely with project managers, business stakeholders, and graphic designers to drive the development of innovative features and ensure that each project aligns with our strategic vision. My responsibilities include not only creating new components and pioneering advancements in our projects but also exploring back-end technologies to broaden my full-stack development skills. This cross-disciplinary expertise enables me to contribute a comprehensive understanding to our development lifecycle, fostering a seamless integration of front-end and back-end paradigms, and pushing the boundaries of user-centric design.',
  },
  {
    startYear: '2022',
    title: 'New Product Development Manager',
    content:
      'Transitioning to a New Product Development Manager at WeNet, I leveraged my programming expertise to create reusable components and templates that established the foundation for our web projects. My role was characterized by a significant involvement in the coding aspects of product development, including the architecture of high-fidelity prototypes and wireframes. This position allowed me to refine a product vision that balanced technical innovation with user-centric design, facilitating developers to craft interactive and dynamic websites.',
  },
  {
    startYear: '2019',
    title: 'Web Developer',
    content:
      'As a Web Developer at WeNet, I dedicated myself to the creation and deployment of hundreds of cutting-edge websites. My daily tasks included writing robust, clean code and implementing responsive design principles to ensure an optimal user experience across multiple devices. I engaged in productive collaborations with graphic designers to translate visual concepts into functional online experiences, and with project managers to streamline development workflows. I was also responsible for optimizing website performance and implementing SEO best practices to maximize online visibility.',
  },
];

export const PROJECTS = [
  {
    title: 'Prezentmarzeń',
    src: '/prezent-marzen.png',
    href: 'https://prezentmarzen.com/',
    content:
      "PrezentMarzen stands as one of the largest online stores in Poland, renowned for its extensive selection of experiential gifts. With local stands across the country, it offers customers the unique opportunity to choose from a wide array of activities to enjoy. Whether it's the thrill of driving a Formula 1 race car or the adrenaline rush of skydiving, PrezentMarzen provides an unmatched variety of experiences designed to create unforgettable memories. This platform caters to all tastes and interests, ensuring there's something special for everyone looking to make their dreams come true.",
    technologies: [
      'TypeScript',
      'React',
      'Redux / Redux Toolkit',
      'SASS',
      'Styled Components',
      'Presta',
      'PHP',
      'MySQL',
    ],
  },
  {
    title: 'WeNet',
    src: '/wenet.png',
    href: 'https://projekty.wenet.pl/',
    content:
      "As a Web Developer at WeNet, I had the privilege of crafting hundreds of websites, tailoring each from available templates to meet the specific needs of our clients. My journey evolved as I stepped into the role of New Product Development Manager, where I focused on creating hundreds of reusable components. These components were the building blocks for over 100 unique website layouts, allowing our team to offer clients highly personalized websites. By efficiently showcasing these layouts, we enabled our staff to mix and match components on the fly, providing a bespoke website that truly reflected the individuality of each client's brand.",
    technologies: ['Javascript', 'Bootstrap', 'Joomla'],
  },
  {
    title: 'GameWorld',
    src: '/gameworld.png',
    href: 'https://dawidbugajski.github.io/gameworld/',
    content:
      "GameWorld is a passion project of mine that reflects my love for gaming. It's a comprehensive database where enthusiasts can find information on over 500,000 games spanning various genres and platforms. This project aims to be a one-stop resource for gamers seeking insights, reviews, and news about their favorite titles or discovering new ones. By curating a vast amount of gaming data, GameWorld serves as a vibrant community hub for gamers worldwide, promoting engagement and sharing a deep appreciation for the art and evolution of video games.",
    technologies: [
      'TypeScript',
      'React',
      'Redux / Redux Toolkit',
      'Tailwind CSS',
    ],
    repoHref: 'https://github.com/DawidBugajski/gameworld',
    repoSrc: '/github.svg',
  },
  {
    title: 'Kanban',
    src: '/kanban.png',
    href: 'https://kanban-task-management-ecru.vercel.app/',
    content:
      "Kanban is a task management project designed to enhance productivity and organization for individuals and teams alike. Inspired by the principles of Jira and Trello, it allows users to create customized boards, tasks, and workflows tailored to their specific project needs. Kanban stands out by offering an intuitive interface coupled with powerful features that streamline project tracking and collaboration. It's built on the premise that effective task management should be accessible, flexible, and scalable, accommodating everything from personal projects to complex team-based endeavors. Kanban empowers users to visualize their work, manage deadlines, and achieve their goals more efficiently.",
    technologies: [
      'TypeScript',
      'React',
      'Next.js',
      'Redux / Redux Toolkit',
      'Tailwind CSS',
    ],
    repoHref: 'https://github.com/DawidBugajski/kanban-task-management',
    repoSrc: '/github.svg',
  },
];
