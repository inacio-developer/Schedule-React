import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;    
        list-style: none;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5% !important; 
    }

    body {
        max-width: 1024px;
        width: 100vw;
        margin: auto;
        background-color: ${({ theme }) => theme.backgroundColor};
        font-family: ${({ theme }) => theme.font};
        font-size: ${({ theme }) => theme.fontSize};
        color: ${({ theme }) => theme.textColor};
    }
`;
