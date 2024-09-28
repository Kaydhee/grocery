import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Availability = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	// Initialize state from URL search params or empty array
	const [availability, setAvailability] = useState(
		searchParams.get('availability')?.split(',') || []
	);

	// Handle availability selection changes
	const handleAvailabilityChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const { value, checked } = event.target;
		let updatedAvailability;

		if (checked) {
			// Add the selected availability status
			updatedAvailability = [...availability, value];
		} else {
			// Remove the unselected availability status
			updatedAvailability = availability.filter((status) => status !== value);
		}

		setAvailability(updatedAvailability);

		// Update the URL search params with the updated availability
		const params = new URLSearchParams(searchParams);
		if (updatedAvailability.length > 0) {
			params.set('availability', updatedAvailability.join(','));
		} else {
			params.delete('availability');
		}
		navigate({ search: params.toString() });
	};

	// Sync availability state with URL when component loads
	useEffect(() => {
		const urlAvailability = searchParams.get('availability')?.split(',') || [];
		setAvailability(urlAvailability);
	}, [searchParams]);

	// Helper function to check if a status is selected
	const isChecked = (status: string) => availability.includes(status);

	return (
		<div className='border-2 border-l-0 border-b-0 border-r-0 border-t-gray/50'>
			<h2 className='mb-4 font-bold md:font-semibold text-xl md:text-2xl'>
				Availability
			</h2>
			<ul className='flex flex-col items-start justify-start gap-2 text-sm md:text-xl'>
				<li className='flex items-center justify-center gap-2'>
					<input
						type='checkbox'
						value='In Stock'
						checked={isChecked('In Stock')}
						onChange={handleAvailabilityChange}
					/>
					<label htmlFor='inStock'>In Stock</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input
						type='checkbox'
						value='Out of Stock'
						checked={isChecked('Out of Stock')}
						onChange={handleAvailabilityChange}
					/>
					<label htmlFor='outOfStock'>Out of Stock</label>
				</li>
			</ul>
		</div>
	);
};

export default Availability;
