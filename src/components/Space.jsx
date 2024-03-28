import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const Space = () => {
  let firstTextLine = useRef(null);
  let secondTextLine = useRef(null);
  let thirdTextLine = useRef(null);

  let isFirstLineInViev = useInView(firstTextLine);
  let isSecondLineInViev = useInView(secondTextLine);
  let isThirdLineInViev = useInView(thirdTextLine);

  return (
    <section
      className="w-screen h-[1000px] relative overflow-hidden grid place-items-center"
    >
      <div style={{backgroundImage: "url('/images/space/space.gif')"}} className="opacity-50 w-full h-full"></div>
      <div className="w-[1028px] mx-auto flex flex-col items-center gap-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
        <div className="font-normal text-[33px] leading-[50px] text-center text-accent">
          <motion.p 
           initial={{opacity:0, y:50}}
           animate={{
            opacity: isFirstLineInViev ? 1 : 0,
            y: isFirstLineInViev ? 0 : 50
           }} 
           transition={{duration:0.5,delay:0.5}}
          ref={firstTextLine}>
            <span className="text-white">Explore the cosmos with our snacks—</span>
            so delightfully
          </motion.p>
          <motion.p 
             initial={{opacity:0, y:50}}
             animate={{
              opacity: isSecondLineInViev ? 1 : 0,
              y: isSecondLineInViev ? 0 : 50
             }} 
             transition={{duration:0.5,delay:0.5}}
            ref={secondTextLine}>
            dry that even astronauts can savor them in space.
          </motion.p>
          <motion.p 
             initial={{opacity:0, y:50,}}
             animate={{
              opacity: isThirdLineInViev ? 1 : 0,
              y: isThirdLineInViev ? 0 : 50
             }} 
             transition={{duration:0.5,delay:0.5}}
            ref={thirdTextLine} 
            className="text-white">
            Bite into the galactic crunch!
          </motion.p>
        </div>
        <img
          src="images/space/rocket_icon.png"
          alt="rocket_icon"
          width="88"
          height="88"
          className="w-[88px] h-[88px] animate-bounce"
        />
      </div>
    </section>
  );
};

export default Space;
