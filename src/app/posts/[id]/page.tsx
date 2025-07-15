"use client";

import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function PostDetail() {
  const [post, setPost] = useState<any>({});
  const [comments, setComments] = useState<any[]>([]);
  const params = useParams();
  const { id } = params;
  const router = useRouter();

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

  const handleDelete = async () => {
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (error) {
      alert(error.message);
      console.log(error);
    } else {
      alert("게시글이 삭제되었습니다.");
      router.push("/posts");
    }
  };

  const handleCommentDelete = async (commentId: number) => {
    const { error } = await supabase
      .from("comments")
      .delete()
      .eq("id", commentId);
    if (error) {
      alert(error.message);
      console.log(error);
    } else {
      alert("댓글이 삭제되었습니다.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>{id}번</h1>
      <div className="text-2xl">{post.title}</div>
      <p>{post.contents}</p>
      <button className="border border-red-300 p-3" onClick={handleDelete}>
        삭제
      </button>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="text-xs underline">
            {comment.contents}
            <button
              className="border border-red p-3"
              onClick={() => handleCommentDelete(comment.id)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostDetail;
