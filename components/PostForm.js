import { useState } from "react";

export default function PostForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please enter both a title and content.");
      return;
    }

    const newPost = {
      title,
      content,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== ""),
      coverImage,
    };

    if (onSubmit) {
      onSubmit(newPost);
    }

    // Clear form after submission
    setTitle("");
    setContent("");
    setTags("");
    setCoverImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <br />
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Content</label>
        <br />
        <textarea
          rows="6"
          placeholder="Write your article..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Tags</label>
        <br />
        <input
          type="text"
          placeholder="React, JavaScript"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Cover Image URL</label>
        <br />
        <input
          type="text"
          placeholder="https://..."
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
        />
      </div>

      <br />

      <button type="submit">
        Publish Post
      </button>
    </form>
  );
}