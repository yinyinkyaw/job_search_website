"use client"

import React, { useEffect, useState } from 'react'
import { fetchJobs } from '@/actions'

import * as styles from './jobsection.styles'
import JobCard from './JobCard';


type JobCardType = {
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
export default function JobSection() {
    const [seletedCategory, setSelectedCategory] = useState("contract");
    const [jobList, setJobList] = useState<[]>([])

    useEffect(() => {
      (async() => {
        const data = await fetchJobs(seletedCategory);
        setJobList(data?.data)
      })()
    }, [seletedCategory])

  return (
    <section aria-labelledby='recent-available-jobs' className={styles.container}>
        <header className={styles.jobSectionHeader}>
            <h1 id="recent-available-jobs">Recent Available Jobs</h1>
            <div className='category_list'>
                <button className={seletedCategory === 'contract' ? 'selected' : ''} onClick={() => setSelectedCategory("contract")}>Contract</button>
                <button className={seletedCategory === 'remote' ? 'selected' : ''} onClick={() => setSelectedCategory("remote")}>Remote</button>
                <button className={seletedCategory === 'popular' ? 'selected' : ''} onClick={() => setSelectedCategory("popular")}>Popular</button>
            </div>
        </header>
        <div className={styles.jobCardGrid}>
          {
            jobList?.map((jobInfo: JobCardType, index: number) => (
              <JobCard {...jobInfo} key={index} />
            ))
          }
        </div>
        <div className={styles.flexCenter}>
          <button className={styles.seeMoreBtn}>Browse more Jobs</button>
        </div>
    </section>
  )
}