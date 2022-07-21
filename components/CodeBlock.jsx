import { extractMeta } from "lib/syntax";
import Highlight, { defaultProps } from "prism-react-renderer";

const CodeBlock = ({ children }) => {
  const { className, children: code, metastring } = children.props;
  const language = className && className.replace(/language-/, "");
  const metaOptions = extractMeta(metastring);

  const getHighlightStyle = (index) => {
    if (metaOptions.hl && metaOptions.hl.includes(index)) {
      return "highlight";
    }
    if (metaOptions.add && metaOptions.add.includes(index)) {
      return "add";
    }
    if (metaOptions.del && metaOptions.del.includes(index)) {
      return "del";
    }
  };

  const getLineNumber = (index) => {
    const style = getHighlightStyle(index);
    switch (style) {
      case "add":
        return "+";
      case "del":
        return "-";
      default:
        return index + 1;
    }
  };

  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={undefined}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="my-8 rounded-2xl">
          <div className="relative px-4 py-2 rounded-tl-2xl rounded-tr-2xl text-sm font-bold text-white text-center bg-[#282c34]">
            <ul className="absolute left-0 top-0 h-full flex items-center gap-2 px-4 m-0 list-none">
              <li className="code-block-button bg-[#fc605d]"></li>
              <li className="code-block-button bg-[#fcbb40]"></li>
              <li className="code-block-button bg-[#33c648]"></li>
            </ul>
            {metaOptions.title ? metaOptions.title : "code"}
          </div>
          <pre className={className} style={style}>
            <div className="inline-block min-w-full">
              {tokens.slice(0, -1).map((line, i) => (
                <span
                  key={i}
                  {...getLineProps({
                    line,
                    key: i,
                    className: getHighlightStyle(i),
                  })}
                >
                  <span className="code-block-line-number">
                    {getLineNumber(i)}
                  </span>
                  {line.map((token, key) => (
                    <span
                      key={key}
                      {...getTokenProps({
                        token,
                        key,
                      })}
                    />
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
