
'use client'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import React, { useState, useTransition } from 'react'
import TabTCoursesHW from './tab-t-courses-hw'
import { t_challengeOptions } from '@/db/schema'


type Props = {
    usersThisClass: {
        userId: string;
        userName: string;
        userImageSrc: string;
        points: number;
        classId: number | null;
    }[],
    cur_class_id: number,


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


    
}
export const CheckListUsers = ({
    usersThisClass,
    cur_class_id,

    all_t_lessonProgress,
    allClassHW,

    t_courses,
    t_units,


}: Props) => {


    const thisClassHW = allClassHW?.filter(el => el.classId == cur_class_id)

    const big = usersThisClass.map(user => {
        
        // смотрим во ВСЕМ списке выполненых Lesson те, которые выполнены ЭТИМ user
        //
        const lessonsDoneByThisUser = all_t_lessonProgress.filter(t_less_propg => t_less_propg.userId == user.userId)

        
        // идем по HW, 
        // смотрим в КАЖДОМ HW, выполнены ЛИ Lesson'ы на 90% после ДАТЫ ВЫДАЧИ задания
        if (thisClassHW) {
            const thisUserListHWStat = thisClassHW.map(cur_hw => {
                // смотрим конкретное ОДНО HW
                //
                // Контрольное ПРОИЗВЕДЕНИЕ (если будет 1 то все Lesson'ы этого HW выполнены)
                let controlMultiply = 1
                let ListOfMissedLessonsIds: number[] = []
                //
                const hw_trainer_string = cur_hw.taskTrainer
                if (hw_trainer_string != null) {
                    const hw_trainer_list_of_str = hw_trainer_string.split(',')
                    
                    // hw_trainer - список номеров задач этого HW
                    const hw_trainer = hw_trainer_list_of_str.map((str) => Number(str));
                    

                    // TODO:
                    // считаем, сколько user'ов НЕ сделало каждый unit
                    // const hw_trainer_missed = 

                    
   
                    hw_trainer.map(cur_les_in_hw => {
                        // смотрим первый (нулевой) результат по этому Lesson'у тк УЖЕ был отсортирован в query по дате
                        const doneRightPercent = lessonsDoneByThisUser.filter(lessonDone => lessonDone.t_lessonId == cur_les_in_hw)[0]?.doneRightPercent
                        console.log(user.userId)
                        console.log(doneRightPercent)
                        console.log('----')
                        

                        // смотрим, сколько раз был решен Lesson ПОСЛЕ даты выдачи HW
                        //
                        const timesDoneCurLessonAfterHWDate = lessonsDoneByThisUser.filter(lessonDone => 

                            (lessonDone.t_lessonId == cur_les_in_hw) && (lessonDone.dateDone > cur_hw.dateHw))?.length



                        if (doneRightPercent > 90 && timesDoneCurLessonAfterHWDate > 0) {
                            //
                            // ничего не делаем
                            //
                        } else {
                            controlMultiply = controlMultiply * 0
                            ListOfMissedLessonsIds.push(cur_les_in_hw)
                        }
                    })
                }

                return (
                    {
                        dateHW: cur_hw.dateHw,
                        isDone: controlMultiply,
                        ListOfMissedLessonsIds: ListOfMissedLessonsIds,
                    }
                )
                

            })
            return (
                {
                    thisUserListHWStat: thisUserListHWStat,
                    userName: user.userName,
                    userId: user.userId,                    
                }
            )
        }
    })

    console.log(big)

    let listOfAllHWIds:number[] = []
    //
    thisClassHW?.map(cur_hw=> {
        let ListOfMissedLessonsIds: number[] = []
        //
        const hw_trainer_string = cur_hw.taskTrainer
        if (hw_trainer_string != null) {
            const hw_trainer_list_of_str = hw_trainer_string.split(',')
            
            // hw_trainer - список номеров задач этого HW
            hw_trainer_list_of_str.map(str => {
                listOfAllHWIds.push(Number(str))
            })
        }
    })

    console.log('listOfAllHWIds123123123 ',listOfAllHWIds)

    const uniqueSet = new Set(listOfAllHWIds)
    const listOfUniqueHWIds = Array.from(uniqueSet);
    console.log('listOfUniqueHWIds', listOfUniqueHWIds)


    const hwLIdsToDoNumUsersMissed = listOfUniqueHWIds.map(lessonIdToDo => {

        let missNumOfToDoLIds = 0

        let numToDo = 0 // за каждого User по +1 за Не сделанный LessonId

        big.map(cur_user => {
            
            cur_user?.thisUserListHWStat.map(cur_hw => {

                // Если этот LessonIdToDo находится ХОТЯ БЫ в одном из НЕ сделанных списках HW, то = 1 
                // то есть этот ученик НЕ сделал ЭТОТ lessonId из одного из HW
                if (cur_hw.ListOfMissedLessonsIds.includes(lessonIdToDo)) {
                    console.log('----')
                    console.log(cur_hw.ListOfMissedLessonsIds)
                    console.log(lessonIdToDo)
                    console.log('----')
                    numToDo = 1
                }
                
            })

            missNumOfToDoLIds += numToDo // За каждого User по +1 у ЭТОГО LessonId
        })


        return (
            {
                lessonIdToDo: lessonIdToDo,
                missNumOfToDoLIds: missNumOfToDoLIds,
            }
        )
    })

    console.log('hwLIdsToDoNumUsersMissed:::::', hwLIdsToDoNumUsersMissed)






    console.log('big')
    console.log(big)




    const [pending, startTransition] = useTransition()

    const placeholder = 'введите класс'
    const [newName, setNewName] = useState(placeholder);
    const handleChangeName = (event:any) => {
        setNewName(event.target.value);
    }





    return (


    
    <div className="pt-10 w-full">
           


        <ul className="grid grid-cols-8 gap-y-4 ">


            <li className="col-span-1 flex justify-center ">
                    #
            </li>

            

            <li className="col-span-2 flex justify-center">
                <p className="text-sm content-center">
                    имя
                </p>    
            </li>


            



            <li className="flex justify-center">
                <p className="text-sm content-center">
                    ht
                </p>    
            </li>
            <li className="flex justify-center">
                <p className="text-sm content-center">
                    hw
                </p>    
            </li>
            <li className="flex justify-center">
                <p className="text-sm content-center">
                    1
                </p>    
            </li>
            <li className="flex justify-center">
                <p className="text-sm content-center">
                    2
                </p>    
            </li>
            
            <li className="flex justify-center">
                <p className="text-sm content-center">
                    3
                </p>    
            </li>




            {usersThisClass.map((user, index) => {
                
                const thisUserListHWStat = big.filter(el => el?.userId == user.userId)[0]?.thisUserListHWStat
                let notFinishedHW = thisUserListHWStat?.reduce((accum, el) => !el.isDone ? accum + 1 : accum, 0)
                let finishedHW = thisUserListHWStat?.reduce((accum, el) => el.isDone ? accum + 1 : accum, 0)
                notFinishedHW == undefined ? notFinishedHW = 0 : notFinishedHW
                finishedHW == undefined ? finishedHW = 0 : finishedHW
                
                return (
                <>
                    <li key={index*276}>
                        <Button key={index*27622} className="w-full" variant='ghost' size='leader'>
                            <div key={index*21276} className="flex flex-1 justify-between items-center">
                                <div key={index*4532}>
                                    <h1 key={index*221151}>{index + 1}</h1> 
                                </div>





                                <div key={index*43532}>
                                    <Avatar key={index*4511132}
                                        >
                                        <AvatarImage  key={index*4553532}
                                            className="object-cover"
                                            src={user.userImageSrc}
                                        />
                                    </Avatar>  
                                </div>
                            </div>
                        </Button>

                    </li>

                    <li  className="col-span-2 flex justify-center" key={index*1241}>
                        <p key={index*31251} className="text-sm font-bold content-center">
                            {user.userName}
                        </p>
                    </li>



                    {/* STREAK */}
                        
                    <li  key={index*1236} className=
                        {notFinishedHW == 0 
                            ? "content-center text-center text-sm text-white font-bold bg-green-400 rounded-sm"  
                            : "content-center text-center text-sm text-white font-bold bg-red-400 rounded-sm"
                        }
                    >
                    {/* {finishedHW} / {finishedHW+notFinishedHW} */}
                        <p>
                            {notFinishedHW}
                        </p>
                        <p>
                            {finishedHW}
                        </p>
                       
                        {/* <Checkbox 
                            key={index*276251314}
                            checked={checkedState[index]}
                            onCheckedChange={() => handleOnChange(index)}
                        />
                         */}
                    </li>



                    {/* СКОЛЬКО ВСЕГО МОНЕТ */}

                    <li className="col-span-1" key={index*1726}>
                        <Button key={index*254421} className="w-full" variant={'ghost' } size='leader'>
                                {user.classId}            
                        </Button>
                    </li>
                    <li className="col-span-1" key={index*2726}>
                        <Button key={index*25421} className="w-full" variant={'ghost' } size='leader'>
                                {user.classId}            
                        </Button>
                    </li>
                    <li className="col-span-1" key={index*3726}>
                        <Button key={index*225421} className="w-full" variant={'ghost' } size='leader'>
                                {user.classId}            
                        </Button>
                    </li>



                    <li className="col-span-1" key={index*726}>
                        <Button key={index*254211} className="w-full" variant={'ghost' } size='leader'>
                                {user.classId}            
                        </Button>
                    </li>


                </>
            )}
            
            
            )}










        </ul>












                    <TabTCoursesHW 
                        t_courses={t_courses} 
                        t_units={t_units} 

                        cur_class_id={cur_class_id}

                        hwLIdsToDoNumUsersMissed={hwLIdsToDoNumUsersMissed}
                    />



    </div>


  )
}
