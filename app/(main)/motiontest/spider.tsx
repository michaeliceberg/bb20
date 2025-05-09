
// components/SpiderAnimation.tsx
"use client"; // Важно для использования Framer Motion в Next.js

import { motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react";
import { useEffect } from "react";
import zebra_sleeping from '@/public/Lottie/trainer/spider/zebra_sleeping.json'
import lottieSpider from '@/public/Lottie/trainer/spider/lottieSpider.json'


export default function SpiderAnimation() {
  const controls = useAnimation();


  useEffect(() => {
    controls.start({
        x: [0, 200],
        // y: [0, 200],
        transition: {
        duration: 20,
        ease: 'easeInOut'
      },
    }).then(() => {

      // Анимация после того как паук достигнет котенка
      console.log("Паук добрался до котенка!");

    });
  }, [controls]);


  return (
    <div className="relative h-[300px] w-full">
   
      {/* Спящий котенок (замените на ваш SVG) */}   
      <Lottie 
            className="size-32 absolute bottom-0 left-1/2 transform -translate-x-1/2"
            animationData={zebra_sleeping}
            // loop={false}
        /> 


      {/* Анимированный паук */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        // initial={{ y: 0 }}
        initial={{ x: 0 }}
        animate={controls}
        style={{ width: '50px', height: '50px', scaleY: -1,}}        
      >

        <Lottie 
            className="size-32 absolute bottom-0 left-1/2 transform -translate-x-1/2"
            animationData={lottieSpider}
        /> 

      </motion.div>


    <svg className="ml-7 absolute top-0 left-1/2 transform -translate-x-1/2" width="50" height="250">
        <line x1="25" y1="0" x2="25" y2="250" stroke="silver" strokeWidth="1" strokeDasharray="5,5" />
    </svg>


    </div>
  );
}