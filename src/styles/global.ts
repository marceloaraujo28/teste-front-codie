import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body, button, input, a {
        font-family: "Inter";
        font-weight: 400;
        text-decoration: none;
    }
`;
