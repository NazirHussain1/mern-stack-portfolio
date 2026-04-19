import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50 dark:bg-red-900/20 px-4">
          <div className="max-w-xl text-center rounded-3xl border border-red-200 bg-white p-8 shadow-xl dark:border-red-900/50 dark:bg-slate-950">
            <h1 className="text-3xl font-bold text-red-700 dark:text-red-300 mb-4">Something went wrong</h1>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              An unexpected error occurred while loading the app. Please reload the page and try again.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              {this.state.error?.message}
            </p>
            <button
              type="button"
              onClick={this.handleReload}
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
