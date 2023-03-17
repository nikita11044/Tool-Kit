export type PaginationInputData = {
    totalCount: number,
    pageSize: number,
    siblingCount?: number,
    currentPage: number
}

export type PaginationRange = Array<number | string>
