import { motion } from "framer-motion";

export function TasteSection() {
  return (
    <div className="relative">
      <div
        style={{ background: "url('/images/space/space.gif')" }}
        className="h-screen w-full overflow-hidden relative mt-[330px] opacity-50">
      </div>
      <div className="w-75 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:w-fit text-6xl font-normal leading-[90px] text-white text-left sm:text-center z-[100]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              type: "easeOut",
              duration: 1,
              delay: 0.3,
            },
          }}
        >
          Tastes just like real fruit...
          <br />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                type: "easeOut",
                duration: 1,
                delay: 0.3,
              },
            }}
            className="text-grey"
          >
            because it is real fruit.
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
