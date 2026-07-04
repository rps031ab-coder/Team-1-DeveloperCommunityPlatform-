export default function CommentCard({
  username,
  text,
  createdAt,
}) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "15px",
        backgroundColor: "#fafafa",
      }}
    >
      <h4 style={{ margin: "0 0 8px 0" }}>
        {username || "Anonymous"}
      </h4>

      <p style={{ margin: "0 0 10px 0" }}>
        {text}
      </p>

      <small style={{ color: "#666" }}>
        {createdAt || "Just now"}
      </small>
    </div>
  );
}