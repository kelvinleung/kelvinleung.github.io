import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBar() {
  const { pathname } = useRouter();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[800px] px-6 py-2 m-auto flex justify-between items-center">
        <Link href="/">
          <a className="navbar__menu-item text-neutral-800 font-bold">
            {"<般若 />"}
          </a>
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link href="/posts">
              <a
                className={`navbar__menu-item${
                  /^\/post\/|^\/posts/.test(pathname) ? " active" : ""
                }`}
              >
                拙作
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="navbar__menu-item">锦囊</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="navbar__menu-item">利器</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="navbar__menu-item">生平</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
