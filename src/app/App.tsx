import React from 'react';
import { RouterProvider } from 'react-router-dom';
import cls from './App.module.scss';
import { routerCfg } from '~/shared/cfg/routerCfg/routerCfg';

export const App = () => (
    <div className="App light__theme">
        <div className={cls.content}>
            <RouterProvider router={routerCfg} />
        </div>
    </div>
);
