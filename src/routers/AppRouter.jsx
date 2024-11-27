import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicRouter from './PublicRouter'
import Login from '../pages/Login/Login'

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/login",
            element: <PublicRouter element={<Login />} />
        },
        {
            path: "/",
            element: <h1>Home</h1>
        }
    ])

    return (
        <RouterProvider
            router={router}
        />
    )
}

export default AppRouter