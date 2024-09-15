'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { getProducts } from '../lib/api'; 

const ITEMS_PER_PAGE = 20; // Change this value to the desired number of items per page

/**
 * The ProductsPage component displays a list of products with pagination.
 * It fetches products from the API based on the current page and renders them using the ProductCard component.
 * It also handles loading and error states.
 *
 * @returns {JSX.Element} - The ProductsPage component with the product list and pagination.
 */

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        // Fetch products for the current page
        const allProducts = await getProducts(page, ITEMS_PER_PAGE); // Use getProducts with pagination
        setProducts(allProducts);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(`Failed to load products. Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [page]); // Add page as a dependency to refetch products on page change

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  );
}