import { motion } from "framer-motion";

export default function ContactsHero() {

    const greating_phrase = "Talk to us";
    const classNameForSpace = "w-[80px]"

    return (
        <section className="w-11/12 mx-auto 3xl:w-380 mt-40">
            <h1 className="relative text-[9vw] flex text-center sm:text-left sm:text-8.25xl/[100px] tracking-[0.2px] font-bold h-full uppercase">
            {greating_phrase.split("").map((letter,i)=>
                    <motion.div
                        className={letter === " " ? classNameForSpace :  ""}
                        key={i}
                        initial={{opacity: 0, y:40}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration:0.35, delay:0.03*(i+1)}}
                        >{letter}
                    </motion.div>
                )}
            </h1>
            <motion.p 
                initial={{opacity:0, y:35}}
                animate={{opacity:1, y: 0}}
                transition={{duration:0.5, delay: 0.5, type: "spring", stiffness: 50}}
                className="text-accent text-right mt-5 flex flex-col xl:text-xl 3xl:text-[33px] leading-[50px]">
                It's important to stay in touch
            </motion.p>
        </section>
    )
};
