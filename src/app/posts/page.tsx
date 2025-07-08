"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
        <li key={post.id}>
          {post.id} /{" "}
          <Link
            href={`/posts/${post.id}`}
            className="p-2 rounded hover:bg-gray-100"
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Posts;
