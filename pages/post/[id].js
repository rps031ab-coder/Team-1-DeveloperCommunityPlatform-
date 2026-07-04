import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import TagBadge from "../../components/TagBadge";
import CommentCard from "../../components/CommentCard";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!id) return;

    
    const samplePost = {
      id,
      title: "React Basics",
      content:
        "React is a JavaScript library used for building user interfaces. It helps developers create reusable UI components and build modern web applications.",
      tags: ["React", "JavaScript"],
      likes: 10,
    };

    const sampleComments = [
      {
        id: 1,
        username: "John",
        text: "Great article!",
        createdAt: "2 hours ago",
      },
      {
        id: 2,
        username: "Sarah",
        text: "Very helpful!",
        createdAt: "5 minutes ago",
      },
    ];

    setPost(samplePost);
    setComments(sampleComments);

    //backend
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    alert("Comment submitted!");

    //backend
  };

  if (!post) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>{post.title}</h1>

      <p> {post.likes} Likes</p>

      <div style={{ marginBottom: "20px" }}>
        {post.tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>

      <p>{post.content}</p>

      <hr />

      <h2>Comments</h2>

      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          username={comment.username}
          text={comment.text}
          createdAt={comment.createdAt}
        />
      ))}

      <hr />

      <h3>Add a Comment</h3>

      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          placeholder="Your Name"
        />

        <br />
        <br />

        <textarea
          rows="4"
          placeholder="Write your comment..."
        />

        <br />
        <br />

        <button type="submit">
          Submit Comment
        </button>
      </form>
    </Layout>
  );
}