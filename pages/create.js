import Layout from "../components/Layout";

export default function Create() {
  return (
    <Layout>
      <h1>Create New Post</h1>

      <form>
        <input
          type="text"
          placeholder="Title"
        />

        <br />
        <br />

        <textarea
          placeholder="Content"
          rows="5"
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Tags"
        />

        <br />
        <br />

        <button>
          Submit
        </button>
      </form>
    </Layout>
  );
}