/* eslint-disable @typescript-eslint/no-unused-vars */
import ActiveFilter from './activeFilter/ActiveFilter';
import ProductCard from './productCard/ProductCard';
import ProductHeading from './productHeading/ProductHeading';

import { fetchProducts } from '../../../services/utils';
import { useQuery } from '@tanstack/react-query';

import { ProductInterface } from './productCard/ProductCard';

const ProductList = () => {
	const { isLoading, error, data } = useQuery(['repoData'], fetchProducts);

	// console.log(data);
	if (isLoading) return 'Loading...';

	if (error) return 'An error has occurred: ' + error.message;

	return (
		<section className='w-full'>
			<div>
				<ProductHeading />
				<ActiveFilter />

				<div className='flex items-center justify-between flex-wrap gap-2'>
					{data.map((product: ProductInterface, index: number) => (
						<ProductCard
							key={index}
							{...product}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductList;
