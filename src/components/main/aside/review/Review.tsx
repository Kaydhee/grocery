import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Review = () => {
	return (
		<div>
			<h2 className='mb-4 font-semibold text-2xl'>Review</h2>
			<ul
				className='flex flex-col items-start justify-start
			 gap-2 text-xl'>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<div className='flex items-center justify-center gap-1 text-yellow'>
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
					</div>
					<label htmlFor='5star'>5 stars</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<div className='flex items-center justify-center gap-1 text-yellow'>
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStarHalfAlt />
					</div>
					<label htmlFor='4star'>4 stars</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<div className='flex items-center justify-center gap-1 text-yellow'>
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStarHalfAlt />
						<FaStarHalfAlt />
					</div>
					<label htmlFor='3star'>3 stars</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<div className='flex items-center justify-center gap-1 text-yellow'>
						<FaStar />
						<FaStar />
						<FaStarHalfAlt />
						<FaStarHalfAlt />
						<FaStarHalfAlt />
					</div>
					<label htmlFor='2star'>2 stars</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<div className='flex items-center justify-center gap-1 text-yellow'>
						<FaStar />
						<FaStarHalfAlt />
						<FaStarHalfAlt />
						<FaStarHalfAlt />
						<FaStarHalfAlt />
					</div>
					<label htmlFor='1star'>1 star</label>
				</li>
			</ul>
		</div>
	);
};

export default Review;
