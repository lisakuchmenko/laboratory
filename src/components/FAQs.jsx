import { motion } from "framer-motion";

export default function FAQs({
  faqsArr,
  closeAllOpenedQuestions,
  questionHeight,
}) {
  function onClickHandler(e, ref) {
    closeAllOpenedQuestions();
    e.target.offsetHeight === questionHeight
      ? (e.target.style.height = `${questionHeight + ref.current.offsetHeight}px`)
      : (e.target.style.height = `${questionHeight}px`);
  }

  return (
    <section className="w-11/12 mx-auto 3xl:w-380 mt-20">
      <ul>
        {faqsArr.map(({ answerRef, questionRef, question, answer }, i) => (
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "easeOut",
                duration: 0.5,
                delay: 0.15*(i+1),
              },
            }}
            key={question}
          >
            <div
			  ref={questionRef}
			  id={`question_${i + 1}`}
			  onClick={(e) => onClickHandler(e, answerRef)}
			  style={{ height: questionHeight }}
              className={`border-b ${!i ? "border-t" : ""} border-dotted text-xl lg:text-2xl 3xl:text-3xl uppercase text-center pt-10 transition-all duration-500 overflow-hidden`}>
              {question}
              <p
                id="answer"
                ref={answerRef}
                className=" mt-12 text-base 3xl:mt-8 3xl:text-xl text-grey w-10/12 text-center mx-auto pb-10"
              >
                {answer}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
