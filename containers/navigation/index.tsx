import Image from 'next/image'
import styles from './navigation.module.css'

/** import icons */
import Logo from '@/public/icons/job_hire_logo.svg'
import Link from 'next/link'

export default function Navigation() {
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
            <Link className={styles.login_btn} href={'/login'}>Login</Link>
            <Link className={styles.signup_btn} href={'/register'}>Post a Job</Link>
          </div> 
        </nav>
      </div>
    </header>
  )
}