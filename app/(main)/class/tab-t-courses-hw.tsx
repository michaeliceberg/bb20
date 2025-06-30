'use client'

import { TCourseBanner } from "@/app/(main)/trainer/t-course-banner";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { t_challengeOptions, t_lessonProgress } from "@/db/schema";
import { GetTLessonStat } from "@/usefulFunctions";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { useState, useTransition } from "react";
import { TrainerLessonItemRound } from "@/components/trainer-list-round";
import { Button } from "@/components/ui/button";
import { Block } from "@/components/block";
import { Checkbox } from "@/components/ui/checkbox";
import { upsertClassHW } from "@/actions/class-hw-update";
import { toast } from "sonner"


// type t_lessonsType = {
//     id: number;
//     title: string;
//     order: number;
//     t_unitId: number;
//     t_challenges: {
//         imageSrc: string;
//         numRans: string;
//         difficulty: string;
//         id: number;
//         points: number;
//         order: number;
//         type:  "SELECT" | "ASSIST" | "CONNECT" | "SLIDER" | "CONSTRUCT" | "WORKBOOK" | "R ASSIST" | "R CONNECT" | "R SLIDER" | "GEOSIN",
//         // type:  typeof t_challengesEnum.$inferSelect[],
//         question: string;
//         author: string;
//         t_lessonId: number;
//         t_challengeOptions: typeof t_challengeOptions.$inferSelect[],
//     }[];}[]


type t_lessonsType = number[]


type Props = {    
        t_courses: {
            id: number;
            title: string;
            imageSrc: string;
        }[],
        t_units:  
       
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
                    type:  "SELECT" | "ASSIST" | "CONNECT" | "SLIDER" | "CONSTRUCT" | "WORKBOOK" | "R ASSIST" | "R CONNECT" | "R SLIDER" | "GEOSIN",
                    // type:  typeof t_challengesEnum.$inferSelect[],
                    question: string;
                    author: string;
                    t_lessonId: number;
                    t_challengeOptions: typeof t_challengeOptions.$inferSelect[],
                }[];}[]
        }[],
        
        // t_lessonProgress: typeof t_lessonProgress.$inferSelect[],

        cur_class_id: number,

    
    }

  

    export const    TabTCoursesHW = ({
        t_courses,
        t_units,
        // t_lessonProgress,

        cur_class_id,
    }: Props) => {


    const [showFormulas, setShowFormulas] = useState(false)

    const onClickHandler = () => {
        setShowFormulas(!showFormulas)
    }

    // const AllTStat = t_courses.map(course => {

    //     const this_courseUnits = t_units.filter(unit => unit.t_courseId == course.id)

    //     const StatThisUnit = this_courseUnits.map(unit => 
    //         {
    //             const unitStat = unit.t_lessons.map(t_lesson => ({                
    //                 lessonId: t_lesson.id,
    //                 PD: GetTLessonStat(t_lessonProgress, t_lesson.id).totalPercentDR
    //             }))
             
    //             return (
    //             {
    //                 unitStat: unitStat,
    //                 unitId: unit.id,
    //             })
    //         }
          


           
    //     )
    //     return {
    //         StatThisCourse: StatThisUnit,
    //         courseTitle: course.title
    //     }


    // })


    // console.log('AllTStat')
    // console.log(AllTStat)




    // let CourseStat = AllTStat.map(t_course => {
    //     let listOfMini:number[] = []
    //     t_course.StatThisCourse.map(unit => {
    //         unit.unitStat.map(lesson => {
    //             listOfMini.push(lesson.PD)
    //         })
            
    //     })
    //     return {
    //         listOfMini: listOfMini,
    //         courseTitle: t_course.courseTitle
    //     }

    // })














    

    const allLessonsIds: number[] = []

    const AllLessonsInCourses = t_courses.map(course => {

        const this_courseUnits = t_units.filter(unit => unit.t_courseId == course.id)

        const all_Lessons_in_units_this_course:t_lessonsType = []

        this_courseUnits.map(unit => {
            unit.t_lessons.map(t_lessons => {
                all_Lessons_in_units_this_course.push(t_lessons.id)
                allLessonsIds.push(t_lessons.id)
            })
        })

        return (
            {
                courseId: course.id,
                courseTitle: course.title,
                lessons: all_Lessons_in_units_this_course,
            }
        )

    })

    // console.log('AllLessonsInCourses: ', AllLessonsInCourses)



    const initialCheckState = allLessonsIds.map(lessonId => 
        {
            return (
            {
            lessonId: lessonId,
            isChecked: false,
            })
        }
    )


    // // для Чекбоксов ДЗ

    // const [checkedState, setCheckedState] = useState(
    //     new Array(allLessonsIds.length).fill(false)
    // );

    const [checkedState, setCheckedState] = useState(initialCheckState)

    const handleOnChange = (checkedId: number) => {

        const newState = checkedState.map(el => {
            if (el.lessonId == checkedId) {
                return (
                    {
                        lessonId: el.lessonId,
                        isChecked: !el.isChecked,
                    }
                )
            } else {
                return (
                    {
                        lessonId: el.lessonId,
                        isChecked: el.isChecked,
                    }
                )
            }
        })

        setCheckedState(newState)
    }

    const [pending, startTransition] = useTransition()

    const onButtonPressSendHW = () => {

        startTransition(()=> {
            if (pending) return;
            
            // отправляем в таблицу class_hw Класс cur_class_id выбранные LessonIds Checkbox
            //
            upsertClassHW(cur_class_id, checkedState.filter(el => el.isChecked).map(el => el.lessonId))
            .catch(()=>toast.error('HW не отправилось!'))
        })

    }


return(

    <div className="flex pt-10">
        

        <Tabs defaultValue=
            {t_courses[0].title}
            className="pt-5      flex items-center flex-col relative ">
    

            {/*  Табуляция наверху (выбор Сourse)   */}
            <TabsList>
            {
                t_courses.map((t_course, index) => (
                    <TabsTrigger key={index*21983} value={t_course.title}>
                         {t_course.title.split(' ')[0]}
                    </TabsTrigger>
                )) 
            }
            </TabsList>
        



            {/*  Отображаем ВЫБРАННЫЙ курс */}
            {t_courses.map((t_course, indexCourse) => (
                
                <TabsContent key={indexCourse*19339} value={t_course.title} className="">
                    
                    <div key={indexCourse*1389}>

				

                        {/* TODO:   unit Banner */}
                        
						<div className="flex items-center flex-col relative w-full">

                        

							{t_units.filter(u => u.t_courseId === t_course.id)
							.map((t_unit, indexUnit) => (

								<div key={indexUnit*81872} className="w-full ml-7">


									<Block      
                                    // ТЕОРЕМА ВИЕТА      1/5                              
                                        className="mt-5 font-bold w-full rounded-xl  bg-green-500 p-4 text-2xl text-white  pt-2 pb-2 bg-[url('/MemesImage/i-like-food.svg')]  bg-repeat"
                                    >
                                        
                                        <div className="flex justify-between">
                                                                                        
                                            <p>
                                                {t_unit.title}
                                            </p>
                                            <p>
                                                {indexUnit+1}/{t_units.length}
                                            </p>
                                        </div>
                                        
                                        
                                        <div className="rounded-xl bg-white/50">

                                           
                                        </div>

									</Block>



									
                                    {t_units.filter(ul => ul.id == t_unit.id)[0].t_lessons.map((t_lesson, indexLesson) => {
                                    //
                                    // Идем по ЛЕССОНАМ чтобы Checkbox HW
                                    //                                              
                                    return(
                                        <div key={indexLesson * 2241} className='justify-between flex'>
                                            
                                            <h1>
                                                {t_lesson.title}
                                            </h1>
                                            <Checkbox 
                                                key={indexLesson*276251314}
                                                checked={checkedState.filter(el => el.lessonId == t_lesson.id)[0].isChecked}
                                                // checked={
                                                //     checkedState.filter(state => state.lessonId == t_lesson.id)[0] !== undefined ?
                                                //     checkedState.filter(state => state.lessonId == t_lesson.id)[0] :
                                                //     false
                                                // }
                                                onCheckedChange={() => handleOnChange(t_lesson.id)}
                                            />
                                            
                                        </div>
                                    )}

									)}
								</div>
							))}
						</div>
















						
					</div>

                </TabsContent>

            ))}



            <h1>
                {JSON.stringify(checkedState.filter(el => el.isChecked).map(el => el.lessonId))}
            </h1>
            <Button 
                onClick={onButtonPressSendHW}
                type="submit"
            >
                выдать дз
            </Button> 






            

        </Tabs>

    </div>

)
}

export default TabTCoursesHW



