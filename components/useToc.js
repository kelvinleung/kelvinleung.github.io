import { useEffect, useRef, useState } from "react";

export default function useToc(ids) {
  const [activeId, setActiveId] = useState();
  const headingsRef = useRef({});

  useEffect(() => {
    const headings = ids.map((id) => document.getElementById(id));

    const callback = (headings) => {
      headingsRef.current = headings.reduce((map, heading) => {
        map[heading.target.id] = heading;
        return map;
      }, headingsRef.current);

      const visibleHeadings = [];
      Object.keys(headingsRef.current).forEach((key) => {
        const heading = headingsRef.current[key];
        if (heading.isIntersecting) visibleHeadings.push(heading);
      });

      const getIndexFromId = (id) =>
        headings.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisivleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );
        setActiveId(sortedVisivleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-80px 0px -50% 0px",
    });

    headings.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return [activeId];
}
