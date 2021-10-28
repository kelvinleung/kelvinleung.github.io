import Link from "next/link";
import useToc from "./useToc";

export default function Toc({ headings }) {
  const [activeId] = useToc(headings.map((heading) => heading.id));
  return (
    <aside className="toc-container">
      <nav className="toc-content">
        <ul>
          {headings.map((heading) => {
            return (
              <li key={heading.id}>
                <Link href={heading.url}>
                  <a className={heading.id === activeId ? "active" : null}>
                    {heading.text}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
