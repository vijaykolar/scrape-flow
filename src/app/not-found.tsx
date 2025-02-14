import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-primary font-semibold text-6xl">404</h1>
        <h2 className="font-semibold text-2xl">Page not found.</h2>
        <Link className="bg-primary bg-primary/80 p-5" href="/">
          Back
        </Link>
      </div>
    </div>
  );
}
