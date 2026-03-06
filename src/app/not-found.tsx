import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-void flex flex-col items-center justify-center px-4">
      <p className="font-mono text-accent text-sm tracking-widest mb-4">
        // 404
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
        Page not found
      </h1>
      <p className="text-muted text-center max-w-md mb-8">
        The page you’re looking for doesn’t exist or was moved.
      </p>
      <Link
        href="/"
        className="font-mono text-accent border border-accent/50 px-4 py-2 rounded-lg hover:bg-accent/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-void"
      >
        Back to home
      </Link>
    </div>
  );
}
