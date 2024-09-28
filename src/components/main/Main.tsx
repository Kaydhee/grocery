import Footer from '../footer/Footer';
import NewsLetter from '../newsletter/NewsLetter';
import Activities from './activities/Activities';
import Aside from './aside/Aside';
import ProductList from './productsList/ProductList';

const Main = () => {
	return (
		<main className='w-full overflow-hidden'>
			<div className='w-[95%] md:w-[90%] mx-auto my-4'>
				<div className='flex flex-row items-start justify-between gap-4'>
					<Aside />
					<ProductList />
				</div>
			</div>
			<Activities />
			<NewsLetter />
			<Footer />
		</main>
	);
};

export default Main;
