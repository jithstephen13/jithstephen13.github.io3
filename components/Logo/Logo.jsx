import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <div >
        <Link href={"/"}  >
        <Image
              src="/images/jithlogo.67171ca21e0f39829edf.png"
              alt="logo"
              width={50}
              height={50}
            
            />
        </Link>
       
    </div>
  )
}
