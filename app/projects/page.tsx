import { projects } from "../../data/projects";

async function getProjects() {


  return projects;
}

 export default async function Page() {

  const projects = await getProjects()

  console.log({projects})

   return <main>Projects</main>;
 };

