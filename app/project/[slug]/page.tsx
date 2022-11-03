import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { IProject, projects } from "../../../data/projects";
import Map from "./Map";

async function getProject(slug: string) {
  const project = projects.find((project) => project.slug === slug);

  return project as IProject;
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

              <div className="border-2 border-slate-500 rounded-lg gap-2 grid grid-cols-4">
                <div className="w-full border-r-2 p-3 border-slate-500">
                  <h4 className="text-lg font-medium text-slate-500 mb-2">
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
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                        <p className="text-sm text-slate-700 font-medium">
                          {item}
                        </p>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full border-r-2 p-3 border-slate-500">
                  <h4 className="text-lg font-medium text-slate-500 mb-2">
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
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                        <p className="text-sm text-slate-700 font-medium">
                          {item}
                        </p>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full border-r-2 border-slate-500 p-3">
                  <h4 className="text-lg font-medium text-slate-500 mb-2">
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
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                        <p className="text-sm text-slate-700 font-medium">
                          {item}
                        </p>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full p-3">
                  <h4 className="text-lg font-medium text-slate-500 mb-2">
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
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                        <p className="text-sm text-slate-700 font-medium">
                          {item}
                        </p>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4 gap-4">
                <button className="bg-green-600 text-white font-medium text-lg w-1/2 flex justify-center py-2 rounded-lg items-center">
                  <p>Full description</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                    />
                  </svg>
                </button>
                <button className="bg-green-600 text-white font-medium text-lg w-1/2 flex justify-center py-2 rounded-lg items-center">
                  <p>Sample Manual</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full">
              <h3 className="text-lg text-slate-700 flex space-x-2">
                <strong>Organisation:</strong> <pre>{project.title}</pre>
              </h3>
              <h3 className="text-lg text-slate-700 flex space-x-2">
                <strong>Address:</strong> <pre>{project.address}</pre>
              </h3>
              <h3 className="text-lg text-slate-700 flex space-x-2">
                <strong>Contact Person:</strong> <pre>{project.contact}</pre>
              </h3>
              <h3 className="text-lg text-slate-700 flex space-x-2">
                <strong>Tel:</strong> <pre>{project.tel}</pre>
              </h3>

              <div className="my-2 h-1 w-full bg-gray-500">
                <hr />
              </div>

              <h3 className="text-lg text-slate-700 flex space-x-2">
                <strong>Partner Organisations</strong>
              </h3>

              {project.partners.map((partner, i) => (
                <p key={i} className="text-md w-full justify-between flex  items-center"><strong>{partner.name}: {"  "}</strong> {partner.province}</p>
              ))}
            </div>
          </section>
          <Map project={project} />
        </div>
      </main>
    </Fragment>
  );
};
export default page;
