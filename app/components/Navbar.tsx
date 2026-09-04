import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex gap-8 text-lg">
      <Link href={"/"}>Home</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/sign-in"}>Sign In</Link>
    </nav>
  )
}

export default Navbar