"use client";

import { supabase } from "@/app/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      console.log(error);
    } else {
      alert("로그인 성공");
      router.push("/");
    }
  };

  return (
    <>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}

export default SignIn;
