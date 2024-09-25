import Icons from '../../icons/Icons';

const UpperNav = () => {
	return (
		<section className=' text-black bg-yellow text-xl'>
			<div className='w-[90%] mx-auto flex items-center justify-between py-3'>
				<h2>Call us: +123-456-789</h2>

				<p className='flex items-center justify-center gap-2'>
					sign up and <span className='font-semibold'>GET 25% OFF</span> for
					your first order.
					<a
						href='#'
						className='text-green underline'>
						Sign up Now
					</a>
				</p>

				<Icons />
			</div>
		</section>
	);
};

export default UpperNav;
