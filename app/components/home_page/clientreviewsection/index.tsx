import Image from "next/image";
import * as styles from "./clientreviewsection.styles";

/** import images */
import clientImage from "@/public/images/clients.png";
import profile from "@/public/images/avatar.png";

export default function ClientReviewSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <article className={styles.reviewInfo}>
                    <header>
                        <h2 className={styles.heading}>Client Reviews</h2>
                        <p className={styles.paragraph}>I was impressed by the quality of this job board website template. We were able to lauch a full stack web application with this front-end template within days. I only had to manage backend. Highly recommended. You can purchase it without any question.</p>
                    </header>
                    <div className={styles.reviewerInfo}>
                        <Image src={profile} alt="profile" />
                        <div>
                            <p className={styles.reviewerName}>Daniyel Martin</p>
                            <p className={styles.reviewerJobTitle}>Developer</p>
                        </div>
                    </div> 
                </article>
                <Image src={clientImage} alt="client image" className={styles.reviewerImage} />
            </div>
        </section>
    )
}