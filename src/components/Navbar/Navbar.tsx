"use client"
import React from 'react'
import logo from '@/assests/logo.png'
import {IoIosBody} from 'react-icons/io'
import './Navbar.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthPopup from '../AuthPopup/AuthPopup'
const Navbar = () => {

  const [isLoggedin , setIsloggedin] = React.useState<boolean>(false);
  const [showpopup , setShowpopup] = React.useState<boolean>(false);

  return (
    <nav>
      <Image src={logo} alt="logo"/>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href = '/profile'><IoIosBody/></Link>
      {
        isLoggedin?
        <button>Logout</button>
        :
        <button
        onClick={()=>{
          setShowpopup(true)
        }}>Login</button>
      }

      {
        showpopup && 
          <AuthPopup setShowpopup = {setShowpopup} />
        
      }

    </nav>
  )
}

export default Navbar