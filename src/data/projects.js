import todo from "../assets/images/todo.png";
import weather from "../assets/images/weather.png";
import portfolio from "../assets/images/portfolio.png";
import ticketsystem from "../assets/images/ticket-management-system.png";
import resume from "../assets/images/tailwind-portfolio.png";

const projects = [
  {
    id: 1,
    title: "Ticket Management System",
    description:
      "A full-stack role-based ticket management platform built with Spring Boot, React, and MySQL, featuring JWT authentication, automated ticket assignment, real-time ticket workflows, dashboards, comments, and secure role-based access for Admins, Agents, and Users.",
    image: ticketsystem,
    tags: [
      "React",
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "Bootstrap",
    ],
    github: "https://github.com/adarshas-dev/ticket-management-system",
    demo: "https://ticket-management-system-tawny.vercel.app",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "A modern cinematic developer portfolio built with React and Tailwind CSS, featuring immersive UI animations, interactive layouts, glowing visual effects, responsive design, and smooth user interactions.",
    image: resume,
    tags: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Responsive UI",
      "Animations",
    ],
    github: "https://github.com/adarshas-dev/portfolio",
    demo: "https://adarshas-dev.github.io/portfolio/",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "A modern React-based weather application that provides real-time weather data, interactive map-based location tracking, dynamic weather visuals, and dark/light mode support with a responsive user interface.",
    image: weather,
    tags: [
      "React",
      "JavaScript",
      "Weather API",
      "Interactive Maps",
      "Responsive UI",
    ],
    github: "https://github.com/adarshas-dev/weather_app",
    demo: "https://weathery-web-app.vercel.app",
  },

{
  id: 4,
  title: "To-Do List App",
  description:
    "A clean and responsive task management application built with Vanilla JavaScript, featuring dynamic task handling, DOM manipulation, task completion tracking, and an intuitive user interface for managing daily activities.",
  image: todo,
  tags: [
    "JavaScript",
    "HTML5",
    "CSS3",
    "DOM Manipulation",
    "Responsive UI"
  ],
  github: "https://github.com/adarshas-dev/todo-list",
  demo: "https://adarshas-dev.github.io/todo-list/",
},
];

export default projects;
