'use client'

import { TUnitBanner } from "@/app/(main)/trainer/t-unit-banner";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { TrainerLessonItem } from "./trainer-list";
import { t_lessonProgress } from "@/db/schema";
import { GetTLessonStat } from "@/usefulFunctions";



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
    }

  

    export const TabTCourses = ({
        t_courses,
        t_units,
        t_lessonProgress,
    }: Props) => {



    // const AllTStat = t_courses.map(course => {

    //     const this_t_unit = t_units.filter(unit => unit.t_courseId == course.id)[0]


    //     console.log(this_t_unit)


    //     const t_lessonsStat = this_t_unit.t_lessons.map(t_lesson => {
    //         lessonId: t_lesson.id
    //         PD: GetTLessonStat(t_lessonProgress, t_lesson.id).totalPercentDR
    //     })

    //     // console.log('hello')
    //     // console.log(t_lessonsStat)

    //     return(t_lessonsStat)

    // })






    const AllTStat = t_courses.map(course => {

        const this_courseUnits = t_units.filter(unit => unit.t_courseId == course.id)


        // console.log(this_courseUnits)

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

        // const t_lessonsStat = this_t_unit.t_lessons.map(t_lesson => {
        //     lessonId: t_lesson.id
        //     PD: GetTLessonStat(t_lessonProgress, t_lesson.id).totalPercentDR
        // })

        // // console.log('hello')
        // // console.log(t_lessonsStat)

        // return(t_lessonsStat)

    })

    // console.log(AllTStat)

    // AllTStat[0].StatThisUnit[0][0].lessonStat.PD

    // console.log(AllTStat[0].StatThisUnit[1][1])

    // let listOfMini = []

    let CourseStat = AllTStat.map(t_course => {
        let listOfMini:number[] = []
        t_course.StatThisCourse.map(unit => {
            unit.map(lesson => {
                // let ListOfMini = lesson.lessonStat.PD
                listOfMini.push(lesson.lessonStat.PD)
                // return listOfMini
            })
            
        })
        return {
            listOfMini: listOfMini,
            courseTitle: t_course.courseTitle

        }

        
    })

    console.log(CourseStat)
    

    // console.log(AllTStat)

        // const this_t_unit = t_units.filter(unit => unit.t_courseId == t_course_id)[0]

        // console.log(this_t_unit)

        // const t_lessonsStat = this_t_unit.t_lessons.map(t_lesson => {
        //     lessonId: t_lesson.id
        //     PD: GetTLessonStat(t_lessonProgress, t_lesson.id).totalPercentDR
        // })

        // console.log('hello')
        // console.log(t_lessonsStat)


    // const uniqueCarsTO = [...new Set(allWorksInfo.map(item => item.number))];


return(

    <div>
        
        <Tabs defaultValue="all" className="pt-5">
    
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
							description={'something'} 
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
											<TrainerLessonItem t_lesson={t_lesson} t_lessonProgress={t_lessonProgress}/>
									
										</div>
										

									))}
								</div>
							))}
						</div>


						
					</div>




                </TabsContent>

            ))}






            

        </Tabs>

    </div>

)
}

export default TabTCourses