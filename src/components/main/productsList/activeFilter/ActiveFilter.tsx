import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import DeleteButton from './DeleteButton';

const ActiveFilter = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	// Handle removing a specific filter
	const handleRemoveFilter = (filterType) => {
		const params = new URLSearchParams(searchParams);

		// Remove the specific filter from search params
		params.delete(filterType);
		navigate({ search: params.toString() });
	};

	// Handle clearing all filters
	const handleClearAll = () => {
		navigate({ search: '' });
	};

	useEffect(() => {
		console.log('Search parameters changed:', searchParams.toString());
	}, [searchParams]); // Effect runs whenever searchParams changes

	// Create an array of filter types to dynamically render them
	const filterTypes = ['price', 'ratings', 'availability', 'categories', 'review', 'brands', 'productTypes'];

	// Function to render active filters
	const displayActiveFilters = () => {
		return filterTypes.map((filterType) => {
			console.log(filterType)
			const filterValue = searchParams.get(`${filterType}`);
			console.log(filterValue)
			if (filterValue) {
				return (
					<div key={filterType} className='flex items-center justify-between gap-2 bg-yellow rounded-3xl p-2 md:p-3'>
						<span>{filterType.charAt(0).toUpperCase() + filterType.slice(1)}:</span>
						<span>{filterValue}</span>
						<DeleteButton onClick={() => handleRemoveFilter(filterType)} />
					</div>
				);
			}
			return null; // Return null if no filter is found
		});
	};

	return (
		<div className='flex flex-wrap items-center justify-between mt-3 text-base md:text-xl mb-3'>
			<span>Active Filter</span>

			{/* Call the displayActiveFilters function directly to render filters */}
			{displayActiveFilters()}

			{/* Clear all filters */}
			<button className='text-green underline' onClick={handleClearAll}>
				Clear all
			</button>
		</div>
	);
};

export default ActiveFilter;
