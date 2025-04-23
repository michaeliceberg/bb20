import { getAllTLessonProgress, getAllUsersProgress, getTLesson, getTLessonProgress, getTUnits, getUserProgress } from "@/db/queries"
import { redirect } from "next/navigation"
import { Shuffle2, ShuffleTS } from "@/usefulFunctions"
import TQuiz from "@/components/TQUIZ"



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



    // let challengesCONNECT = t_lesson.t_challenges.filter(t_challenge => t_challenge.type == 'CONNECT')

    // let questionsConnect = challengesCONNECT.map(t_challenge => ({
    //     questionType: t_challenge.type,
    //     question: t_challenge.question,

    //     optionsQ: [
    //         {optQ1: t_challenge.t_challengeOptions[0]},
    //         {optQ2: t_challenge.t_challengeOptions[1]},
    //         {optQ3: t_challenge.t_challengeOptions[2]},
    //     ],
    //     optionsA: [
    //         {optA1: t_challenge.t_challengeOptions[3]},
    //         {optA2: t_challenge.t_challengeOptions[4]},
    //         {optA3: t_challenge.t_challengeOptions[5]},
    //     ],
    //     timeLimit: 1500,
    // }))

    // const randomForSlider = 1


    interface optionsConnectType {
        optionsQ : [{optQ1: string}, {optQ2: string}, {optQ3: string}]
        optionsA : [{optA1: string}, {optA2: string}, {optA3: string}]
    }


    // interface optionsQType: {
    //     optQ1: string;
    //     pairId: string;
    //     optQ2?: string
    // }



    console.log( t_lesson.t_challenges )

    let questions = t_lesson.t_challenges.map(t_challenge => (
        {
            questionType: t_challenge.type,
            question: t_challenge.question,
            imageSrc: t_challenge.imageSrc, //string | null
            options: Shuffle2(t_challenge.t_challengeOptions.map(el => el.text)),

            optionsQ : ShuffleTS([
                {
                    optQ: t_challenge.t_challengeOptions[0].text,
                    pairId: 0,
                    id: t_challenge.t_challengeOptions[0].id,
                }, 
                {
                    optQ: t_challenge.t_challengeOptions[1].text,
                    pairId: 1,
                    id: t_challenge.t_challengeOptions[1].id,
                }, 
                {
                    optQ: t_challenge.t_challengeOptions[2].text,
                    pairId: 2,
                    id: t_challenge.t_challengeOptions[2].id,
                }, 

            ]),
            optionsA: ShuffleTS([
                {
                    optA: t_challenge.t_challengeOptions[3].text,
                    pairId: 0,
                    id: t_challenge.t_challengeOptions[3].id,

                },
                {
                    optA: t_challenge.t_challengeOptions[4].text,
                    pairId: 1,
                    id: t_challenge.t_challengeOptions[4].id,

                },
                {
                    optA: t_challenge.t_challengeOptions[5].text,
                    pairId: 2,
                    id: t_challenge.t_challengeOptions[5].id,

                }
            ]),

            
            optionsConstructRight: [t_challenge.t_challengeOptions[0].text, t_challenge.t_challengeOptions[1].text, t_challenge.t_challengeOptions[2].text],          
          
            
            correctAnswer: t_challenge.t_challengeOptions[0].text,
            // timeLimit: t_challenge.points,
            timeLimit: 1000,
            // timeLimit: 1234,
        }
    
    ))

    

    

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
            t_lessonId={t_lesson.id} 
            t_lessonTitle = {t_lesson.title} 
            t_lesson={t_lesson.t_challenges} 
            t_lessonProgress={t_lessonProgress}

            questions1={questions}
            usersStat={usersStat}
            finishAudioSrc={finishAudioSrc}
            userId={userProgress.userId}
            userName={userProgress.userName}
            
        />     
                   
    )
}

export default LessonIdPage
