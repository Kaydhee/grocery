import Sort from './Sort';

const ProductHeading = () => {
	return (
		<div className='flex items-center justify-between text-xl'>
			<h4>Showing 1-12 of 2560 results</h4>

			<div className='flex items-center justify-between gap-3'>
				<p>Sort by:</p>
				<div className='border-2 rounded-3xl border-gray p-2'>
					<Sort />
				</div>
			</div>
		</div>
	);
};

export default ProductHeading;
