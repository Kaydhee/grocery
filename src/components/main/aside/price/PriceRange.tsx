const PriceRange = () => {
	return (
		<div className='border-2 border-l-0 border-b-0 border-r-0 border-t-gray/50'>
			<h2 className='mb-4 font-bold md:font-semibold text-xl md:text-2xl'>
				Price{' '}
			</h2>
			<div className=''>
				<label htmlFor='price'>$250 - $125 </label>
				<input
					type='range'
					name='price'
					id='price'
				/>
			</div>
		</div>
	);
};

export default PriceRange;
