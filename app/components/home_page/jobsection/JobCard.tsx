import React from 'react'

import * as styles from './jobsection.styles'
import Image from 'next/image';
import { css } from '@kuma-ui/core';

type JobCardProps = {
    logo: string,
    title: string;
    company: string;
    category: string;
    location: string;
    salary: {
        start: string;
        end: string;
    },
    isPopular: boolean;
    image: {
        width: number;
        height: number;
    }
}

export default function JobCard({ logo, title, company, category, location, salary, image }: JobCardProps) {
  return (
    <div className={styles.jobCard}>
        <div className={styles.jobCardHeader}>
            <Image src={logo} alt={title} width={image.width} height={image.height}/>
            <div>
                <h3>{title}</h3>
                <span className={styles.companyName}>{company}</span>
            </div>
        </div>
        <div className={styles.flexItem}>
            <div>{category}</div>
            <div className={css `
                display: flex;
                gap: .5rem;
                align-items: center;
            `}><Image src={'/icons/location_fill.svg'} alt="location_icon" width={16} height={16} />{' '}{location}</div>
        </div>
        <div className={styles.flexItem}>
            <div>${salary.start}-${salary.end}</div>
            <button>Apply</button>
        </div>
        
    </div>
  )
}