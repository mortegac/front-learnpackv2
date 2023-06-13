import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "../Dropdown";

import {
  MobileWrap,
  LeftWrap,
  RightWrap,
  NavContainer,
  SectionContainer,
  SidebarContainer,
  BoxButton,
  ButtonPrimary, ButtonSecondary, ButtonTertiary
} from "./HeaderStyles";




export const Header = ({
  header,
  pagename,
  activeDocMeta,
}) => {
  const [open, setOpen] = useState(false);
  const [langToggle, setLangToggle] = useState(false);

  const contentAction = [
    { name: "Test", link: "uno", selected: true },
    { name: "Reset", link: "dos", selected: false },
  ]

  const HamburgerBehavior = () => {
    setOpen(!open);
    setLangToggle(false);
  };

  return (
    <NavContainer>
      {/* <pre>{JSON.stringify(open)}</pre> */}
      <SectionContainer id="home" >
        <LeftWrap style={{ display: "none" }}>
          <picture>
            <source srcSet={"logo.png"} media="(max-width: 500px)" />
            <source srcSet={"logo.png"} media="(max-width: 960px)" />
            <img style={{ width: '3 0%' }} src={"logo.png"} alt="LearnPack" />
          </picture>

          <BoxButton style={{ marginRight: '32px' }} fullwidth={true}>

            <BoxButton style={{ marginRight: '8px' }} fullwidth={true}>
              <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07865 0.268293C7.7791 -0.089431 7.29344 -0.089431 6.9939 0.268293L0.224659 8.35228L0.135905 8.47915C-0.0711882 8.83615 -0.0416035 9.32974 0.224659 9.64771L6.9939 17.7317L7.10013 17.8377C7.39907 18.085 7.81238 18.0497 8.07865 17.7317L8.1674 17.6048C8.37449 17.2478 8.34491 16.7542 8.07865 16.4363L2.61836 9.91603H17.2331L17.371 9.90127C17.7288 9.82371 18.0001 9.4497 18.0001 9.00002C18.0001 8.49412 17.6567 8.08401 17.2331 8.08401H2.61833L8.07865 1.56373L8.1674 1.43686C8.37449 1.07986 8.34491 0.58627 8.07865 0.268293Z" fill="#3F4C5A" />
              </svg>
            </BoxButton>

            <BoxButton style={{ marginRight: '8px' }} fullwidth={true}>
              <svg width="24" height="24" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9157 0.268293C11.2153 -0.089431 11.7009 -0.089431 12.0005 0.268293L18.7697 8.35228L18.8585 8.47915C19.0656 8.83615 19.036 9.32974 18.7697 9.64771L12.0005 17.7317L11.8943 17.8377C11.5953 18.085 11.182 18.0497 10.9157 17.7317L10.827 17.6048C10.6199 17.2478 10.6495 16.7542 10.9157 16.4363L16.376 9.91609H1.76155L1.62367 9.90134C1.26586 9.82378 0.994516 9.44977 0.994516 9.00008C0.994516 8.49419 1.33793 8.08407 1.76155 8.08407H16.3761L10.9157 1.56373L10.827 1.43686C10.6199 1.07986 10.6495 0.58627 10.9157 0.268293Z" fill="#3F4C5A" />
              </svg>
            </BoxButton>

          </BoxButton>


          <ButtonPrimary fullwidth={true}>
            <svg width="24" height="22" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_544_516)">
                <path d="M2.10358 4.59753L0.8353 3.2226L2.10358 1.84767" stroke="white" stroke-width="0.505448" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.90039 4.59753L7.16867 3.2226L5.90039 1.84767" stroke="white" stroke-width="0.505448" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.94233 5.68985L5.06477 0.755509" stroke="white" stroke-width="0.505448" stroke-linecap="round" />
              </g>
              <defs>
                <clipPath id="clip0_544_516">
                  <rect width="7.17446" height="5" fill="white" transform="translate(0.421326 0.72229)" />
                </clipPath>
              </defs>
            </svg>
            <p>Build</p>
          </ButtonPrimary>

          <ButtonSecondary fullwidth={true}>
            <svg width="24" height="23" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.11145" y="0.496338" width="4.29883" height="4.68463" rx="1.51634" fill="#EAF5FE" />
              <path d="M1.00952 2.76089L1.88406 3.70897L3.51215 1.94397" stroke="#457EFF" stroke-width="0.505448" stroke-linecap="round" />
            </svg>
            <p>Test</p>
          </ButtonSecondary>

          <ButtonTertiary fullwidth={true}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#467FFF" />
              <circle cx="12" cy="12" r="10" fill="white" />
              <circle cx="12" cy="12" r="3" fill="#467FFF" />
            </svg>
            <p>Reset</p>
          </ButtonTertiary>



        </LeftWrap>

        <RightWrap style={{ display: "none" }}>
          <ul>

            <Link to={`uno`}>
              <li class="nav-item">
                <svg width="24" height="27" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.18182 0H0.818182C0.364091 0 0 0.346111 0 0.777778V5.44444C0 5.87222 0.364091 6.22222 0.818182 6.22222H2.86364V7H6.13636V6.22222H8.18182C8.63182 6.22222 8.99591 5.87222 8.99591 5.44444L9 0.777778C9 0.346111 8.63182 0 8.18182 0ZM8.18182 5.44444H0.818182V0.777778H8.18182V5.44444ZM6.13636 3.11111L3.27273 4.66667V1.55556L6.13636 3.11111Z" fill="#A3B5C9" />
                </svg>

                Explication
                <div class="underline"></div>
              </li>
            </Link>
            <Link to={`dos`}>
              <li class="nav-item">
                <svg width="24" height="27" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.97348 0C4.61569 0 5.94696 1.31446 5.94696 2.93593C5.94696 3.98315 5.39166 4.90231 4.55594 5.42202L4.32681 6.45628C4.27543 6.68866 4.06705 6.85434 3.82615 6.85434H2.12082C1.87992 6.85434 1.67154 6.68866 1.62015 6.45628L1.39154 5.42234C0.555527 4.90269 0 3.98337 0 2.93593C0 1.31446 1.33127 0 2.97348 0Z" fill="#A3B5C9" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25201 1.77705C2.20693 2.01285 1.95 3.3411 1.89721 3.61195C1.84443 3.8828 2.07067 4.12558 2.29279 4.12558C2.51492 4.12558 2.54428 4.12558 2.63545 4.12558C2.72662 4.12558 2.86235 4.18882 2.81126 4.41911C2.76017 4.64939 2.70734 4.8863 2.6554 5.11006C2.60347 5.33382 2.86373 5.42404 2.97658 5.2496C3.08942 5.07515 3.93195 3.74371 4.02891 3.56465C4.12587 3.38559 3.96706 3.1087 3.72801 3.1087C3.48897 3.1087 3.39006 3.1087 3.26467 3.1087C3.13929 3.1087 3.12169 3.02031 3.1672 2.83823C3.2127 2.65615 3.26742 2.41797 3.35203 2.06892C3.43664 1.71987 3.09569 1.53027 2.91604 1.53027C2.73639 1.53027 2.54322 1.53027 2.48997 1.53027C2.43671 1.53027 2.29709 1.54125 2.25201 1.77705Z" fill="white" />
                  <path d="M3.73899 7.10352H2.20579C2.03109 7.10352 1.88947 7.24335 1.88947 7.41585C1.88947 7.58835 2.03109 7.72818 2.20579 7.72818H3.73899C3.9137 7.72818 4.05532 7.58835 4.05532 7.41585C4.05532 7.24335 3.9137 7.10352 3.73899 7.10352Z" fill="#979797" />
                  <path d="M3.60993 7.97742H2.33592C2.16122 7.97742 2.01959 8.11725 2.01959 8.28975C2.01959 8.46225 2.16122 8.60208 2.33592 8.60208H3.60993C3.78464 8.60208 3.92626 8.46225 3.92626 8.28975C3.92626 8.11725 3.78464 7.97742 3.60993 7.97742Z" fill="#979797" />
                </svg>

                Solution
                <div class="underline"></div>
              </li>
            </Link>

          </ul>
          <ul style={{ backgroundColor: "#F5F8FE" }}>
            <Dropdown activeDocMeta={{}} />
          </ul>
          <a onClick={() => setOpen(!open)}>
            <BoxButton>
              <svg width="24" height="16" onClick={HamburgerBehavior} viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.8" d="M8 15.7979H24V13.1649H8V15.7979ZM0 0V2.63299H24V0H0ZM8 9.21546H24V6.58247H8V9.21546Z" fill="#3F4C5A" />
              </svg>
            </BoxButton>

          </a>
        </RightWrap>

        {/* MOBILE */}

        {/* <MobileWrap > */}
        <LeftWrap>
          <picture style={{ margin: '8px' }}>
            <source srcSet={"logo.png"} media="(max-width: 500px)" />
            <source srcSet={"logo.png"} media="(max-width: 960px)" />
            <img src={"logo.png"} alt="LearnPack" />
          </picture>
          <ButtonPrimary >
            <svg width="24" height="22" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_544_516)">
                <path d="M2.10358 4.59753L0.8353 3.2226L2.10358 1.84767" stroke="white" stroke-width="0.505448" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.90039 4.59753L7.16867 3.2226L5.90039 1.84767" stroke="white" stroke-width="0.505448" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.94233 5.68985L5.06477 0.755509" stroke="white" stroke-width="0.505448" stroke-linecap="round" />
              </g>
              <defs>
                <clipPath id="clip0_544_516">
                  <rect width="7.17446" height="5" fill="white" transform="translate(0.421326 0.72229)" />
                </clipPath>
              </defs>
            </svg>
            <p>Build</p>
          </ButtonPrimary>

          <ButtonSecondary>
            <Dropdown content={[...contentAction]} />
          </ButtonSecondary>
        </LeftWrap>

        <RightWrap>
          <a onClick={() => setOpen(!open)}>
            <BoxButton>
              <svg width="24" height="16" onClick={HamburgerBehavior} viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.8" d="M8 15.7979H24V13.1649H8V15.7979ZM0 0V2.63299H24V0H0ZM8 9.21546H24V6.58247H8V9.21546Z" fill="#3F4C5A" />
              </svg>
            </BoxButton>
          </a>

        </RightWrap>






        {/* </MobileWrap> */}

        <SidebarContainer className={open && "on"}>

          {open && (
            <>

              <div className="header-container" id="NavMobile">
                <BoxButton>
                  <svg
                    className={`ham hamRotate ham8 ${open && "active"}`}
                    viewBox="0 0 100 100"
                    width="50"
                    onClick={HamburgerBehavior}
                  >
                    <path
                      className="line top"
                      d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                    />
                    <path className="line middle" d="m 30,50 h 40" />
                    <path
                      className="line bottom"
                      d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                    />
                  </svg>
                </BoxButton>
              </div>
              <div className="footer-container">

                <BoxButton>

                  <svg width="26" height="26" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9386 12.2931L16.0404 11.3769H17.011C17.6957 11.3769 18.2605 10.7787 18.2605 10.0981V6.59072C18.4781 6.53077 18.9132 6.37039 18.9132 6.04409V5.71079C18.9132 5.44303 18.5729 5.14458 18.3289 5.14458H18.0123C17.7892 4.85449 17.4238 4.70947 17.011 4.70947H16.3444C16.0892 4.20185 15.7001 3.72908 15.2454 3.37765C15.3445 3.33582 15.4379 3.28701 15.5258 3.2368C16.1087 2.90629 16.4559 2.47397 16.5592 1.95658C16.7363 1.05709 16.1031 0.234288 16.0766 0.200818L15.919 0L15.8312 0.238472C15.8284 0.246839 15.4895 1.1296 14.2442 1.1296C14.1549 1.1296 14.0628 1.12542 13.968 1.11566C13.0825 1.03198 12.4716 0.836743 11.8246 0.630348C10.8512 0.320752 9.84426 0 7.80679 0C6.73579 0 5.79585 0.225921 5.01209 0.673579C4.38314 1.03198 3.85599 1.53263 3.44459 2.16019C2.81006 3.12802 2.65247 4.09307 2.62458 4.2911C2.53394 4.42498 2.45166 4.56444 2.38193 4.70947H1.7739C1.3611 4.70947 0.997117 4.85449 0.772594 5.14458H0.458814C0.188267 5.14458 0 5.46113 0 5.71079V6.04409C0 6.38575 0.435106 6.53777 0.652661 6.59351V10.0967C0.652661 10.43 0.747492 10.7536 0.952492 10.9864C1.16726 11.2305 1.44896 11.3769 1.77669 11.3769H2.68874L2.70547 11.5415L2.71941 11.667H2.72081L2.79054 12.2987C2.90489 13.1718 3.32466 13.8746 4.00103 14.3516C4.61464 14.7824 5.41929 15.0014 6.32717 15.0014H12.3992C13.2693 15.0014 14.0991 14.7532 14.7364 14.2846C15.417 13.7826 15.8312 13.1006 15.9386 12.2931ZM7.97139 10.0967C7.97139 10.2348 7.67015 10.4342 7.47629 10.4342H1.77669C1.75158 10.4342 1.73345 10.4286 1.72648 10.423C1.6944 10.391 1.68046 10.2459 1.68046 10.1511C1.68046 10.1343 1.66651 10.1162 1.66651 10.0981V5.9325C1.66651 5.91439 1.68046 5.89765 1.68046 5.88091C1.68046 5.79027 1.68604 5.63684 1.71532 5.60757C1.71951 5.60199 1.74461 5.57967 1.77529 5.57967H7.25595C7.71336 5.57967 7.96997 5.99108 7.96997 6.15147V10.0967H7.97139ZM11.3114 10.4342C11.1064 10.4342 11.0869 10.1316 11.0869 10.0967V6.15147C11.0869 5.76932 11.2249 5.57967 11.5303 5.57967H17.011C17.2132 5.57967 17.5367 5.80422 17.5367 5.9325V10.0967C17.5367 10.2278 17.209 10.4342 17.011 10.4342H11.3114Z"
                      fill="#616E7C" />
                  </svg>
                  <svg width="26" height="26" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 0C3.36 0 0 3.36 0 7.5C0 11.64 3.36 15 7.5 15C11.64 15 15 11.64 15 7.5C15 3.36 11.64 0 7.5 0ZM8.25 12.75H6.75V11.25H8.25V12.75ZM9.8025 6.9375L9.1275 7.6275C8.5875 8.175 8.25 8.625 8.25 9.75H6.75V9.375C6.75 8.55 7.0875 7.8 7.6275 7.2525L8.5575 6.3075C8.835 6.0375 9 5.6625 9 5.25C9 4.425 8.325 3.75 7.5 3.75C6.675 3.75 6 4.425 6 5.25H4.5C4.5 3.5925 5.8425 2.25 7.5 2.25C9.1575 2.25 10.5 3.5925 10.5 5.25C10.5 5.91 10.23 6.51 9.8025 6.9375Z"
                      fill="#616E7C" />
                  </svg>
                  <svg width="26" height="26" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 10.2V8.53333H12.4417C12.4 8.20833 12.3417 7.89167 12.2583 7.58333L14.4083 6.34167L13.575 4.9L11.6 6.03333C11.3667 5.63333 11.0833 5.275 10.775 4.95833C10.8083 4.76667 10.8333 4.575 10.8333 4.36667C10.8333 3.7 10.6333 3.075 10.2917 2.55L11.6667 1.175L10.4917 0L9.05833 1.43333C7.65833 0.691667 6.475 1.15833 5.95 1.43333L4.50833 0L3.33333 1.175L4.70833 2.55C4.36667 3.075 4.16667 3.7 4.16667 4.36667C4.16667 4.575 4.19167 4.76667 4.225 4.96667C3.91667 5.28333 3.63333 5.64167 3.4 6.03333L1.425 4.89167L0.591667 6.33333L2.74167 7.575C2.65833 7.88333 2.6 8.2 2.55833 8.525H0V10.1917H2.55833C2.6 10.5167 2.65833 10.8333 2.74167 11.1417L0.591667 12.3833L1.425 13.825L3.4 12.7C4.3 14.2083 5.8 15.2 7.5 15.2C9.2 15.2 10.7 14.2083 11.6 12.7L13.575 13.8417L14.4083 12.4L12.2583 11.1583C12.3417 10.85 12.4 10.5333 12.4417 10.2083H15V10.2ZM8.33333 11.8667H6.66667V6.86667H8.33333V11.8667Z"
                      fill="#616E7C" />
                  </svg>

                </BoxButton>
                <svg width="28" height="28" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.7157 13.8895C12.8809 11.8287 10.8602 10.375 8.5 10.375C6.13977 10.375 4.11906 11.8287 3.28433 13.8895M13.7157 13.8895C15.1243 12.526 16 10.6153 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 10.6153 1.87569 12.526 3.28433 13.8895M13.7157 13.8895C12.3659 15.196 10.5269 16 8.5 16C6.47315 16 4.63408 15.196 3.28433 13.8895M11 6C11 7.38071 9.88071 8.5 8.5 8.5C7.11929 8.5 6 7.38071 6 6C6 4.61929 7.11929 3.5 8.5 3.5C9.88071 3.5 11 4.61929 11 6Z"
                    stroke="#616E7C" stroke-width="1.2" stroke-linejoin="round" />
                </svg>

              </div>
            </>
          )}
        </SidebarContainer>

      </SectionContainer>

    </NavContainer >
  );
};
