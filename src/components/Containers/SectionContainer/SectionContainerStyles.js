import styled from "styled-components";
export const SectionContainerBase = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  
  width: 100%;
  max-width: 1136px;
  height:100vh;
  border: none;
  // padding: ${(props) => props.theme.sectionContainer.padding.desktop};
  // padding: ${(props) => props.boxed && "64px 24px"};
  // padding-top: ${(props) => props.paddingTop};
  position: relative;
  background: ${(props) => props.theme.colors.white};
  padding-top: 0;
  padding-bottom: ${(props) => props.paddingBottom};
  z-index: ${(props) => props.boxed && "1"};
  borderRadius: 0;
  margin:0px;
  
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    // margin: 36px 8px;
    height: calc(100vh - 160px);
    // padding: ${(props) => props.theme.sectionContainer.padding.mobile};
    // padding-top: ${(props) => props.paddingMobileTop};
    // padding-bottom: ${(props) => props.paddingMobileBottom};
    // padding: ${(props) => props.boxed && "0 16px"};
    border-radius: ${(props) => props.theme.button.borderRadius};
    margin:0px;
  }
  
  
  // @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  //   // margin: ${(props) => props.boxed && "32px 0"};
  // }
`;
