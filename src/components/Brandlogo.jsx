import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Brandlogo() {
  return (
    <div className='barndlogo' >
        <Link className='logo_wrapper' href="/">
          <Image width={250} height={70} alt='Techintegrations Logo' src="/dark-logo.webp" />
        </Link>
    </div>
  )
}