import Activities from './activities/Activities';
import Aside from './aside/Aside';
import ProductList from './productsList/ProductList';

const Main = () => {
	return (
		<main className='w-full'>
			<div className='w-[90%] mx-auto my-4'>
				<div className='   flex items-start justify-between gap-4'>
					<Aside />
					<ProductList />
				</div>
				<Activities />
			</div>
		</main>
	);
};

export default Main;
