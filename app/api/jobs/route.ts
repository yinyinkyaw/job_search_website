import { NextRequest, NextResponse } from "next/server"
import jobs from "@/app/constants/data.json"

export async function GET(request: NextRequest) {
    
    const params = request.nextUrl.searchParams;

    const category = params.get("category");

    return NextResponse.json({message: "Success", data: jobs.filter((el) => el.category.toLocaleLowerCase() === category)}, {status: 200});
}