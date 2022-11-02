import { ReactNode } from "react";
import Filters from "./Filters";
import SearchBox from "./SearchBox";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { projects } from "../../data/projects";



async function getProjects() {
  return projects;
}

const layout = async ({children}:{children:ReactNode}) => {



const projects = await getProjects()

  return (
    <main className="container mx-auto px-4 py-6 flex gap-3">
      <aside className="max-w-lg w-72 min-h-screen">
        <SearchBox />
        <Filters />
      </aside>
      <div className="flex-1 max-h-screen flex gap-2">
        <div className="w-1/2 overflow-y-scroll scroll-m-0 px-2">
          <h3 className="text-2xl font-medium text-red-600 mb-2">
            Search Results
          </h3>
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.id}>
              <article className="bg-slate-50 focus:bg-green-600 hover:bg-green-600 group transition-all duration-300 rounded-lg cursor-pointer shadow-md my-6 w-full p-3">
                <h4 className="text-xl font-bold group-hover:text-white text-slate-900">
                  {project.title}
                </h4>
                <span className="flex space-x-3 items-center">
                  <p className="text-xs w-1/3 group-hover:text-white">
                    Interventions:
                  </p>
                  <pre className="">
                    {project.intervention.map((item, i) => (
                      <small
                        className="px-1 mx-1 bg-gray-300 group-hover:bg-green-200 text-slate-800 py-1"
                        key={i}
                      >
                        {item}
                      </small>
                    ))}
                  </pre>
                </span>
                <span className="flex space-x-3 mt-3 items-center">
                  <p className="text-xs w-1/3 group-hover:text-white">
                    Topics Covered:
                  </p>
                  <pre className="">
                    {project.topics.map((item, i) => (
                      <small
                        className="px-1 mx-1 bg-gray-300 group-hover:bg-green-200 text-slate-800 py-1"
                        key={i}
                      >
                        {item}
                      </small>
                    ))}
                  </pre>
                </span>
                <span className="flex space-x-3 mt-3 items-center">
                  <p className="text-xs w-1/3 group-hover:text-white">
                    Duration:
                  </p>
                  <pre className="">
                    {project.duration.map((item, i) => (
                      <small
                        className="px-1 mx-1 bg-gray-300 group-hover:bg-green-200 text-slate-800 py-1"
                        key={i}
                      >
                        {item}
                      </small>
                    ))}
                  </pre>
                </span>
                <span className="flex space-x-3 mt-3 items-center">
                  <p className="text-xs w-1/3 group-hover:text-white">
                    Age Group:
                  </p>
                  <pre className="">
                    {project.age.map((item, i) => (
                      <small
                        className="px-1 mx-1 bg-gray-300 group-hover:bg-green-200 text-slate-800 py-1"
                        key={i}
                      >
                        {item}
                      </small>
                    ))}
                  </pre>
                </span>
              </article>
            </Link>
          ))}
        </div>

        <div className="flex-1">{children}</div>
      </div>
    </main>
  );
};
export default layout;
