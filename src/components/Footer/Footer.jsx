import { Link } from "react-router-dom";

export function Footer() {
  const sections = ["mango", "banana", "pineapple"];

  const pages = ["about","contact","faq"]

  const ArrowImage = (
    <svg
      width="36"
      height="37"
      viewBox="0 0 36 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.0058 14.6213L11.0959 27.5312L8.97461 25.4099L21.8845 12.5H10.5058V9.5H27.0058V26H24.0058V14.6213Z"
        fill="#F8F8F8"
      />
    </svg>
  );

  return (
    <footer className="mt-80 3xl:mt-100">
     <div className="w-11/12 3xl:w-380 mx-auto">
     	 <h2 className="text-[5rem] leading-[120px] text-center font-normal">
	        Take your snacking to <span className="text-grey">new heights.</span>
	      </h2>
	      <div className="flex flex-col xl:flex-row justify-between gap-25 sm:mt-20 3xl:mx-auto 3xl:mt-50">
	        <div className="flex flex-col mx-auto w-1/2 xl:w-[745px] 3xl:gap-12.5 3xl:mr-0">
	          {sections.map((section) => (
	            <Link
	              to={`/product/${section}`}
	              key={section}
	              className="flex justify-between w-full border-b border-dotted border-lightGrey sm:mt-8 3xl:mt-0 first:mt-0 3xl:w-full"
	            >
	              <p className="text-xl 3xl:text-[33px] 3xl:leading-[55px] sm:text-sm capitalize">
	                {section}
	              </p>
	              <span className="w-9 h-9">{ArrowImage}</span>
	            </Link>
	          ))}
	        </div>
	
	        <div className="w-1/2 flex mx-auto gap-12.5 flex-col justify-between 3xl:w-[616px]">
	          <div className="w-full flex items-center justify-between border-b border-grey border-dotted">
	            <input
	              type="email"
	              name="email"
	              id=""
	              placeholder="Email address"
	              className="placeholder:3xl:text-[33px] 3xl:grow placeholder:3xl:leading-[55px] 3xl:h-[59px] 3xl:text-[33px] 3xl:leading-[55px] bg-[#1D1B20] w-full sm:w-96 placeholder:text-text mt-8 sm:mt-0 placeholder:text-xl sm:placeholder:text-base"
	            />
	            <button className="w-9 h-9">{ArrowImage}</button>
	          </div>
	          <ul className="tracking-[0.2px] uppercase leading-5 text-s w-96 mt-12 sm:mt-0 font-bold space-y-1.5">
	            {
					pages.map(page=>
						<li>
							<Link to={`/${page}`}>{page}</Link>
						</li>
				)}
	          </ul>
	        </div>
	      </div>
     </div>
	  <div className="mt-[170.58px] h-[184px] overflow-y-hidden">
		<p className="w-fit h-[184px] text-[calc(100vw/9)] mx-auto font-bold leading-[373px] uppercase tracking-[0.2px]">tutti butes</p>
	  </div>
    </footer>
  );
}
