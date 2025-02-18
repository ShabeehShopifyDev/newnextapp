import React from 'react'
import Brandlogo from './Brandlogo'
import Navbar from './Navbar'
import Otheractions from './Otheractions'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header>
      <div className="header_wrapper container has__flex items__center">
        <Brandlogo />
        <Navbar />
        <Otheractions />
        <span className="bars">
          <Menu />
        </span>
      </div>
    </header>
  )
}