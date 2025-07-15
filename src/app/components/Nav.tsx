import Link from "next/link";

function Nav() {
  return (
    <nav className="flex">
      <Link href="/" className="p-2 rounded hover:bg-gray-100">
        메인
      </Link>
      <Link href="/posts" className="p-2 rounded hover:bg-gray-100">
        글 목록
      </Link>
      <Link href="/signup" className="p-2 rounded hover:bg-gray-100">
        회원가입
      </Link>
      <Link href="/signin" className="p-2 rounded hover:bg-gray-100">
        로그인
      </Link>
    </nav>
  );
}

export default Nav;
