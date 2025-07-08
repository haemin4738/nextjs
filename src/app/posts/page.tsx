"use client";

import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const rs = fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.posts);
        console.log(res.posts);
      });
  }, []);
  return (
    <ul>
      {posts.map((post) => (
        <li>
          {post.id} / {post.title}
        </li>
      ))}
    </ul>
  );
}

export default Posts;
