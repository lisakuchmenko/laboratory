import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const HeroImages = () => {
  const firstImageEl = useRef(null);
  const isFirstImageInView = useInView(firstImageEl);

  const secondImageEl = useRef(null);
  const isSecondImageInView = useInView(secondImageEl);

  const thirdImageEl = useRef(null);
  const isThirdImageInView = useInView(thirdImageEl);

  let productImagesArr = [
    {
      src: "/images/hero/hero_first_image.png",
      ref: firstImageEl,
      isInViev: isFirstImageInView,
    },
    {
      src: "/images/hero/hero_second_image.png",
      ref: secondImageEl,
      isInViev: isSecondImageInView,
    },
    {
      src: "/images/hero/hero_third_image.png",
      ref: thirdImageEl,
      isInViev: isThirdImageInView,
    },
  ];

  console.log(0 / 2);
  return (
    <div className="flex gap-6 mt-40">
      {productImagesArr.map((imageObj, i) => (
        <motion.img
          key={imageObj.src}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: imageObj.isInViev ? 1 : 0,
            scale: imageObj.isInViev ? 1 : 0,
          }}
          transition={{
            duration: 1,
            delay: i / 5,
            type: "spring",
            stiffness: 50,
          }}
          width="487"
          h="486"
          ref={imageObj.ref}
          src={imageObj.src}
          alt="product_image"
          className="w-[25vw] h-[25vw] max-w-[486px] 3xl:w-[486px] 3xl:h-auto"
        />
      ))}
    </div>
  );
};

export default HeroImages;
