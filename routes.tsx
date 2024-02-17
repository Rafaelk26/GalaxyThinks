// Import from development
import { createBrowserRouter } from 'react-router-dom';

// Pages
import { Layout } from './src/layout';
import { Home } from './src/pages/Home';
import { Login } from './src/pages/Login';
import { Main } from './src/pages/Main';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: '/main',
                element: <Main />
            }
        ]
    },
    {
        path: "/",
        element: <Home />
    }, 
])


export { router }