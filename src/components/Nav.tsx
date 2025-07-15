"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

function Nav() {
  const { isLoading, user, signout } = useAuth();
  const router = useRouter();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <nav className="flex">
      <Link href="/" className="p-2 rounded hover:bg-gray-100">
        메인
      </Link>
      <Link href="/posts" className="p-2 rounded hover:bg-gray-100">
        글 목록
      </Link>
      {user ? (
        <>
          <span>{user.email} 님</span>
          <button onClick={signout}>로그아웃</button>
        </>
      ) : (
        <>
          <Link href="/signup" className="p-2 rounded hover:bg-gray-100">
            회원가입
          </Link>
          <Link href="/signin" className="p-2 rounded hover:bg-gray-100">
            로그인
          </Link>
        </>
      )}
    </nav>
  );
}

export default Nav;
