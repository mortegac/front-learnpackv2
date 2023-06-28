import styled from 'styled-components';

export const SliceContainerBase = styled.div`
  width: 100%;
  max-width: ${props => props.theme.sliceContainer.maxWidth};
  padding: ${props => props.theme.sliceContainer.padding.desktop};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: ${props => props.boxed && props.theme.space.s16};
  background: ${props => props.boxed && props.theme.colors.bgColorTertiary};
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: ${props => props.boxed && '32px'};
  }
`;
