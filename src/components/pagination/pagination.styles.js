import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ViewMore = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding-inline-start: 0px;
  text-align: center;

  li {
    cursor: pointer;
    display: inline;
  }
  li + li {
    margin-left: 8px;
    &:hover {
      color: grey;
    }
  }
`
export const LoadMoreButton = styled.button`
  border: none;
  font-size: 20px;

  padding: 0 0 0
    4px;

  &:focus {
    outline: none;
  }
`


export const PageLink = styled.li`
  button {
    background: transparent;
    border: none;
    ${({ activeLink }) => `
        padding: 2px 4px;
        border-bottom: ${activeLink ? `2px solid` : 'none'
    };
        font-weight: ${activeLink ? 'bold' : 'normal'};
        `}
    &:hover {
      color: grey;
      cursor: pointer;
    }
  }
`

export const NextButton = styled.button`
  border: none;
  font-size: 13px;
  padding: 0 0 0
   8px;
`
export const PrevButton = styled.button`
  border: none;
  font-size: 13px;
  padding: 0 0 0
   8px;
`
