import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "../Dropdown";

import {
  LeftWrap,
  RightWrap,
  NavContainer,
  SectionContainer,
  BoxButton,
} from "./MenuStyles";




export const Menu = ({
  Menu,
  pagename,
  activeDocMeta,
}) => {
  const [open, setOpen] = useState(false);
  const [langToggle, setLangToggle] = useState(false);


  const languageAction = [
    { name: "ENG", link: "", selected: true },
    { name: "ESP", link: "", selected: false },
  ]

  const HamburgerBehavior = () => {
    setOpen(!open);
    setLangToggle(false);
  };

  return (
    <NavContainer>
      <SectionContainer id="secondNav" >


        {/* MOBILE */}

        <LeftWrap style={{ marginLeft: "12px" }}>

          <a onClick={() => null}>
            <BoxButton>
              <svg width="30" height="30" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#EFF1F4" />
                <path d="M16.3332 10.4556H8.21984L11.9465 7.28365L10.9998 6.48356L5.6665 11.023L10.9998 15.5625L11.9398 14.7624L8.21984 11.5905H16.3332V10.4556Z" fill="#3F4C5A" />
              </svg>
            </BoxButton>
          </a>
          <a onClick={() => null}>
            <BoxButton>
              <svg width="30" height="30" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#EFF1F4" />
                <path d="M5.66634 10.8882L13.7797 10.8882L10.053 14.0602L10.9997 14.8603L16.333 10.3208L10.9997 5.7813L10.0597 6.58139L13.7797 9.75335L5.66634 9.75335V10.8882Z" fill="#3F4C5A" />
              </svg>
            </BoxButton>
          </a>
        </LeftWrap>

        <RightWrap style={{ marginRight: "12px" }}>
          {/* <a onClick={() => null}>
            <BoxButton>
              <svg width="30" height="30" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.5" cy="10.4999" r="10.5" transform="rotate(-180 10.5 10.4999)" fill="#EFF1F4" />
                <path d="M14.7955 7.39493H6.20455C5.67477 7.39493 5.25 7.72635 5.25 8.13969V12.6082C5.25 13.0179 5.67477 13.353 6.20455 13.353H8.59091V14.0978H12.3091V13.353H14.7955C15.3205 13.353 15.7452 13.0179 15.7452 12.6082L15.75 8.13969C15.75 7.72635 15.3205 7.39493 14.7955 7.39493ZM14.7955 12.6082H6.20455V8.13969H14.7955V12.6082ZM12.3091 10.374L9.06818 11.8635V8.88445L12.3091 10.374Z" fill="#A3B5C9" />
              </svg>
            </BoxButton>
          </a>
          <a onClick={() => null}>
            <BoxButton>
              <svg width="30" height="30" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.5" cy="10.4999" r="10.5" transform="rotate(-180 10.5 10.4999)" fill="#EFF1F4" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4652 6.27779C12.6206 6.27779 14.3679 7.74623 14.3679 9.55763C14.3679 10.7275 13.6391 11.7544 12.5422 12.3349L12.2414 13.4904C12.174 13.75 11.9005 13.935 11.5843 13.935H9.34607C9.02989 13.935 8.75639 13.75 8.68895 13.4904L8.38889 12.3353C7.29163 11.7548 6.5625 10.7278 6.5625 9.55763C6.5625 7.74623 8.3098 6.27779 10.4652 6.27779Z" fill="#A3B5C9" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51832 8.26292C9.45916 8.52634 9.12193 10.0102 9.05265 10.3128C8.98337 10.6153 9.28031 10.8866 9.57185 10.8866C9.86338 10.8866 9.90192 10.8866 10.0216 10.8866C10.1412 10.8866 10.3194 10.9572 10.2523 11.2145C10.1853 11.4717 10.1159 11.7364 10.0478 11.9863C9.97961 12.2363 10.3212 12.3371 10.4693 12.1422C10.6174 11.9474 11.7232 10.4599 11.8505 10.2599C11.9778 10.0599 11.7693 9.75055 11.4556 9.75055C11.1418 9.75055 11.012 9.75055 10.8474 9.75055C10.6829 9.75055 10.6598 9.65181 10.7195 9.4484C10.7792 9.24499 10.851 8.97892 10.9621 8.58898C11.0731 8.19904 10.6256 7.98723 10.3899 7.98723C10.1541 7.98723 9.90053 7.98723 9.83064 7.98723C9.76074 7.98723 9.57749 7.99949 9.51832 8.26292Z" fill="white" />
                <path d="M11.47 14.2134H9.45766C9.22836 14.2134 9.04248 14.3696 9.04248 14.5623C9.04248 14.755 9.22836 14.9112 9.45766 14.9112H11.47C11.6993 14.9112 11.8852 14.755 11.8852 14.5623C11.8852 14.3696 11.6993 14.2134 11.47 14.2134Z" fill="#979797" />
                <path d="M11.3002 15.1896H9.62807C9.39877 15.1896 9.21289 15.3458 9.21289 15.5385C9.21289 15.7312 9.39877 15.8874 9.62807 15.8874H11.3002C11.5295 15.8874 11.7154 15.7312 11.7154 15.5385C11.7154 15.3458 11.5295 15.1896 11.3002 15.1896Z" fill="#979797" />
              </svg>
            </BoxButton>

          </a> */}
          <BoxButton>
            <Dropdown content={[...languageAction]} />

          </BoxButton>

        </RightWrap>







      </SectionContainer>

    </NavContainer >
  );
};
