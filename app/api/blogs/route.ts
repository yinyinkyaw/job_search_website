import blogData from "@/constants/blogs.json";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type BlogResponse = {
    message: string;
    data: Blog[];
}
export async function GET(request: NextRequest) {
    try {
        return NextResponse.json({ message: "Retrieve data successfully!", data: blogData });
    } catch(e) {
        return NextResponse.json({ message: "Fail to load data", data: [] });
    } 
}