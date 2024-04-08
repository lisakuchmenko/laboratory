export default function FAQs({faqsArr,closeAllOpenedQuestions,questionHeight}) {

    function onClickHandler (e, ref) {
		closeAllOpenedQuestions();
		e.target.offsetHeight === questionHeight  
		? e.target.style.height = `${questionHeight + ref.current.offsetHeight}px` 
		: e.target.style.height = `${questionHeight}px`
	}

    return (
        <section className="w-11/12 mx-auto 3xl:w-380 mt-20">
			<ul>
				{faqsArr.map(({answerRef,questionRef,question,answer},i)=>
					<li 
						id={`question_${i+1}`}
						ref={questionRef}
						key={question}
						style={{height:questionHeight}}
						onClick={(e)=>onClickHandler(e,answerRef)}
						className={`border-b ${!i ? 'border-t' : ""} border-dotted text-3xl uppercase text-center pt-10 transition-all duration-500 overflow-hidden`}
                        >
						    {question}
						<p  
                            id="answer"	
                            ref={answerRef} 
                            className=" mt-8 text-xl text-grey w-10/12 text-center mx-auto pb-10"
                            >
							{answer}
						</p>
					</li>
				)}
			</ul>
		</section>
    )
};
