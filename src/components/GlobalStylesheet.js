import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  :root {
    --primary: #20FC8F;
    --text: #FFF;
    --qty-button: #8B8B8B;
    --button-background: #11291D;
    --background-primary: #0C0C0C;
    --background-secondary: #141414;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    border: none;
    font-family: Roboto, sans-serif;
    background: none;
  }

  body {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    color: var(--text);
    background: var(--background-primary);
  }

  #root {
    min-height: 100vh;
    margin: auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
  }

  main {
    width: 100%;
    max-width: 1136px;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
