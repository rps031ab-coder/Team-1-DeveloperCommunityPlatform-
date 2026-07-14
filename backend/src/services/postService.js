const Post = require("../models/Post");
const User = require("../models/User");
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


const likePost = async (postId, userId) => {
    // 1. Find the post
    const post = await Post.findById(postId);

    if (!post) {
        throw new Error("Post not found");
    }

    // 2. Find the user
    const user = await User.findById(userId);

    if (!user) {
        throw new Error("User not found");
    }

    // 3. Check duplicate like
    if (post.likes.some(id => id.toString() === userId)){
        throw new Error("Post already liked");
    }

    // 4. Update both documents
    post.likes.push(userId);

    user.likedPosts.push(postId);

    // 5. Save both
    await post.save();

    await user.save();

    return post;
};

const unlikePost = async (postId, userId) => {
    // 1. Find the post
    const post = await Post.findById(postId);

    if (!post) {
        throw new Error("Post not found");
    }

    // 2. Find the user
    const user = await User.findById(userId);

    if (!user) {
        throw new Error("User not found");
    }

    // 3. Check if the post is actually liked
    if (!post.likes.some(id => id.toString() === userId)) {
        throw new Error("Post is not liked yet");
    }

    // 4. Remove the relationship
    post.likes.pull(userId);

    user.likedPosts.pull(postId);

    // 5. Save both documents
    await post.save();

    await user.save();

    return post;
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    likePost,
    unlikePost
};
