import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        borderBottom: "1px solid #ccc",
        marginBottom: "20px",
      }}
    >
      <h1>DevConnect</h1>

      <div>
        <Link
          href="/"
          style={{ marginRight: "20px" }}
        >
          Home
        </Link>

        <Link href="/create">
          Create Post
        </Link>
      </div>
    </nav>
  );
}