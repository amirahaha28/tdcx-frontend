import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --bg: #f7f7fb;
    --card: #ffffff;
    --muted: #6b6b6b;
  }
  *{ box-sizing:border-box }
  html,body,#root{ height:100% }
  body {
    margin: 0;
    font-family: 'Montserrat', Inter, system-ui, Arial, sans-serif;
    background: var(--bg);
    color: #111;
    -webkit-font-smoothing: antialiased;
  }
  input,button,textarea{
    font-family:inherit;
    padding:10px;
    border-radius:8px;
    border:1px solid #e6e6e9;
  }
  button{
    cursor:pointer;
    background:#0b69ff;
    color:white;
    border:none;
    padding:10px 12px;
    border-radius:8px;
  }
  h1,h2,h3,h4{margin:0 0 8px 0}
  p,small{margin:0}
`;

export default GlobalStyles;
