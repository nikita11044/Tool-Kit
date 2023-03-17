import cls from './RepoRow.module.scss';
import { ReactComponent as Star } from '~/shared/assets/icons/star.svg';

export const RepoRow = () => (
    <li className={cls.RepoRow}>
        <h3>repo name</h3>
        <div className={cls.meta}>
            <div className={cls.stars}>
                <div className={cls.iconWrap}>
                    <Star className={cls.starIcon} width={15} height={15} />
                </div>
                <span>0</span>
            </div>
            <span>
                last commit: 2012-12-12
            </span>
        </div>
    </li>
);
