import { FaRegCopyright } from 'react-icons/fa';
import Icons from '../icons/Icons';
import Logo from '../logo/Logo';

const Footer = () => {
	return (
		<footer className='bg-gray w-full'>
			<div className='bg-green rounded-lg flex flex-col items-start justify-start w-[90%] mx-auto p-10'>
				<div className=' flex items-start justify-between gap-5 text-2xl text-white'>
					<div className=''>
						<Logo />

						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Dignissimos, dolore.
						</p>

						<Icons />
					</div>

					<ul>
						<h3>Company</h3>
						<li>About Us </li>
						<li>Contact Us</li>
						<li>Blog</li>
						<li>Career</li>
					</ul>
					<ul>
						<h3>Customer Services</h3>
						<li>My account</li>
						<li>Track your Order</li>
						<li>Return</li>
						<li>FAQ</li>
					</ul>
					<ul>
						<h3>Our Information</h3>
						<li>Privacy</li>
						<li>User Terms & Conditons</li>
						<li>Return Policy</li>
					</ul>
					<ul>
						<h3>Contact Info</h3>
						<li>+0123-456-789</li>
						<li>example@gmail.com</li>
						<li>8502 Preston Rd. Inglewood,Maine 98380</li>
					</ul>
				</div>

				<div className=''>
					<p>
						Copyright <FaRegCopyright /> 2024{' '}
						<span>Grocery website Design.</span>All rights Reserved{' '}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
