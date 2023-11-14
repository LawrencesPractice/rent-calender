const getRangeFromStart = (start, stop, step = 1) => {
    return Array.from({ length: (stop - start) / step + 1 }, (_, i) =>
        (start + i * step).toString(),
    )
}

export const buildPaginationLinks = (
    currentPageIndex,
    totalResults,
    pageSize = 48,
) => {
    const pageCount = Math.ceil(totalResults / pageSize)

    // Total page count <= 5 and current page index <= 5
    // <1 2 3 4 5 >
    if (
        pageCount <= 5 &&
        currentPageIndex <= 5
    ) {
        return Array.from({ length: pageCount }, (_, i) => (i + 1).toString())
    }

    // Total page count > 5 &&
    // current page index is at somewhere in between 5 pages from the end
    // current page index is at or closer to the last page
    // < 17 18 19 20 21>
    if (
        pageCount > 5 &&
        currentPageIndex > pageCount - 5 &&
        currentPageIndex <= pageCount
    ) {
        return getRangeFromStart(
            pageCount - 5 + 1,
            pageCount,
        )
    }

    // Total page count > 5 and current page index < 5
    // < 1 2 3 4 ... 50 >
    if (
        pageCount > 5 &&
        currentPageIndex < 5
    ) {
        return Array.from(
            { length: 5 - 1 },
            (_, i) => (i + 1).toString(),
        )
            .concat(['...'])
            .concat([pageCount.toString()])
    }

    // Between two ferns
    // < 1 ... 5 6 7 ... 20 >
    return [1]
        .concat(['...'])
        .concat([
            (currentPageIndex - 1).toString(),
            currentPageIndex.toString(),
            (currentPageIndex + 1).toString(),
        ])
        .concat(['...'])
        .concat([pageCount.toString()])
}
