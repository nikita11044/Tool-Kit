import { SvgIconBtn } from '~/shared/ui';
import { RepoCard } from '~/entities/Repository';
import { ReactComponent as ArrowBack } from '~/shared/assets/icons/arrowBack.svg';
import { useFindRepoByIdQuery } from '~/entities/Repository/model/queries/findRepoById/findRepoById.gen';
import { requestClient } from '~/shared/cfg';

export const Repo = () => {
    const repoId = 'MDEwOlJlcG9zaXRvcnkyMzgzMTY0Mjg=';

    const { data, isLoading } = useFindRepoByIdQuery(requestClient, { id: repoId }, { select: (data) => data.node });

    return (
        <>
            <div style={{ textAlign: 'start' }}>
                <SvgIconBtn Icon={ArrowBack} />
            </div>
            {
                isLoading
                    ? <p>Loading...</p>
                    : (
                        <RepoCard
                            ownerLogin={data?.owner.login}
                            repoUrl={data?.url}
                            description={data?.description}
                            languageTotalCount={data?.languages?.totalCount}
                            languages={data?.languages?.nodes}
                            updatedAt={data?.updatedAt}
                            ownerProfileUrl={data?.owner.url}
                            avatarUrl={data?.owner.avatarUrl}
                            stargazerCount={data?.stargazerCount}
                            name={data?.name}
                        />
                    )
            }
        </>
    );
};
