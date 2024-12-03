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
import ResetPassword from '../pages/ResetPassword/ResetPassword'
import OtpVerificacion from '../pages/ResetPassword/OtpVerificacion'
import ChangePassword from '../pages/ChangePassword/ChangePassword'
import Info from '../pages/info/Info.jsx'
import ForgotUser from '../pages/ForgotUser/ForgotUser.jsx'

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
          path: "/register",
          element: <PublicRouter element={<Register />} />
        },
        {
          path: "/forgot-password",
          element: <PublicRouter element={<ResetPassword />} />
        },
        {
          path: "/otp-verification",
          element: <PublicRouter element={<OtpVerificacion />} />
        },
        {
          path: "/change-password",
          element: <PublicRouter element={<ChangePassword />} />
        },
        {
          path: "/forgot-user",
          element: <PublicRouter element={<ForgotUser />} />
        },
        {
          path: "/info",
          element: <PublicRouter element={<Info />} />
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