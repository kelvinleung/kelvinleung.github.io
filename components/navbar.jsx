import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <a className={path === "/" ? "active" : null}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blogs">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>How-to</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
