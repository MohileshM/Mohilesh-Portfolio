
export const Bio = {
  name: "Mohilesh M",
  roles: [
    "Full Stack Developer",
    "Programmer",
  ],
  description:
    `Full-Stack Developer engineering scalable, high-performance web applications. I build complete digital solutions by pairing reactive, pixel-perfect user interfaces in React with robust, secure backend architectures in Node.js and Express. Driven by clean code design, optimized database structures, and seamless API integrations, I transform complex ideas into reliable, production-ready software built to scale.`,
  github: "https://github.com/MohileshM",
  resume:  "https://drive.google.com/file/d/1_KBNRZA2S8evIKZcLzxVVHjzaMsH1i4v/view?usp=sharing",
 linkedin: "https://www.linkedin.com/in/mohilesh-m-713693291/",
  
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "/logos/react.png",
      },
      {
        name: "Redux",
        image:
          "/logos/redux.png",
      },
       
      {
        name: "HTML",
        image: "/logos/html.jpg",
      },
      {
        name: "CSS",
        image:
          "/logos/css.png",
      },
      {
        name: "JavaScript",
        image:
          "/logos/javascript.png",
      },
      {
        name: "Bootstrap",
        image:
          "/logos/bootstrap.jpg",
      },
      {
        name: "Material UI",
        image:
          "/logos/materialui.png",
      },
      {
        name: "Tailwind CSS",
        image:
          "/logos/tailwindcss.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "/logos/nodejs.png",
      },
      {
        name: "Express Js",
        image:
          "/logos/expressjs.png",
       }, {
        name: "MySQL",
        image:
          "/logos/mysql.png",
      },
      {
        name: "Netlify",
        image: "/logos/netlify.png",
      },
      {
        name: "MongoDB",
        image:
          "/logos/mongodb.png",
      },
      {
        name: "RENDER",
        image: "/logos/render.png",
      },
      {
        name: "MongoDB Atlas ",
        image: "/logos/mongoatlas.png",
      },
    ],
  },
  
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: "/logos/git.png", 
           },
      {
        name: "GitHub",
        image:
          "/logos/github.png",
      },
      {
        name: "Netlify",
        image:
          "/logos/netlify.png",
      },
      {
        name: "VS Code",
        image:
          "/logos/vscode.png",
      },
      {
        name: "Postman",
        image: "/logos/postman.png"
      },
      {
        name: "React Bootstrap ",
        image:"/logos/reactbootstrap.png",
       },
    ],
  },
];


export const education = [
  {
    id: 0,
    img:"/logos/collage.jpg",
    school: "Sri ramakrishna institute of technology ,pachapalayam, coimbatore",
     grade: "75%",
   //  date:"2022",
   degree: "BE in Computer Science and Engineering",
    desc: "I have completed my Bachelor's degree in Computer Science from Sri Ramakrishna Institute of Technology with an aggregate of 75%. After graduating, I pursued and completed a Full Stack Developer course on the GUVI platform.",
    course: "MERN Stack",
  },
  {
    id: 1,
    img: "/logos/school.jpg",
    school: "parimalam matric hr sec school",
   // date: "Mar 2018",
    grade: "72.75%",
    desc: "I completed my class 12 high school education at Parimalam school, Dinnur, where I studied Science with Computer Science.",
    degree: "HSLC-12TH,Hosur, Science with Computer",
  },
  {
    id: 2,
    img: "/logos/school.jpg",
    school: "parimalam matric hr sec school",
   // date: "Mar 2016",
    grade: "85.8%",
    desc: "I completed my class 10 education at parimalam school, Dinnur",
    degree: "SSLC-10TH, Hosur",
  },
];

export const projects = [
   {
    id: 1,
    title: "AeroBook — Domestic Flight Booking & Analytics Platform",
    description: "Domestic Flight Booking & Analytics Platform : A full-stack Indian domestic flight search, booking, and management platform built with React, Node.js, Express, and MongoDB. Features real-time route filtering across 15+ major cities, interactive seat selection, instant PNR generation, and JWT-authenticated user management with booking cancellations. Includes an automated rolling-flight generator to ensure continuous schedule availability and a robust admin analytics dashboard powered by Recharts for tracking revenue trends, booking volume, and market share.",
    image: "/aerobook.png",
    tags: ["React", "Vite", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Recharts", "JWT"],
    category: "web app",
    github: "https://github.com/MohileshM/Mern-AeroBook-Client.git",
    backend: "https://github.com/MohileshM/Mern-AeroBook-Server.git",
    webapp: "https://aerobook7.netlify.app/"
  },
  {
    id: 2,
    title: "Spice Rail — Food Order Management System",
    description: "A ticket-rail themed full-stack order management and kitchen operations platform built for high-tempo food service. Features live status tracking across the order lifecycle (Pending → Preparing → Ready → Completed), interactive menu catalog CRUD with image and availability controls, and a ticket-rail UI styled with custom design tokens. Includes JWT role-based access control (Admin/Staff) and an executive dashboard powered by Chart.js displaying revenue trends, order status splits, and top-selling items.",
    image: "/spicerail.png",
    tags: ["React 18", "Bootstrap 5", "Node.js", "Express.js", "MongoDB", "Chart.js", "JWT"],
    category: "web app",
    github: "https://github.com/MohileshM/Mern-SpiceRail-Client.git",
    backend: "https://github.com/MohileshM/Mern-SpiceRail-Server.git",
    webapp: "https://spicerail7.netlify.app/"
  },
  {
    id: 3,
    title: "QuillAI — Real-Time AI Workspace Platform",
    description: "A fast, single-page AI writing assistant and conversational platform leveraging Google Gemini for real-time text generation via Server-Sent Events (SSE). Features word-by-word streaming responses, session-synced prompt history with full MongoDB persistence, and secure JWT-based user authentication. Styled with Tailwind CSS v4, it offers a clean, minimalist UI optimized for low-latency AI interactions and session tracking across devices.",
    image: "/quillai.png",
    tags: ["React 18", "Vite", "Tailwind CSS v4", "Node.js", "Express.js", "MongoDB", "Google Gemini API", "SSE", "JWT"],
    category: "web app",
    github: "https://github.com/MohileshM/Mern-quillai-frontend.git",
    backend: "https://github.com/MohileshM/Mern-quillai-backend.git",
    webapp: "https://quillai7.netlify.app/"
  },
  {
    id: 4,
    title: "DoneFlow — Minimalist Analog Todo Platform",
    description: "A full-stack task management application designed around an analog paper-ledger visual identity. Built on the MERN stack, it features optimistic UI updates for zero-latency task operations (create, inline edit, complete, delete) alongside background database synchronization. Includes live stats tracking open versus completed tasks, dynamic status filtering, and custom CSS styling for a responsive, clean user experience.",
    image: "/doneflow.png",
    tags: ["React 18", "Node.js", "Express.js", "MongoDB", "Mongoose", "CSS3"],
    category: "web app",
    github: "https://github.com/MohileshM/Mern-DoneFlow-Client.git",
    backend: "https://github.com/MohileshM/Mern-DoneFlow-Server.git",
    webapp: "https://doneflowtodo.netlify.app/"
  },
  {
    id: 5,
    title: "Attendance Portal",
    description: "A full-stack portal for tracking attendance and managing student task submissions with teacher review and validation features.",
    image: "/attendance.png",
    tags: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "JWT", "BcryptJS", "Cors", "Formik"],
    category: "web app",
    github: "https://github.com/MohileshM/Previous-Projects/tree/main/Tasks/Attendance-Portal-Client",
    backend: "https://github.com/MohileshM/Previous-Projects/tree/main/Tasks/Attendance-Portal-Server",
    webapp: "https://attendance-portal-guvi.netlify.app/"
  },
  {
    id: 6,
    title: "Library App",
    description: "Book management app using Formik for forms and React Router for navigation.",
    image: "/library.png",
    tags: ["Formik", "ReactJS", "CSS", "React-router-dom", "JSX"],
    category: "future use",
    github: "https://github.com/MohileshM/Previous-Projects/tree/main/Tasks/Day-31-Task-Formik-library",
    webapp: "https://formik-task-library.netlify.app/"
  },
  {
    id: 7,
    title: "Axios User CRUD",
    description: "User CRUD operations with Axios and Context API in React.",
    image: "/axios.png",
    tags: ["ReactJS", "React-router-dom", "Axios", "ContextAPI", "CSS", "JSX"],
    category: "future use",
    github: "https://github.com/MohileshM/Previous-Projects/tree/main/Tasks/Day-30-Task-Axios",
    webapp: "https://axios-tasks.netlify.app/"
  },
  {
    id: 8,
    title: "Guvi Blogs React Router Demo",
    description: "Guvi Blogs a single Page App demonstrating routes and nested components using React Router.",
    image: "/router.png",
    tags: ["ReactJS", "React-router-dom", "CSS", "JSX"],
    category: "future use",
    github: "https://github.com/MohileshM/Previous-Projects/tree/main/Tasks/Day-26-Task-React-Router",
    webapp: "https://react-router-tasks.netlify.app/"
  },
    {
    id: 9,
    title: "Banner Animation",
    description: "Creative animated banner using pure CSS and JavaScript.",
    image: "/banner.png",
    tags: ["Javascript", "CSS"],
    category: "future use",
    github: "https://github.com/MohileshM/Previous-Projects/tree/main/Tasks/Day-12-Tasks-Banner-2",
    webapp: "https://earnest-yeot-11bef2.netlify.app/"
  },
  {
    id: 10,
    title: "Dad Jokes API",
    description: "Fetches and displays random dad jokes using public API with basic styling.",
    image: "/dadjoke.png",
    tags: ["HTML", "GoogleFonts", "CSS", "Javascript"],
    category: "future use",
    github: "https://github.com/MohileshM/Previous-Projects/tree/main/Tasks/Day-20-Tasks-DadJokesApi",
    webapp: "https://dadjokestasks.netlify.app/"
  },
  {
    id: 11,
    title: "Weather App",
    description: "Fetch and display real-time weather data using OpenWeather API.",
    image: "/weather.png",
    tags: ["Javascript", "HTML", "API", "HTTPRequest"],
    category: "future use",
    github: "https://github.com/MohileshM/Previous-Projects/tree/main/Tasks/Day-20-Tasks-WeatherApi",
    webapp: "https://weatherapitasks.netlify.app/"
  },

];