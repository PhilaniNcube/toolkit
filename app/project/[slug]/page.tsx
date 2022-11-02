import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { projects } from "../../../data/projects";

async function getProject(slug: string) {
  const project = projects.find((project) => project.slug === slug);

  return project;
}

const page = async ({ params: { slug } }: { params: { slug: string } }) => {

  const project = await getProject(slug)
  const firstLetter = project?.title.charAt(0);

  return (
    <Fragment>
      <Head>
        <title>Project</title>
      </Head>
      <main className="container px-4 mx-auto py-6">
        <div className="grid grid-cols-2 gap-4">
          <section className="px-3">
            <div className="relative isolate">
              <Image
                src={project?.image.url || "/images/logo.svg"}
                alt={project?.slug || "Image"}
                className="w-full max-h-[300px] object-top object-cover rounded-t-xl"
                width={project?.image.width}
                height={project?.image.height}
              />
              <span className="p-4 h-20 w-20 bg-orange-500 border-4 border-white absolute -bottom-8 text-white font-bold text-4xl left-3 rounded-lg flex items-center justify-center">
                {firstLetter}
              </span>
            </div>
            <div className="w-full mt-10">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                {project?.title}
              </h2>

              <p className="text-base mb-6 text-slate-700 tracking-wider mt-3">
                {project?.description}
              </p>

              <div className="border-1 border-slate-500 rounded-lg grid grid-cols-4">


                <div className="w-full">
                  <h4 className="text-lg font-bold text-slate-700">
                    Intervention Type
                  </h4>
                  <div className="flex flex-col space-y-3">
                    {project?.intervention.map((item, i) => (
                      <span className="flex items-center space-x-2" key={i}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                        <p className="text-md text-slate-700 font-medium">{item}</p>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full">
                  <h4 className="text-lg font-bold text-slate-700">
                    Topics Covered
                  </h4>
                  <div className="flex flex-col space-y-3">
                    {project?.topics.map((item, i) => (
                      <span className="flex items-center space-x-2" key={i}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                        <p className="text-md text-slate-700 font-medium">{item}</p>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full">
                  <h4 className="text-lg font-bold text-slate-700">
                    Duration
                  </h4>
                  <div className="flex flex-col space-y-3">
                    {project?.duration.map((item, i) => (
                      <span className="flex items-center space-x-2" key={i}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                        <p className="text-md text-slate-700 font-medium">{item}</p>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full">
                  <h4 className="text-lg font-bold text-slate-700">
                   Age Group
                  </h4>
                  <div className="flex flex-col space-y-3">
                    {project?.age.map((item, i) => (
                      <span className="flex items-center space-x-2" key={i}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                        <p className="text-md text-slate-700 font-medium">{item}</p>
                      </span>
                    ))}
                  </div>
                </div>
              </div>


            </div>
          </section>
        </div>
      </main>
    </Fragment>
  );
};
export default page;
