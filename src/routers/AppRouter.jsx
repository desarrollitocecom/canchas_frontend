import React, { useEffect, useMemo, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicRouter from './PublicRouter'
import Login from '../pages/Login/Login'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/general/loader/Loader'
import Home from '../pages/Home/Home'
import Layout from '../pages/Layout'
import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material'
import { setDarkMode } from '../redux/slices/ThemeSlice'
import Register from '../pages/Register/Register'

const AppRouter = () => {
  const { loading } = useSelector((state) => state.auth);

  const theme = useThemeConfig();

  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: '/login',
          element: <PublicRouter element={<Login />} />,
        },
        {
          path: '/',
          element: <Layout />,
          children: [
            {
              path: '/',
              element: <Home />,
            },
          ],
        },
        {
          path: "/register",
          element: <PublicRouter element={<Register />} />
        },
      ]),
    []
  );


  return (
    <ThemeProvider theme={theme}>
      {loading && <Loader />}
      <RouterProvider
        router={router}
      />
    </ThemeProvider>
  )
}

export default AppRouter




const useThemeConfig = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    dispatch(setDarkMode(prefersDarkMode));
  }, [prefersDarkMode, dispatch]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode]
  );

  return theme;
};