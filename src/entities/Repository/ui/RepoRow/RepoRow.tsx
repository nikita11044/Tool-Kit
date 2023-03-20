import { Link } from 'react-router-dom';
import cls from './RepoRow.module.scss';
import { ReactComponent as Star } from '~/shared/assets/icons/star.svg';

interface IRepoRowProps {
    id: string
    name: string
    stargazerCount: number
    updatedAt: string
}

export const RepoRow = ({
    id, name, stargazerCount, updatedAt,
}: IRepoRowProps) => (
    <li className={cls.RepoRow}>
        <Link to={`repo/${id}`}>{name}</Link>
        <div className={cls.meta}>
            <div className={cls.stars}>
                <div className={cls.iconWrap}>
                    <Star className={cls.starIcon} width={15} height={15} />
                </div>
                <span>{stargazerCount}</span>
            </div>
            <span>
                last commit:
                {' '}
                {updatedAt}
            </span>
        </div>
    </li>
);
