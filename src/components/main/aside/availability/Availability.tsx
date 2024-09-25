const Availability = () => {
	return (
		<div className=''>
			<h2 className='mb-4 font-semibold text-2xl'>Availability</h2>

			<ul
				className='flex flex-col items-start justify-start
			 gap-2 text-xl'>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<label htmlFor='inStock'>In Stock</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<label htmlFor='outOfStock'>Out of stock</label>
				</li>
			</ul>
		</div>
	);
};

export default Availability;
