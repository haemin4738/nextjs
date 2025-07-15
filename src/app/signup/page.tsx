"use client";

import { supabase } from "@/app/lib/supabase";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      alert(error.message);
      console.log(error);
    } else {
      alert("회원가입 성공");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="EMAIL"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="PASSWORD"
        />
        <button type="submit">회원가입</button>
      </form>
    </>
  );
}

export default Signup;
