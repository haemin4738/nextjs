"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function PostDetail() {
  const params = useParams();
  const { id } = params;

  const [post, setPost] = useState({});
  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((res) => setPost(res));
  }, []);

  return (
    <>
      <h1>{id}번</h1>
      <div className="text-2xl">{post.title}</div>
      <p>{post.body}</p>
    </>
  );
}

export default PostDetail;
