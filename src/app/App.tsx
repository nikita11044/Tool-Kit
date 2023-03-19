import React from 'react';
import { Main, Repo } from '~/pages';
import cls from './App.module.scss';

export const App = () => (
    <div className="App light__theme">
        <div className={cls.content}>
            <Main />
            {/* <Repo /> */}
        </div>
    </div>
);
