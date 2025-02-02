import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeJson: React.FC<{ children: string }> = ({ children }) => {
  return (
    <SyntaxHighlighter language="json" style={a11yDark}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeJson;
