import { Link, useLocation } from "react-router-dom";

export function Footer() {
  const sections = ["mango", "banana", "pineapple"];
  const { pathname } = useLocation();
  const isMainPage = pathname === "/";

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
    <div className="h-screen sm:h-auto sm:w-262.5 mx-auto pb-0  pt-40 sm:pt-0">
     <div className="2xl:w-380  mx-auto">
     	 <h2 className="text-[5rem] leading-[120px] text-center font-normal">
	        Take your snacking to <span className="text-grey">new heights.</span>
	      </h2>
	      <div className="flex flex-col sm:flex-row justify-between mt-56 sm:mt-20 2xl:mx-auto xl:mt-50">
	        <div className="flex flex-col mr-0 sm:mr-44 xl:w-1/2 2xl:w-[745px] 2xl:gap-12.5 2xl:mr-0">
	          {sections.map((section) => (
	            <Link
	              to={`/product/${section}`}
	              key={section}
	              className="flex justify-between w-full sm:w-110 border-b border-dotted border-lightGrey sm:mt-8 2xl:mt-0 first:mt-0 2xl:w-full"
	            >
	              <p className="text-xl 2xl:text-[33px] 2xl:leading-[55px] sm:text-sm capitalize">
	                {section}
	              </p>
	              <span className="w-9 h-9">{ArrowImage}</span>
	            </Link>
	          ))}
	        </div>
	
	        <div className="xl:w-1/2 flex flex-col justify-between 2xl:w-[616px]">
	          <div className="w-full sm:w-fit 2xl:w-full flex items-center justify-between border-b border-grey border-dotted">
	            <input
	              type="email"
	              name="email"
	              id=""
	              placeholder="Email address"
	              className="placeholder:2xl:text-[33px] 2xl:grow placeholder:2xl:leading-[55px] 2xl:h-[59px] 2xl:text-[33px] 2xl:leading-[55px] bg-primary w-full sm:w-96 placeholder:text-text mt-8 sm:mt-0 placeholder:text-xl sm:placeholder:text-base"
	            />
	            <button className="w-9 h-9">{ArrowImage}</button>
	          </div>
	          <ul className="tracking-[0.2px] leading-5 text-s w-96 mt-12 sm:mt-0 font-bold space-y-1.5">
	            <li>
	              <a href="#">ABOUT</a>
	            </li>
	            <li>
	              <a href="#">FAQS</a>
	            </li>
	            <li>
	              <a href="#">CONTACT</a>
	            </li>
	          </ul>
	        </div>
	      </div>
     </div>
	  <div className="mt-[170.58px] h-[184px] overflow-y-hidden">
		<p className="w-fit h-[184px] text-[calc(100vw/9)] font-bold leading-[373px] uppercase tracking-[0.2px]">tutti butes</p>
	  </div>
    </div>
  );
}
