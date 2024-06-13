import { getAccessToken } from "@auth0/nextjs-auth0";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { accessToken } = await getAccessToken();

    if (!accessToken) return;

    return NextResponse.json(
      { success: true },
      {
        status: 200,
        headers: {
          "Set-Cookie": `accessToken=${accessToken}; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`,
        },
      }
    );
  } catch (error: any) {
    console.log("err", error);
    const response = new NextResponse(null, { status: 204 });

    // Delete cookie
    if (cookies().has("accessToken")) {
      cookies().delete("accessToken");
    }

    return response;
  }
}
