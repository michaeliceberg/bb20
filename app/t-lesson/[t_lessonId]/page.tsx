import { getChallengeProgress, getLesson, getTLesson, getTLessonProgress, getUserProgress } from "@/db/queries"
import { redirect } from "next/navigation"
import { Quiz } from "../quiz"
import { Shuffle2, ShuffleTS, getUserPointsHearts } from "@/usefulFunctions"
import TQuiz from "@/components/TQUIZ"


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

    

    const [
        t_lesson,
        userProgress,
        t_lessonProgress,
    ] = await Promise.all([
        lessonData,
        userProgressData,
        userTLessonProgressData,
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
  
    
    


    return(

        <TQuiz 
            t_lesson={t_lesson.t_challenges} 
            t_lessonId={t_lesson.id} 
            t_lessonTitle = {t_lesson.title} 
            t_lessonProgress={t_lessonProgress}

            questions1={questions}
        />     
                   
    )
}

export default LessonIdPage
