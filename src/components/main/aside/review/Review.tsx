import { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Review = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	// Initialize state from URL search params
	const [ratings, setRatings] = useState(
		searchParams.get('ratings')?.split(',') || []
	);

	// List of possible star ratings (corresponding to 5-star, 4.5-star, etc.)
	const ratingOptions = [
		{ value: '5', label: '5 stars', stars: 5 },
		{ value: '4.5', label: '4.5 stars', stars: 4.5 },
		{ value: '4', label: '4 stars', stars: 4 },
		{ value: '3.5', label: '3.5 stars', stars: 3.5 },
		{ value: '3', label: '3 stars', stars: 3 },
		{ value: '2.5', label: '2.5 stars', stars: 2.5 },
		{ value: '2', label: '2 stars', stars: 2 },
		{ value: '1.5', label: '1.5 stars', stars: 1.5 },
		{ value: '1', label: '1 star', stars: 1 },
	];

	// Handle rating checkbox changes
	const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const rating = event.target.value;
		let updatedRatings = [...ratings];

		if (event.target.checked) {
			// Add the rating if checked
			if (!updatedRatings.includes(rating)) {
				updatedRatings.push(rating);
			}
		} else {
			// Remove the rating if unchecked
			updatedRatings = updatedRatings.filter((r) => r !== rating);
		}

		// Update local state and sync with URL
		setRatings(updatedRatings);

		// Update URL query parameters
		const params = new URLSearchParams(searchParams);
		if (updatedRatings.length > 0) {
			params.set('ratings', updatedRatings.join(','));
		} else {
			params.delete('ratings');
		}
		navigate({ search: params.toString() });
	};

	// Sync checkbox state with URL when loading
	useEffect(() => {
		const urlRatings = searchParams.get('ratings')?.split(',') || [];
		setRatings(urlRatings);
	}, [searchParams]);

	// Utility to render stars based on rating
	const renderStars = (num: number) => {
		const fullStars = Math.floor(num);
		const halfStars = num % 1 === 0.5 ? 1 : 0;

		return (
			<>
				{[...Array(fullStars)].map((_, i) => (
					<FaStar key={i} />
				))}
				{halfStars > 0 && <FaStarHalfAlt />}
			</>
		);
	};

	return (
		<div className='border-2 border-l-0 border-b-0 border-r-0 border-t-gray/50'>
			<h2 className='mb-4 font-bold md:font-semibold text-xl md:text-2xl'>
				Review
			</h2>
			<ul className='flex flex-col items-start justify-start gap-2 text-sm md:text-xl'>
				{ratingOptions.map((rating) => (
					<li
						className='flex items-center justify-center gap-2'
						key={rating.value}>
						<input
							type='checkbox'
							value={rating.value}
							checked={ratings.includes(rating.value)}
							onChange={handleRatingChange}
							id={rating.value}
						/>
						<div className='flex items-center justify-center gap-1 text-yellow'>
							{renderStars(rating.stars)}
						</div>
						<label htmlFor={rating.value}>{rating.label}</label>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Review;
