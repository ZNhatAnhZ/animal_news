import React from 'react'
import ReactDOM from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Home, loader as loaderHome } from './pages/Home';
import { NewsDetail, loader as loaderNewsDetail } from './pages/NewsDetail';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5c6bc0',
    },
    secondary: {
      main: '#ec407a',
    }
  },
  typography: {
    h3: {
      "fontWeight": 100,
    },
  }
});

const router = createBrowserRouter([
  { path: '/', loader: loaderHome, element: <Home /> },
  { path: '/detail/:id', loader: loaderNewsDetail, element: <NewsDetail /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
