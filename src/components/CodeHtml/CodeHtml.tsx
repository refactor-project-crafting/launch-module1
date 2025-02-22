import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeHtml: React.FC<{ children: string }> = ({ children }) => {
  return (
    <SyntaxHighlighter language="html" style={a11yDark}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeHtml;
