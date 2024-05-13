"use client"
import { Menu, X } from "lucide-react"
import { useState } from "react"


import Image from "next/image"
import Logo from '../../public/logo.png'
import { NAV_LINKS } from "../constants"
import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {

    const [mobileDrawerOpen, SetMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        SetMobileDrawerOpen(!mobileDrawerOpen)
    }


  return (
    <nav className="fixed top-0 z-50 w-screen px-10">
        <div className="container flex items-center justify-between rounded-lg bg-black py-3">
            <div className="flex flex-shrink-0 items-center justify-between">
                <Image 
                    className="mr-2" 
                    src={Logo} 
                    width={60} 
                    height={30} 
                    alt="logo"/>
                <span className="text-sm tracking-tight text-white">RealES</span>
            </div>
            <div className="hidden lg:flex">
                <ul className="flex items-center gap-4">
                    {NAV_LINKS.map((item, index) => (
                        <li key={index}>
                            <Link className="text-sm text-white hover:text-neutral-500" href={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="hidden text-sm text-white lg:flex">
                <Button variant='outline' className="mr-2 bg-black">Sign In</Button>
                <Button className="bg-slate-800">Sign up</Button>
            </div>
            <div className="flex-col justify-end text-white md:flex lg:hidden">
                <button onClick={toggleNavbar}>
                    {mobileDrawerOpen ? <X/> : <Menu/>}
                </button>
            </div>
        </div>
        {mobileDrawerOpen && (
            <div className="rounded-[10px] bg-black lg:hidden">
                <ul className="flex flex-col items-center">
                    {NAV_LINKS.map((item, index) => (
                        <li key={index} className="py-4">
                            <Link className="text-sm text-white hover:text-neutral-500" href={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center justify-center pb-8 text-white lg:hiden">
                    <Button variant='outline' className="mr-2 bg-black">Sign in</Button>
                    <Button className="bg-slate-800">Sign up</Button>
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar