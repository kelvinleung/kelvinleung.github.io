import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const BREAK_POINT = 640;

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState();
  const { pathname } = useRouter();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    setShowMenu(false);
  }, [pathname]);

  useEffect(() => {
    const updateScreenWidth = () => {
      if (window.innerWidth >= BREAK_POINT && showMenu) {
        setShowMenu(false);
      }
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, [showMenu]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[800px] px-6 py-2 m-auto flex justify-between items-center">
        <Link href="/">
          <a
            className={`navbar__menu-item text-neutral-800 font-bold${
              pathname === "/" ? " active" : ""
            }`}
          >
            {"<般若阁 />"}
          </a>
        </Link>
        {(showMenu || screenWidth >= BREAK_POINT) && (
          <ul className="flex gap-4 bg-white fixed inset-x-0 top-16 bottom-0 p-4 flex-col overflow-y-scroll sm:static sm:flex-row sm:p-0 sm:inset-auto sm:overflow-auto">
            <li>
              <Link href="/posts">
                <a
                  className={`navbar__menu-item${
                    /^\/post\/|^\/posts/.test(pathname) ? " active" : ""
                  }`}
                >
                  呓语
                </a>
              </Link>
            </li>
            <li>
              <Link href="/snippets">
                <a
                  className={`navbar__menu-item${
                    pathname === "/snippets" ? " active" : ""
                  }`}
                >
                  锦囊
                </a>
              </Link>
            </li>
            <li>
              <Link href="/tools">
                <a
                  className={`navbar__menu-item${
                    pathname === "/tools" ? " active" : ""
                  }`}
                >
                  利器
                </a>
              </Link>
            </li>
            <li>
              <Link href="/bio">
                <a
                  className={`navbar__menu-item${
                    pathname === "/bio" ? " active" : ""
                  }`}
                >
                  生平
                </a>
              </Link>
            </li>
          </ul>
        )}
        <button className="navbar__menu-item sm:hidden" onClick={toggleMenu}>
          {showMenu ? "关闭" : "机关"}
        </button>
      </div>
    </nav>
  );
}
