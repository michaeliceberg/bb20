import { getAllClassHW, getAllUsers, getChallengeProgress, getLesson, getUserProgress } from "@/db/queries"
import { redirect } from "next/navigation"
import { Quiz } from "./quiz"
import { SuperType } from "@/db/schema"
import { getUserPointsHearts } from "@/usefulFunctions"



const LessonPage =  async () => {
    const lessonData = getLesson()
    const userProgressData = getUserProgress()
    const challengeProgressData = getChallengeProgress()

    const allClassHWData = getAllClassHW()
    const allUsersData = getAllUsers()

    const [
        lesson,
        userProgress,
        challengeProgress,

        allClassHW,
		allUsers,

    ] = await Promise.all([
        lessonData,
        userProgressData,
        challengeProgressData,

        allClassHWData,
		allUsersData,
    ])

    if (!lesson || !userProgress || !challengeProgress){
        redirect('/learn')
    }


    const initialPercentage = lesson.challenges
    .filter((challenge)=>challenge.completed)
    .length / lesson.challenges.length * 100


    // ========NOt in brackets=======

    
    const activeCourseTitle = !!userProgress.activeCourse 
    ? userProgress.activeCourse.title 
    : ''



    let oldCourseProgress : SuperType = userProgress.courseProgress 
    
    // if (oldCourseProgress instanceof Array) {
    //     oldCourseProgress.findIndex( el => el.course === activeCourseTitle )
    // }

    // let initialHearts = userProgress.courseProgress[0].progress[0].hearts

    const [initialPoints, initialHearts, initialGems] = getUserPointsHearts(userProgress)










    const usersThisClass = allUsers.filter(user=>user.classId == userProgress.classId)

    const thisClassHW = allClassHW?.filter(el => el.classId == userProgress.classId)


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
                if (hw_casual_string != null && hw_casual_string != "") {
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


    const thisUserStatHW = big.filter(user => user?.userId == userProgress.userId)[0]

    const numOfHwDone = thisUserStatHW?.thisUserListHWStat.filter(el => el.isDone).length
    const numOfHwNotDone = thisUserStatHW?.thisUserListHWStat.filter(el => !el.isDone).length


    let missedCIds: number[] = []
    thisUserStatHW?.thisUserListHWStat.map( cur_hw => {
        cur_hw.ListOfMissedChallengesIds.map(challenge_id => {
            missedCIds.push(challenge_id)
        })
    })




    return(
       
        <Quiz 
            initialLessonId={lesson.id}
            initialLessonChallenges={lesson.challenges}
            // initialHearts={userProgress.hearts}
            initialHearts={initialHearts}
            initialPercentage = {initialPercentage}
            userSubscription={null}
            challengeProgress={challengeProgress}
            lessonTitle={lesson.title}

            oldCourseProgress={oldCourseProgress}
            activeCourseTitle={activeCourseTitle}

            missedCIds={missedCIds}
        />
    )
}

export default LessonPage