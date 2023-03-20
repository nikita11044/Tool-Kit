import { createBrowserRouter } from 'react-router-dom';
import { Main, Repo } from '~/pages';
import { Error } from '~/pages/Error/Error';

enum Routes {
    MAIN = '/',
    REPO = 'repo/:id',
}

export const routerCfg = createBrowserRouter([
    {
        path: Routes.MAIN,
        element: <Main />,
        errorElement: <Error />,
    },
    {
        path: Routes.REPO,
        element: <Repo />,
        errorElement: <Error />,
    },
]);
