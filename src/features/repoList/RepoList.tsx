import React, { useState } from 'react';
import { RepoRow } from '~/entities/Repository/ui/RepoRow/RepoRow';
import { Paginator } from '~/shared/ui';

export const RepoList = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <>
            <ul>
                <RepoRow />
                <RepoRow />
                <RepoRow />
                <RepoRow />
                <RepoRow />
                <RepoRow />
                <RepoRow />
                <RepoRow />
                <RepoRow />
                <RepoRow />
            </ul>
            <Paginator
                onPageChange={(page) => setCurrentPage(page)}
                totalCount={274}
                currentPage={currentPage}
                pageSize={10}
            />
        </>
    );
};
