import SubscribeForm from './subscribeForm/SubscribeForm';

const NewsLetter = () => {
	return (
		<section className='w-full bg-gray text-black gap-4 text-2xl p-10 '>
			<div className='w-[90%] flex flex-col items-center justify-between gap-5 text-center'>
				<h2 className='text-3xl text-gray '>Our Newsletter</h2>
				<h1 className='text-5xl font-bold'>
					Subscribe to our Newsletter to <br /> get
					<span className='text-green'>Updates on our Latest Offers</span>
				</h1>
				<p className='text-gray'>
					Get 25% off on your first order by just subscribing to our newsletter
				</p>

				<SubscribeForm />
			</div>
		</section>
	);
};

export default NewsLetter;
