import CodeJson from "../../CodeJson/CodeJson";

const Challenge1VsCode: React.FC = () => {
  const json = `{
  "propiedad1": "valor1",
  "propiedad2": "valor2",
  "propiedad3": {
    "propiedad4": "valor4",
    "propiedad5": "valor5"
  },
  "propiedad6": "valor6",
  ...
}
`;

  const jsonSettings = `{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.guides.bracketPairs": true,
  "[html]": {
    "editor.linkedEditing": true,
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  "emmet.triggerExpansionOnTab": true,
  "files.autoSave": "off",
  "files.insertFinalNewline": true,
  "javascript.suggestionActions.enabled": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "rainbowTags.hightlightType": "color",
  "typescript.suggestionActions.enabled": false,
  "typescript.updateImportsOnFileMove.enabled": "always"
}`;

  return (
    <>
      <h2>Configuración del VS Code</h2>
      <p>
        Como cualquier otro programa, <strong>Visual Studio Code</strong> tiene
        una serie de ajustes para personalizarlo a tu gusto. Abre el editor y
        sigue estos pasos (no están explicados aquí porque confíamos en tu
        habilidad para buscar información):
      </p>
      <ul>
        <li>
          Abre la <strong>paleta de comandos</strong>.
        </li>
        <li>Busca los settings de usuario en formato JSON.</li>
      </ul>
      <h3>El formato JSON</h3>
      <p>
        Si has llegado a los settings de usuario en formato JSON, tendrás
        delante una información que se organiza así:
      </p>
      <CodeJson>{json}</CodeJson>
      <p>
        <strong>JSON</strong> significa <em>JavaScript Object Notation</em>,
        pero no te dejes engañar por su nombre:{" "}
        <strong>no es JavaScript</strong>. Es simplemente una manera de
        organizar una información. Los ajustes de VS Code se almacenan con este
        formato.
      </p>
      <h3>Ajustes que tienes que configurar</h3>
      <p>
        Aquí tienes los ajustes que tendrás que incluir en los que ya tienes.
        Cuidado, no se trata de sustituir los que tienes, sino de añadir éstos.
      </p>
      <CodeJson>{jsonSettings}</CodeJson>
      <h3>Extensiones que tienes que instalar</h3>
      <p>
        Además de configurar los ajustes, necesitarás instalar las siguientes
        extensiones:
      </p>
      <ul>
        <li>EditorConfig for VS Code</li>
        <li>ESLint (de Microsoft)</li>
        <li>Git Graph</li>
        <li>GitLens</li>
        <li>Prettier (de Prettier)</li>
        <li>Rainbow Tags (de voldermortensen)</li>
        <li>vscode-icons (de VSCode Icons Team)</li>
        <li>YAML (de Red Hat)</li>
      </ul>
      <h2 id="entrega-r1-vscode">
        Entrega <code>R1-VSCode</code>
      </h2>
      Haz una{" "}
      <strong>captura de pantalla de tu VS Code mostrando los settings</strong>{" "}
      y entrégala.
    </>
  );
};

export default Challenge1VsCode;
