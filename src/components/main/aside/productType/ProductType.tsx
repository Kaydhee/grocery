const ProductType = () => {
	return (
		<div className=''>
			<h2 className='mb-4 font-semibold text-2xl'>Product Type</h2>

			<ul
				className='flex flex-col items-start justify-start
			 gap-2 text-xl'>
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
