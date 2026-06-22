export default function PostCard({ title, likes }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "10px"
      }}
    >
      <h2>{title}</h2>
      <p>{likes} Likes</p>
    </div>
  );
}