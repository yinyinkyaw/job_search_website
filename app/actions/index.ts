'use server';

export async function fetchJobs(category: string){
    return await fetch(`http://localhost:3000/api/jobs?category=${category}`).then((res) => res.json())
}