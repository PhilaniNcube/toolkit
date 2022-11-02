import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../data/projects";

async function getProject(slug: string) {

const project = projects.find(project => project.slug === slug);

return project;

}

const page = async ({params: {slug}}:{params: {slug:string}}) => {

  let project = await getProject(slug)

  const firstLetter = project?.title.charAt(0)



  return (
    <section className="px-3">
      <div className="relative isolate">
        <Image
          src={project?.image.url || "/images/logo.svg"}
          alt={project?.slug || "Image"}
          className="w-full object-cover rounded-t-xl"
          width={project?.image.width}
          height={project?.image.height}
        />
        <span className="p-4 h-20 w-20 bg-orange-500 border-4 border-white absolute -bottom-8 text-white font-bold text-4xl left-3 rounded-lg flex items-center justify-center">{firstLetter}</span>
      </div>
      <div className="w-full mt-10">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800">
          {project?.title}
        </h2>

        <p className="text-base mb-6 text-slate-700 tracking-wider mt-3">
          {project?.description}
        </p>

        <Link
          href="/"
          className="bg-green-500 rounded-md text-white font-medium w-1/2 text-xl px-6 py-2"
        >
          View Project
        </Link>
      </div>
    </section>
  );
};
export default page;
