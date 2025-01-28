import { createGlobalStyle } from "styled-components";
import { Lora } from "@next/font/google";
import { Inter } from "@next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   style: ["normal"],
//   weight: "300",
// });

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    /* font-family: system-ui; */
    font-family: ${lora.style.fontFamily}, serif;
  }
`;
