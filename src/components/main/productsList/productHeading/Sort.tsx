import { useState } from 'react';
import Select from '../../../nav/mainNav/Select';

const Sort = () => {
	const [sort, setSort] = useState('default');

	const options = [
		{ value: '', label: 'Default sorting' },
		{ value: '', label: 'Default sorting' },
		{ value: '', label: 'Default sorting' },
	];

	const handleSortChange = (value: string) => {
		setSort(value);
	};

	return (
		<div className=''>
			<Select
				label=''
				options={options}
				selectedValue={sort}
				onChange={handleSortChange}
			/>
		</div>
	);
};

export default Sort;
