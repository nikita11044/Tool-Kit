import { SvgIconBtn } from '~/shared/ui';
import { RepoCard } from '~/entities/Repository';
import { ReactComponent as ArrowBack } from '~/shared/assets/icons/arrowBack.svg';

export const Repo = () => (
    <>
        <div style={{ textAlign: 'start' }}>
            <SvgIconBtn Icon={ArrowBack} />
        </div>
        <RepoCard />
    </>
);
