"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

function Posts() {
  const [posts, setPosts] = useState<
    Array<{ id: number; title: string; content: string }>
  >([]);

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    let { data: posts, error } = await supabase.from("posts").select("*");
    setPosts(posts ?? []);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.id} /
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
