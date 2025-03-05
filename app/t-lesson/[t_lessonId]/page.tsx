import { getChallengeProgress, getLesson, getTLesson, getUserProgress } from "@/db/queries"
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


    

    const [
        t_lesson,
        userProgress,
    ] = await Promise.all([
        lessonData,
        userProgressData,
    ])

    if (!t_lesson || !userProgress){
        redirect('/trainer')
    }


    

    return(

        // <div>hello</div>
        <TQuiz t_lesson={t_lesson.t_challenges} t_lessonTitle = {t_lesson.title}/>     
            
       
    )
}

export default LessonIdPage
