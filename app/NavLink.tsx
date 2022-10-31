"use client"

import Link from 'next/link'
import React from 'react'
import {useSelectedLayoutSegment} from 'next/navigation'

interface CompenentProps {
  href: string,
  children: React.ReactNode | string
}

const NavLink = ({href, children}:CompenentProps) => {

  let segment = useSelectedLayoutSegment()
   let active = href === `/${segment}`

  return (
    <Link className={`uppercase text-lg text-slate-800 ${active ? 'border-b border-red-500' : ''}`} href={href}>{children}</Link>
  )
}

export default NavLink
