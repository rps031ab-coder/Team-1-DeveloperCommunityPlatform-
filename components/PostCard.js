import Link from "next/link";
import TagBadge from "./TagBadge";

export default function PostCard({
  id,
  title,
  description,
  tags,
  likes,
}) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        marginBottom: "20px",
        backgroundColor: "#fff",
      }}
    >
      <h2>{title}</h2>

      <p>{description}</p>

      <div style={{ margin: "15px 0" }}>
        {tags &&
          tags.map((tag) => (
            <TagBadge
              key={tag}
              tag={tag}
            />
          ))}
      </div>

      <p> {likes} Likes</p>

      <Link href={`/post/${id}`}>
        <button
          style={{
            marginTop: "10px",
            padding: "8px 16px",
            cursor: "pointer",
          }}
        >
          Read More
        </button>
      </Link>
    </div>
  );
}