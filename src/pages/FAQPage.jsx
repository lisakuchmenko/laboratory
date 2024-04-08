import { useRef } from "react";
import CommonHeroSection from "../components/CommonHeroSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageBlur } from "../components/PageBlur";
import FAQs from "../components/FAQs";

export default function FAQPage(params) {

    const questionHeight = 120;

	function onOutsideClickListener(e) {
		if(!e.target.id.includes("question")){
			closeAllOpenedQuestions();
		}
	}

	const faqsArr = [
		{
			question: "is there any additional shugar?",
			answer: "nope, just my own fructose from fruit.",
			answerRef: useRef(null),
			questionRef: useRef(null),
		},
		{
			question: "how is tutti bites made?",
			answer: "The fruit is first frozen and then the water is removed from the fruit by sublimation, leaving the fruit crisp and retaining its original shape.",
			answerRef: useRef(null),
			questionRef: useRef(null),
		},
		{
			question: "how many ingredients du you use?",
			answer: "just one - the fruit. Nothing alse, nothing extra",
			answerRef: useRef(null),
			questionRef: useRef(null),
		},
		{
			question: "how it tastes",
			answer: "the incredible aroma and taste of our bites will not leave you indifferent. You will not feel the difference between fruit and our bites because our bites are pure fruit",
			answerRef: useRef(null),
			questionRef: useRef(null),
		}
	];
	

	function closeAllOpenedQuestions(){
		faqsArr.forEach(({questionRef})=>{ 
			if(parseInt(questionRef.current.style.height) > questionHeight ){
				questionRef.current.style.height = `${questionHeight}px`
			}
		});
	}


	return (
		<div onClick={onOutsideClickListener} className="bg-[#1D1B20] min-h-screen max-w-screen pt-8 font-sportingGrotesque text-text overflow-x-hidden scroll-smooth">
		<Header />
		<PageBlur>
			<CommonHeroSection phrase={"FAQS"} />
			<FAQs  
				faqsArr={faqsArr} 
				closeAllOpenedQuestions={closeAllOpenedQuestions} 
				questionHeight={questionHeight}/>
			<Footer />
		</PageBlur>
		</div>
	);
}
