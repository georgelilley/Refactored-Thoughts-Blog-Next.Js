import clientPromise from "/lib/mongodb.js";

export async function GET() {
  try {
    const client = await clientPromise;
    const database = client.db("BlogDB");
    const Blogs = database.collection("Blog");

    const query = { title: "📌 How I Built My First Next.js Blog" };
    const Blog = await Blogs.findOne(query);

    return Response.json(Blog, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to fetch Blog" }, { status: 500 });
  }
}