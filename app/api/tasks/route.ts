import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
      const session = await getServerSession();
      let email = session?.user?.email
      const result =
        await sql`SELECT * FROM tasks WHERE email=${email}`;
      return NextResponse.json({ result:result.rows }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
}

export const revalidate = 0;