// Import from development
import { createBrowserRouter } from 'react-router-dom';

// Pages
import { Layout } from './src/layout';
import { Home } from './src/pages/Home';
import { Login } from './src/pages/Login';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
])


export { router }