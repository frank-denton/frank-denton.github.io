import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import { store } from './app/store'
import App from './App'
import './index.css'
import './custom.scss'
import Vite from './features/structure/Vite+React'
import ErrorPage from './features/ErrorPage/error-page'
import NavigationBar from './features/Navbar/NavigationNar'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <><NavigationBar /><ErrorPage /></>,
    children: [
      {
        path: "Vite+React/",
        element: <Vite />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
