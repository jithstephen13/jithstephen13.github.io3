import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Logo } from './Logo/Logo'
import { LinkCompo } from './Link/Link'
import {motion} from "framer-motion"
import { Behance, GithubIcon, LinkedInIcon } from './SvgCompo/Svgicons'



const NAV_ITEMS= [
    {
      label: "Home",
      page: "",
    },
    {
      label: "About",
      page: "about",
    },
  
    {
      label: "Skills",
      page: "skills",
    }, 
    {
      label: "Projects",
      page: "projects",
    },
    {
      label: "Contact",
      page: "contact",
    },
]
export const Navbar = () => {
  return (
    <header className='flex items-center justify-between bg-dark py-6 px-8'>
            <Logo/>
            <nav className='flex gap-4'>

                  {NAV_ITEMS.map((item, idx) => {
                      return (
                        <LinkCompo key={idx}  {...item}/>
                      )
                    })}
            </nav>

            <nav className='flex gap-4 item-center justify-center'>
              <motion.a href='https://www.google.com' whileHover={{y:-2}} target={'_blank' }><GithubIcon className={"text-white w-1rem w-1rem"}/></motion.a>
              <motion.a href='https://www.google.com' whileHover={{y:-2}}  target={'_blank' }><LinkedInIcon className={"text-white w-1rem w-1rem"}/></motion.a>
            
             <motion.a href='https://www.google.com' whileHover={{y:-2}} target={'_blank' }> <Behance className={"text-white"}/></motion.a>


              
            </nav>


        
    </header>
  )
}
