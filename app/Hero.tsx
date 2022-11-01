import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="container px-4 mx-auto">
      <div className="py-8 w-full gap-6 grid grid-cols-2">
        <div className="w-full flex items-center">
          <h1 className="font-extrabold text-slate-800 text-xl md:text-5xl lg:text-[4rem] xl:text-[5rem]">
            Leaner-Led <br />School-Based <br />Interventions
          </h1>
        </div>
        <div className="w-full">
          <Image src="/images/soccer.jpeg" alt="Hero" width={1920} height={1280} className="aspect-video w-full object-cover rounded-full" />
        </div>
      </div>
    </section>
  );
}

export default Hero
