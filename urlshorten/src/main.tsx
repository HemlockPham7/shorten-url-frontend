import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@root/index.css'
import { RouterProvider } from 'react-router'
import routes from '@root/routes/routes.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </StrictMode>,
)
