import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import AuthProviders from './providers/AuthProviders'
import BackToTop from './components/shared/BackToTop/BackToTop'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
        <AuthProviders>
            <RouterProvider router={router} />
            <BackToTop></BackToTop>
        </AuthProviders>
    </QueryClientProvider>
  </StrictMode>,
)
