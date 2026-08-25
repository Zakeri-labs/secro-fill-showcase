"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen items-center justify-center px-4">
          <div className="max-w-md text-center">
            <h1 className="text-xl font-semibold">This page didn&apos;t load</h1>
            <p className="mt-2 text-sm text-gray-600">Please try again.</p>
            <button
              className="mt-6 rounded-md bg-black px-4 py-2 text-sm text-white"
              onClick={reset}
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
