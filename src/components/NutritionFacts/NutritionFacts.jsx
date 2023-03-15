import { nutritionDetails } from '../../data';

export function NutritionFacts() {
	return (
		<div className='max-w-90 sm:max-w-262.5 mx-auto h-full pt-24 pb-10'>
			<h2 className='text-3xl sm:text-4xl'>Nutrition Facts</h2>
			<p className='text-xxs mt-4'>12 servings per container</p>
			<table className='w-full mt-4 sm:mt-2'>
				<thead className='text-xs text-left border-b-8 sm:border-b-4'>
					<tr>
						<th>Serving size 1 package(10g)</th>
						<th>Amount</th>
						<th>PDV*</th>
					</tr>
				</thead>
				<tbody>
					{nutritionDetails.map((el) => {
						return (
							<tr className='border-b h-16 align-bottom text-base sm:text-sm' key={el.name}>
								<td>{el.name}</td>
								<td className='text-xs'>{el.amount}</td>
								<td className='text-xs'>{el.pdv !== null ? el.pdv + '%' : null}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<p className='mt-10 w-full sm:w-190 text-base sm:text-sm'>
				*The Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000
				calories a day is used for general nutrition advice.{' '}
			</p>
		</div>
	);
}
