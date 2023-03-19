import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { IReposStateSchema } from '~/entities/Repository/model/types/reposStateSchema';

export const useRepos = create<IReposStateSchema>()(
    devtools(persist(immer((set, get) => ({
        repos: [],
        repoQuery: '',
        pageInfo: {
            startCursor: '',
            endCursor: '',
        },
        repositoryCount: 0,
        currentPage: 1,
        first: null,
        last: null,
        before: null,
        after: null,
        setRepos: (data) => {
            set((state) => {
                state.repos = data.nodes;
                state.repositoryCount = data.repositoryCount;
                state.pageInfo = data.pageInfo;
            }, false, 'setRepos');
        },
        setRepoQuery: (repoQuery) => {
            set((state) => {
                state.repoQuery = repoQuery;
            }, false, 'setRepoQuery');
        },
        setNextPage: (nextPage) => {
            set((state) => {
                state.currentPage = nextPage;

                state.first = 10;
                state.last = null;

                state.before = null;
                state.after = get().pageInfo.endCursor;
            }, false, 'setNextPage');
        },
        setPreviousPage: (previousPage) => {
            set((state) => {
                state.currentPage = previousPage;

                state.first = null;
                state.last = 10;

                state.before = get().pageInfo.startCursor;
                state.after = null;
            }, false, 'setPreviousPage');
        },
    })), { name: 'repos' })),
);
