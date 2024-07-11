import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

type NewTask = {
    id: string,
    task: string,
    is_active:boolean,
    time: number
}

export async function POST(request: Request, response: Response) {
    try {
        const data = await request.json()
        const id = uuidv4();
        const currentEpochTime = Date.now();
    
        const new_task:NewTask = {
            id: id,
            task: data.task,
            is_active: true,
            time: currentEpochTime
        }

        const result =
        await sql`INSERT INTO tasks VALUES (${new_task.id},${new_task.task},${new_task.is_active},${new_task.time});`;
        return NextResponse.json({ ...new_task }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}