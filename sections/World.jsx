'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText
        title={
          <>
            {' '}
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-20 right-10 lg:bottom-10 lg:right-20 w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-20 left-20 lg:top-10 lg:left-20  w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="sm:block hidden absolute top-1/2 left-[25%]  w-[120px] h-[90px] lg:w-[180px] lg:h-[140px] p-[6px] rounded-lg bg-[#5d6680] ">
          <img src="bg.png" alt="people" className="w-full h-full" />
          <div className="relative flex flex-col justify-end ">
            <div className="flex flex-row items-center justify-between gap-4  absolute bottom-10 px-4">
              <div className="w-[20px] h-[20px] flex flex-row ">
                <img
                  src="people-01.png"
                  alt="people"
                  className="w-full h-full"
                />
                <img
                  src="people-02.png"
                  alt="people"
                  className="w-full h-full -ml-[12px]"
                />
                <img
                  src="people-03.png"
                  alt="people"
                  className="w-full h-full -ml-[10px]"
                />
              </div>
              <p className="text-white text-[8px] lg;text-[10px] ml-5">
                + 264 has joined
              </p>
            </div>
            <h4 className="text-white font-semibold text-[12px] lg:text-[16px] absolute bottom-2 px-4">
              The Upside Down
            </h4>
          </div>
        </div>
        <div className="sm:block hidden absolute top-20 right-[25%]  w-[120px] h-[90px] lg:w-[180px] lg:h-[140px] p-[6px] rounded-lg bg-[#5d6680] ">
          <img src="bg.png" alt="people" className="w-full h-full" />
          <div className="relative flex flex-col justify-end ">
            <div className="flex flex-row items-center justify-between gap-4  absolute bottom-10 px-4">
              <div className="w-[20px] h-[20px] flex flex-row ">
                <img
                  src="people-01.png"
                  alt="people"
                  className="w-full h-full"
                />
                <img
                  src="people-02.png"
                  alt="people"
                  className="w-full h-full -ml-[12px]"
                />
                <img
                  src="people-03.png"
                  alt="people"
                  className="w-full h-full -ml-[10px]"
                />
              </div>
              <p className="text-white text-[8px] lg;text-[10px] ml-5">
                + 264 has joined
              </p>
            </div>
            <h4 className="text-white font-semibold text-[12px] lg:text-[16px] absolute bottom-2 px-4">
              Hawkins Labs
            </h4>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
