"use client";

import { supabase } from "@/app/lib/supabase";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function PostDetail() {
  const [post, setPost] = useState({});
  const [comment, setComment] = useState({});
  const params = useParams();
  const { id } = params;

  const fetchPost = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();
    setPost(data);
  };
  const fetchComment = async () => {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("id", id)
      .single();
    setComment(data);
  };

  useEffect(() => {
    fetchPost();
    fetchComment();
  }, []);

  return (
    <>
      <h1>{id}번</h1>
      <div className="text-2xl">{post.title}</div>
      <p>{post.contents}</p>
      <div className="text-2xl">{comment.id}</div>
      <p className="text-xs">{comment.contents}</p>
    </>
  );
}

export default PostDetail;
