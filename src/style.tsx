import { css } from '@emotion/css';

export const getStyles = () => {
  return {
    wrapper: css`
      font-family: Open Sans;
      position: relative;
      color: blue;
    `,
    img: css`
      position: relative;
      top: 0;
      left: 0;
      height: 30%;
      display:block;
      margin-left:auto;
      margin-right:auto;
      width:30%;
    `,
    textBox: css`
      // position: absolute;
      bottom: 0;
      left: 0;
      // padding: 10px;
      font-size: 30px;
      color: black;
    `,
    h1: css`
      font-size: 40px;
      text-align: center;
    `,
    // p:css`
    // color:red;
    // `,
    color:css`
    // position:absolute;
    // bottom:0;
    // left:0;
    // padding:10px
    font-size:30px;
    color:black;
    `,
    count:css`
    font-size:30px;
    color:black`,

    button:css`
    background-size:blue
    font-size:white`
    

  };
};
