import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const HeroDescription = () => {

  let firstTextLine = useRef(null);
  let secondTextLine = useRef(null);
  let thirdTextLine = useRef(null);

  let isFirstLineInView = useInView(firstTextLine);
  let isSecondLineInView = useInView(secondTextLine);
  let isThirdLineInView = useInView(thirdTextLine);

  return (
    <div className="mt-75 3xl:mt-[360px] mb-[40] 3xl:mb-[200px]">
      <div className="font-normal xl:text-3xl 3xl:text-[44px] leading-[73px] text-center text-accent">
        <motion.p 
          ref={firstTextLine}
          animate={{
            opacity: isFirstLineInView ? 1 : 0,
            y: isFirstLineInView ? 0 : 50,
            transition: {
              type: 'spring',
              stiffness: 50,
              delay: 0.3,
            },
          }}
        >
          <span className="text-white"> Reconnecting with the essence of fruit snacks</span>, our 
        </motion.p>
        <motion.p 
          ref={secondTextLine}
          animate={{
            opacity: isSecondLineInView ? 1 : 0,
            y: isSecondLineInView ? 0 : 50,
            transition: {
              type: 'spring',
              stiffness: 50,
              delay: 0.35,
            },
          }}
        >
          offerings showcase the vibrant burst of flavor found in 
        </motion.p>
        <motion.p
          ref={thirdTextLine}
          animate={{
            opacity: isThirdLineInView ? 1 : 0,
            y: isThirdLineInView ? 0 : 50,
            transition: {
              type: 'spring',
              stiffness: 50,
              delay: 0.40,
            },
          }}
        >
          perfectly ripened fruits.
        </motion.p>
      </div>
    </div>
  );
};

export default HeroDescription;
