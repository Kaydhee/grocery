const ProductType = () => {
	return (
		<div className='border-2 border-l-0 border-b-0 border-r-0 border-t-gray/50'>
			<h2 className='mb-4 font-bold md:font-semibold text-xl md:text-2xl'>
				Product Type
			</h2>

			<ul
				className='flex flex-col items-start justify-start
			 gap-2 text-sm md:text-xl'>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<label htmlFor='packagedGoods'>Packaged Goods</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<label htmlFor='freshProduce'>Fresh Produce</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<label htmlFor='frozenFoods'>Frozen Foods</label>
				</li>
			</ul>
		</div>
	);
};

export default ProductType;
