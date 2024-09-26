const SubscribeForm = () => {
	return (
		<div>
			<div className='flex items-center justify-between gap-5  rounded '>
				<input
					type='email'
					name='email'
					id=''
					placeholder='Enter email address'
					className='bg-white text-black placeholder:text-gray px-3 py-2 border-1 rounded-full'
				/>
				<button className='bg-yellow text-black px-3 py-2 rounded-full'>
					Subscribe
				</button>
			</div>
		</div>
	);
};

export default SubscribeForm;
