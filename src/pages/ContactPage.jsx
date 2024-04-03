import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageBlur } from "../components/PageBlur";
import { motion } from "framer-motion";

export default function ContactPage() {
  const greating_phrase = "Talk to us";

  return (
    <div className="bg-[#1D1B20] min-h-screen max-w-screen pt-8 font-sportingGrotesque text-text overflow-x-hidden scroll-smooth">
      <Header />
      <PageBlur>
        <section className="w-11/12 mx-auto 3xl:w-380 mt-40">
          <h1 className="relative text-[9vw] flex text-center sm:text-left sm:text-8.25xl/[100px] tracking-[0.2px] font-bold h-full uppercase">
            {greating_phrase.split("").map((letter,i)=>{
                if(letter === " "){
                    return  <motion.div
                                className="w-[80px]"
                                key={i}
                                initial={{opacity: 0, y:40}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration:0.35, delay:0.03*(i+1)}}
                                >{letter}
                            </motion.div>
                }else{
                    return  <motion.div
                                key={i}
                                initial={{opacity: 0, y:40}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration:0.35, delay:0.03*(i+1)}}
                                >{letter}
                            </motion.div>
                }
                })}
            </h1>
        </section>
        <Footer />
      </PageBlur>
    </div>
  );
}
