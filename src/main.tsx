import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Router from './router/index.tsx'
import { ThemeProvider } from './providers/theme-providers,.tsx'
import { Provider } from 'react-redux'
import store from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Provider store={store}>
        <RouterProvider router={Router}/>
      </Provider>
    </ThemeProvider> 
  </StrictMode>,
)
