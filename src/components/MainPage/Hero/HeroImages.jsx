const HeroImages = () => {
  return (
    <div className="flex gap-6 mt-40">
      <img
        width="487"
        h="486"
        src="/images/hero/hero_first_image.png"
        alt="product_image"
        className="w-[25vw] h-[25vw] max-w-[486px] 3xl:w-[486px] 3xl:h-auto"
      />
      <img
        width="487"
        h="486"
        src="/images/hero/hero_second_image.png"
        alt="product_image"
        className="w-[25vw] h-[25vw] max-w-[486px] 3xl:w-[486px] 3xl:h-auto"
      />
      <img
        width="487"
        h="486"
        src="/images/hero/hero_third_image.png"
        alt="product_image"
        className="w-[25vw] h-[25vw] max-w-[486px] 3xl:w-[486px] 3xl:h-auto"
      />
    </div>
  );
};

export default HeroImages;
