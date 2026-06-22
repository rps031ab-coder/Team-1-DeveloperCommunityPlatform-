import Layout from "../components/Layout";
import PostCard from "../components/PostCard";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "React Basics",
      likes: 10,
    },
    {
      id: 2,
      title: "Node.js Guide",
      likes: 5,
    },
    {
      id: 3,
      title: "MongoDB Introduction",
      likes: 8,
    },
  ];

  return (
    <Layout>
      <h1>Developer Community</h1>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          likes={post.likes}
        />
      ))}
    </Layout>
  );
}