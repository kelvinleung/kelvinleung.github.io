import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul>
          <li>
            <Link href="/">
              <a className={path === "/" ? "active" : null}>首页</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a
                className={path.match(/(^\/post)|(^\/posts)/) ? "active" : null}
              >
                秘笈
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>八股</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>奇术</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>轮子</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>鄙人</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
