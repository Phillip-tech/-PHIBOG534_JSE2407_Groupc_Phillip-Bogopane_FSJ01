import React, { Suspense } from 'react';
import ProductGallery from '../../components/ProductGallery';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import { getProduct } from '../../lib/api';
import { Star, ShoppingCart } from 'lucide-react';