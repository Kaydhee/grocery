import { FaCube } from 'react-icons/fa';
import { LiaWalletSolid } from 'react-icons/lia';
import { RiCustomerServiceFill } from 'react-icons/ri';

const Activities = () => {
	return (
		<div className='w-full mt-4 p-10'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center justify-between gap-2'>
					<FaCube className='text-green text-5xl ' />
					<div className=''>
						<h3>Free shipping</h3>
						<p>Free Shipping for order above $50</p>
					</div>
				</div>
				<div className='flex items-center justify-between gap-2'>
					<LiaWalletSolid className='text-green text-5xl' />
					<div className=''>
						<h3>Flexible payment</h3>
						<p>Multiple secure payment options</p>
					</div>
				</div>
				<div className='flex items-center justify-between gap-2'>
					<RiCustomerServiceFill className='text-green text-5xl' />
					<div className=''>
						<h3>24x7 Support</h3>
						<p>We support online all days</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Activities;
