import { supabase } from '../client'
import React, { useState } from 'react';

const CreatePost = () => {
    const [post, setPost] = useState({
        title: '',
        author: '',
        description: ''
    });

    const createPost = async (event) => { 
        event.preventDefault();
        console.log('Creating post:', post);
        await supabase
        // find the table Posts in the database and insert a new post
            .from('Post')
            .insert({title: post.title, author: post.author, description: post.description})
            .select()
        window.location = "/";

    };


    return (
        <form onSubmit={createPost}>
            <input
                type="text"
                placeholder="Title"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            <input
                type="text"
                placeholder="Author"
                value={post.author}
                onChange={(e) => setPost({ ...post, author: e.target.value })}
            />
            <textarea
                placeholder="Description"
                value={post.description}
                onChange={(e) => setPost({ ...post, description: e.target.value })}
            />
            <button type="submit" >Create Post</button>
        </form>
    )
};

export default CreatePost;