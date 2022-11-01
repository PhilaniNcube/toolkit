import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <nav className="container mx-auto">
      <div className="hidden py-4 md:flex items-center">
        <Link href="/" className="w-1/5">
         <Image src="/images/logo.svg" width={445} height={361} alt="Logo" className="w-44 object-cover"  />
        </Link>
        <div className="flex-1 flex justify-between items-center">
          <Link className="uppercase text-slate-800 text-lg font-medium" href="/about">About The Toolbox</Link>
          <Link className="uppercase text-slate-800 text-lg font-medium" href="/projects">Projects & School Map</Link>
          <Link className="uppercase text-slate-800 text-lg font-medium" href="/search">Project Search</Link>
          <Link className="uppercase text-slate-800 text-lg font-medium" href="/resources">Additional Resources</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
