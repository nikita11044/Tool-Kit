import React, { useState } from 'react';
import { Paginator } from '~/shared/ui';
import { RepoRow, useRepos } from '~/entities/Repository';

export const RepoList = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const repos = useRepos((state) => state.repos);
    const repositoryCount = useRepos((state) => state.repositoryCount);

    return (
        <>
            <ul>
                {
                    repos?.map(({ name, stargazerCount, updatedAt }) => (
                        <RepoRow name={name} stargazerCount={stargazerCount} updatedAt={updatedAt} />
                    ))
                }
            </ul>
            <Paginator
                onPageChange={(page) => setCurrentPage(page)}
                totalCount={repositoryCount}
                currentPage={currentPage}
                pageSize={10}
            />
        </>
    );
};
