import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

const Navbar = () => {
  return (
    <nav className="container mx-auto">
      <div className="hidden py-4 md:flex items-center">
        <div className="w-1/3">
          Online Toolbox
        </div>
        <ul className="flex-1 flex justify-between items-center">
          <Link className="uppercase text-slate-800 text-sm" href="/about">About The Toolbox</Link>
          <Link className="uppercase text-slate-800 text-sm" href="/projects">Project & School Map</Link>
          <Link className="uppercase text-slate-800 text-sm" href="/search">Project Search</Link>
          <Link className="uppercase text-slate-800 text-sm" href="/resources">Additional Resources</Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
