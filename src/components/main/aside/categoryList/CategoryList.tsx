const CategoryList = () => {
	return (
		<div className='border-2 border-l-0 border-b-0 border-r-0 border-t-gray/50'>
			<h2 className='mb-4 font-bold md:font-semibold text-xl md:text-2xl'>
				Category
			</h2>

			<ul
				className='flex flex-col items-start justify-start
			 gap-2 text-sm md:text-xl'>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<label htmlFor='vegetables'>Vegetables</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<label htmlFor='Fresh-Fruits'>Fresh Fruits</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<label htmlFor='milk&eggs'>Milk & Eggs</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<label htmlFor='Bakery'>Bakery</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<label htmlFor='house-hold'>House Hold</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<label htmlFor='dry-fruits'>Dry Fruits</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<label htmlFor='drinks'>Drinks</label>
				</li>
			</ul>
		</div>
	);
};

export default CategoryList;
