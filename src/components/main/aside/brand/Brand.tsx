const Brand = () => {
	return (
		<div className=''>
			<h2 className='mb-4 font-semibold text-2xl'>Brand</h2>

			<ul
				className='flex flex-col items-start justify-start
			 gap-2 text-xl'>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<label htmlFor='freshHarvest'>Fresh Harvest</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<label htmlFor='naturesBest'>Nature's Best</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<label htmlFor='goodGrains'>Good Grains</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<label htmlFor='farmFresh'>Farm Fresh</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input type='checkbox' />
					<label htmlFor='greenGrocer'>Green Grocer</label>
				</li>
			</ul>
		</div>
	);
};

export default Brand;
