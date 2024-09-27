import { useState } from 'react';
import Logo from '../../logo/Logo';
import Checkout from './Checkout';
import SearchBar from './SearchBar';
import Select from './Select';
import { MdLocationOn } from 'react-icons/md';

const MainNav = () => {
	const [selectedValue, setSelectedValue] = useState('option1');

	const options = [
		{ value: '', label: 'New York, USA' },
		{ value: '', label: 'New York, USA' },
		{ value: '', label: 'New York, USA' },
	];

	const handleSelectChange = (value: string) => {
		setSelectedValue(value);
	};

	return (
		<section className=' w-full bg-green'>
			<div className='w-[95%] md:w-[90%] mx-auto flex items-center justify-between py-4 md:py-6 text-base font-semibold'>
				<Logo />

				<div className='text-white hidden lg:block'>
					<span className='opacity-50'>Location</span>
					<div className='flex items-center justify-between gap-2 '>
						<MdLocationOn className='text-yellow' />
						<Select
							label=''
							options={options}
							selectedValue={selectedValue}
							onChange={handleSelectChange}
						/>
					</div>
				</div>
				<SearchBar />
				<Checkout />
			</div>
		</section>
	);
};

export default MainNav;
