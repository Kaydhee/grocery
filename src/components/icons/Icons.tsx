import { FaFacebook, FaPinterest, FaYoutube } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaSquareInstagram } from 'react-icons/fa6';

const Icons = () => {
	return (
		<div className='flex items-center justify-between gap-2 font-semibold text-green'>
			<FaFacebook />
			<AiFillTwitterCircle />
			<FaPinterest />
			<FaYoutube />
			<FaSquareInstagram />
		</div>
	);
};

export default Icons;
