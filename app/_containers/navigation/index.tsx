'use client'

import Image from 'next/image'
import * as styles from './navigation.styles'

/** import icons */
import Logo from '@/public/icons/job_hire_logo.svg'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <header>
      <div className={styles.navigaiton_container}>
        <Link href={'/'}>
          <Image src={Logo} alt="logo" />
        </Link>
        <nav className={styles.navigationLinks}>
          <li>Find Jobs</li>
          <li>Employers</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Pages</li>
          <div>
            <Link href={'/login'} className='login_btn'>Login</Link>
            <Link className={styles.signup_btn} href={'/register'}>Post a Job</Link>
          </div> 
        </nav>
        <button onClick={() => setOpenMenu((prev) => !prev)} className={openMenu ? styles.toggle : styles.humberger_btn}>
            <span />
            <span />
            <span />
          </button>
      </div>
      {
        openMenu && (
          <div className={styles.mobileNavigation}>
            <nav className={styles.navigationLinks}>
              <li>Find Jobs</li>
              <li>Employers</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Pages</li>
            </nav>
            <div>
              <Link href={'/login'}>Login</Link>
              <Link className={styles.signup_btn} href={'/register'}>Post a Job</Link>
            </div>
          </div>
        )
      }
    </header>
  )
}