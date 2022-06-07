import CodeBlock from "./CodeBlock";
import TicTacToe from "./TicTacToe";

const Marker = () => (
  <svg
    className="marker"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const UList = ({ children }) => {
  if (Array.isArray(children)) {
    return (
      <ul>
        {children
          .filter((child) => {
            return child.props && child.props.originalType === "li";
          })
          .map((el, i) => (
            <li key={i}>
              <Marker />
              <div>{el.props.children}</div>
            </li>
          ))}
      </ul>
    );
  } else {
    return (
      <ul>
        <li>
          <Marker />
          <div>{children.props.children}</div>
        </li>
      </ul>
    );
  }
};

const OList = ({ children }) => {
  if (Array.isArray(children)) {
    return (
      <ol>
        {children
          .filter((child) => {
            return child.props && child.props.originalType === "li";
          })
          .map((el, i) => (
            <li key={i}>
              <span className="marker">{`${i + 1}.`}</span>
              <div>{el.props.children}</div>
            </li>
          ))}
      </ol>
    );
  } else
    return (
      <ol>
        <li>
          <span className="marker">1.</span>
          <div>{children}</div>
        </li>
      </ol>
    );
};

const components = {
  ul: UList,
  ol: OList,
  pre: CodeBlock,
  TicTacToe,
};

export default components;
