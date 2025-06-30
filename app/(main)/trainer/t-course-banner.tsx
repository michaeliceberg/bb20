'use client'

import Example from "@/components/hover-me";
import HTMLContent from "@/components/motion-number";
import { FlipLink } from "@/components/reveal-links";
import { TypeTextEffect } from "@/components/type-text-effect";
import { t_lessonProgress, t_units } from "@/db/schema";




type Props = {
    t_course_title: string;
    description: string;
    imgSrc: string;
    id: number;
    percentageDone: number;

    t_course_id: number,
    t_units: typeof t_units.$inferSelect[]
    
    t_lessonProgress: typeof t_lessonProgress.$inferSelect[]
    CourseStat: {
        listOfMini: number[],
        courseTitle: string,
    }[],


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
        <div className="ml-4 mt-4 mb-4 w-full">
         
            


            <div className="flex justify-between">
                    
                <p className="text-2xl font-bold">
                    <FlipLink href="#">
                        {t_course_title.split(' ')[1]}
                    </FlipLink>
                </p>
                

                <p className="text-sm pt-2 flex gap-x-1">
                    пройдено 
                    <HTMLContent percent={Math.round(averageDonePercent*100)} />
                    %
                </p>                                  

                    
            </div> 


            <div className="flex justify-between mt-10">

                <div className="w-[140px] h-[35px]">
                        
                        <TypeTextEffect />
                    
                </div>
                


                <div>
                    <Example data={thisCourseStat.listOfMini}/>
                </div>

            </div>
    
               

            

        </div> 
    )
}