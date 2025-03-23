import { fetchBlog } from "lib/fetchBlog";

export default async function Home() {
    try {
      const blog = await fetchBlog();
      return (
        <div>
          <h1>{blog.subtitle}</h1>
        </div>
      );
    } catch (error) {
      console.error("Error fetching blog:", error);
      return <div>Error fetching blog data!</div>;
    }
  }