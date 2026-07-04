import Layout from "../components/Layout";
import PostForm from "../components/PostForm";

export default function Create() {

  const handleCreatePost = async (newPost) => {
    console.log("New Post:", newPost);

    
    //api
    

    alert("Post submitted successfully!");
  };

  return (
    <Layout>
      <div style={{ padding: "20px" }}>
        <h1>Create New Post</h1>

        <p>
          Share your knowledge with the developer community.
        </p>

        <PostForm onSubmit={handleCreatePost} />
      </div>
    </Layout>
  );
}