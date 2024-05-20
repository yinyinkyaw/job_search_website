import { fetchBlogs, fetchJobs } from "@/actions";
import * as styles from "./blogsection.styles";
import Image from "next/image";
import { randomUUID } from "crypto";
import Link from "next/link";

export default async function BlogSection() {
    const { data } = await fetchBlogs();

    const blogs = data?.map((blog: Blog) => ({ ...blog, id: randomUUID()}));

    return (
        <section className={styles.blogSection} aria-labelledby="latest-news">
            <h2 id="latest-news" className={styles.heading}>Latest News</h2>
            <div className={styles.blogGrid}>
                {
                    blogs?.map((blog: Blog) => (
                        <div key={blog.id}>
                            <Image src={blog.image} alt={`blog image ${blog.title}`} width={500} height={300} className={styles.blogImage} />
                            <div className={styles.blogCardInfo}>
                                <span className={styles.blogPostedDate}>{blog.posted_date}</span>
                                <p className={styles.blogPostTitle}>{blog.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={styles.flexCenter}>
                <Link href={"/blogs"} className={styles.viewMoreBtn}>View Our Blog</Link>
            </div>
        </section>
    )
}