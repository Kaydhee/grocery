import { RxHamburgerMenu } from 'react-icons/rx';

const BrowseCategories = () => {
	return (
		<div className='hidden sm:flex items-center justify-between gap-2 bg-yellow text-black p-2 font-medium rounded-md'>
			<RxHamburgerMenu />
			<span>Browse All Categories</span>
		</div>
	);
};

export default BrowseCategories;
