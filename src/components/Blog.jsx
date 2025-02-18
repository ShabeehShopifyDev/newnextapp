"use client"
import React, { useEffect, useState } from 'react'

function Blog() {

    let [posts, setPosts] = useState([])

    const getPosts = async () => {
        const response = await fetch('http://localhost/wordpress/wordpress/wp-json/wp/v2/posts');
        const json = await response.json();
        console.log(json);
        setPosts(json);
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div>
            {
                posts.map((post) => {
                    return (
                        <div className="blog" key={post.id}>
                            <h1>{post.title.rendered}</h1>
                            <div className="content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Blog
