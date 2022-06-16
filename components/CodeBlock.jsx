import { extractMeta } from "lib/syntax";
import Highlight, { defaultProps } from "prism-react-renderer";

const CodeBlock = ({ children }) => {
  const { className, children: code, metastring } = children.props;
  const language = className && className.replace(/language-/, "");
  const metaOptions = extractMeta(metastring);
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
            <ul className="code-block-buttons">
              <li className="code-block-button red"></li>
              <li className="code-block-button yellow"></li>
              <li className="code-block-button green"></li>
            </ul>
            {metaOptions.title ? metaOptions.title : "code"}
          </div>
          <pre className={className} style={style}>
            <div className="code-block">
              {tokens.slice(0, -1).map((line, i) => (
                <span key={i} {...getLineProps({ line, key: i })}>
                  <span className="code-block-line-number">{i + 1}</span>
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
