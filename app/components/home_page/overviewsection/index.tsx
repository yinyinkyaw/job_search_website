import * as styles from './overviewsection.styles'

/** import icons */
import user from '@/public/icons/user.svg'
import thumb from '@/public/icons/thumb.svg'
import reading from '@/public/icons/reading.svg'
import Image from 'next/image'

const OverviewSection = () => {
  const data = [
    {
      id: 1,
      icon: <Image src={user} alt="user icon" width={59} height={67} />,
      title: 'daily active users',
      count: 35000
    },
    {
      id: 2,
      icon: <Image src={thumb} alt="thumb icon" width={67} height={67} />,
      title: "open job positions",
      count: 69000
    },
    {
      id: 3,
      icon: <Image src={reading} alt="reading icon" width={67} height={67} />,
      title: "stories shared",
      count: 68500
    }
  ]
  return (
    <section className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.overviewCardGrid}>
            {
              data?.map(({ id, icon, title, count }) => (
                <div key={id} className={styles.overviewCard}>
                  {icon}
                  <div>
                    <p className={styles.count}>{count}+</p>
                    <p className={styles.label}>{title}</p>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    </section>
  )
}

export default OverviewSection