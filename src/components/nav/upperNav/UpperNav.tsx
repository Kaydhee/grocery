import Icons from '../../icons/Icons';

const UpperNav = () => {
	return (
		<section className=' text-black bg-yellow sm:text-sm md:text-xl text-xs '>
			<div className='w-[95%] md:w-[90%] mx-auto flex items-center justify-between py-2 md:py-5'>
				<h2>Call us: +123-456-789</h2>

				<p className=' items-center justify-center gap-2 hidden sm:block'>
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
