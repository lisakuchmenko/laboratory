import { useRef } from "react";
import CommonHeroSection from "../components/CommonHeroSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageBlur } from "../components/PageBlur";

export default function FAQPage(params) {

	const faqsArr = [
		{
			question: "is there any additional shugar?",
			answer: "nope, just my own fructose from fruit.",
			ref: useRef(null)
		},
		{
			question: "how is tutti bites made?",
			answer: "nope, just my own fructose from fruit.",
			ref: useRef(null)
		}
	]

	function onClickHandler (e, ref) {
		// console.log(parseInt(ref.current.style.height) );
		// console.log(!ref.current.style.height );
		// parseInt(ref.current.style.height) !== 120  
		// ? e.target.style.height = '200px' 
		// : e.target.style.height = '120px'
	}


  return (
    <div className="bg-[#1D1B20] min-h-screen max-w-screen pt-8 font-sportingGrotesque text-text overflow-x-hidden scroll-smooth">
      <Header />
      <PageBlur>
        <CommonHeroSection phrase={"FAQS"} />
        <section className="w-11/12 mx-auto 3xl:w-380 mt-10">
          <ul>
			{faqsArr.map(({ref,question,answer})=>
				<li 
					ref={ref}
					key={question}
					onClick={(e)=>onClickHandler(e,ref)}
					className="border-t border-dotted  h-30 text-3xl uppercase text-center pt-10 transition-all duration-500 overflow-hidden">{/* -t border-dotted */}
					{question}
					<p className="text-xl text-grey w-1/3 text-center mt-10 mx-auto">{answer}</p>
				</li>
				)}
		  </ul>
        </section>
        <Footer />
      </PageBlur>
    </div>
  );
}
