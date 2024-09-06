"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ContactMeButton } from "@/components/common";

const projects = [
  {
    title: "City Bikes Smarthop",
    description:
      "This project was a technical test to enter one of my jobs. It consists of a frontend and a backend and its purpose is to show on a map the availability of bicycles in the city of Miami.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Node.js", "JavaScript", "Socket.io", "React", "Leaflet", "MongoDB"],
    githubUrl: "https://github.com/carlosescor2199/city-bikes-smarthop",
    liveUrl: "",
  },
  {
    title: "Online Store ACME - Frontend",
    description:
      "It is a frontend made for school purposes, which is an online store of fake items in order to show how an ecommerce system would behave.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Vue.js", "Boostrap", "Firebase"],
    githubUrl: "https://github.com/carlosescor2199/acme-frontend",
    liveUrl: "",
  },
  {
    title: "Online Store ACME - Backend",
    description:
      "It is a backend that implements a microservices architecture made for school purposes, it has the ability to process payments, save in database, communicate between microservices, etc.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Flask", "Express", "MongoDB"],
    githubUrl: "https://github.com/carlosescor2199/ms-reto-sd",
    liveUrl: "",
  },
  {
    title: "Task API - Spring Boot",
    description:
      "It is a backend made in Spring boot that communicates with a postgres database and allows to make a CRUD of tasks.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Java", "PostgreSQL", "Spring Boot"],
    githubUrl: "https://github.com/carlosescor2199/task-api-spring-boot",
    liveUrl: "",
  },
  {
    title: "Task API - Go",
    description: "It is a backend made in GO that allows to make a CRUD of tasks using Gorilla Mux.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Node.js", "NestJS", "MongoDB"],
    githubUrl: "https://github.com/carlosescor2199/REST-API-GO",
    liveUrl: "",
  },
  {
    title: "Authentication Template",
    description:
      "I created this project in order to have a template with authentication ready, when starting a project with nestjs.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Node.js", "NestJS", "MongoDB"],
    githubUrl: "https://github.com/carlosescor2199/authentication-template-nest",
    liveUrl: "",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            y: 20,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 0.5, ease: "circInOut" },
          },
        }}
        className="lg:mx-26 mx-8 flex flex-1 flex-col py-12"
      >
        <h2 className="mb-4 text-center text-3xl font-bold">My Projects</h2>
        <p className="mb-8 text-center text-gray-800">here are some of the personal projects that I have worked on</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-grow flex-col justify-between">
                <CardDescription>{project.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <Image src="/images/logos/github.svg" alt="GitHub" height={24} width={24} />
                  View on GitHub
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Button
          variant="outline"
          onClick={() => window.open("https://github.com/carlosescor2199", "_blank")}
          className="mt-8 flex items-center justify-center gap-2"
        >
          <Image src="/images/logos/github.svg" alt="GitHub" height={24} width={24} />
          View More Projects
        </Button>
      </motion.section>
      <ContactMeButton />
    </>
  );
}
