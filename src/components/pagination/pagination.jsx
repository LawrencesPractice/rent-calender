import React, { useEffect, useState } from 'react'
import * as S from './pagination.styles'
import { buildPaginationLinks } from './paginationLinks'

const Pagination = ({ pageSize, currentPageIndex, totalResults, handleMoreProducts, isLoading, loadMoreMessage, showLoadMore }) => {
    const [paginate, setPaginate] = useState(true)
    const [loadMoreItem, setLoadMoreItems] = useState(0)
    const [lessResults, setLessResults] = useState(false)
    const [active, setActiveLink] = useState(0)

    useEffect(() => {
        setLessResults(totalResults < pageSize)
    }, [pageSize, totalResults, currentPageIndex])

    useEffect(() => {
        setPaginate(!isLoading)
    }, [isLoading])

    useEffect(() => {
        setActiveLink(currentPageIndex - 1)
    }, [currentPageIndex])

    const totalCurrentItems = pageSize * currentPageIndex + loadMoreItem
    const paginationLength = Math.ceil(totalResults / pageSize)
    const pages = buildPaginationLinks(currentPageIndex, totalResults, pageSize)



    function PaginationLinks() {

        const listItems = pages.map((index, i) => {
            const key = `key-${i}`
            const indexValue = parseInt(index, 10)
            if (index !== '...') {
                return (
                    <S.PageLink activeLink={active === indexValue - 1} key={key}>
                        <S.PageLink
                            activeLink={currentPageIndex === +index}
                            key={key}
                            as="button"
                            onClick={() => {
                                handleMoreProducts(indexValue, false)
                                setPaginate(true)
                                setActiveLink(indexValue - 1)
                            }}
                        >
                            {index}
                        </S.PageLink>
                    </S.PageLink>
                )
            }
            return (
                <S.PageLink key={key}>
                    <span>{index}</span>
                </S.PageLink>
            )
        })
        if (!lessResults && paginate) {
            return (

                <S.Pagination>
                    {currentPageIndex > 1 && currentPageIndex <= paginationLength && (
                        <S.PageLink key="prev-link">
                            <S.PrevButton
                                as="button"
                                type="button"
                                variant="secondary"
                                colorVariant="light"
                                onClick={() => {
                                    handleMoreProducts(currentPageIndex - 1, false)
                                    setPaginate(true)
                                    setActiveLink(active - 1)
                                }}
                            >
                                icon left
                                {isLoading && (
                                    <span className="visuallyHidden"> {loadMoreMessage}</span>
                                )}
                            </S.PrevButton>
                        </S.PageLink>
                    )}
                    {listItems}
                    {active + 1 < paginationLength && (
                        <S.PageLink key="next-link">
                            <S.NextButton
                                onClick={() => {
                                    handleMoreProducts(currentPageIndex + 1, false)
                                    setPaginate(true)
                                    setActiveLink(active + 1)
                                }}
                            >
                                icon right
                                {isLoading && (
                                    <span className="visuallyHidden"> {loadMoreMessage}</span>
                                )}
                            </S.NextButton>
                        </S.PageLink>
                    )}
                </S.Pagination>
            )
        }
    }
    return (
        <S.PaginationWrapper
        >
            <S.ViewMore>
                Showing{' '}
                {totalCurrentItems < totalResults ? totalCurrentItems : totalResults}{' '}
                of {totalResults}
            </S.ViewMore>
            {/* total: {' '}{totalCurrentItems}{' '}
            Loadmoreitem{' '}
            {loadMoreItem}{' '}
            {totalCurrentItems} */}


            {totalCurrentItems + loadMoreItem < totalResults && showLoadMore && (
                <>
                    |
                    <S.LoadMoreButton

                        onClick={() => {
                            handleMoreProducts(currentPageIndex - 1, true)
                            setPaginate(false)
                            setLoadMoreItems(loadMoreItem + pageSize)
                        }}
                    >
                        {loadMoreItem > 0 ? 'Load more' : 'View all'}
                        {isLoading && (
                            <span className="visuallyHidden"> {loadMoreMessage}</span>
                        )}
                    </S.LoadMoreButton>
                </>
            )}
            {paginate && <PaginationLinks />}


        </S.PaginationWrapper>
    );
};

export default Pagination;