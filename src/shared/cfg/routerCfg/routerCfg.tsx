import { createBrowserRouter } from 'react-router-dom';
import { Main, Repo } from '~/pages';

export const routerCfg = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: 'repo/:id',
        element: <Repo />,
    },
]);
