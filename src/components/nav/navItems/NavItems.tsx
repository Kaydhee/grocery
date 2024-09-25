import BrowseCategories from './BrowseCategories';
import { MdKeyboardArrowDown } from 'react-icons/md';

const NavItems = () => {
	return (
		<section className='w-full bg-green text-xl'>
			<div className='flex items-center justify-between w-[90%] mx-auto py-3'>
				<BrowseCategories />

				<ul className='flex items-center justify-between gap-3 text-white'>
					<li>Home</li>
					<li>Shop</li>
					<li>Fruits</li>
					<li>Vegetable</li>
					<li>Beverages</li>
					<li>About Us</li>
					<li>Blogs</li>
				</ul>

				<div className='flex items-center justify-between gap-2 text-yellow text-xl'>
					<span>Recently Viewed</span>
					<MdKeyboardArrowDown />
				</div>
			</div>
		</section>
	);
};

export default NavItems;
