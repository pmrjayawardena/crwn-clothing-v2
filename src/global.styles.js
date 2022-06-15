import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    body{
        @media screen and (max-width:800px){
            padding:10px
        }
    }
`;
