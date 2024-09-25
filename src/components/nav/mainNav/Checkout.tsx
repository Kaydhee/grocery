// import { CiHeart } from 'react-icons/ci';
// import { HiOutlineShoppingBag } from 'react-icons/hi2';
// import { IoPersonOutline } from 'react-icons/io5';

// const Checkout = () => {
// 	return (
// 		<div className=' flex items-center justify-between gap-4 text-2xl text-white font-semibold'>
// 			<button onClick={}>
// 				<CiHeart />
// 			</button>
// 			<button>
// 				<HiOutlineShoppingBag />
// 			</button>
// 			<button>
// 				<IoPersonOutline />
// 			</button>
// 		</div>
// 	);
// };

// export default Checkout;

import { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoPersonOutline } from 'react-icons/io5';
import { useCart, useFavorites } from '../../../services/hooks';
import { ProductInterface } from '../../main/productsList/productCard/ProductCard';

const Checkout = () => {
	const [isPopupFavouriteOpen, setPopupFavouriteOpen] = useState(false);
	const [isPopupCartOpen, setPopupCartOpen] = useState(false);

	const { favorites, addToFavorites } = useFavorites();
	const { cart, addToCart } = useCart();

	const handleFavouriteClick = () => {
		setPopupFavouriteOpen(true);
	};

	const handleFavouriteClose = () => {
		setPopupFavouriteOpen(false);
	};

	const handleCartClick = () => {
		setPopupCartOpen(true);
	};

	const handleCartClose = () => {
		setPopupCartOpen(false);
	};

	return (
		<div className='flex items-center justify-between gap-4 text-2xl relative text-white font-semibold'>
			<button onClick={handleFavouriteClick}>
				<CiHeart />
			</button>
			<button onClick={handleCartClick}>
				<HiOutlineShoppingBag />
			</button>
			<button>
				<IoPersonOutline />
			</button>

			{isPopupCartOpen && (
				<div className='w-20 h-30 flex items-center justify-center bg-blue text-white p-4 rounded shadow-lg'>
					<div className=''>
						<button
							onClick={handleCartClose}
							className='absolute top-2 right-2'>
							&times; {/* Close button */}
						</button>
						<h2 className='text-xl font-semibold'>Favorites</h2>

						<ul>
							{favorites?.map((item: ProductInterface) => (
								<li
									key={item.id}
									className='py-2'>
									{item.name}
								</li>
							))}
						</ul>
					</div>
				</div>
			)}

			{isPopupFavouriteOpen && (
				<div className='w-20 h-30 flex items-center justify-center bg-red text-white p-4 rounded shadow-lg'>
					<div className=''>
						<button
							onClick={handleFavouriteClose}
							className='absolute top-2 right-2'>
							&times; {/* Close button */}
						</button>
						<h2 className='text-xl font-semibold'>Favorites</h2>

						<ul>
							{favorites?.map((item: ProductInterface) => (
								<li
									key={item.id}
									className='py-2'>
									{item.name}
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default Checkout;
