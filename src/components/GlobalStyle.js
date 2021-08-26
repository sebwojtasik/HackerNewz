import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.colors.font};
    background-color: ${(props) => props.theme.colors.background};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ul {
    list-style-type: none;
    padding: 8px 0 0 24px;
    border-left: 2px solid ${(props) => props.theme.colors.secondary};
    margin: 0;
  }

  li {
    padding: 4px 0 8px;
  }

  li:last-child {
    border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  }

  svg {
    max-width: 100%;
  }
`;

export default GlobalStyle;
