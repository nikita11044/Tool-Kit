import cls from './RepoRow.module.scss';
import { ReactComponent as Star } from '~/shared/assets/icons/star.svg';

interface IRepoRowProps {
    name: string
    stargazerCount: number
    updatedAt: string
}

export const RepoRow = ({ name, stargazerCount, updatedAt }: IRepoRowProps) => (
    <li className={cls.RepoRow}>
        <h3>{name}</h3>
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
