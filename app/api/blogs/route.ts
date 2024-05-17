import blogData from "@/app/constants/blogs.json";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type BlogResponse = {
    message: string;
    data: Blog[];
}
export async function GET(request: NextApiRequest, response: NextApiResponse<BlogResponse>) {
    try {
        return response.status(200).json({ message: "Retrieve data successfully!", data: blogData })
    } catch(e) {
        return response.status(500).json({ message: "Fail to load data", data: [] });
    } 
}