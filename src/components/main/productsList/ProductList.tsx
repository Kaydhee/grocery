import ActiveFilter from './activeFilter/ActiveFilter';
import ProductCard, { ProductInterface } from './productCard/ProductCard';
import ProductHeading from './productHeading/ProductHeading';

import data from '../../../../data/products.json';

import { Link, useParams } from 'react-router-dom';

const ITEMS_PER_PAGE = 6;

// import { fetchProducts } from '../../../services/utils';
// import { useQuery } from '@tanstack/react-query';

const ProductList = () => {
	const { pageNumber } = useParams<{ pageNumber: string }>();
	const currentPage = parseInt(pageNumber || '1', 10);

	// Calculating the products to display based on the current page
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const paginatedData = data.slice(startIndex, endIndex);

	// Calculating total pages
	const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

	return (
		<section className='w-full'>
			<div className=''>
				<ProductHeading />
				<ActiveFilter />

				<div className='flex items-center flex-col'>
					<div className='flex items-center justify-between flex-wrap gap-2'>
						{paginatedData.map((product: ProductInterface, index: number) => (
							<ProductCard
								key={index}
								{...product}
							/>
						))}
					</div>
					{/* Pagination Links */}
					<div className='flex items-center justify-between gap-2 mt-4'>
						{currentPage > 1 && (
							<Link to={`/products/page/${currentPage - 1}`}>Previous</Link>
						)}
						{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
							<Link
								key={page}
								to={`/products/page/${page}`}
								className={`w-8 h-8 flex items-center justify-center ${
									page === currentPage ? 'bg-green' : 'font-normal'
								}  text-black text-sm rounded-full p-1`}>
								{page}
							</Link>
						))}
						{currentPage < totalPages && (
							<Link to={`/products/page/${currentPage + 1}`}>Next</Link>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductList;

// This was loading the data fetching with use query

// const { isLoading, error, data } = useQuery(['repoData'], fetchProducts);

// console.log(data);
// if (isLoading) return 'Loading...';

// if (error instanceof Error) {
// 	return 'An error has occurred: ' + error.message;
// }
