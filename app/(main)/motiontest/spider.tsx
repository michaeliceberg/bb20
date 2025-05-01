
// components/SpiderAnimation.tsx
"use client"; // Важно для использования Framer Motion в Next.js

import { motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react";
import { useEffect } from "react";
import zebra_sleeping from '@/public/Lottie/trainer/spider/zebra_sleeping.json'
import lottieSpider from '@/public/Lottie/trainer/spider/lottieSpider.json'
import Image from "next/image";


export default function SpiderAnimation() {
  const controls = useAnimation();

//   useEffect(() => {
//     // Запускаем анимацию при монтировании компонента
//     controls.start({
//       y: [0, 200], // Начальная и конечная позиция по Y
//       transition: {
//         duration: 20, // 20 секунд
//         ease: "linear", // Линейное движение для равномерной скорости
//       },
//     });
//   }, [controls]);


  useEffect(() => {
    controls.start({
      y: [0, 200],
      transition: {
        duration: 20,
        ease: "linear",
      },
    }).then(() => {
      // Анимация после того как паук достигнет котенка
      console.log("Паук добрался до котенка!");
    });
  }, [controls]);


  return (
    <div className="relative h-[300px] w-full">
      {/* Спящий котенок (замените на ваш SVG) */}
      {/* <svg
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >





  
        <circle cx="50" cy="50" r="40" fill="gray" />
        <circle cx="35" cy="40" r="5" fill="white" />
        <circle cx="65" cy="40" r="5" fill="white" />
        <path d="M40 65 Q50 75 60 65" stroke="white" strokeWidth="2" fill="none" />
        
        <text x="50" y="20" textAnchor="middle" fill="white">Zzz</text>
      </svg> */}


      <Lottie 
            className="size-32 absolute bottom-0 left-1/2 transform -translate-x-1/2"
            animationData={zebra_sleeping}
            // loop={false}
        /> 


      {/* Анимированный паук */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        initial={{ y: 0 }}
        animate={controls}
        style={{ width: '50px', height: '50px', scaleY: -1,}}
        
      >

        <Lottie 
            className="size-32 absolute bottom-0 left-1/2 transform -translate-x-1/2"
            animationData={lottieSpider}
            // loop={false}
        /> 


        {/* <Image
          src="/Lottie/trainer/spider/spider.svg" // Укажите правильный путь к вашему изображению паука
          alt="Паук"
          width={50}
          height={50}
          priority
        /> */}
      </motion.div>






    <svg className="absolute top-0 left-1/2 transform -translate-x-1/2" width="50" height="250">
        <line x1="25" y1="0" x2="25" y2="250" stroke="silver" strokeWidth="1" strokeDasharray="5,5" />
    </svg>


    </div>
  );
}