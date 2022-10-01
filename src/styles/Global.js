import { createGlobalStyle } from "styled-components"


const GlobalStyles = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
 font-family: 'Inter', sans-serif;
}

input,
button,
textarea,
select {
  font: inherit;
}

`

export default GlobalStyles