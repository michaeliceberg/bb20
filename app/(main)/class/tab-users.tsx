'use client'

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { t_challengeOptions } from "@/db/schema";
import { CheckListUsers } from "./check-list-users";
import TabTCoursesHW from "./tab-t-courses-hw";


type Props = {    
    allUsers: {
        userId: string;
        userName: string;
        userImageSrc: string;
        points: number;
        classId: number | null;
    }[],

    allClasses: {
        id: number;
        title: string;
        imageSrc: string;
    }[],






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
    all_t_lessonProgress: {
        id: number;
        userId: string;
        doneRight: number;
        dateDone: Date;
        t_lessonId: number;
        doneRightPercent: number;
        doneWrong: number;
        trainingPts: number;
    }[],

    allClassHW: {
        id: number;
        classId: number;
        task: string | null;
        taskTrainer: string | null;
        dateHw: Date;
    }[] | null,

    // allUsersProgress: {
    //     points: number;
    //     userId: string;
    //     userName: string;
    //     userImageSrc: string;
    //     activeCourseId: number | null;
    //     hearts: number;
    //     isAdmin: number;
    //     classId: number | null;
    //     isOnMeme: number;
    //     courseProgress: SuperType;
    // }[],

    }

  

    export const    TabUsers = ({
        allUsers,
        allClasses,
        

        t_courses,
        t_units,

        all_t_lessonProgress,
        allClassHW,

    }: Props) => {



    


return(

    <div className="flex pt-10">
        

        <Tabs defaultValue={allClasses[0].title} className="pt-5      flex items-center flex-col relative ">
    

            {/*  Табуляция наверху (выбор класса)   */}
            <TabsList>
            {
                allClasses.map((cur_class, index) => (
                    <TabsTrigger key={index*4142} value={cur_class.title}>
                         {cur_class.title}
                    </TabsTrigger>
                )) 
            }
            </TabsList>
        



            {/*  Отображаем ВЫБРАННЫЙ класс */}
            
            {allClasses.map((cur_class, indexCourse) => {

                const usersThisClass = allUsers.filter(user=>user.classId == cur_class.id)
                
                return (

                <TabsContent key={indexCourse*123} value={cur_class.title} className="pt-10">                    
                    
                    <CheckListUsers 
                        usersThisClass={usersThisClass}
                        
                        // для отправки ДЗ конкретному классу
                        cur_class_id={cur_class.id}

                        // для статистики в таблице Учеников
                        all_t_lessonProgress={all_t_lessonProgress}
                        allClassHW={allClassHW}
                    />




                    <TabTCoursesHW 
                        t_courses={t_courses} 
                        t_units={t_units} 

                        cur_class_id={cur_class.id}
                    />


                </TabsContent>

            )}
            
            
            
            )}










            

        </Tabs>

    </div>

)
}

// export default TabTCoursesHW



