const Space = () => {
  return (
    <section 
        style={{backgroundImage: "url('/images/space/stars.png')"}}
        className="w-screen h-[1000px] relative overflow-hidden grid place-items-center">
      <div className="w-[1028px] mx-auto flex flex-col items-center gap-[200px]">
        <h3 className="font-normal text-[33px] leading-[50px] text-center text-accent">
            <span className="text-white"> Explore the cosmos with our snacks—</span>
            so delightfully dry that even astronauts can savor them in space.
            <br />
            <span className="text-white">Bite into the galactic crunch!</span>
        </h3>
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
