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
                  )}
              </div>
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span>{product.rating.toFixed(1)}/5 (${product.rating})</span>
              </div>
              <p className="mb-4">{product.description}</p>
              <p className="mb-2">Category: {product.category}</p>
              <p className="mb-2">Tags: {product.tags.join(', ')}</p>
              <p className="mb-4">Stock: {product.stock} available</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-8 mb-4">Reviews</h2>
          {product.reviews.map((review, index) => (
            <div key={index} className="border-t py-4">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <p className="font-semibold">{review.reviewerName}</p>
                  <p className="text-sm text-gray-500">{review.reviewerEmail}</p>
                  <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span>({review.rating})</span>
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </Suspense>
      </div>
    );
  } catch (error) {
    return <ErrorMessage message="Failed to load product. Please try again later." />;
  }
}
