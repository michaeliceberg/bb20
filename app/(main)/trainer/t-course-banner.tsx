'use client'

import Example from "@/components/hover-me";
import { FlipLink } from "@/components/reveal-links";
import { TypeTextEffect } from "@/components/type-text-effect";
import { Button } from "@/components/ui/button";
import { t_lessonProgress } from "@/db/schema";
import { NearestRound } from "@/usefulFunctions";
// import Lottie from "lottie-react";
import { CircleCheckBig, Divide, NotebookText, Squircle, ToyBrick } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// // import LottieAnimation1 from '@/public/LottieUnit1.json'
// import LottieAnimation1 from '@/public/LottieBreadAverage.json'

// // /Users/mac/Downloads/LottieBreadAverage.json

// // import LottieAnimation2 from '@/public/LottieUnit2.json'
// import LottieAnimation2 from '@/public/LottieSharkMass.json'

// // import LottieAnimation3 from '@/public/LottieUnit3.json'
// import LottieAnimation3 from '@/public/LottieDeathMeanRho.json'

// // import LottieAnimation4 from '@/public/LottieUnit4.json'
// import LottieAnimation4 from '@/public/LottieFoogooPressure.json'

// // import LottieAnimation5 from '@/public/LottieUnit5.json'
// import LottieAnimation5 from '@/public/LottieArchimed.json'

// // import LottieAnimation6 from '@/public/LottieUnit6.json'
// import LottieAnimation6 from '@/public/LottieWatermelonDrink.json'

// // import LottieAnimation7 from '@/public/LottieUnit7.json'
// import LottieAnimation7 from '@/public/LottieGameU.json'

// // import LottieAnimation8 from '@/public/LottieUnit8.json'
// import LottieAnimation8 from '@/public/LottieJolesWatts.json'


// import LottieAnimation9 from '@/public/LottieUnit9.json'

// import { cn } from "@/lib/utils";


// <div className='size-40'> 
// {/* <Lottie animationData={LottieAnimation} />            */}
// <Lottie 
//     animationData={LottieData[id%1000-1]} 
//     loop={false}
// />           
// </div>


type Props = {
    t_course_title: string;
    description: string;
    imgSrc: string;
    id: number;
    percentageDone: number;

    t_course_id: number,
    t_units: {
        id: number;
        title: string;
        description: string;
        imageSrc: string;
        t_courseId: number;
        order: number;
        t_lessons: {
            id: number;
            title: string;
            order: number;
            t_unitId: number;
            t_challenges: {
                id: number;
                points: number;
                order: number;
                type:  "SELECT" | "ASSIST" | "CONNECT" | "SLIDER" | "CONSTRUCT",
                question: string;
                author: string;
                t_lessonId: number;
            }[];}[]
    }[],
    t_lessonProgress: typeof t_lessonProgress.$inferSelect[]
    CourseStat: {
        listOfMini: number[],
        courseTitle: string,
    }[]
}


// const Table = [
//     {
//       listOfMini: [ 0.3068181818181818, 0.1875, 0.42857142857142855, 1,0.3068181818181818, 0.1875, 0.42857142857142855, 1,0.3068181818181818, 0.1875, 0.42857142857142855, 0,0.3068181818181818, 0.1875, 0.42857142857142855, 1,0.3068181818181818, 0.1875, 0.42857142857142855, 0 ],
//       courseTitle: 'Тренажер Математика 6'
//     },
//     {
//       listOfMini: [ 0.30303030303030304, 0, 0, 0 ],
//       courseTitle: 'Тренажер Физика Формулы'
//     }
//   ]


//   const Table2 = [
//     {
//       listOfMini: [ 0.2, 0.5, 0.7, 0.8, 1 ],
//       courseTitle: 'Тренажер Математика 6'
//     },
//     {
//       listOfMini: [ 0.30303030303030304, 0, 0, 0 ],
//       courseTitle: 'Тренажер Физика Формулы'
//     }
//   ]





export const TCourseBanner = ({
    t_course_title,
    description,
    imgSrc,
    id,
    percentageDone,

    t_course_id,
    t_units,
    t_lessonProgress,
    CourseStat,
}: Props)=>{

    
    const thisCourseStat = CourseStat.filter(el => el.courseTitle == t_course_title)[0]





    const averageDonePercent = thisCourseStat.listOfMini.reduce((a, b) => a + b) / thisCourseStat.listOfMini.length;
    // console.log('thisCourseStat: ', thisCourseStat)

    return(

        // <div className="ml-4 w-full rounded-xl border-2 border-foreground border-dashed p-5 text-foreground flex items-center justify-between ">
        <div className="ml-4 mb-4 w-full">
         
            


            <div className="flex flex-1 justify-between">
                    
                    <div>
                    
                        <p className="text-2xl font-bold">
                            <FlipLink href="#">
                                {t_course_title}
                            </FlipLink>
                        </p>

                        {/* <p className="text-lg">
                            {description}
                        </p> */}

                        

                        <div className="flex flex-1 gap-2">                                                                               
                            <p className="text-sm">
                                пройдено {Math.round(averageDonePercent*100)}%
                            </p>                                  
                        </div>

                        <div className="w-[140px] h-[35px]">
                            <TypeTextEffect />
                        </div>
                    </div>

                    {/* <div className="col-span-4"> */}
                    <div>
                        <Example data={thisCourseStat.listOfMini}/>
                    </div>

                    {/* <div className="col-span-3">

                        <div className="grid grid-cols-5 gap-x-5">
                            {thisCourseStat.listOfMini.map((el, index) => 
                                <ToyBrick 
                                    key={index*1659}
                                    className= {
                                        el >= 0.9 
                                        ? `h-6 w-6 fill-green-400/90 stroke-neutral-700`
                                        
                                        : el > 0.5
                                        ? `h-6 w-6 fill-amber-500/90 stroke-neutral-700`
                                        
                                        : el > 0 
                                        ? `h-6 w-6 fill-pink-500/90 stroke-neutral-700`

                                        : `h-6 w-6 fill-white stroke-neutral-400 opacity-${80}`
                                        }
                                />
                            )}
                        </div>
                            
                    </div> */}
    
                </div>  

            

        </div> 
    )
}