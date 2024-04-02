"use client"

import React, { useState } from 'react'
import { fetchJobs } from '@/app/actions'

import * as styles from './jobsection.styles'

export default function JobSection() {
    const [seletedCategory, setSelectedCategory] = useState("contract")

    const data = fetchJobs(seletedCategory);
    console.log("data::", data)

  return (
    <div className={styles.container}>
        <div className={styles.jobSectionHeader}>
            <h1>Recent Available Jobs</h1>
            <div className='category_list'>
                <button className={seletedCategory === 'contract' ? 'selected' : ''} onClick={() => setSelectedCategory("contract")}>Contract</button>
                <button className={seletedCategory === 'remote' ? 'selected' : ''} onClick={() => setSelectedCategory("remote")}>Remote</button>
                <button className={seletedCategory === 'popular' ? 'selected' : ''} onClick={() => setSelectedCategory("popular")}>Popular</button>
            </div>
        </div>
    </div>
  )
}