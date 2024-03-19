const api = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
