
import styled, { css, keyframes } from 'styled-components';


export const CalenderContainer = styled.div`

  background-color: ${props =>
    props.color}; 
  

  
  ;
`
export const Input = styled.input`
  display: ${props =>
    props.display}; 

`

export const data = styled.div`
  display: ${props =>
    props.data}; 

`


const slideInMobile = keyframes`
  from {
    bottom: -1rem;
    opacity: 0;
  }
  to {
    bottom: 0;
    opacity: 1;
  }
`
const slideInDesktopTopLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-92%) translateY(-100%)
  }
  to {
    opacity: 1;
    transform: translateX(-92%) translateY(-120%)
  }
`

const slideInDesktopTopright = keyframes`
  from {
    opacity: 0;
    transform: translateX(3%) translateY(-100%)
  }
  to {
    opacity: 1;
    transform: translateX(3%) translateY(-120%)
  }
`

const slideInDesktopBottom = keyframes`
  from {
    opacity: 0;
    transform: translateX(0) translateY(0)
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(10%)
  }
`
const variantsStyles = {
  leftTop: {
    animation: slideInDesktopTopLeft,
    transform: 'translateX(-92%) translateY(-120%)',
  },
  bottom: {
    animation: slideInDesktopBottom,
    transform: 'translateX(0) translateY(10%)',
  },
  rightTop: {
    animation: slideInDesktopTopright,
    transform: 'translateX(3%) translateY(-120%)',
  },
}
const getDesktopStyles = (variant) => css`
@media screen and (min-width: 720px) {
  bottom: unset;
    left: unset;
    position: absolute;
    right: unset;
    transform: ${variantsStyles[variant].transform};
    width: unset;
  
}
 
  
`

export const Calender = styled.div`
  background: white;
  border: 1px solid #e8e8e8;
  display: ${props => (props.isCalenderVisible ? 'flex' : 'none')};
  flex-direction: column;
  min-width: 246px;
  position: fixed;
  transform: translateX(0%) translateY(-120%);
  z-index: 1;
 
  @media screen and (min-width: 0) {
 
        animation: ${slideInMobile} 0.3s linear;
      bottom: 0;
      right: 0;
      transform: translateX(0%) translateY(0%);
      width: 100%;
    }
  
  ${({ variant }) => getDesktopStyles(variant)}
`

export const CenteredTextDiv = styled.div`
  padding: 7px 7px 7px;
  text-align: center;
`

export const HeaderText = styled.h2`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin: 8px 0;
`

export const ExpLinksCloseImgContainer = styled.div`
  max-height: 14px;
  max-width: 14px;
  position: absolute;
  right: 14px;
  top: 14px;

  &:hover {
    cursor: pointer;
  }
`
