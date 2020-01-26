import {lazy} from "react";
import {pause} from 'Helpers/utils';

const About = lazy(async () => {
  await pause();
  return import(/*webpackChunkName: "about" */ "Components/About")
});
const Experience = lazy(async () => {
  await pause();
  return import(/*webpackChunkName: "experience" */ "Components/Experience");
});
const Projects = lazy(async () => {
  await pause();
  return import(/*webpackChunkName: "projects" */ "Components/Projects");
});
const Skills = lazy(async () => {
  await pause();
  return import(/*webpackChunkName: "skills" */ "Components/Skills");
});

export {
  About,
  Experience,
  Projects,
  Skills
};
