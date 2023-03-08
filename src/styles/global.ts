import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
/* :root{
    --primary: #59030B;
    --secondary: #800419; // color-secundary e grey 3
    --tertiary: #A1C84B;
    --gray600: #D9CCC1; //grey: 0 e 1
    --gray300: #BFB3A8; // grey: 2
    --gray150: #D9D9D9; //grey 4
    --gray100: #000000; // grey 5
    --gray0: #F506B2; //não vai usar
    --white: #FFFFFF; //grey 6
    
      --negative: #E60000;
      --warning: #FFCD07;
      --sucess: #168821;
      --information: #155BCB;
} */
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }

  dialog{
    display: unset;
    position: unset;
  }
`;
