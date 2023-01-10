import Link from "next/link";
import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:"flex",gap:"200px",backgroundColor:"yellow",height:"50px",fontSize:"25px"}}>
        <h1><Link href='/'>Sunil</Link></h1>
        <h1><Link href={"/project"}>Project</Link></h1>
        <Link href={"/experience"}>Experience</Link>

    </div>
  )
}

export default Navbar