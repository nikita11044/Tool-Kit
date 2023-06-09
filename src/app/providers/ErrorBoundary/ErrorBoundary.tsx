import React, { ErrorInfo, ReactNode, Suspense } from 'react';

interface IErrorBoundaryProps {
    children: ReactNode;
}

interface IErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary
    extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <Suspense fallback="">
                    <div>
                        An unexpected error occurred
                    </div>
                    {/* eslint-disable-next-line no-restricted-globals */}
                    <button onClick={() => location.reload()}>Refresh page</button>
                </Suspense>
            );
        }

        return children;
    }
}
