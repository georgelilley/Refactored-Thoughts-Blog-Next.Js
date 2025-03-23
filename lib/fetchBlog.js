export async function fetchBlog() {
  try {
    const res = await fetch("http://localhost:3000/api/posts", { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`Failed to fetch posts, status: ${res.status}`);
    }

    return await res.json(); // Return the fetched blog data
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error; // Rethrow error so caller can handle it
  }
}
