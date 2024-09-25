import { GiFruitBowl } from 'react-icons/gi';

const Logo = () => {
	return (
		<h1 className='text-3xl font-bold flex items-center justify-between gap-1'>
			<GiFruitBowl className='text-yellow' />
			<span className='text-white'>Grocery</span>
			<small className='text-yellow'>.</small>
		</h1>
	);
};

export default Logo;
