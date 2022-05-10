import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const MenuButton = ({ onToggle }) => {
  return (
    <div className="navbar-menu-button" onClick={onToggle}>
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
  );
};

const Menu = ({ vertical, onToggle }) => {
  const router = useRouter();
  const { pathname: path, query } = router;

  return (
    <div className="navbar-menu-container">
      {vertical && <div className="navbar-menu-mask" onClick={onToggle}></div>}
      <ul className={vertical ? "navbar-menu-vertical" : "navbar-menu"}>
        <li>
          <Link href="/">
            <a className={path === "/" ? "active" : null}>首页</a>
          </Link>
        </li>
        <li>
          <Link href="/posts/horse-sense">
            <a
              className={
                path.match(/^\/posts/) && query.type === "horse-sense"
                  ? "active"
                  : null
              }
            >
              秘籍
            </a>
          </Link>
        </li>
        <li>
          <Link href="/posts/gibberish">
            <a
              className={
                path.match(/^\/posts/) && query.type === "gibberish"
                  ? "active"
                  : null
              }
            >
              八股
            </a>
          </Link>
        </li>
        <li>
          <Link href="/posts/xray">
            <a
              className={
                path.match(/^\/posts/) && query.type === "xray"
                  ? "active"
                  : null
              }
            >
              庖丁
            </a>
          </Link>
        </li>
        <li>
          <Link href="/posts/copycat">
            <a
              className={
                path.match(/^\/posts/) && query.type === "copycat"
                  ? "active"
                  : null
              }
            >
              画瓢
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default function NavBar() {
  const router = useRouter();
  const path = router.asPath;

  const [showMenu, setShowMenu] = useState(false);

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

  useEffect(() => {
    setShowMenu(false);
  }, [isNarrowScreen, path]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {isNarrowScreen ? (
          <MenuButton onToggle={toggleMenu} />
        ) : (
          <Menu vertical={isNarrowScreen} />
        )}
      </div>
      {showMenu && <Menu vertical={isNarrowScreen} onToggle={toggleMenu} />}
    </nav>
  );
}
