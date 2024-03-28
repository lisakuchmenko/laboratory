import { nutritionDetails } from '../../data';
import { motion } from 'framer-motion';

export function NutritionFacts() {
	
    return (
        <section className='w-90 sm:w-262.5 lg:w-11/12 3xl:w-380 mx-auto mt-[300px] h-full'>
            <h2 className='font-bold text-[4.6vw] 3xl:text-[80px] leading-[132px] tracking-[0.3px] text-center text-text uppercase'>nutrition breackdown</h2>
            <div className='w-full mt-[70px]'>
                <div className='border-b  text-[15px] flex leading-[25px] justify-between h-[35px] tracking-[0.3px] text-left text-text uppercase relative '>
					<span className='basis-[49%]'>Serving size 1 package(10g)</span>
					<span className='basis-[23.49%]'>Amount</span>
					<span className='basis-[23.49%]'>PDV*</span>
                </div>
                <div className='mt-10 w-full flex flex-col gap-[30px] pb-2.5 border-b'>
                    {nutritionDetails.map((el,i) => 
						<motion.p 
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: 1,
							transition: {
								type: 'easeOut',
								duration: 1,
								delay: 0.05*(i+1),
							},
						}}
						className='font-bold text-[20px] leading-[33px] flex tracking-[0.3px] justify-between' key={el.name}>
							<span className='basis-[49%]'>{el.name}</span>
							<span className='basis-[23.49%]'>{el.amount}</span>
							<span className='basis-[23.49%]'>{el.pdv !== null ? el.pdv + '%' : null}</span>
						</motion.p>
                    )}
                </div>
            </div>
            <p className='mt-12.5 w-full sm:w-[745px] font-normal text-[15px] leading-[23px] uppercase'>
                *The Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000
                calories a day is used for general nutrition advice.{' '}
            </p>
        </section>
    );
}
