'use client';

import ErrorBoundary from '@/components/ui/ErrorBoundary';

export default function NotFound() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The page you are looking for does not exist.
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Go Back
          </button>
        </div>
      </div>
    </ErrorBoundary>
  );
}
