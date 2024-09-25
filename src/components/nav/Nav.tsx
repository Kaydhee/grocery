import MainNav from './mainNav/MainNav';
import NavItems from './navItems/NavItems';
import UpperNav from './upperNav/UpperNav';

const Nav = () => {
	return (
		<nav className='w-full mx-auto'>
			<div className=''>
				<UpperNav />
				<MainNav />
				<NavItems />
			</div>
		</nav>
	);
};

export default Nav;
