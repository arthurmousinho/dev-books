import { createBrowserRouter } from 'react-router-dom'

// Pages
import { Home } from './pages/Home'
import { NotFound } from './pages/notFound'
import { Layout } from './components/Layout'
import { Detail } from './pages/Detail'
import { Seach } from './pages/Seach'

export const routers = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/detail/:id",
                element: <Detail />
            },
            {
                path: "/seach/:seach",
                element: <Seach />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])