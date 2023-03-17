import cls from './RepoCard.module.scss';

export const RepoCard = () => (
    <div className={cls.RepoCard}>
        <div>
            <h1 className={cls.title}>repo title</h1>
            <div className={cls.meta}>
                <div className={cls.metaItem}>
                    <img className={cls.img} src="src/shared/assets/icons/avatar.svg" alt="avatar" />
                    <div>
                        <p>
                            made by
                            &nbsp;
                            <a href="https://github.com/nikita11044" target="_blank" rel="noreferrer">nikita11044</a>
                        </p>
                    </div>
                </div>
                <div className={cls.metaItem}>
                    <div className={cls.stars}>
                        <img width="20" height="20" src="src/shared/assets/icons/star.svg" alt="stars" />
                        <p>0</p>
                    </div>
                    <p>last commit: 2012-12-12</p>
                </div>
            </div>
        </div>

        <div className={cls.repoDescr}>
            <h3>About</h3>
            <p className={cls.descr}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci dolore ducimus labore nemo, sequi suscipit voluptatum.
                Ad architecto asperiores atque, delectus dolore eum fuga laborum
                nisi, omnis provident, quisquam totam?
            </p>
        </div>

        <div className={cls.repoLangs}>
            <h3>Languages:</h3>
            <ul className={cls.langList}>
                <li>HTML</li>
                <li>CSS</li>
                <li>Typescript</li>
                <li>Go</li>
                <li>SQL</li>
            </ul>
            <p>
                And many more! Click
                {' '}
                <a href="https://github.com/nikita11044/rbah" target="_blank" rel="noreferrer">here</a>
                {' '}
                to find out more
            </p>
        </div>
    </div>
);
