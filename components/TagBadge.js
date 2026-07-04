import Link from "next/link";

export default function TagBadge({ tag }) {
  return (
    <Link href={`/tag/${tag.toLowerCase()}`}>
      <span
        style={{
          display: "inline-block",
          backgroundColor: "#e5e7eb",
          padding: "5px 10px",
          borderRadius: "15px",
          marginRight: "8px",
          cursor: "pointer",
        }}
      >
        #{tag}
      </span>
    </Link>
  );
}