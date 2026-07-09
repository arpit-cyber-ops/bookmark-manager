import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
    adapter,
});

export async function GET(){
    const bookmarks = await prisma.bookmark.findMany();
    return Response.json(bookmarks);
}

export async function POST(request: Request){
    const body = await request.json();
    const bookmark = await prisma.bookmark.create({
        data: {
            title: body.title,
            url: body.url,
            category: body.category,
            description: body.description,
        },
    });

    return Response.json(bookmark);
}

export async function DELETE(request: Request){
    const body = await request.json();
    const bookmark = await prisma.bookmark.delete({
        where: {
            id: body.id,
        },
    });
    
    return Response.json(bookmark);
}