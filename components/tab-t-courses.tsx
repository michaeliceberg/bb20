'use client'

import { TUnitBanner } from "@/app/(main)/trainer/t-unit-banner";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { TrainerLessonItem } from "./trainer-list";
import { t_challengeOptions, t_lessonProgress } from "@/db/schema";
import { GetTLessonStat } from "@/usefulFunctions";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { useState } from "react";
import { Button } from "./ui/button";


type Props = {    
        t_courses: {
                        id: number;
                        title: string;
                        imageSrc: string;
                    }[],
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
                    imageSrc: string;
                    id: number;
                    points: number;
                    order: number;
                    type:  "SELECT" | "ASSIST" | "CONNECT" | "SLIDER" | "CONSTRUCT",
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



    console.log(AllTStat)



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


return(

    <div>
        
        <Tabs defaultValue="М1" className="pt-5">
    
            <TabsList>
            {
                t_courses.map((t_course, index) => (
                    <TabsTrigger key={index*21983} value={t_course.title}>{t_course.title}</TabsTrigger>
                )) 
            }
            </TabsList>
        

            {t_courses.map((t_course, index) => (
                
                <TabsContent key={index*19339} value={t_course.title} className="pt-4">
                    
                    <div key={index*1389}>

						<TUnitBanner 
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
						
						
						<div className="ml-4">
							{t_units.filter(u => u.t_courseId === t_course.id)
							.map((t_unit, index) => (
								<div key={index*81872}>

									<p className="w-full rounded-xl  bg-green-500 p-4 text-lg text-white flex justify-center pt-2 pb-2 mb-6 bg-[url('/MemesImage/i-like-food.svg')]  bg-repeat">
										{t_unit.title}
									</p>

									{
										t_units.filter(ul => ul.id == t_unit.id)[0].t_lessons.map((t_lesson, index) => (
										
										<div key={index * 2241} className='justify-center'>
											<TrainerLessonItem 
                                                t_lesson={t_lesson} 
                                                t_lessonProgress={t_lessonProgress}
                                                TRatingUsers={TRatingUsers}
                                                user_id={user_id}
                                            />
									
										</div>
										

									))}
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


						
					</div>

                </TabsContent>

            ))}






            

        </Tabs>

    </div>

)
}

export default TabTCourses