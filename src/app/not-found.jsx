import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-gray-500 mt-2">Page not found</p>

      <Link href="/" className="btn btn-primary mt-4">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;