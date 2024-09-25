import { CiSearch } from 'react-icons/ci';
import Select from './Select';
import { useState } from 'react';

const SearchBar = () => {
	const [selectedValue, setSelectedValue] = useState('option1');

	const options = [
		{ value: '', label: 'All Categories' },
		{ value: '', label: 'All Categories' },
		{ value: '', label: 'All Categories' },
	];

	const handleSelectChange = (value: string) => {
		setSelectedValue(value);
	};
	return (
		<div className='flex items-center justify-between gap-3 bg-greenLight p-2 rounded-md'>
			<div className='border-4 border-r-white '>
				<Select
					label=''
					options={options}
					selectedValue={selectedValue}
					onChange={handleSelectChange}
				/>
			</div>

			<div className='flex items-center justify-center '>
				<input
					type='text'
					className='bg-transparent text-white placeholder:text-white'
					placeholder='search for products'
				/>

				<button className='text-white'>
					<CiSearch />
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
