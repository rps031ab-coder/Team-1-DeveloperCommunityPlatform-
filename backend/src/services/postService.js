const Post = require("../models/Post");

const getAllPosts = async (author) => {
    const query = author ? { author } : {};

    return await Post.find(query);
};

const getPostById = async (id) => {
    return await Post.findById(id);
};

const createPost = async (postData) => {
    return await Post.create({
        title: postData.title,
        content: postData.content,
        author: postData.author,
        tags: postData.tags
    });
};

const updatePost = async (id, postData, userId) => {
    const post = await Post.findById(id);

    if (!post) {
        return null;
    }
    if (post.author.toString() !== userId) {
    throw new Error("You are not authorized to update this post");
    }
    return await Post.findByIdAndUpdate(
        id,
        {
            title: postData.title,
            content: postData.content,
            tags: postData.tags
        },
        { new: true,
          runValidators: true  
        }
    );
};

const deletePost = async (id, userId) => {
    const post = await Post.findById(id);
    if(!post){
         return null
    }
    if(post.author.toString() !== userId){
          throw new Error("You are not authorized to delete this post");
    }
    return await Post.findByIdAndDelete(id);
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};
