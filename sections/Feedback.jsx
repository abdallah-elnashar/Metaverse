"use client";

import styles from "../styles";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.5 }}
      className={`${styles.innerWidth} lg:flex-row gap-6 mx-auto flex flex-col`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.5, 1)}
        className="flex-[.5] lg:max-w-[370px] flex flex-col justify-end relative
       gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a]"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className=" text-white font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px]">
            Samantha
          </h4>
          <p
            className="mt-[8px] font-normal text-[12px] 
          sm:text-[18px] text-white leading-[16px] sm:leading-[22px]"
          >
            Founder | Metaversus
          </p>
        </div>
        <div>
          <p
            className="mt-[24px] font-normal text-[12px] 
          sm:text-[18px] text-white leading-[39px] sm:leading-[45px]"
          >
            “With the development of today's technology, metaverse is very
            useful for today's work, or can be called web 3.0. by using
            metaverse you can use it as anything”
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/planet-09.png"
          alt="planet-09"
          className="w-full h-auto object-cover rounded-[40px] min-h-[210px]
           lg:h-[610px] "
        />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute
        -left-[10%] top-[3%] "
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
