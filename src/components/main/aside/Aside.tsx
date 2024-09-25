import Availability from './availability/Availability';
import Brand from './brand/Brand';
import CategoryList from './categoryList/CategoryList';
import PriceRange from './price/PriceRange';
import ProductType from './productType/ProductType';
import Review from './review/Review';

const Aside = () => {
	return (
		<aside className='py-[2%] flex flex-col gap-3 w-[26rem] '>
			<div className='my-2 text-3xl font-bold'>
				<h2>Filter Options</h2>
			</div>

			<CategoryList />
			<PriceRange />
			<Review />
			<Brand />
			<ProductType />
			<Availability />
		</aside>
	);
};

export default Aside;
