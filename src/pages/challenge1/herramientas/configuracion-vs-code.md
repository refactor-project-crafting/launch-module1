## Configuración del VS Code

Como cualquier otro programa, **Visual Studio Code** tiene una serie de ajustes para personalizarlo a tu gusto. Abre el editor y sigue estos pasos (no están explicados aquí porque confíamos en tu habilidad para buscar información):

- Abre la paleta de comandos
- Busca los settings de usuario en formato JSON

### El formato JSON

Si has llegado a los settings de usuario en formato JSON, tendrás delante una información que se organiza así:

```json
{
  "propiedad1": "valor1",
  "propiedad2": "valor2",
  "propiedad3": {
    "propiedad4": "valor4",
    "propiedad5": "valor5"
  },
  "propiedad6": "valor6",
  ...
}
```

**JSON** significa _JavaScript Object Notation_, pero no te dejes engañar por su nombre: **no es JavaScript**. Es simplemente una manera de organizar una información. Los ajustes de VS Code se almacenan con este formato.

### Ajustes que tienes que configurar

Aquí tienes los ajustes que tendrás que incluir en los que ya tienes. Cuidado, no se trata de sustituir los que tienes, sino de añadir éstos.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[html]": {
    "editor.linkedEditing": true,
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "files.autoSave": "off",
  "files.insertFinalNewline": true,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  "emmet.triggerExpansionOnTab": true,
  "javascript.suggestionActions.enabled": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "js/ts.implicitProjectConfig.experimentalDecorators": true,
  "rainbowTags.hightlightType": "color",
  "typescript.suggestionActions.enabled": false,
  "typescript.updateImportsOnFileMove.enabled": "always"
}
```

## Extensiones que tienes que instalar

Además de configurar los ajustes, necesitarás instalar las siguientes extensiones:

- EditorConfig for VS Code
- ESLint (de Microsoft)
- Git Graph
- GitLens
- Prettier (de Prettier)
- Rainbow Tags (de voldermortensen)
- Sass (de Syler)
- vscode-icons (de VSCode Icons Team)
- vscode-styled-components (de Styled Components)
- YAML (de Red Hat)

## Entrega R1.2

Haz una <strong>captura de pantalla de tu VS Code mostrando los settings</strong> y entrégala.
