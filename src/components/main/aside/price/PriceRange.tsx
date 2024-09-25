const PriceRange = () => {
	return (
		<div>
			<h2 className='mb-4 font-semibold text-2xl'>Price </h2>
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
