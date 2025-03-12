import { getChallengeProgress, getLesson, getTLesson, getTLessonProgress, getUserProgress } from "@/db/queries"
import { redirect } from "next/navigation"
import { Quiz } from "../quiz"
import { getUserPointsHearts } from "@/usefulFunctions"
import TQuiz from "@/components/trainer"

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


    return(

        <TQuiz 
            t_lesson={t_lesson.t_challenges} 
            t_lessonId={t_lesson.id} 
            t_lessonTitle = {t_lesson.title} 
            t_lessonProgress={t_lessonProgress}
        />     
                   
    )
}

export default LessonIdPage
