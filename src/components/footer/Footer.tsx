import { FaRegCopyright } from 'react-icons/fa';
import Icons from '../icons/Icons';
import Logo from '../logo/Logo';

const Footer = () => {
	return (
		<footer className='bg-gray/50 w-full'>
			<div className='bg-green rounded-xl flex flex-col items-start justify-start text-base  sm:text-xl  w-[90%] md:w-[98%] mx-auto p-20'>
				<div className=' flex flex-col md:flex-row items-start justify-between gap-5  text-white mb-4 border-2 border-l-0 border-r-0 border-t-0 border-b-white/50 pb-5'>
					<div className=''>
						<div className='w-[10rem]'>
							<Logo />
						</div>

						<p className='text-white/50 mt-4 md:w-[25rem]'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Dignissimos, dolore.
						</p>

						<Icons />
					</div>

					<ul className='text-white/50 flex flex-col gap-3'>
						<h3 className='text-white font-bold'>Company</h3>
						<li>About Us </li>
						<li>Contact Us</li>
						<li>Blog</li>
						<li>Career</li>
					</ul>
					<ul className='text-white/50 flex flex-col gap-3'>
						<h3 className='text-white font-bold'>Customer Services</h3>
						<li>My account</li>
						<li>Track your Order</li>
						<li>Return</li>
						<li>FAQ</li>
					</ul>
					<ul className='text-white/50 flex flex-col gap-3'>
						<h3 className='text-white font-bold'>Our Information</h3>
						<li>Privacy</li>
						<li>User Terms & Conditons</li>
						<li>Return Policy</li>
					</ul>
					<ul className='text-white/50 flex flex-col gap-3'>
						<h3 className='text-white font-bold'>Contact Info</h3>
						<li>+0123-456-789</li>
						<li>example@gmail.com</li>
						<li>8502 Preston Rd. Inglewood,Maine 98380</li>
					</ul>
				</div>

				<div className=' flex flex-wrap items-center justify-between text-white mt-4 '>
					<p className='flex flex-wrap items-center justify-between gap-2'>
						Copyright <FaRegCopyright /> 2024{' '}
						<span className='text-yellow'> Grocery website Design.</span>All
						rights Reserved{' '}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
