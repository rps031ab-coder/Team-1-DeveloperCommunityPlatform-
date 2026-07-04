import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />

      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        {children}
      </main>
    </div>
  );
}