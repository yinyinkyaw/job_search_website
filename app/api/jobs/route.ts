import { NextRequest, NextResponse } from "next/server"
import jobs from "@/app/constants/jobs.json"

export async function GET(request: NextRequest) {
    
    const category = request.nextUrl.searchParams.get('category');

    const result = category !== 'popular' ? jobs.filter((el) => el.category.toLocaleLowerCase() === category) : jobs.filter((el) => el.isPopular);

    return NextResponse.json({message: "Success", data: result}, {status: 200});
}