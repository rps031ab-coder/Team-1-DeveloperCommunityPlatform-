import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Temporary data
    const samplePosts = [
      {
        id: 1,
        title: "React Basics",
        description:
          "Learn the fundamentals of React and build your first components.",
        tags: ["React", "JavaScript"],
        likes: 10,
      },
      {
        id: 2,
        title: "Node.js Guide",
        description:
          "Understand how Node.js works and build backend applications.",
        tags: ["Node.js", "Backend"],
        likes: 5,
      },
      {
        id: 3,
        title: "MongoDB Introduction",
        description:
          "Learn how to store and retrieve data using MongoDB.",
        tags: ["MongoDB", "Database"],
        likes: 8,
      },
    ];

    setPosts(samplePosts);

    //backend
  }, []);

  return (
    <Layout>
      <h1>Developer Community</h1>

      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            tags={post.tags}
            likes={post.likes}
          />
        ))
      )}
    </Layout>
  );
}