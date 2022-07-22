import { useState } from "react";
import PostList from "components/PostList";
import { getAllPosts } from "lib/posts";

export async function getStaticProps() {
  const postsData = getAllPosts();
  return {
    props: {
      postsData,
    },
  };
}

const Paragraph = ({ children, delay = 0, onAniEnd }) => {
  const [isEnd, setIsEnd] = useState(false);

  const showText = () => {
    setIsEnd(true);
    if (typeof onAniEnd === "function") {
      onAniEnd();
    }
  };

  return (
    <p
      className={`index__description-text${isEnd ? " animation-end" : ""}`}
      style={{ animationDelay: `${delay}s` }}
      onAnimationEnd={showText}
    >
      {children}
    </p>
  );
};

export default function Home({ postsData }) {
  const [textEnd, setTextEnd] = useState(false);
  const [showList, setShowList] = useState(false);

  return (
    <div className="grow flex flex-col">
      <div
        className={`text-2xl text-neutral-600 leading-loose flex flex-col justify-center ${
          textEnd ? "grow-0 py-16 text-base text-neutral-400" : "grow"
        }`}
        style={{ transition: "all 1s" }}
        onTransitionEnd={() => setShowList(true)}
      >
        <Paragraph>
          Hi，我是<span className="text-red-600">良</span>。
        </Paragraph>
        <Paragraph delay={1}>不优，不劣，刚刚好的良。</Paragraph>
        <Paragraph delay={2}>
          我是一个纯野生全栈开发者，正在努力成为一名独立开发者。
        </Paragraph>
        <Paragraph delay={3} onAniEnd={() => setTextEnd(true)}>
          “般若”，梵语本义为，“超越之智慧”。
        </Paragraph>
      </div>
      {showList && (
        <div className="index__list">
          <PostList postsData={postsData} />
        </div>
      )}
    </div>
  );
}
