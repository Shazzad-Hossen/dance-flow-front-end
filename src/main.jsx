import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from './routes/routes';
import AuthProvider from './providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
  <QueryClientProvider client={queryClient}>
  <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </QueryClientProvider>
  </HelmetProvider>
 
  </React.StrictMode>,
)
