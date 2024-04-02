import React from 'react'
import * as styles from './job_categories.styles'

/** import icons */
import DesignIcon from '@/public/icons/design_art.svg'
import EducationIcon from '@/public/icons/education.svg'
import WebDevelopmentIcon from '@/public/icons/web_development.svg'
import DigitalMarketingIcon from '@/public/icons/digital_marketing.svg'
import Image from 'next/image'

export default function JobCategories() {
  return (
    <div className={styles.container}>
        <div className={styles.content_container}>
            <div className={styles.content_heading}>
                <h3>Thousands of <wbr />dream jobs available now</h3>
                <span>Browse some featured jobs</span>
            </div>
            <div className={styles.content_body}>
                <div className={styles.category_card}>
                    <Image src={DesignIcon} alt="design_art" />
                    <div>
                        <h2>Design & art</h2>
                        <h4>653 open positions</h4>
                    </div>
                </div>
                <div className={styles.category_card}>
                    <Image src={EducationIcon} alt="design_art" />
                    <div>
                        <h2>Education</h2>
                        <h4>109 open positions</h4>
                    </div>
                </div>
                <div className={styles.category_card}>
                    <Image src={WebDevelopmentIcon} alt="design_art" />
                    <div>
                        <h2>Web Development</h2>
                        <h4>870 open positions</h4>
                    </div>
                </div>
                <div className={styles.category_card}>
                    <Image src={DigitalMarketingIcon} alt="design_art" />
                    <div>
                        <h2>Digital Marketing</h2>
                        <h4>360 open positions</h4>
                    </div>
                </div>
            </div>
            <div className={styles.flexCenter}>
                <button className={styles.seeMoreBtn}>Browse more Categories</button>
            </div>
        </div>
    </div>
  )
}