import styled from "styled-components";

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
  padding:${(props) => props.theme.space.s16};
  ${(props) =>
    props.fullwidth ? `
      margin-right:${(props) => props.theme.space.s8};
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
  margin-right:${(props) => props.theme.space.s16};
  font-family: ${(props) => props.theme.typography.fontFamily};
  line-height:  ${(props) => props.theme.typography.p.desktop.lineHeight};
  font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
  cursor: pointer; 
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.secondary};
    
  white-space: nowrap;
  border-radius: ${(props) => props.theme.button.borderRadius};
  border: none;
  height: ${(props) => props.theme.button.height};
  color:${(props) => props.theme.colors.white};
  padding:${(props) => props.theme.button.padding};
  
  :hover {
    // background-color: ${(props) => props.theme.colors.bgHover};
    // color: ${(props) => props.theme.colors.white};
    // border: 1px solid ${(props) => props.theme.colors.bgHover};
  }
  ${(props) =>
    props.fullwidth ? `
      svg {
        margin-right:${(props) => props.theme.space.s12};
      }
  `
      : `svg {
        margin-right:0;
      }
  `}
  p {
    
    font-family: ${(props) => props.theme.typography.fontFamily};
    line-height:  ${(props) => props.theme.typography.p.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
    cursor: pointer; 
    color: ${(props) => props.theme.colors.white};
  }

  // @media (max-width: ${(props) => props.theme.breakpoints.md}) {
  //   width: 100%;
  // }
`;

export const ButtonSecondary = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // margin-right:${(props) => props.theme.space.s16};
  cursor: pointer; 
  color: ${(props) => props.theme.colors.lighterGray};
  background-color: ${(props) => props.theme.colors.white};
  white-space: nowrap;
  border-radius: ${(props) => props.theme.button.borderRadius};
  border: solid 1px ${(props) => props.theme.colors.lighterGray};
  height: ${(props) => props.theme.button.height};
  padding:${(props) => props.theme.button.padding};
  
  // :hover {
    // background-color: ${(props) => props.theme.colors.bgHover};
    // color: ${(props) => props.theme.colors.white};
    // border: 1px solid ${(props) => props.theme.colors.bgHover};
  // }
  ${(props) =>
    props.fullwidth ? `
      svg {
        // margin-right:${(props) => props.theme.space.s12};
      }
  `
      : `svg {
        margin-right:0;
      }
  `}
  p {
    
    font-family: ${(props) => props.theme.typography.fontFamily};
    line-height:  ${(props) => props.theme.typography.p.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
    cursor: pointer; 
    color: ${(props) => props.theme.colors.lighterGray};
  }

  // @media (max-width: ${(props) => props.theme.breakpoints.md}) {
  //   width: 100%;
  // }
`;

export const ButtonTertiary = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right:${(props) => props.theme.space.s16};
  cursor: pointer; 
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.white};
    
  white-space: nowrap;
  border-radius: ${(props) => props.theme.button.borderRadius};
  border: none;
  height: ${(props) => props.theme.button.height};
  
  :hover {
    // background-color: ${(props) => props.theme.colors.bgHover};
    // color: ${(props) => props.theme.colors.white};
    // border: 1px solid ${(props) => props.theme.colors.bgHover};
  }
  ${(props) =>
    props.fullwidth ? `
    svg {
      margin-right:${(props) => props.theme.space.s12};
      padding:${(props) => props.theme.button.padding};
    }
    `
      : `svg {
      margin-right:0;
      padding:${(props) => props.theme.button.paddingMobile};
      }
  `}
  p {
    
    font-family: ${(props) => props.theme.typography.fontFamily};
    line-height:  ${(props) => props.theme.typography.p.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.p.desktop.fontSize};
    cursor: pointer; 
    color: ${(props) => props.theme.colors.secondary};
  }

  // @media (max-width: ${(props) => props.theme.breakpoints.md}) {
  //   width: 100%;
  // }
`;

export const NavContainer = styled.div`
width: 350px;
  background-color: pink;
  position: absolute;
  z-index: 9000;
  border-radius: ${(props) => props.theme.button.borderRadius};
  border: none;
  top:0;
  
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;
  max-width: 350px;
  height: 650px;
  // width: calc(100vw - 60px);

  button {
    padding: 8px 16px;
    font-size: 16px;
    height: 40px;
  }

  // background: ${(props) => props.theme.colors.bgNavbar};
  color: ${(props) => props.theme.colors.secondary};
  // border-bottom: 1px solid rgba(0, 17, 51, 0.05);
  height: 71px;
  width: 98%;
  
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
    justify-content: space-between;
  }

  .navButton {
    height: 24px;
  }
`;
export const SectionContainer = styled.div`
  max-width: ${(props) => props.theme.sliceContainer.maxWidth};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 0px;
  }

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
  
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    justify-content: space-between;
  }
`;
export const LeftWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    justify-content: space-between;
  }
  
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    img {
      margin-right: 32px;
    }
  }
  
  img {
    width: 50px;
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
      li {
        position: relative;
        height: 100%;
        padding: 0 20px 0 20px;
        margin: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: bold;
        color: ${(props) => props.theme.colors.secondary};
        transition: color 0.4s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        letter-spacing: 0px;
        &:hover {
          color: ${(props) => props.theme.colors.bgHover};
        }
        .underline {
          position: absolute;
          width: 100%;
          left: 0;
          bottom: -1px;
          transition: all 0.5s ease;
          height: 2px;
          background: ${(props) => props.theme.colors.primary};
          opacity: 0;
          transition: opacity 0.4s ease;
        }
      }
    }
    a.selected {
      li {
        letter-spacing: 0px;
        color: ${(props) => props.theme.colors.primary};
        .underline {
          opacity: 1;
        }
      }
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
        
        color: ${(props) => props.theme.colors.textTertiary};
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
          color: ${(props) => props.theme.colors.bgHover};
        }
        .underline {
          position: absolute;
          width: 100%;
          left: 0;
          bottom: -1px;
          transition: all 0.5s ease;
          height: 2px;
          background: ${(props) => props.theme.colors.primary};
          opacity: 0;
          transition: opacity 0.4s ease;
        }
      }
    }
    a.selected {
      li {
        letter-spacing: 0px;
        color: ${(props) => props.theme.colors.primary};
        .underline {
          opacity: 1;
        }
      }
    }
  }
  .nav-item{
    display: flex;
    flex-direction: row;
    svg {
      margin-right: ${(props) => props.theme.space.s12};
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
position: absolute;
top: 0px;
margin-top: -500px
// display: none;
  z-index: 2000;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  width: 350px;
  height: 90vh;
  // position: absolute;
  // top: -350px;
  // bottom: 0;
  
  right: 350px;;
  // background: rgb(250, 250, 251);
  background-color: pink;
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
    background-color: #DDDDDD;
    display: flex;
    flex-direction: row;
    justify-content: space-between;;
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
    // @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
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
  ul {
    list-style: none;
    display: flex;
    letter-spacing: 0px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px;
    margin-bottom: 0;
    &:first-child {
      margin-top: 81px;
    }
    li {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 42px;
      letter-spacing: 0px;
      color: #00113399;
      display: flex;
      &.lang {
        text-transform: uppercase;
        svg {
          margin-right: 8px;
        }
      }
      &.selected {
        a {
          color: ${(props) => props.theme.colors.primary};
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
          color: ${(props) => props.theme.colors.primary};
        }
      }
    }
  }
  &.on {
    // transform: translateX(0%);
  }
`;
