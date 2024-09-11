import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to NextEcommerce</h1>
      <p className="mb-4">Discover our amazing products!</p>
      <div className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        <Link href="/products">
          <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Shop Now
          </a>
        </Link>
      </div>
    </div>
  );
}