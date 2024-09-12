'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const Pagination = ({ currentPage }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex justify-center mt-8">
      <Link href={createPageURL(currentPage - 1)} className={`mx-2 px-4 py-2 bg-blue-500 text-white rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
        Previous
      </Link>
      <span className="mx-2 px-4 py-2 bg-gray-200 rounded">{currentPage}</span>
      <Link href={createPageURL(currentPage + 1)} className="mx-2 px-4 py-2 bg-blue-500 text-white rounded">
        Next
      </Link>
    </div>
  );
};

export default Pagination;



