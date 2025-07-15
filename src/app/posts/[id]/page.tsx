"use client";

import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function PostDetail() {
  const [post, setPost] = useState<any>({});
  const [comments, setComments] = useState<any[]>([]);
  const params = useParams();
  const { id } = params;

  const [isLoading, setIsLoading] = useState(true);

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
    setComments(data ?? []);
  };

  useEffect(() => {
    fetchData();
    fetchComments();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
