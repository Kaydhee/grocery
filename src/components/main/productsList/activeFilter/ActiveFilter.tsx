import DeleteButton from './DeleteButton';

const ActiveFilter = () => {
	return (
		<div className='flex flex-wrap items-center justify-between mt-3 text-base md:text-xl mb-3'>
			<span>Active Filter</span>
			<div className='flex items-center justify-between gap-2 bg-yellow rounded-3xl p-2 md:p-3'>
				<span>Price:</span>
				<span>$25.00 - $125.00</span>
				<DeleteButton />
			</div>
			<div className='flex items-center justify-between gap-2 bg-yellow rounded-3xl p-2 md:p-3'>
				<span>5</span>
				<span>star</span>
				<DeleteButton />
			</div>
			<div className='flex items-center justify-between gap-2 bg-yellow rounded-3xl p-2 md:p-3'>
				<span>In </span>
				<span>Stock</span>
				<DeleteButton />
			</div>
			<button className='text-green underline'>Clear all</button>
		</div>
	);
};

export default ActiveFilter;
