import { challenges, lessons, units } from "@/db/schema";
import { UnitBanner } from "./unit-banner";
import { LessonButton } from "./lesson-button";


interface lessonDone {
    lesson: number;
    done: number[];
}

type Props = {

    id: number;
    order: number;
    title: string;
    description: string;
    
    // lessons: (typeof lessons.$inferSelect & {
    //     completed: boolean;
    // })[];


    lessons: {
        completed: boolean;
        id: number;
        title: string;
        order: number;
        unitId: number;
        challenges: typeof challenges.$inferSelect[]
        // challenges: {
        //     id: number;
        //     imageSrc: string;
        //     points: number;
        //     order: number;
        //     lessonId: number;
        //     type: "SELECT" | "ASSIST" | ... 7 more ... | "GEOSIN";
        //     question: string;
        //     author: string;
        //     difficulty: string;
        //     challengeProgress: {
        //         ...;
        //     }[];
        // }[];
    }[]



    activeLesson: typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
    } | undefined;
    // activeLessonPercentage: number;
    lessonStat: Array<lessonDone>;
    imgSrc: string;
    percentageDone: number;
    RecomNumChallengesToday: number;
    bgSvgSrc: string,


    user_id: string,


    allClasses: {
        id: number;
        title: string;
        imageSrc: string;
    }[],

    allClassHW: {
        id: number;
        classId: number;
        task: string | null;
        taskTrainer: string | null;
        dateHw: Date;
    }[] | null,


    allUsers: {
        userId: string;
        userName: string;
        userImageSrc: string;
        points: number;
        classId: number | null;
    }[],

    this_class_id: number | null,

    challengeProgress: {
        id: number;
        userId: string;
        challengeId: number;
        completed: boolean;
        doneRight: boolean;
        dateDone: Date;
    }[],


}

export const Unit = ({
    id,
    order,
    title,
    description,
    lessons,
    activeLesson,
    // activeLessonPercentage,
    lessonStat,
    imgSrc,
    percentageDone,
    RecomNumChallengesToday,
    bgSvgSrc,


    user_id,

    allClasses,
    allClassHW,
    allUsers,
    this_class_id,
    challengeProgress,
}: Props) => {




    const usersThisClass = allUsers.filter(user=>user.classId == this_class_id)

    const thisClassHW = allClassHW?.filter(el => el.classId == this_class_id)


    // console.log('lessonStat', lessonStat)

    const big = usersThisClass.map(user => {
        
        // смотрим во ВСЕМ списке выполненых Challenge те, которые выполнены ЭТИМ user
        //
        const ChallengesDoneByThisUser = challengeProgress.filter(chal_prog => chal_prog.userId == user.userId)

        
        // идем по HW, 
        // смотрим в КАЖДОМ HW, выполнены ЛИ Challeng's после ДАТЫ ВЫДАЧИ задания
        if (thisClassHW) {
            const thisUserListHWStat = thisClassHW.map(cur_hw => {
                // смотрим конкретное ОДНО HW
                //
                // Контрольное ПРОИЗВЕДЕНИЕ (если будет 1 то все Lesson'ы этого HW выполнены)
                let controlMultiply = 1
                let ListOfMissedChallengesIds: number[] = []
                //
                const hw_casual_string = cur_hw.task
                if (hw_casual_string != null) {
                    const hw_casual_list_of_str = hw_casual_string.split(',')
                    
                    // hw_trainer - список номеров задач этого HW
                    const hw_casual = hw_casual_list_of_str.map((str) => Number(str));
                    

                    // TODO:
                    // считаем, сколько user'ов НЕ сделало каждый unit
                    // const hw_trainer_missed = 

                    
   
                    hw_casual.map(cur_chal_in_hw => {
                        // смотрим первый (нулевой) результат по этому challenge'у тк УЖЕ был отсортирован в query по дате
                        const isDoneChallenge = ChallengesDoneByThisUser.filter(challengeDone => challengeDone.challengeId == cur_chal_in_hw)[0]?.completed
                        const isDoneRightChallenge = ChallengesDoneByThisUser.filter(challengeDone => challengeDone.challengeId == cur_chal_in_hw)[0]?.doneRight
                        // console.log(user.userId)
                        // console.log(doneRightPercent)
                        // console.log('----')
                        

                        // смотрим, сколько раз был решен Lesson ПОСЛЕ даты выдачи HW
                        //
                        const timesDoneCurChallengeAfterHWDate = ChallengesDoneByThisUser.filter(challengeDone => 

                            (challengeDone.challengeId == cur_chal_in_hw) && (challengeDone.dateDone > cur_hw.dateHw))?.length



                        if (isDoneRightChallenge && timesDoneCurChallengeAfterHWDate > 0) {
                            //
                            // ничего не делаем
                            //
                        } else {
                            controlMultiply = controlMultiply * 0
                            ListOfMissedChallengesIds.push(cur_chal_in_hw)
                        }
                    })
                }

                return (
                    {
                        dateHW: cur_hw.dateHw,
                        isDone: controlMultiply,
                        ListOfMissedChallengesIds: ListOfMissedChallengesIds,
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


    const thisUserStatHW = big.filter(user => user?.userId == user_id)[0]

    const numOfHwDone = thisUserStatHW?.thisUserListHWStat.filter(el => el.isDone).length
    const numOfHwNotDone = thisUserStatHW?.thisUserListHWStat.filter(el => !el.isDone).length


    let missedCIds: number[] = []
    thisUserStatHW?.thisUserListHWStat.map( cur_hw => {
        cur_hw.ListOfMissedChallengesIds.map(challenge_id => {
            missedCIds.push(challenge_id)
        })
    })

    








    return (
        <>
            <UnitBanner title={title} description={description} imgSrc={imgSrc} id={id} percentageDone={percentageDone} bgSvgSrc={bgSvgSrc}/>
            <div className="flex items-center flex-col relative">
                {lessons.map((lesson, index)=>{
                    const isCurrent = lesson.id === activeLesson?.id
                    const isLocked = !lesson.completed && !isCurrent
                    return (
                    <LessonButton 
                        key={lesson.id} 
                        id={lesson.id}
                        index={index}
                        totalCount={lessons.length - 1}
                        current={isCurrent} 
                        // locked={isLocked}
                        locked={false}
                        // percentage={activeLessonPercentage}
                        title={lesson.title}

                        lessonStat={lessonStat}
                        missedCIds={missedCIds}

                        challengeIdsInLesson = {lesson.challenges.map(el=>el.id) }

                        />)
                    })
                }
            </div>
        </>
    )
}