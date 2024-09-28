import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ProductType = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	// Initialize state from URL search params
	const [productTypes, setProductTypes] = useState(
		searchParams.get('productTypes')?.split(',') || []
	);

	// Handle product type checkbox change
	const handleProductTypeChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const selectedType = event.target.value;
		let updatedTypes = [...productTypes];

		if (event.target.checked) {
			// Add type if checked
			if (!updatedTypes.includes(selectedType)) {
				updatedTypes.push(selectedType);
			}
		} else {
			// Remove type if unchecked
			updatedTypes = updatedTypes.filter((type) => type !== selectedType);
		}

		// Update state and sync with URL
		setProductTypes(updatedTypes);

		// Update URL query parameters
		const params = new URLSearchParams(searchParams);
		if (updatedTypes.length > 0) {
			params.set('productTypes', updatedTypes.join(','));
		} else {
			params.delete('productTypes');
		}
		navigate({ search: params.toString() });
	};

	// Sync checkbox state with URL when loading
	useEffect(() => {
		const urlProductTypes = searchParams.get('productTypes')?.split(',') || [];
		setProductTypes(urlProductTypes);
	}, [searchParams]);

	return (
		<div className='border-2 border-l-0 border-b-0 border-r-0 border-t-gray/50'>
			<h2 className='mb-4 font-bold md:font-semibold text-xl md:text-2xl'>
				Product Type
			</h2>
			<ul className='flex flex-col items-start justify-start gap-2 text-sm md:text-xl'>
				<li className='flex items-center justify-center gap-2'>
					<input
						type='checkbox'
						value='Packaged Goods'
						checked={productTypes.includes('Packaged Goods')}
						onChange={handleProductTypeChange}
						id='packagedGoods'
					/>
					<label htmlFor='packagedGoods'>Packaged Goods</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input
						type='checkbox'
						value='Fresh Produce'
						checked={productTypes.includes('Fresh Produce')}
						onChange={handleProductTypeChange}
						id='freshProduce'
					/>
					<label htmlFor='freshProduce'>Fresh Produce</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input
						type='checkbox'
						value='Frozen Foods'
						checked={productTypes.includes('Frozen Foods')}
						onChange={handleProductTypeChange}
						id='frozenFoods'
					/>
					<label htmlFor='frozenFoods'>Frozen Foods</label>
				</li>
			</ul>
		</div>
	);
};

export default ProductType;
