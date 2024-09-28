import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const PriceRange = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	// Initialize state from URL search params or default values
	const [priceRange, setPriceRange] = useState(searchParams.get('price') || 250);

	// Handle price range change
	const handlePriceChange = (event) => {
		const newPrice = event.target.value;
		setPriceRange(newPrice);

		// Update URL search params with the new price
		const params = new URLSearchParams(searchParams);
		params.set('price', newPrice);
		navigate({ search: params.toString() });
	};

	// Sync price range with URL when component loads
	useEffect(() => {
		const urlPrice = searchParams.get('price') || 250;
		setPriceRange(urlPrice);
	}, [searchParams]);

	return (
		<div className='border-2 border-l-0 border-b-0 border-r-0 border-t-gray/50'>
			<h2 className='mb-4 font-bold md:font-semibold text-xl md:text-2xl'>Price</h2>
			<div className=''>
				<label htmlFor='price'>${priceRange}</label>
				<input
					type='range'
					name='price'
					id='price'
					min='125'
					max='250'
					step='5'
					value={priceRange}
					onChange={handlePriceChange}
				/>
			</div>
		</div>
	);
};

export default PriceRange;
