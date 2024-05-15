import React from 'react'
import * as styles from './herosection.styles'
import locationIcon from "@/public/icons/location.svg"
import searchIcon from "@/public/icons/search.svg"
import Image from 'next/image'
import HeroImg from '@/public/images/heroman.jpg'
import circleRadius from '@/public/icons/circle_shape.svg'

export default function HeroSection() {
  return (
    <section className={styles.container}>
      <div className={styles.contentContainer}>
        <h1>When Searching for a job <wbr /> don&apos;t go in blind, Research first.</h1>
        <form>
          <div className={styles.searchJobContainer}>
            <div>
              <Image src={searchIcon} alt="search icon" />
              <input className='search_box' placeholder='Job Keyword' />
            </div>
            <div>
              <Image src={locationIcon} alt="search icon" />
              <input className='search_box' placeholder='Location' />
            </div>
            <button>Search</button>
          </div>
        </form>
        <div className={styles.popularSearch}>
          <h3>Popular Searches:</h3>
          <span>Designer</span>
          <span>Developer</span>
          <span>iOS</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image alt="hero image" src={HeroImg} height={450} />
        <Image alt="circle shape" src={circleRadius} className='circle_shape' style={{ width: 'auto', height: 'auto'}} />
      </div>
    </section>
  )
}