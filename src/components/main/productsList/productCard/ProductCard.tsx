/* eslint-disable @typescript-eslint/no-unused-vars */
import { GoHeart } from 'react-icons/go';
import fruitImage from './temp assets/fruit1.png';
import { FaStar } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { useCart, useFavorites } from '../../../../services/hooks';

export interface ProductInterface {
	category: string;
	price: string;
	discountPrice: string;
	discount: string;
	name: string;
	image: string;
	review: string;
	weight: string;
	rating: string;
	id: string;
}

const ProductCard: React.FC<ProductInterface> = (props) => {
	const { favorites, addToFavorites } = useFavorites();
	const { cart, addToCart } = useCart();

	return (
		<article className='text-sm md:text-xl w-[10rem] md:w-[15rem] p-2 md:p-4 border-2 border-gray/50 rounded-xl'>
			<div className='flex items-center justify-between mb-2 '>
				<span className='rounded-r-3xl rounded-l-md bg-green text-white p-2'>
					{props?.discountPrice}
				</span>

				<button
					onClick={() => addToFavorites(props)}
					className='border-2 border-gray/50 rounded-full flex items-center justify-between gap-2 text-black p-2'>
					<GoHeart />
				</button>
			</div>
			<div className='mb-4 flex items-center justify-center'>
				<img
					src={fruitImage}
					alt='fruit image'
				/>
			</div>

			<div className='flex items-center justify-between mb-2'>
				<span className='text-green'>Fruits</span>
				<span className='flex items-center justify-between gap-2'>
					<FaStar className='text-yellow' /> {props?.rating}
				</span>
			</div>
			<div className='flex flex-col gap-3 mb-2'>
				<span className='font-bold'>{props.name}</span>
				<span className='text-gray'>{props.weight}</span>
			</div>

			<div className='flex items-center justify-between'>
				<div className='flex flex-col gap-1'>
					<span>{props.price}</span>
					<span className='text-gray line-through'>{props.discountPrice}</span>
				</div>

				<button
					onClick={() => addToCart(props)}
					className='bg-green rounded-3xl flex items-center justify-between gap-2 text-white px-2 py-1'>
					<HiOutlineShoppingBag />
					<span>add</span>
				</button>
				{/* <AddToCartButton fn={() => props.name} /> */}
			</div>
		</article>
	);
};

export default ProductCard;
