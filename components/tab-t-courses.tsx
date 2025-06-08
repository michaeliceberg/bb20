'use client'

import { TCourseBanner } from "@/app/(main)/trainer/t-course-banner";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { t_challengeOptions, t_lessonProgress, t_units } from "@/db/schema";
import { GetTLessonStat } from "@/usefulFunctions";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { ReactNode, useState } from "react";
import { Button } from "./ui/button";
import { motion } from 'framer-motion'
import { TrainerLessonItemRound } from "./trainer-list-round";
import { Block } from "./block";
import { FlipLink } from "./reveal-links";
import { AnimRightTriangleSin } from "@/app/(main)/motiontest/AnimRightTriangleSin";


type Props = {    
        t_courses: {
            id: number;
            title: string;
            imageSrc: string;
        }[],
        t_units:  // typeof t_units.$inferSelect[]
        



         // {
    //     id: number;
    //     title: string;
    //     description: string;
    //     imageSrc: string;
    //     t_courseId: number;
    //     order: number;
    //     t_lessons: {
    //         id: number;
    //         title: string;
    //         order: number;
    //         t_unitId: number;
    //         t_challenges: {
    //             id: number;
    //             points: number;
    //             order: number;
    //             type:  "SELECT" | "ASSIST" | "CONNECT" | "SLIDER" | "CONSTRUCT" | "WORKBOOK" | "R ASSIST" | "R CONNECT" | "R SLIDER",
    //             question: string;
    //             author: string;
    //             t_lessonId: number;
    //         }[];}[]
    // }[],

    
        {
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
                    imageSrc: string;
                    numRans: string;
                    difficulty: string;
                    id: number;
                    points: number;
                    order: number;
                    type:  "SELECT" | "ASSIST" | "CONNECT" | "SLIDER" | "CONSTRUCT" | "WORKBOOK" | "R ASSIST" | "R CONNECT" | "R SLIDER",
                    question: string;
                    author: string;
                    t_lessonId: number;
                    t_challengeOptions: typeof t_challengeOptions.$inferSelect[],
                }[];}[]
        }[],
        
        t_lessonProgress: typeof t_lessonProgress.$inferSelect[],

        TRatingUsers: {
            t_lesson_id: number;
            usersSortedStat: {
                DRP: number,
                DR_DRP: number;
                user_id: string | undefined;
                user_name: string | undefined;
            }[];
        }[],

        user_id: string,
    }

  

    export const    TabTCourses = ({
        t_courses,
        t_units,
        t_lessonProgress,
        TRatingUsers,
        user_id,
    }: Props) => {


    const [showFormulas, setShowFormulas] = useState(false)

    const onClickHandler = () => {
        setShowFormulas(!showFormulas)
    }

    const AllTStat = t_courses.map(course => {

        const this_courseUnits = t_units.filter(unit => unit.t_courseId == course.id)

        const StatThisUnit = this_courseUnits.map(unit => 
            unit.t_lessons.map(t_lesson => {                
                const lessonStat = {
                    lessonId: t_lesson.id,
                    PD: GetTLessonStat(t_lessonProgress, t_lesson.id).totalPercentDR
                    }
                return {lessonStat: lessonStat}
             })
           
        )
        return {
            StatThisCourse: StatThisUnit,
            courseTitle: course.title
        }


    })



    // console.log(AllTStat)



    let CourseStat = AllTStat.map(t_course => {
        let listOfMini:number[] = []
        t_course.StatThisCourse.map(unit => {
            unit.map(lesson => {
                listOfMini.push(lesson.lessonStat.PD)
            })
            
        })
        return {
            listOfMini: listOfMini,
            courseTitle: t_course.courseTitle
        }

    })

    // для Заголовка Unit'a
    // const t_unit.t_lessons[t_unit.t_lessons.length - 1].t_challenges}



return(

    <div className="flex items-center flex-col relative ">
        
        {/* <ChipTabs /> */}
        {/* <SmoothScrollLenis /> */}
        {/* <SmoothScrollHero /> */}
        {/* <RevealLinks /> */}
        {/* <AuroraHero /> */}

        {/* <BouncyCardsFeatures /> */}
        {/* <SlideTabsExample /> */}

        <Tabs defaultValue=
            {t_courses[0].title}
            className="pt-5      flex items-center flex-col relative ">
    

            {/*  TODO:    TAB TOP */}
            <TabsList>
            {
                t_courses.map((t_course, index) => (
                    <TabsTrigger key={index*21983} value={t_course.title}>
                         {t_course.title.split(' ')[0]}
                    </TabsTrigger>
                )) 
            }
            </TabsList>
        



            {/* TODO:    COURSE banner  */}
            {t_courses.map((t_course, index) => (
                
                <TabsContent key={index*19339} value={t_course.title} className="pt-10">
                    
                    <div key={index*1389}>

						<TCourseBanner 
							t_course_title={t_course.title} 
							description={t_course.imageSrc} 
							imgSrc={t_course.imageSrc} 
							id={1} 
							percentageDone={20}

                            t_course_id={t_course.id}
                            t_units={t_units}
                            t_lessonProgress={t_lessonProgress}
                            CourseStat={CourseStat}
						/>
						



                        {/* TODO:   unit Banner */}
                        
						<div className="flex items-center flex-col relative w-full">

                        

							{t_units.filter(u => u.t_courseId === t_course.id)
							.map((t_unit, index) => (

								<div key={index*81872} className="w-full ml-7">





{/* <BounceCard className="mt-14 col-span-12 md:col-span-8"> */}
                                        {/* <BounceCard className="mt-14 w-full">
                                    
                                        <CardTitle>
                                            <div className="flex justify-between">
                                                <p>
                                                    {t_unit.title}
                                                </p>
                                                <p>
                                                    {index+1}/{t_units.length}
                                                </p>
                                            </div>
                                        </CardTitle>
                                        
                                        <div className="absolute bottom-0 left-4 right-4 top-16 translate-y-8 rounded-t-2xl bg-gradient-to-b from-white/50 to-green-500/50 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                                            <span className="block text-center text-xl">
                                                
                                                {
                                                    t_unit.t_lessons[t_unit.t_lessons.length - 1].t_challenges.filter(el => !el.question.includes("Соедините") )[0].imageSrc 
                                                    &&  t_unit.t_lessons[t_unit.t_lessons.length - 1].t_challenges.filter(el => !el.question.includes("Соедините") )[0].imageSrc  !== '0' 
                                                    ?
                                                    
                                                    // <Image
                                                    //     className="pt-8 mx-auto"
                                                    //     src={`/trainer-images/${
                                                    //         t_unit.t_lessons[t_unit.t_lessons.length - 1].t_challenges.filter(el => !el.question.includes("Соедините") )[0].imageSrc
                                                    //     }`}
                                                    //     alt='task_image'
                                                    //     height={90}
                                                    //     width={90}
                                                    // />  
                                                    <div></div>

                                                    :
                                                    <p className="text-gray-700 m-7 pt-3 pb-3 text-2xl">
                                                        <Latex>
                                                            {t_unit.t_lessons[t_unit.t_lessons.length - 1].t_challenges.filter(el => !el.question.includes("Соедините") )[0].question}
                                                        </Latex>
                                                    </p>
                                                }

                                            </span>
                                        </div>
                                        
                                    </BounceCard> */}



									<Block 
                                        
                                        // whileHover={{
                                        //     scale: 0.9,
                                        //     rotate: index % 2 == 0 ? "1deg" : "-1deg",
                                        //     boxShadow: "5px 5px #758277",
                                        // }}

                                        className=
                                            "mt-10 font-bold w-full rounded-xl  bg-green-500 p-4 text-2xl text-white  pt-2 pb-2 bg-[url('/MemesImage/i-like-food.svg')]  bg-repeat"
                                    >
                                        <div className="flex justify-between">
                                            
                                            
                                            {/* <p>
                                                <FlipLink href="#">
                                                    {t_unit.title}
                                                </FlipLink>
                                            </p> */}
                                            
                                            
                                            <p>
                                                {t_unit.title}
                                            </p>
                                            <p>
                                                {index+1}/{t_units.length}
                                            </p>
                                        </div>
                                        
                                        
                                        <div className="rounded-xl bg-white/50">

                                        {
                                            // t_unit.t_lessons[t_unit.t_lessons.length - 1].t_challenges.filter(el => !el.question.includes("Соедините") )[0].imageSrc 
                                            // &&  t_unit.t_lessons[t_unit.t_lessons.length - 1].t_challenges.filter(el => !el.question.includes("Соедините") )[0].imageSrc  !== '0' 
                                            t_unit.title != '1'
                                            
                                            
                                            ?
                                            

                                            // <Image
                                            //     className="pt-8 mx-auto"
                                            //     src={`/trainer-images/${
                                            //         t_unit.t_lessons[t_unit.t_lessons.length - 1].t_challenges.filter(el => !el.question.includes("Соедините") )[0].imageSrc
                                            //     }`}
                                            //     alt='task_image'
                                            //     height={90}
                                            //     width={90}
                                            // />  

                                            <div>

                                            </div>



                                            :
                                            <p className="text-gray-700 m-7 pt-3 pb-3 text-lg">
                                            <Latex>
                                                {t_unit.t_lessons[t_unit.t_lessons.length - 1].t_challenges.filter(el => !el.question.includes("Соедините") )[0].question}
                                            </Latex>
                                        </p>
                                        }




                                        </div>
									</Block>










									{
										t_units.filter(ul => ul.id == t_unit.id)[0].t_lessons.map((t_lesson, index) => {
										                                    
                                        return(
										<div key={index * 2241} className='justify-center'>
											<TrainerLessonItemRound 
                                                t_lesson={t_lesson} 
                                                t_lessonProgress={t_lessonProgress}
                                                TRatingUsers={TRatingUsers}
                                                user_id={user_id}
                                                index={index}
                                            />
									
										</div>
                                        )}

									)}
								</div>
							))}
						</div>



                        <Button className="w-full mb-4 mt-4" onClick={onClickHandler} variant='primaryOutline'>
                            Показать все формулы                                
                        </Button>


                        


                        {showFormulas && 

                        
                        <div className="flex flex-col justify-center">
                            {t_units.filter(u => u.t_courseId === t_course.id)
                                .map((t_unit, index) => (
                                    <div key={index*14213}>

                                        <p className="w-full pb-8 pl-4">
                                            {t_unit.title}
                                        </p>

                                        {
                                            t_units.filter(ul => ul.id == t_unit.id)[0].t_lessons.map((t_lesson, index) => (
                                            
                                            <div key={index * 2241} className='justify-center'>
                                                {t_lesson.t_challenges.map((t_challenge, index) => (
                                                    <div key={index * 9135} className="w-full pb-8 pl-4">
                                                        <Latex>
                                                        {t_challenge.question}
                                                        </Latex>

                                                        <Latex>
                                                        {t_challenge.t_challengeOptions[0].text}
                                                        </Latex>
                                                    </div>
                                                ) )}
                                        
                                            </div>
                                            

                                        ))}
                                    </div>
                                ))}

                        </div>

                        }




                     <AnimRightTriangleSin
                      threeCoordinates = {[0.1, 0.1, 0.9, 0.1, 0.1, 0.6]}
                      xCoordinates = {[464, 42]}
                      arcSVG = {"M 440,42 Q 420,80 460,92"}
                    />

						
					</div>

                </TabsContent>

            ))}






            

        </Tabs>

    </div>

)
}

export default TabTCourses





// const BounceCard = ({
//     className,
//     children,
//   }: {
//     className: string;
//     children: ReactNode;
//   }) => {
//     return (
//       <motion.div
//         whileHover={{ scale: 0.95, rotate: "-1deg", boxShadow: "8px 8px #758277", }}
//         className={`w-full bg-green-500 text-2xl text-white justify-center bg-[url('/MemesImage/i-like-food.svg')] group relative min-h-[250px] overflow-hidden rounded-2xl pl-6 pr-6 pt-6 ${className}`}
//       >
//         {children}
//       </motion.div>
//     );
//   };
  
//   const CardTitle = ({ children }: { children: ReactNode }) => {
//     return (
//       <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
//     );
//   };




//   ?  <AnimRightTriangleSin
//   threeCoordinates = {[0.1, 0.1, 0.9, 0.1, 0.1, 0.6]}
//   xCoordinates = {[464, 42]}
//   arcSVG = {"M 440,42 Q 420,80 460,92"}
// >