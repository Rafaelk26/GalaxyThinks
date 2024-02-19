// Import from development
import { createBrowserRouter } from 'react-router-dom';

// Pages
import { Layout } from './src/layout';
import { Home } from './src/pages/Home';
import { Login } from './src/pages/Login';
import { Main } from './src/pages/Main';
import { Signup } from './src/pages/Signup';

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
            },
            {
                path: '/signup',
                element: <Signup /> 
            },
        ]
    },
    {
        path: "/",
        element: <Home />
    }, 
])


export { router }