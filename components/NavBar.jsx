import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();
  const path = router.pathname;

  // Media Query
  const [isNarrowScreen, setIsNarrorScreen] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 800px)");
    setIsNarrorScreen(mql.matches);
    function updateIsNarrowScreen(e) {
      setIsNarrorScreen(e.matches);
    }
    // Safari 14 以前，用的是 addListener / removeListener
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", updateIsNarrowScreen);
    } else {
      mql.addListener(updateIsNarrowScreen);
    }
    return () => {
      if (typeof mql.removeEventListener === "function") {
        mql.removeEventListener("change", updateIsNarrowScreen);
      } else {
        mql.removeListener(updateIsNarrowScreen);
      }
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {isNarrowScreen ? (
          <div className="navbar-menu">
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M954.88 237.056H69.12a43.52 43.52 0 1 1 0-87.04h885.248c24.064 0 43.52 19.456 43.52 43.52s-18.944 43.52-43.008 43.52zM954.88 555.52H69.12a43.52 43.52 0 1 1 0-87.04h885.248c24.064 0 43.52 19.456 43.52 43.52s-18.944 43.52-43.008 43.52zM954.88 874.496H69.12a43.52 43.52 0 1 1 0-87.04h885.248c24.064 0 43.52 19.456 43.52 43.52 0.512 24.064-18.944 43.52-43.008 43.52z"
                fill="#8a8a8a"
              ></path>
            </svg>
          </div>
        ) : (
          <ul>
            <li>
              <Link href="/">
                <a className={path === "/" ? "active" : null}>首页</a>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <a
                  className={
                    path.match(/(^\/post)|(^\/posts)/) ? "active" : null
                  }
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
        )}
      </div>
    </nav>
  );
}
