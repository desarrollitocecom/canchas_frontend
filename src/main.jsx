import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './routers/AppRouter.jsx'
import { Provider } from 'react-redux'
import store from './redux/store/Store.js'
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import isoWeek from 'dayjs/plugin/isoWeek';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


dayjs.locale('es'); // Configurar idioma español
dayjs.extend(isoWeek); // Asegurar que la semana comience en lunes

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es'>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <AppRouter />
        </GoogleOAuthProvider>
      </LocalizationProvider>
    </Provider>
  </StrictMode>,
)
