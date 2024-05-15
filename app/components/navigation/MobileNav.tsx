import React from 'react'
import Link from 'next/link';
import * as styles from "./navigation.styles";

type Props = {}

const MobileNav = (props: Props) => {
  return (
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

export default MobileNav