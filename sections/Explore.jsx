"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText, ExploreCard, TitleText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";
const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        className={`${styles.innerWidth} mx-auto flex flex-col`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          textStyles="text-center"
          title={
            <>
              Choose the world you want
              <br className="md:block hidden" />
              to explore
            </>
          }
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              index={index}
              {...world}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
