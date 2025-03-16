'use client'

import { Button } from "@/components/ui/button";
import { t_lessonProgress } from "@/db/schema";
import { NearestRound } from "@/usefulFunctions";
// import Lottie from "lottie-react";
import { CircleCheckBig, NotebookText, Squircle, ToyBrick } from "lucide-react";
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
                type: "SELECT" | "ASSIST";
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


const Table = [
    {
      listOfMini: [ 0.3068181818181818, 0.1875, 0.42857142857142855, 1,0.3068181818181818, 0.1875, 0.42857142857142855, 1,0.3068181818181818, 0.1875, 0.42857142857142855, 0,0.3068181818181818, 0.1875, 0.42857142857142855, 1,0.3068181818181818, 0.1875, 0.42857142857142855, 0 ],
      courseTitle: 'Тренажер Математика 6'
    },
    {
      listOfMini: [ 0.30303030303030304, 0, 0, 0 ],
      courseTitle: 'Тренажер Физика Формулы'
    }
  ]


  const Table2 = [
    {
      listOfMini: [ 0.2, 0.5, 0.7, 0.8, 1 ],
      courseTitle: 'Тренажер Математика 6'
    },
    {
      listOfMini: [ 0.30303030303030304, 0, 0, 0 ],
      courseTitle: 'Тренажер Физика Формулы'
    }
  ]





export const TUnitBanner = ({
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

    
    // const this_t_unit = t_units.filter(unit => unit.t_courseId == t_course_id)[0]

    // console.log(this_t_unit)

    // const t_lessonsStat = this_t_unit.t_lessons.map(t_lesson => {
    //     lessonId: t_lesson.id
    //     PD: GetTLessonStat(t_lessonProgress, t_lesson.id).totalPercentDR
    // })

    // console.log('hello')
    // console.log(t_lessonsStat)

    // CourseStat
    const thisCourseStat = CourseStat.filter(el => el.courseTitle == t_course_title)[0]

    // const tt = 10

    return(
        // <div className="w-full rounded-xl  bg-green-500 p-5 text-white flex items-center justify-between bg-[url('/MemesImage/i-like-food.svg')]  bg-repeat">
        <div className="ml-4 mb-10 w-full rounded-xl border-2 border-foreground border-dashed p-5 text-foreground flex items-center justify-between ">

         



        {/* <div className="flex flex-1 items-center justify-between"> */}
        <div className="flex flex-1 items-center justify-between">

            {/* <div className="space-y-2.5 grid grid-cols-12"> */}
            <div className="grid grid-cols-12 gap-8">
                
                <div className="col-span-7">
                
                    <h3 className="text-2xl font-bold">
                        {t_course_title}
                    </h3>

                    <p className="text-lg">
                        {description}
                    </p>

                    <div className="flex flex-1 gap-2">
                        <CircleCheckBig className="h-6 w-6"
                                        // className={cn(
                                        //     "h-10 w-10",
                                        //     2==1
                                        //     ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                                        //     : "fill-primary-foreground text-primary-foreground",
                                        //     1==1 && "fill-none stroke-[4]"
                                        // )}
                                    />
                        {Math.round(percentageDone*100)}%
                    </div>

                    
                </div>





                <div className="col-span-3">

                    <div className="grid grid-cols-5 gap-x-5">
                        {thisCourseStat.listOfMini.map((el, index) => 
                            // <Squircle 
                            <ToyBrick 
                            key={index*659}
                            // className={`h-6 w-6 fill-white stroke-neutral-700 opacity-${Math.round(el*100)}`}
                            // className={`h-6 w-6 fill-white stroke-neutral-700 opacity-${Math.round(20)}`}
                            className= {el > 0.9 
                                ? `h-6 w-6 fill-yellow-300 stroke-neutral-700 opacity-${NearestRound(el)}` 
                                : `h-6 w-6 fill-white stroke-neutral-700 opacity-${NearestRound(el)}`}
                            
                            
                            
                            />

                        )}
                    </div>
                        
                </div>
 




            </div>  

       






            </div>


            {/* <Link href='/lesson'>
                <Button 
                    size='lg' 
                    variant='secondary'
                    className="hidden xl:flex border-2 border-b-4 active:border-b-2"
                    >
                    <NotebookText className="mr-2"/>
                    Продолжить
                    
                </Button>
            </Link> */}

        </div> 
    )
}