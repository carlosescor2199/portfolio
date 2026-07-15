import {
  AngularIcon,
  AWSIcon,
  DockerIcon,
  ExpressIcon,
  GraphQLIcon,
  JavaScriptIcon,
  MongoDBIcon,
  NestJSIcon,
  NextJSIcon,
  NodeJSIcon,
  PostgreSQLIcon,
  PythonIcon,
  ReactIcon,
  RedisIcon,
  SpringBootIcon,
  TypeScriptIcon,
} from "@/components/common";

export type Technology = {
  name: string;
  icon: React.ReactNode;
};

const ICON_CLASSNAME = "h-12 w-12 md:h-14 md:w-14";

export const TECHNOLOGIES: Technology[] = [
  { name: "JavaScript", icon: <JavaScriptIcon className={ICON_CLASSNAME} /> },
  { name: "TypeScript", icon: <TypeScriptIcon className={ICON_CLASSNAME} /> },
  { name: "Node.js", icon: <NodeJSIcon className={ICON_CLASSNAME} /> },
  { name: "React", icon: <ReactIcon className={ICON_CLASSNAME} /> },
  { name: "Next.js", icon: <NextJSIcon className={ICON_CLASSNAME} /> },
  { name: "Angular", icon: <AngularIcon className={ICON_CLASSNAME} /> },
  { name: "Express", icon: <ExpressIcon className={ICON_CLASSNAME} fill="currentColor" /> },
  { name: "NestJS", icon: <NestJSIcon className={ICON_CLASSNAME} /> },
  { name: "GraphQL", icon: <GraphQLIcon className={ICON_CLASSNAME} /> },
  { name: "Spring Boot", icon: <SpringBootIcon className={ICON_CLASSNAME} /> },
  { name: "Python", icon: <PythonIcon className={ICON_CLASSNAME} /> },
  { name: "MongoDB", icon: <MongoDBIcon className={ICON_CLASSNAME} /> },
  { name: "PostgreSQL", icon: <PostgreSQLIcon className={ICON_CLASSNAME} /> },
  { name: "Redis", icon: <RedisIcon className={ICON_CLASSNAME} /> },
  { name: "Docker", icon: <DockerIcon className={ICON_CLASSNAME} /> },
  { name: "Amazon Web Services", icon: <AWSIcon className={ICON_CLASSNAME} fill="currentColor" /> },
];
