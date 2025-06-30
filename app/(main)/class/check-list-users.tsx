
'use client'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import React, { useState, useTransition } from 'react'


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

    
}
export const CheckListUsers = ({
    usersThisClass,
    cur_class_id,

    all_t_lessonProgress,
    allClassHW,
    


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

                    
                    // Контрольное ПРОИЗВЕДЕНИЕ (если будет 1 то все Lesson'ы этого HW выполнены)
                    //
                    // let controlMultiply = 1
                    // let ListOfMissedLessonsIds: number[] = []
                    // console.log('lessonsDoneByThisUser')
                    // console.log(lessonsDoneByThisUser)

                    hw_trainer.map(cur_les_in_hw => {
                        // смотрим первый (нулевой) результат по этому Lesson'у тк был отсортирован в query по дате
                        const doneRightPercent = lessonsDoneByThisUser.filter(lessonDone => lessonDone.t_lessonId == cur_les_in_hw)[0]?.doneRightPercent
                        console.log(user.userId)
                        console.log(doneRightPercent)
                        console.log('----')
                        
                        if (doneRightPercent > 90) {
                            
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


            



            <li className="col-span-4 flex justify-center">
                <p className="text-sm content-center     mx-auto text-center align-middle">
                    points
                </p>    
            </li>
            
            <li className="flex justify-center">
                <p className="text-sm content-center">
                    #
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
                        <p key={index*31251} className="text-lg font-bold content-center">
                            {user.userName}
                        </p>
                    </li>



                    {/* STREAK */}
                        
                    <li  key={index*1236} className=
                        {notFinishedHW == 0 
                            ? "content-center text-center text-sm text-white bg-green-400 rounded-sm"  
                            : "content-center text-center text-sm text-white bg-red-400 rounded-sm"
                        }
                    >
                    {/* {finishedHW} / {finishedHW+notFinishedHW} */}
                        <p>{finishedHW}</p>
                        <p>{finishedHW}</p>
                       
                        {/* <Checkbox 
                            key={index*276251314}
                            checked={checkedState[index]}
                            onCheckedChange={() => handleOnChange(index)}
                        />
                         */}
                    </li>



                    {/* СКОЛЬКО ВСЕГО МОНЕТ */}

                    <li className="col-span-3 hover:-translate-y-2 transition-transform duration-500 ease-in-out" key={index*15335}>
                        <Button key={index*25571} className="w-full" variant={'ghost' } size='leader'>
                                {user.points}
                        </Button>
                    </li>


                    <li className="col-span-1" key={index*726}>
                        <Button key={index*25421} className="w-full" variant={'ghost' } size='leader'>
                                {user.classId}            
                        </Button>
                    </li>


                </>
            )}
            
            
            )}










        </ul>






        {/* <div className='pt-10 w-full flex justify-between gap-x-10'>
        <Input 
            placeholder={placeholder}
            type="text"
            value={newName}
            onChange={handleChangeName} 
        />

        <Button 
            // onClick={onButtonPress}
            type="submit"
        >
            Поменять имя
        </Button> 

        </div> */}


    </div>


  )
}
