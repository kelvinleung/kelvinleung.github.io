import { extractMeta } from "lib/syntax";
import Highlight, { defaultProps } from "prism-react-renderer";

const CodeBlock = ({ children }) => {
  const { className, children: code, metaString } = children.props;
  const language = className.replace(/language-/, "");
  const metaOptions = extractMeta(metaString);
  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={undefined}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="code-block-container">
          <div className="code-block-head">
            <span>{metaOptions.title ? metaOptions.title : ">_<"}</span>
            <span>{language}</span>
          </div>
          <pre className={className} style={style}>
            <div className="code-block">
              {tokens.slice(0, -1).map((line, i) => (
                <span key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              ))}
            </div>
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export default CodeBlock;
