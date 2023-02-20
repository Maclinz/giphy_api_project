import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        padding: 0;
    }
    body{
        font-family: 'Nunito', sans-serif;
        min-height: 100vh;
        font-size: 1.2rem;
        ::-webkit-scrollbar{
            width: 7px;
        }
        ::-webkit-scrollbar-track{
            background: #252525;
        }
        ::-webkit-scrollbar-thumb{
            background: linear-gradient(#9933ff, #00e6cc);
            border-radius: 1rem;
        }
    }
`;