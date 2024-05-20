'use server';

export async function fetchJobs(category: string){
    return await fetch(`${process.env.NEXT_APP_API_URL}/api/jobs?category=${category}`).then((res) => res.json());
}

export async function fetchBlogs() {
    return await fetch(`${process.env.NEXT_APP_API_URL}/api/blogs`).then((res) => res.json());
}