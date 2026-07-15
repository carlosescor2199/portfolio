export type Product = {
  title: string;
  tagline: string;
  description: string;
  url: string;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
};

export const PRODUCTS: Product[] = [
  {
    title: "Primeventory",
    tagline: "Smart Inventory Management",
    description: "AI-first platform for intelligent inventory management and sales optimization.",
    url: "https://primeventory.com",
  },
  {
    title: "Flypzy",
    tagline: "The Social Network for Travelers",
    description: "Share your adventures, connect with fellow explorers, and receive tailor-made travel itineraries.",
    url: "https://flypzy.com",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "City Bikes Smarthop",
    description:
      "This project was a technical test to enter one of my jobs. It consists of a frontend and a backend and its purpose is to show on a map the availability of bicycles in the city of Miami.",
    technologies: ["Node.js", "JavaScript", "Socket.io", "React", "Leaflet", "MongoDB"],
    githubUrl: "https://github.com/carlosescor2199/city-bikes-smarthop",
  },
  {
    title: "Online Store ACME - Frontend",
    description:
      "It is a frontend made for school purposes, which is an online store of fake items in order to show how an ecommerce system would behave.",
    technologies: ["Vue.js", "Bootstrap", "Firebase"],
    githubUrl: "https://github.com/carlosescor2199/acme-frontend",
  },
  {
    title: "Online Store ACME - Backend",
    description:
      "It is a backend that implements a microservices architecture made for school purposes, it has the ability to process payments, save in database, communicate between microservices, etc.",
    technologies: ["Flask", "Express", "MongoDB"],
    githubUrl: "https://github.com/carlosescor2199/ms-reto-sd",
  },
  {
    title: "Task API - Spring Boot",
    description:
      "It is a backend made in Spring boot that communicates with a postgres database and allows to make a CRUD of tasks.",
    technologies: ["Java", "PostgreSQL", "Spring Boot"],
    githubUrl: "https://github.com/carlosescor2199/task-api-spring-boot",
  },
  {
    title: "Task API - Go",
    description: "It is a backend made in GO that allows to make a CRUD of tasks using Gorilla Mux.",
    technologies: ["Go", "Gorilla Mux"],
    githubUrl: "https://github.com/carlosescor2199/REST-API-GO",
  },
  {
    title: "Authentication Template",
    description:
      "I created this project in order to have a template with authentication ready, when starting a project with nestjs.",
    technologies: ["Node.js", "NestJS", "MongoDB"],
    githubUrl: "https://github.com/carlosescor2199/authentication-template-nest",
  },
];
