import styled from "styled-components"
export const ContentWrapper = styled.div`
    display: ${({ isBannerOpen }) => (isBannerOpen ? 'block' : 'none')};
    top: 0;
  left: 0;
  `
export const InnerWrapper = styled.div`
border-left: 6px solid #ccc!important;
padding: 0.01em 16px;
border-color:  #2196F3!important;
font-size: 24px;

`

export const CrossButton = styled.a`
  position: absolute;
 
  top: 15px;
  width: 12px;
  height: 12px;
  opacity: 0.3;
}
::before, ::after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: black;
}
::before {
  transform: rotate(45deg);
}
::after {
  transform: rotate(-45deg);
}
`