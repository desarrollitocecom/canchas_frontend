import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicRouter from './PublicRouter'
import Login from '../pages/Login/Login'
import { useSelector } from 'react-redux'
import Loader from '../components/general/loader/Loader'
import Home from '../pages/Home/Home'
import Layout from '../pages/Layout'

const AppRouter = () => {
    const { loading } = useSelector((state) => state.auth);

    const router = createBrowserRouter([
        {
            path: "/login",
            element: <PublicRouter element={<Login />} />
        },
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                }
            ]
        }
    ])

    return (
        <>
            {loading && <Loader />}
            <RouterProvider
                router={router}
            />
        </>
    )
}

export default AppRouter