import React, { Suspense } from 'react';
import ProductGallery from '../../components/ProductGallery';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import { getProduct } from '../../lib/api';
import { Star, ShoppingCart } from 'lucide-react';

export default async function ProductPage({ params }) {
    try {
      const product = await getProduct(params.id);
  
      return (
        <div className="max-w-4xl mx-auto">
          <Suspense fallback={<Loading />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProductGallery images={product.images} />
              <div>
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <div className="flex items-center mb-4">
                  <p className="text-2xl font-semibold mr-2">${product.price.toFixed(2)}</p>
                  {product.discountPercentage > 0 && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {product.discountPercentage}% OFF
                    </span>
                  )}