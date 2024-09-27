import { HiOutlineShoppingBag } from 'react-icons/hi2';

interface AddToCartButtonProps {
	fn: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ fn }) => {
	return (
		<button
			onClick={fn}
			className='bg-green rounded-3xl flex items-center justify-between gap-2 text-white px-2 py-1'>
			<HiOutlineShoppingBag />
			<span>add</span>
		</button>
	);
};

export default AddToCartButton;
