import styled from "styled-components";
export const SectionContainerBase = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 98%;
  max-width: 1136px;
  // height:30vh;
  height: calc(100vh - 160px);
  border-radius: ${(props) => props.theme.button.borderRadius};
  border: none;
  margin: 86px 8px;
  padding: ${(props) => props.theme.sectionContainer.padding.desktop};
  position: relative;
  padding: ${(props) => props.boxed && "64px 24px"};
  background: ${(props) => props.theme.colors.white};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  z-index: ${(props) => props.boxed && "1"};
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: ${(props) => props.theme.sectionContainer.padding.mobile};
    padding-top: ${(props) => props.paddingMobileTop};
    padding-bottom: ${(props) => props.paddingMobileBottom};
    padding: ${(props) => props.boxed && "0 16px"};
    borderRadius: 0;
  }
  
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    // margin: ${(props) => props.boxed && "32px 0"};
    borderRadius: 0;
  }
`;
