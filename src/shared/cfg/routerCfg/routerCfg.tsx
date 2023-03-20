import { createBrowserRouter } from 'react-router-dom';
import { Main, Repo } from '~/pages';
import { Error } from '~/pages/Error/Error';

export const routerCfg = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
    },
    {
        path: 'repo/:id',
        element: <Repo />,
        errorElement: <Error />,
    },
]);
