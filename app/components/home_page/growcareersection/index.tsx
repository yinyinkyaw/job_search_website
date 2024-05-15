import React from 'react'

import * as styles from './grow_career.styles'
import Illustrator from '@/public/icons/grow_career.svg'
import Image from 'next/image'

/** import icon */
import checkIcon from '@/public/icons/checkmark.svg'

type Props = {}

export default function GrowCareerSection({}: Props) {
  return (
    <section className={styles.container}>
        <Image src={Illustrator} alt="grow-career" />
        <div className={styles.contentContainer}>
            <h3 className={styles.heading}>Grow your career</h3>
            <p className={styles.paragraph}>When an unknown printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
            <div className={styles.cardContainer}>
                <div className={styles.careerCard}>
                    <div>100% Verified Jobs</div>
                    <span>
                        <Image src={checkIcon} alt="check icon" />
                    </span>
                </div>
                <div className={styles.careerCard}>
                    <div>One profile Unlimited job Opening</div>
                    <span>
                        <Image src={checkIcon} alt="check icon" />
                    </span>
                </div>
                <div className={styles.careerCard}>
                    <div>Get Personalized Job Recommendations</div>
                    <span>
                        <Image src={checkIcon} alt="check icon" />
                    </span>
                </div>
                <div className={styles.careerCard}>
                    <div>Find Your Perfect Job Match</div>
                    <span>
                        <Image src={checkIcon} alt="check icon" />
                    </span>
                </div>
            </div>
        </div>
        
    </section>
  )
}