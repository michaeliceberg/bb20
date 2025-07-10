'use client'

import { TCourseBanner } from "@/app/(main)/trainer/t-course-banner";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { challengeOptions, challengeProgress, courses, t_challengeOptions, t_lessonProgress, units } from "@/db/schema";
import { GetTLessonStat } from "@/usefulFunctions";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Block } from "@/components/block";
import { Checkbox } from "@/components/ui/checkbox";
import { upsertClassHW } from "@/actions/class-hw-update";
import { toast } from "sonner"


type t_lessonsType = number[]


type Props = {    
       
        courses: typeof courses.$inferSelect[],
        // units: typeof units.$inferSelect[],

        units:
    {
        id: number;
        title: string;
        description: string;
        imageSrc: string;
        courseId: number;
        order: number;
        lessons: {
            id: number;
            title: string;
            order: number;
            unitId: number;
            challenges: {
                imageSrc: string;
                // numRans: string;
                difficulty: string;
                id: number;
                points: number;
                order: number;
                type:  "SELECT" | "ASSIST" | "CONNECT" | "SLIDER" | "CONSTRUCT" | "WORKBOOK" | "R ASSIST" | "R CONNECT" | "R SLIDER" | "GEOSIN",
                // type:  "SELECT" | "ASSIST",
                // type:  typeof t_challengesEnum.$inferSelect[],
                question: string;
                author: string;
                lessonId: number;
                // challengeOptions: typeof challengeOptions.$inferSelect[],
                challengeProgress: typeof challengeProgress.$inferSelect[],

            }[];}[]
    }[],

        
        
        cur_class_id: number,

        hwCIdsToDoNumUsersMissed: {
            challengeIdToDo: number;
            missNumOfToDoCIds: number;
        }[],

        hwTLessonIds: number[],


    }

  

    export const    TabCoursesHW = ({
        courses,
        units,
        hwCIdsToDoNumUsersMissed,

        cur_class_id,

        hwTLessonIds,

    }: Props) => {


        // console.log(hwTLessonIds)
    // console.log(hwCIdsToDoNumUsersMissed)
    const [showFormulas, setShowFormulas] = useState(false)

    const onClickHandler = () => {
        setShowFormulas(!showFormulas)
    }

    

    const allLessonsIds: number[] = []

    const AllLessonsInCourses = courses.map(course => {

        const this_courseUnits = units.filter(unit => unit.courseId == course.id)

        const all_Lessons_in_units_this_course:t_lessonsType = []

        this_courseUnits.map(unit => {
            unit.lessons.map(lessons => {
                all_Lessons_in_units_this_course.push(lessons.id)
                allLessonsIds.push(lessons.id)
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

    // Отправляем Casual ДЗ challengeIds
    const [hwListChallengeIds, setHwListChallengeIds] = useState<number[]>([])
    const handleChallengeClick = (challengeId: number) => {
        if (hwListChallengeIds.includes(challengeId)) {

            // Если 2 раза нажал на один и тот же challenge то убрать из HW
            //
            let listWithout:number[] = hwListChallengeIds.filter(el => el != challengeId)
            setHwListChallengeIds(listWithout)
        } else {
            setHwListChallengeIds([...hwListChallengeIds, challengeId])
        }
        // console.log(hwListChallengeIds)
    }


    const [pending, startTransition] = useTransition()

    const onButtonPressSendHW = () => {

        startTransition(()=> {
            if (pending) return;
            
            // отправляем в таблицу class_hw Класс cur_class_id выбранные LessonIds Checkbox
            //
            upsertClassHW(
                cur_class_id, 
                hwTLessonIds,
                // checkedState.filter(el => el.isChecked).map(el => el.lessonId),
                hwListChallengeIds,
            )
            .catch(()=>toast.error('HW не отправилось!'))
        })

    }


return(

    <div className="flex pt-10">
        


        <Tabs defaultValue=
            {courses[0].title}
            className="pt-5      flex items-center flex-col relative ">
    

            {/*  Табуляция наверху (выбор Сourse)   */}
            <TabsList>
            {
                courses.map((course, index) => (
                    <TabsTrigger key={index*21983} value={course.title}>
                         {course.title.split(' ')[0]}
                    </TabsTrigger>
                )) 
            }
            </TabsList>
        



            {/*  Отображаем ВЫБРАННЫЙ курс */}
            {courses.map((course, indexCourse) => (
                
                <TabsContent key={indexCourse*19339} value={course.title} className="">
                    
                    <div key={indexCourse*1389}>

                    <div>
                        {hwTLessonIds}
                    </div>

                        {/* TODO:   unit Banner */}
                        
						<div className="flex items-center flex-col relative w-full">

                        

							{units.filter(u => u.courseId === course.id)
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
                                                {indexUnit+1}/{units.length}
                                            </p>
                                        </div>
                                        
                                        
                                        <div className="rounded-xl bg-white/50">

                                           
                                        </div>

									</Block>



									
                                    {units.filter(ul => ul.id == t_unit.id)[0].lessons.map((lesson, indexLesson) => {
                                    //
                                    // Идем по ЛЕССОНАМ чтобы Checkbox HW
                                    //                                              
                                    return(
                                        <div key={indexLesson * 221241} >
                                            <div className='justify-between flex'>
                                                
                                                <div className="flex gap-x-4 w-full justify-center  bg-zinc-100 p-2 mt-2 mb-2 rounded-lg">
                                                    <p>
                                                        {lesson.title}
                                                    </p>
                                                    <h1 className=
                                                    
                                                    {
                                                        // Если НЕ задавал то НЕТ цвета
                                                        // Если задавал и ВСЕ сделали - Зеленый Ноль
                                                        // Если задавал и НЕ ВСЕ сделали - красным количество user'ов
                                                        //
                                                        hwCIdsToDoNumUsersMissed.filter(el => el.challengeIdToDo == lesson.id)[0]?.missNumOfToDoCIds == 0 
                                                        ? "pl-2 pr-2 text-sm text-white bg-green-400 rounded-sm" 
                                                        : hwCIdsToDoNumUsersMissed.filter(el => el.challengeIdToDo == lesson.id)[0]?.missNumOfToDoCIds > 0
                                                        ? "pl-2 pr-2 text-sm text-white bg-red-400 rounded-sm" 
                                                        : ""
                                                    }
                                                        >
                                                        {hwCIdsToDoNumUsersMissed.filter(el => el.challengeIdToDo == lesson.id)[0]?.missNumOfToDoCIds}
                                                    </h1>

                                                </div>
                                                
                                                {/* <Checkbox 
                                                    key={indexLesson*276251314}
                                                    
                                                    checked={checkedState.filter(el => el.lessonId == lesson.id)[0].isChecked}
                                                    
                                                    onCheckedChange={() => handleOnChange(lesson.id)}
                                                /> */}

                                                
                                                
                                            </div>
                                            
                                            {/* TODO: СВОРАЧИВАТЬ ЛИ ВСЕ challengeID в галочку или нет {checkedState.filter(ch => ch.lessonId == lesson.id)[0].isChecked && */}
                                                <div>
                                                    {/* {lesson.id} */}
                                                    
                                                    <p className="text-xs gap-x-1">
                                                    {lesson.challenges.map((challenge, index) => 
                                                        
                                                        
                                                    (
                                                        <Button
                                                            variant={hwListChallengeIds.includes(challenge.id) ? 'primary': 'default' }
                                                            key={index*44289}
                                                            onClick={()=>{handleChallengeClick(challenge.id)}}
                                                        >
                                                            <div>
                                                                {challenge.id}

                                                                {hwCIdsToDoNumUsersMissed.filter(el => el.challengeIdToDo == challenge.id).length > 0 && 
                                                                    <div className=
                                                                        {hwCIdsToDoNumUsersMissed.filter(el => el.challengeIdToDo == challenge.id)[0].missNumOfToDoCIds > 0
                                                                            ? "text-white bg-red-400 rounded-lg"
                                                                            : "text-white bg-green-400 rounded-lg"
                                                                        }
                                                                        
                                                                    >
                                                                        
                                                                        {hwCIdsToDoNumUsersMissed.filter(el => el.challengeIdToDo == challenge.id)[0].missNumOfToDoCIds}
                                                                    </div>
                                                                }

                                                            </div>

                                                        </Button>
                                                    
                                                   
                                                

                                                    )


                                      


                                                    )}
                                                    </p>
                                                </div>
                                                
                                            {/* } */}

                                        </div>
                                    )}

									)}
								</div>
							))}
						</div>
















						
					</div>

                </TabsContent>

            ))}


            
            {/* 
                Показать Какие чекбоксы выбрали
            <h1>
                {JSON.stringify(checkedState.filter(el => el.isChecked).map(el => el.lessonId))}
            </h1> 
            
            */}

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

export default TabCoursesHW



