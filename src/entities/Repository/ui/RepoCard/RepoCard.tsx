import cls from './RepoCard.module.scss';
import { ReactComponent as Star } from '~/shared/assets/icons/star.svg';
import { formatDate } from '~/shared/lib';

interface IRepoCardProps {
    name?: string
    repoUrl: string
    ownerLogin?: string
    ownerProfileUrl?: string
    avatarUrl: string
    stargazerCount?: number
    updatedAt: string
    description?: string
    languages?: Array<{ name: string, color: string }>
    languageTotalCount?: number
}

export const RepoCard = ({
    repoUrl,
    languageTotalCount = 0,
    description,
    stargazerCount = 0,
    updatedAt,
    ownerProfileUrl,
    avatarUrl,
    ownerLogin,
    languages = [],
    name,
}: IRepoCardProps) => (
    <div className={cls.RepoCard}>
        <div>
            <h1 className={cls.title}>{name}</h1>
            <div className={cls.meta}>
                <div className={cls.metaItem}>
                    <img className={cls.img} src={avatarUrl} alt="avatar" />
                    <div>
                        <p>
                            made by
                            &nbsp;
                            <a href={ownerProfileUrl} target="_blank" rel="noreferrer">{ownerLogin}</a>
                        </p>
                    </div>
                </div>
                <div className={cls.metaItem}>
                    <div className={cls.stars}>
                        <Star width={20} height={20} />
                        <p>{stargazerCount}</p>
                    </div>
                    <p>
                        last commit:
                        {' '}
                        {formatDate(updatedAt)}
                    </p>
                </div>
            </div>
        </div>

        <div className={cls.repoDescr}>
            <h3>About</h3>
            <p className={cls.descr}>
                {description || 'No description available'}
            </p>
        </div>

        <div className={cls.repoLangs}>
            <h3>Languages:</h3>
            {
                languages.length
                    ? (
                        <ul className={cls.langList}>
                            {languages.map(({ name, color }) => (
                                <li
                                    key={`${name}-${color}`}
                                    style={{ color }}
                                >
                                    {name}
                                </li>
                            ))}
                        </ul>
                    )
                    : <p>No language data available</p>
            }
            {
                languageTotalCount > 5
                && (
                    <p>
                        And many more! Click
                        {' '}
                        <a href={repoUrl} target="_blank" rel="noreferrer">here</a>
                        {' '}
                        to find out more
                    </p>
                )
            }
        </div>
    </div>
);
