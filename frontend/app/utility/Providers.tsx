'use client'

import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast';
import { Provider as ReduxProvider, useSelector } from 'react-redux';
import { store } from "../redux/index"
import Home from '../page';

const Provider = ({ children }: { children: ReactNode }) => {
    // const { isAuthentication } = useSelector((state: any) => state.authSlice)
    const client: QueryClient = new QueryClient()
    return (
        <div>
            <QueryClientProvider client={client}>
                <ReduxProvider store={store}>
                    {/* {isAuthentication && <Home />} */}
                    {children}
                </ReduxProvider>
            </QueryClientProvider>
            <Toaster />
        </div>
    )
}

export default Provider