import { getAllTLessonProgress, getAllUsersProgress, getChallengeProgress, getLesson, getTLesson, getTLessonProgress, getTUnits, getUserProgress } from "@/db/queries"
import { redirect } from "next/navigation"
import { Quiz } from "../quiz"
import { Shuffle2, ShuffleTS, getUserPointsHearts } from "@/usefulFunctions"
import TQuiz from "@/components/TQUIZ"
import { useEffect } from "react"



interface USStype {
    DR_DRP: number;
    user_id: string | undefined;
    user_name: string | undefined;
}



type Props = {
    params: {
        t_lessonId: number
    }
}



const LessonIdPage =  async ({
    params,
}: Props) => {
    // const lessonData = getLesson(params.t_lessonId)
    const lessonData = getTLesson(params.t_lessonId)
    const userProgressData = getUserProgress()
    const userTLessonProgressData = getTLessonProgress()



    const t_unitsData = getTUnits()
	const userAllTLessonProgressData = getAllTLessonProgress()
	const allUsersProgressData = getAllUsersProgress()


    

    const [
        t_lesson,
        userProgress,
        t_lessonProgress,

        all_t_lessonProgress,
		allUsersProgress,

        
    ] = await Promise.all([
        lessonData,
        userProgressData,
        userTLessonProgressData,

        userAllTLessonProgressData,
		allUsersProgressData,
    ])

    if (!t_lesson || !userProgress){
        redirect('/trainer')
    }


    let questions = t_lesson.t_challenges.map(t_challenge => (
        {
          question: t_challenge.question,
          options: Shuffle2(t_challenge.t_challengeOptions.map(el => el.text)),
          correctAnswer: t_challenge.t_challengeOptions[0].text,
          timeLimit: 10,
        }))

    

    questions = ShuffleTS(questions)
  
    
    
  


    const currentLessonProgress = all_t_lessonProgress.filter(el => el.t_lessonId == params.t_lessonId)


    const UniqueUserIds = currentLessonProgress.map(el => el.userId)
    .filter(
        (value, index, current_value) => current_value.indexOf(value) === index
    );



    const usersStat = UniqueUserIds.map(user_id => {
        const CLCUProgress = currentLessonProgress.filter(progress => progress.userId == user_id)

        let DRP = 0

        const doneRight = CLCUProgress.reduce((total, elem) => {
            return (
                total + elem.doneRight
            )
        }, 0)

        const doneWrong = CLCUProgress.reduce((total, elem) => {
            return (
                total + elem.doneRight
            )
        }, 0)

        if (doneRight + doneWrong > 0) {
            DRP = doneRight/(doneRight + doneWrong)
        }

        const DR_DRP = doneRight * DRP

        return  {
            DR_DRP: DR_DRP,
            user_id: allUsersProgress?.filter(pr => pr.userId==user_id)[0].userId,
            user_name: allUsersProgress?.filter(pr => pr.userId==user_id)[0].userName,
            user_imgSrc: allUsersProgress?.filter(pr => pr.userId==user_id)[0].userImageSrc,
        }
    
    })

    usersStat.sort((a, b) => b.DR_DRP - a.DR_DRP)


    // console.log(usersStat)
	// 	return {t_lesson_id: t_lesson_id, usersSortedStat: usersStat}
    





    // const UniqueLessonIds = all_t_lessonProgress.map(el => el.t_lessonId)
	//   .filter(
	// 	  (value, index, current_value) => current_value.indexOf(value) === index
	//   );

	// const TRatingUsers = UniqueLessonIds.map(t_lesson_id => {

	// 	const currentLessonProgress = all_t_lessonProgress.filter(progress => progress.t_lessonId == t_lesson_id)

	// 	const UniqueUserIds = currentLessonProgress.map(el => el.userId)
	// 	.filter(
	// 		(value, index, current_value) => current_value.indexOf(value) === index
	// 	);


	// 	const usersStat = UniqueUserIds.map(user_id => {
	// 		const CLCUProgress = currentLessonProgress.filter(progress => progress.userId == user_id)

	// 		let DRP = 0

	// 		const doneRight = CLCUProgress.reduce((total, elem) => {
	// 			return (
	// 				total + elem.doneRight
	// 			)
	// 		}, 0)

	// 		const doneWrong = CLCUProgress.reduce((total, elem) => {
	// 			return (
	// 				total + elem.doneRight
	// 			)
	// 		}, 0)

	// 		if (doneRight + doneWrong > 0) {
	// 			DRP = doneRight/(doneRight + doneWrong)
	// 		}

	// 		const DR_DRP = doneRight * DRP

	// 		return  {
	// 			DR_DRP: DR_DRP,
	// 			user_id: allUsersProgress?.filter(pr => pr.userId==user_id)[0].userId,
	// 			user_name: allUsersProgress?.filter(pr => pr.userId==user_id)[0].userName,
	// 		}
		
	// 	})

    //     console.log(usersStat)

	// 	usersStat.sort((a, b) => b.DR_DRP - a.DR_DRP)

	// 	return {t_lesson_id: t_lesson_id, usersSortedStat: usersStat}

    // })


    // let ratingPosition_inThisLesson = -1
    // //
    // let usersSortedStat_inThisLesson: USStype[] =[]
    // if (TRatingUsers.filter(el=>el.t_lesson_id == t_lesson.id)[0]) {
    //     usersSortedStat_inThisLesson = TRatingUsers.filter(el=>el.t_lesson_id == t_lesson.id)[0].usersSortedStat.filter(el=>el.user_id == userProgress.userId)
    //     ratingPosition_inThisLesson = usersSortedStat_inThisLesson.findIndex(x => x.user_id === userProgress.userId) + 1;
    // }

    // // console.log(usersSortedStat_inThisLesson)





    let finishAudioSrcList = ['/MemesAudio/meme-right-chetko.WAV',
                        '/MemesAudio/meme-right-chinazes.WAV',
                        '/MemesAudio/meme-right-umeetemogete.WAV',
                        ]
    let finishAudioSrc = ShuffleTS(finishAudioSrcList)[0]

    // useEffect(()=>{
    //     finishAudioSrc = ShuffleTS(finishAudioSrcList)[0]
    // },)
    





    return(

        <TQuiz 
            t_lesson={t_lesson.t_challenges} 
            t_lessonId={t_lesson.id} 
            t_lessonTitle = {t_lesson.title} 
            t_lessonProgress={t_lessonProgress}

            questions1={questions}
            usersStat={usersStat}
            finishAudioSrc={finishAudioSrc}
        />     
                   
    )
}

export default LessonIdPage
