import styled from 'styled-components';

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const navMenuItems = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};

export const Anchor = styled.a`
  margin: 0;
  &.fullwidth {
    // @media (max-width: 768px) {
    //   width: 100%;
    // }
  }
  // @media (max-width: 500px) {
  //   width: 100%;
  // }
  text-decoration: none;
`;

export const BoxButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.space.s16};

  ${props =>
    props.fullwidth
      ? `
      margin-right:${props => props.theme.space.s0};
  `
      : `margin-right:0;
      
  `}
`;

// ${(props) =>
//   props.primary ? `

// `
//     : props.secondary ? `

//     `
//     :`

// `}
export const ButtonPrimary = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family: ${props => props.theme.typography.fontFamily};
  line-height: ${props => props.theme.typography.p.desktop.lineHeight};
  font-size: ${props => props.theme.typography.p.desktop.fontSize};
  cursor: pointer;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.secondary};

  white-space: nowrap;
  border-radius: ${props => props.theme.button.borderRadius};
  border: none;
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.button.padding};

  :hover {
  }

  margin-right: ${props => props.theme.space.s8};

  ${props =>
    props.fullwidth
      ? ` 
        margin-right:${props => props.theme.space.s0};
      `
      : ''}

  svg {
    margin-right: ${props => props.theme.space.s4};
  }
  p {
    font-family: ${props => props.theme.typography.fontFamily};
    line-height: ${props => props.theme.typography.p.desktop.lineHeight};
    font-size: ${props => props.theme.typography.p.desktop.fontSize};
    cursor: pointer;
    color: ${props => props.theme.colors.white};
  }
`;

export const ButtonSecondary = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family: ${props => props.theme.typography.fontFamily};
  line-height: ${props => props.theme.typography.p.desktop.lineHeight};
  font-size: ${props => props.theme.typography.p.desktop.fontSize};
  cursor: pointer;
  color: ${props => props.theme.colors.white};
  // background: ${props => props.theme.colors.secondary};

  white-space: nowrap;
  border-radius: ${props => props.theme.button.borderRadius};
  border: none;
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.button.padding};

  :hover {
  }

  margin-right: ${props => props.theme.space.s8};

  ${props =>
    props.fullwidth
      ? ` 
        margin-right:${props => props.theme.space.s0};
      `
      : ''}

  svg {
    margin-right: ${props => props.theme.space.s4};
  }
  p {
    font-family: ${props => props.theme.typography.fontFamily};
    line-height: ${props => props.theme.typography.p.desktop.lineHeight};
    font-size: ${props => props.theme.typography.p.desktop.fontSize};
    cursor: pointer;
    color: ${props => props.theme.colors.white};
  }
`;

// export const ButtonSecondary = styled.button`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   // margin-right:${(props) => props.theme.space.s16};
//   cursor: pointer;
//   color: ${(props) => props.theme.colors.lighterGray};
//   background-color: ${(props) => props.theme.colors.white};
//   white-space: nowrap;
//   border-radius: ${(props) => props.theme.button.borderRadius};
//   border: solid 1px ${(props) => props.theme.colors.lighterGray};
//   height: ${(props) => props.theme.button.height};
//   padding:${(props) => props.theme.button.padding};

//   // :hover {
//     // background-color: ${(props) => props.theme.colors.bgHover};
//     // color: ${(props) => props.theme.colors.white};
//     // border: 1px solid ${(props) => props.theme.colors.bgHover};
//   // }
//   ${(props) =>
//     props.fullwidth ? `
//       svg {
//         // margin-right:${(props) => props.theme.space.s12};
//       }
//   `
//       : `svg {
//         margin-right:0;
//       }
//   `}
//   p {

//     font-family: ${(props) => props.theme.typography.fontFamily};
//     line-height:  ${(props) => props.theme.typography.p.desktop.lineHeight};
//     font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
//     cursor: pointer;
//     color: ${(props) => props.theme.colors.lighterGray};
//   }

//   // @media (max-width: ${(props) => props.theme.breakpoints.md}) {
//   //   width: 100%;
//   // }
// `;

export const ButtonTertiary = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: ${props => props.theme.space.s16};
  cursor: pointer;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.white};

  white-space: nowrap;
  border-radius: ${props => props.theme.button.borderRadius};
  border: none;
  height: ${props => props.theme.button.height};

  :hover {
    // background-color: ${props => props.theme.colors.bgHover};
    // color: ${props => props.theme.colors.white};
    // border: 1px solid ${props => props.theme.colors.bgHover};
  }
  ${props =>
    props.fullwidth
      ? `
    svg {
      margin-right:${props => props.theme.space.s12};
      padding:${props => props.theme.button.padding};
    }
    `
      : `svg {
      margin-right:0;
      padding:${props => props.theme.button.paddingMobile};
      }
  `}
  p {
    font-family: ${props => props.theme.typography.fontFamily};
    line-height: ${props => props.theme.typography.p.desktop.lineHeight};
    font-size: ${props => props.theme.typography.p.desktop.fontSize};
    cursor: pointer;
    color: ${props => props.theme.colors.secondary};
  }

  // @media (max-width: ${props => props.theme.breakpoints.md}) {
  //   width: 100%;
  // }
`;

export const NavContainer = styled.div`
  position: fixed;
  border-radius: ${props => props.theme.button.borderRadius};
  border: none;
  top: ${props => props.theme.space.s0};
  left: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;
  width: 100vw;

  background: ${props => props.theme.colors.bgNavbar};
  color: ${props => props.theme.colors.secondary};
  z-index: 200;
  height: 60px;
  width: 98%;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    max-width: 1136px;
    top: ${props => props.theme.space.s12};
    width: calc(100vw - 60px);
  }
  border-radius: 0px;
  width: 100%;
  justify-content: space-between;
  top: 0px;

  .navButton {
    height: 24px;
  }
`;
export const SectionContainer = styled.div`
  max-width: ${props => props.theme.sliceContainer.maxWidth};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  a {
    display: flex;
    height: 39px;
    letter-spacing: 0px;
  }
  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 500;
    margin-right: -13px;
  }
  .hamRotate.active {
    transform: rotate(45deg);
    .line {
      stroke: #000;
    }
  }
  .hamRotate180.active {
    transform: rotate(180deg);
  }
  .line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: #013;
    stroke-width: 5.5;
    stroke-linecap: round;
    transition: all 0.4s ease;
  }
  .ham8 .top {
    stroke-dasharray: 40 160;
  }
  .ham8 .middle {
    stroke-dasharray: 40 142;
    transform-origin: 50%;
    transition: transform 400ms;
  }
  .ham8 .bottom {
    stroke-dasharray: 40 85;
    transform-origin: 50%;
    transition: transform 400ms, stroke-dashoffset 400ms;
  }
  .ham8.active .top {
    stroke-dashoffset: -64px;
  }
  .ham8.active .middle {
    transform: rotate(90deg);
  }
  .ham8.active .bottom {
    stroke-dashoffset: -64px;
  }
`;
export const MobileWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    justify-content: space-between;
  }
`;
export const LeftWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  img {
    margin-right: 24px;
    width: 40px;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0px;
    list-style: none;
    height: 100%;
    padding: 0;
    a {
      letter-spacing: 0px;
      height: 100%;
    }
  }
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    a {
      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
`;
export const RightWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  // @media (max-width: 1000px) {
  //   display: none;
  // }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0px;
    list-style: none;
    height: 100%;
    padding: 0;
    a {
      letter-spacing: 0px;
      height: 100%;
      li {
        position: relative;
        height: 100%;
        padding: 0 20px 0 20px;
        margin: 0px;

        color: ${props => props.theme.colors.textTertiary};
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        cursor: pointer;

        transition: color 0.4s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:hover {
          color: ${props => props.theme.colors.bgHover};
        }
        .underline {
          position: absolute;
          width: 100%;
          left: 0;
          bottom: -1px;
          transition: all 0.5s ease;
          height: 2px;
          background: ${props => props.theme.colors.primary};
          opacity: 0;
          transition: opacity 0.4s ease;
        }
      }
    }
    a.selected {
      li {
        letter-spacing: 0px;
        color: ${props => props.theme.colors.primary};
        .underline {
          opacity: 1;
        }
      }
    }
  }
  .nav-item {
    display: flex;
    flex-direction: row;
    svg {
      margin-right: ${props => props.theme.space.s12};
    }
  }
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    a {
      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
`;
export const SidebarContainer = styled.div`
  // display: none;
  z-index: 100;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  width: 100vw;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100vw;
  }

  position: fixed;
  top: 0;
  bottom: 0;

  right: 0;
  background: rgb(250, 250, 251);
  transform: translateX(100%);
  transition: transform 0.3s ease;

  #NavMobile {
    padding: 9px 0px 0px 24px;
  }

  #NavMenuMobile {
    margin-top: 38px;
    padding-left: 24px;
  }

  .header-container {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 12px 12px;
  }
  .footer-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: #dddddd;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 12px;
    svg {
      margin-right: 20px;
    }
  }
  .button-wrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px 24px 8px;
    // @media (max-width: ${props => props.theme.breakpoints.sm}) {
    //   flex-direction: column;
    //   gap: 24px;
    // }
    a {
      width: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }

  .container {
    margin-top: 44px;
    height: auto;
    max-height: 100vh;
    overflow-y: auto;
    transition: max-height 1s ease, height 1s ease;

    ul {
      list-style: none;
      display: flex;
      letter-spacing: 0px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      padding: 0 32px;
      margin-bottom: 16px;
      // &:first-child {
      //   margin-top: 81px;
      // }
      .box {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;

        span {
          color: #a9a9a9;
          font-size: 10px;
          line-height: 20px;
          font-weight: 300;
          margin-right: 16px;
        }
      }
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-family: ${props => props.theme.typography.fontFamily};
        line-height: ${props => props.theme.typography.p.desktop.lineHeight};
        font-size: ${props => props.theme.typography.p.desktop.fontSize};
        cursor: pointer;
        color: ${props => props.theme.colors.textPrimary};
        background: ${props => props.theme.colors.bgColorLight};

        white-space: nowrap;
        border-radius: ${props => props.theme.button.borderRadius};
        border: none;

        padding: ${props => props.theme.space.s20};
        margin-bottom: 12px;
        // :hover { }

        span {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          color: ${props => props.theme.colors.textPrimary};

          b {
            color: #a9a9a9;
            font-size: 12px;
            line-height: 20px;
            font-weight: 300;
            margin-right: 10px;
          }
          p {
            display: flex;
            justify-content: center;
            font-size: 10px;
            align-items: center;
            width: 36px;
            height: 36px;
            // padding: 0 26px;
            margin-right: 12px;
            background: #008cc8;
            border-radius: 22px;
            background: #008cc8;
            color: ${props => props.theme.colors.white};
          }
        }
        &.lang {
          text-transform: uppercase;
          svg {
            margin-right: 8px;
          }
        }
        &.selected {
          a {
            color: ${props => props.theme.colors.primary};
          }
        }
        a {
          align-items: center;
          height: auto;
          letter-spacing: 0px;
          font-weight: normal;
          text-decoration: none;
          color: #00113399;
          &.selected {
            color: ${props => props.theme.colors.primary};
          }
        }
      }
    }
  }

  &.on {
    transform: translateX(0%);
  }
`;
