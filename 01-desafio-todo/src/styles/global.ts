import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;

    /* FONT FAMILY  */
    --ff-body: 'Inter', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea, select {
    font-family: var(--ff-body);
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  button:active, a:active {
    transform: scale(0.97);
  }
`
