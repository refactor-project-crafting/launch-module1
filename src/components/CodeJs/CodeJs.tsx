import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeJs: React.FC<{ children: string }> = ({ children }) => {
  return (
    <SyntaxHighlighter language="javascript" style={a11yDark}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeJs;
