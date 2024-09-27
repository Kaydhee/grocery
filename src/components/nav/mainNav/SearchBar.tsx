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
		<div className='hidden sm:flex items-center justify-between gap-3 bg-greenLight/50 p-2 rounded-xl  sm:w-[30rem] md:w-[40rem]'>
			<div className='border-2 border-l-0 border-y-0 border-r-white/50 p-2 text-white'>
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
					className='bg-transparent text-white placeholder:text-white/50'
					placeholder='search for products'
				/>

				<button className='text-white text-xl'>
					<CiSearch />
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
