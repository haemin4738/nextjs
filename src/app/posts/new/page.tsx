"use client";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

function createPost() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const { user } = useAuth();

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await supabase
      .from("posts")
      .insert({ title, contents, user_id: user?.id });

    if (error) {
      alert(error.message);
      console.log(error);
    } else {
      alert("게시글이 등록되었습니다.");
    }
  };

  return (
    <>
      <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="제목을 입력하세요"
        />
        <textarea
          className="border border-gray-300 rounded px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="내용을 입력하세요"
          onChange={(e) => setContents(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        >
          등록
        </button>
      </form>
    </>
  );
}

export default createPost;
