export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      borderBottom: "1px solid #ccc"
    }}>
      <h1>DevConnect</h1>

      <div>
        <a href="/" style={{ marginRight: "20px" }}>
          Home
        </a>

        <a href="/create">
          Create Post
        </a>
      </div>
    </nav>
  );
}