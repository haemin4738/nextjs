"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function PostDetail() {
  const params = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((res) => setPost(res));
  }, []);
  return (
    <>
      <div>번호 : {post.id}</div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}

export default PostDetail;
