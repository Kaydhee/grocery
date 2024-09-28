import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Brand = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	// Initialize state from URL search params or empty array
	const [brands, setBrands] = useState(searchParams.get('brands')?.split(',') || []);

	// Handle brand selection changes
	const handleBrandChange = (event) => {
		const { value, checked } = event.target;
		let updatedBrands;

		if (checked) {
			// Add the selected brand
			updatedBrands = [...brands, value];
		} else {
			// Remove the unselected brand
			updatedBrands = brands.filter((brand) => brand !== value);
		}

		setBrands(updatedBrands);

		// Update the URL search params with the updated brands
		const params = new URLSearchParams(searchParams);
		if (updatedBrands.length > 0) {
			params.set('brands', updatedBrands.join(','));
		} else {
			params.delete('brands');
		}
		navigate({ search: params.toString() });
	};

	// Sync brands state with URL when component loads
	useEffect(() => {
		const urlBrands = searchParams.get('brands')?.split(',') || [];
		setBrands(urlBrands);
	}, [searchParams]);

	// Helper function to check if a brand is selected
	const isChecked = (brand) => brands.includes(brand);

	return (
		<div className='border-2 border-l-0 border-b-0 border-r-0 border-t-gray/50'>
			<h2 className='mb-4 font-bold md:font-semibold text-xl md:text-2xl'>Brand</h2>
			<ul className='flex flex-col items-start justify-start gap-2 text-sm md:text-xl'>
				<li className='flex items-center justify-center gap-2'>
					<input
						type='checkbox'
						value='Fresh Harvest'
						checked={isChecked('Fresh Harvest')}
						onChange={handleBrandChange}
					/>
					<label htmlFor='freshHarvest'>Fresh Harvest</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input
						type='checkbox'
						value="Nature's Best"
						checked={isChecked("Nature's Best")}
						onChange={handleBrandChange}
					/>
					<label htmlFor='naturesBest'>Nature's Best</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input
						type='checkbox'
						value='Good Grains'
						checked={isChecked('Good Grains')}
						onChange={handleBrandChange}
					/>
					<label htmlFor='goodGrains'>Good Grains</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input
						type='checkbox'
						value='Farm Fresh'
						checked={isChecked('Farm Fresh')}
						onChange={handleBrandChange}
					/>
					<label htmlFor='farmFresh'>Farm Fresh</label>
				</li>
				<li className='flex items-center justify-center gap-2'>
					<input
						type='checkbox'
						value='Green Grocer'
						checked={isChecked('Green Grocer')}
						onChange={handleBrandChange}
					/>
					<label htmlFor='greenGrocer'>Green Grocer</label>
				</li>
			</ul>
		</div>
	);
};

export default Brand;
