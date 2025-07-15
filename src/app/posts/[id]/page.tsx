"use client";

import { supabase } from "@/app/lib/supabase";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function PostDetail() {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const params = useParams();
  const { id } = params;

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    setPost(data);
  };

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("post_id", id);
    setComments(data);
  };

  useEffect(() => {
    fetchData();
    fetchComments();
  }, []);

  return (
    <>
      <h1>{id}번</h1>
      <div className="text-2xl">{post.title}</div>
      <p>{post.contents}</p>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="text-xs underline">
            {comment.contents}
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostDetail;
