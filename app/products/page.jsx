'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { getProducts } from '../lib/api'; // Change the import

const ITEMS_PER_PAGE = 30; // Change this value to the desired number of items per page

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
