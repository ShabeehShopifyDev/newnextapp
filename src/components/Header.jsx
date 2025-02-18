import React from 'react'
import Brandlogo from './Brandlogo'
import Navbar from './Navbar'
import Otheractions from './Otheractions'

export default function Header() {
  return (
    <header>
      <div className="header_wrapper container has__flex items__center">
        <Brandlogo/>
        <Navbar/>
        <Otheractions/>
      </div>
    </header>
  )
}