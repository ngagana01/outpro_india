import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(services);
  } catch (error) {
    console.error("GET SERVICES ERROR:", error);

    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("CREATE SERVICE BODY:", body);

    if (!body.title || !body.slug || !body.description) {
      return NextResponse.json(
        {
          error: "Title, slug and description are required",
        },
        { status: 400 }
      );
    }

    const service = await prisma.service.create({
      data: {
        title: body.title,
        slug: body.slug,
        description: body.description,
        content: body.content || null,
        icon: body.icon || null,
        featured: body.featured ?? true,
      },
    });

    console.log("SERVICE CREATED:", service);

    return NextResponse.json(service, {
      status: 201,
    });
  } catch (error: any) {
    console.error("CREATE SERVICE ERROR:", error);

    return NextResponse.json(
      {
        error: error?.message || "Failed to create service",
      },
      {
        status: 500,
      }
    );
  }
}