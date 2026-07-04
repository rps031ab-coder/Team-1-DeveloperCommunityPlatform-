import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import PostCard from "../../components/PostCard";

export default function TagPage() {
  const router = useRouter();
  const { tag } = router.query;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!tag) return;

    
    const samplePosts = [
      {
        id: 1,
        title: "React Basics",
        description: "Learn React from scratch.",
        tags: ["React", "JavaScript"],
        likes: 10,
      },
      {
        id: 2,
        title: "React Hooks",
        description: "Understanding useState and useEffect.",
        tags: ["React"],
        likes: 15,
      },
    ];

    // Filter posts by selected tag
    const filteredPosts = samplePosts.filter((post) =>
      post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
    );

    setPosts(filteredPosts);

    //backend
  }, [tag]);

  return (
    <Layout>
      <h1>Posts tagged: #{tag}</h1>

      {posts.length === 0 ? (
        <p>No posts found.</p>
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