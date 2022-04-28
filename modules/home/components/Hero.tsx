import React from 'react';
import Image from 'next/image';

const Hero = () => {
	return (
		<div className='w-screen h-[500px] relative mb-10'>
			<div className='p-20 z-40 h-full w-full absolute bg-black opacity-70 '>
				sdasdasdasdasd
			</div>
			<Image
				layout='fill'
				objectFit='cover'
				quality={100}
				src='/images/hero.jpg'
				alt='Hero Image'
			/>

			<section className='p-20 z-40 h-full w-full absolute  text-white text-center flex flex-col justify-center items-center gap-6'>
				<h2 className='text-6xl font-normal leading-normal'>Lansea</h2>
				<p className='md:w-[500px] text-lg font-normal leading-normal'>
					Have peace of mind and confidence when you look for a job,
					we moderate employer signups and only allow access to
					verified employers and companies.
				</p>
			</section>
		</div>
	);
};

export default Hero;
