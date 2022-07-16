import styled,{ createGlobalStyle } from "styled-components";


export const Styles = createGlobalStyle`

     @font-face {
        font-family: "Century Gothic";
        src: url("/fonts/GOTHIC.TTF") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Century Gothic Bold";
        src: url("/fonts/GOTHICB.TTF") format("truetype");
        font-style: bold;
    }

    @font-face {
        font-family: "Century Gothic Bold Italic";
        src: url("/fonts/GOTHICBI.TTF") format("truetype");
        font-style: bold italic;
    }

    @font-face {
        font-family: "Century Gothic Italic";
        src: url("/fonts/GOTHICI.TTF") format("truetype");
        font-style: italic;
    }

    /* @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    } */


    * {
        font-family: 'Century Gothic';
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #f1f2f2; //#f0f0ed;// #fffef9;
        overflow-x: hidden;
        font-family: 'Century Gothic';
    }

    a:hover {
        color: #18216d;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;
        
        :focus-within {
            background: none;
            box-shadow: #f0da13 0px 0px 0px 1px;
        }

        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #5a5959;
            opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: #5a5959;
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
            color: #5a5959;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: #18216d;
        font-size: 56px;
        line-height: 1.18;

        /* Extra small devices (phones, 600px and down) */
        @media only screen and (max-width: 600px) 
        {
            font-size: 28px;
        }
        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) 
        {
            font-size: 32px;
        }
        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) 
        {
            font-size: 46px;
        }
        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) 
        {
            font-size: 56px;
        }
        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) 
        {
            font-size: 56px;
        }
    }

    p {
        color: #18216d;
        font-size: 21px;        
        line-height: 1.41;

        /* Extra small devices (phones, 600px and down) */
        @media only screen and (max-width: 600px) 
        {
            font-size: 13px;
        }
        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) 
        {
            font-size: 16px;
        }
        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) 
        {
            font-size: 18px;
        }
        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) 
        {
            font-size: 21px;
        }
        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) 
        {
            font-size: 21px;
        }
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #f0da13;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;


export const CustomYellowButton = styled("button")<any>`
  background-color: ${(p) => (p.backgroundColor ? p.backgroundColor : "#f0da13")};
  border: ${(p) => (p.border ? p.border : "0px solid transparent")};
  border-radius: 10px;
  box-sizing: border-box;
  color: ${(p) => (p.color ? p.color : "#212121")};
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
  padding: 12px 40px;
  position: relative;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  width: ${(p) => (p.width ? p.width : "auto")};
  opacity: 1;

  &:hover,
  &:active,
  &:focus {
    //background-color: #dcc709;
    opacity: 0.9;
  }

`;