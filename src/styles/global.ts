import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: ${(props) => props.theme.background};
    background-size: cover;
    color: ${({theme}) => theme.text};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
}

header{
    background-color: rgba(9, 9, 10, 0.8);
    width: 100%;
    height: 10vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}


`