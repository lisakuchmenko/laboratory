import {motion, useInView} from "framer-motion";
import { useRef } from "react";

const AllSnaks = () => {
  
  let snaksElement = useRef(null);
  let isSnakBlockInViev = useInView(snaksElement);
  
  const snaks = [
    {
      name: "mango",
      img: "/images/snaks/mango_bg.png",
    },
    {
      name: "banana",
      img: "/images/snaks/banana_bg.png",
    },
    {
      name: "pineapple",
      img: "/images/snaks/pineapple_bg.png",
    },
  ];


  return (
    <section id="snaks" className="w-11/12 mx-auto 3xl:w-380 mb-75 3xl:mb-[320px] pb-40">
      <motion.ul 
          initial={{opacity:0}}
          animate={{opacity: isSnakBlockInViev ? 1: 0}}
          transition={{duration:2}}
          ref={snaksElement}
          className="flex justify-between 3xl:gap-[30px]">
        {snaks.map(({name,img}, i) => (
          <li
            key={name}
            className="group transition duration-700 relative w-[30vw] h-[30vw] 3xl:w-[487px] 3xl:h-[487px] max-w-[487px] max-h-[487px] flex items-center justify-center rounded-[50%] border border-text hover:border-[transparent] "
          >
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="bg-contain absolute top-0 left-o rounded-[50%] w-full h-full transition duration-700 opacity-0 group-hover:opacity-100"
            ></div>
            <a
              href="/"
              className="relative z-100 flex h-[38px] gap-0.5 items-end uppercase text-white font-bold text-xl leading-[33px]"
            >
              {name}
              <span className="font-normal text-s leading-5 tracking-[0.1px] self-start">
                0{i + 1}
              </span>
            </a>
          </li>
        ))}
      </motion.ul>
    </section>
  );
};

export default AllSnaks;
