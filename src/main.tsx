import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/main.scss';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { App } from './app';
import { queryClient } from '~/shared/cfg';
import { ErrorBoundary } from '~/app/providers/ErrorBoundary/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </QueryClientProvider>
    </React.StrictMode>,
);
