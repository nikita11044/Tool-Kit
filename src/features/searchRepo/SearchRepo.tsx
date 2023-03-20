import React, { useCallback } from 'react';
import { Input, Paginator } from '~/shared/ui';
import { requestClient } from '~/shared/cfg';
import { RepoRow, useRepos, useSearchReposByNameQuery } from '~/entities/Repository';

export const SearchRepo = () => {
    const setRepos = useRepos((state) => state.setRepos);
    const setRepoQuery = useRepos((state) => state.setRepoQuery);
    const getNextPage = useRepos((state) => state.setNextPage);
    const getPreviousPage = useRepos((state) => state.setPreviousPage);

    const repoQuery = useRepos((state) => state.repoQuery);
    const repos = useRepos((state) => state.repos);
    const repositoryCount = useRepos((state) => state.repositoryCount);
    const currentPage = useRepos((state) => state.currentPage);
    const after = useRepos((state) => state.after);
    const before = useRepos((state) => state.before);
    const first = useRepos((state) => state.first);
    const last = useRepos((state) => state.last);

    useSearchReposByNameQuery(requestClient, {
        repoQuery, first, last, before, after,
    }, {
        select: (resp) => ({
            nodes: resp.search.nodes,
            repositoryCount: resp.search.repositoryCount,
            pageInfo: resp.search.pageInfo,
        }),
        onSuccess: setRepos,
    });

    const onChange = useCallback((value: string) => {
        setRepoQuery(value);
    }, []);

    const onNext = useCallback((page: number) => {
        getNextPage(page);
    }, []);

    const onPrevious = useCallback((page: number) => {
        getPreviousPage(page);
    }, []);

    return (
        <>
            <Input value={repoQuery} onChange={onChange} placeholder="Find your dream repo..." />
            <ul>
                {
                    repos?.map(({
                        id, name, stargazerCount, updatedAt,
                    }) => (
                        <RepoRow id={id} name={name} stargazerCount={stargazerCount} updatedAt={updatedAt} />
                    ))
                }
            </ul>
            <Paginator
                currentPage={currentPage}
                onNext={onNext}
                onPrevious={onPrevious}
                totalCount={repositoryCount}
                pageSize={10}
            />
        </>
    );
};
