interface IRepoNode {
    id: string
    name: string
    stargazerCount: number
    updatedAt: string
}

interface IPageInfo {
    startCursor: string | null
    endCursor: string | null
}

export interface IRepoNodesData {
    nodes: Array<IRepoNode>,
    repositoryCount: number,
    pageInfo: IPageInfo }

export interface IReposStateSchema {
    repos: Array<IRepoNode>
    repoQuery: string
    pageInfo: IPageInfo
    repositoryCount: number
    currentPage: number
    before: string | null
    after: string | null
    first: number | null
    last: number | null
    setRepos: (data: IRepoNodesData) => void
    setRepoQuery: (repoQuery: string) => void
    setNextPage: (nextPage: number) => void
    setPreviousPage: (previousPage: number) => void
}
