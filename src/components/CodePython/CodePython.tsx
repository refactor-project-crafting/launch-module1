import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodePython: React.FC<{ children: string }> = ({ children }) => {
  return (
    <SyntaxHighlighter language="python" style={a11yDark}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodePython;
