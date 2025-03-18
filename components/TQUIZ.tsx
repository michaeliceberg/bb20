
"use client"

import { useCallback, useEffect, useState, useTransition } from "react"
import Confetti from "react-confetti"
import { useAudio, useKey, useWindowSize } from "react-use"
import TrainerQuestion from "./trainer-question"
import { t_challengeOptions, t_lessonProgress } from "@/db/schema"
import { Button } from "./ui/button"
import Lottie from "lottie-react"



import LottieTrainerSharkFailDNO from '@/public/Lottie/trainer/LottieTrainerSharkFailDNO.json'

import LottieTrainerSharkStart from '@/public/Lottie/trainer/LottieTrainerSharkStart.json'
import LottieTrainerSharkStartUdachi from '@/public/Lottie/trainer/LottieTrainerSharkStartUdachi.json'
import LottieStartDots from '@/public/Lottie/trainer/LottieStartDots.json'
import LottieStartMorning from '@/public/Lottie/trainer/LottieStartMorning.json'
import LottieStartPrivet from '@/public/Lottie/trainer/LottieStartPrivet.json'
import LottieStartYesCapitan from '@/public/Lottie/trainer/LottieStartYesCapitan.json'
import LottieTrainerSharkFinalWin from '@/public/Lottie/trainer/LottieTrainerSharkFinalWin.json'




import { toast } from "sonner"
import { upsertTrainerLessonProgress } from "@/actions/user-progress"
import { ArrowLeft, Badge, BadgeAlert, BadgeCheck, Check, TrendingDown, TrendingUp, X, Baby, Crown, Pizza } from "lucide-react"
import { Shuffle2 } from "@/usefulFunctions"
import { ChartComponent } from "./chart-comp"
import moment from "moment"
import { cn } from "@/lib/utils"
import Image from "next/image"






const LottieStartList = [
  LottieTrainerSharkStart, 
  LottieTrainerSharkStartUdachi,
  LottieStartDots,
  LottieStartMorning,
  LottieStartPrivet,
  LottieStartYesCapitan,
]

const startButton = [
  'Погнали!',
  'Гоу!',
  'Старт!',
  'Поехали!',
  'Поплыли!',
]


type Props = {
  t_lessonId: number,
  t_lessonTitle: string,
  
  t_lesson: 
    {
      id: number,
      t_lessonId: number,
      type:  "SELECT" | "ASSIST"
      question: string,
      order: number,
      points: number,
      author: string,
      t_challengeOptions: typeof t_challengeOptions.$inferSelect[],
      // challengeProgress: number[],
    }[],
    t_lessonProgress: typeof t_lessonProgress.$inferSelect[],

    questions1: {
      question: string;
      options: string[];
      correctAnswer: string;
      timeLimit: number;
  }[]
}




export default function TQuiz(
  {
    t_lessonId,
    t_lessonTitle, 
    t_lesson,
    t_lessonProgress,


    questions1,

  } : Props) {
  const [pending, startTransition] = useTransition()
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState(0)
  const { width, height } = useWindowSize()




  const [allQuestions, setAllQuestions] = useState(questions1.slice(0, Math.round(questions1.length*0.3)))
  const [numQuestionsButton, setNumQuestionsButton] = useState(0)
  

  const handleNumQuestions = (n: number) => {

    if (n == 0) {
      setAllQuestions(questions1.slice(0, Math.round(questions1.length*0.3)))
    }
    if (n == 1) {
      setAllQuestions(questions1.slice(0, Math.round(questions1.length*0.6)))
    }
    if (n == 2) {
      setAllQuestions(questions1)
    }


    setNumQuestionsButton(n) 

    console.log(allQuestions)
  }



  // const [righthAudio] = useAudio({src:'/correct.mp3', autoPlay: true})
  const [audioCorrect, _, controlsCorrect] = useAudio({src: '/correct.wav'})
  const [audioInCorrect, _c, controlsInCorrect] = useAudio({src: '/incorrect.wav'})


  const [finishAudio] = useAudio({src:'/MemesAudio/meme-right-chetko.WAV', autoPlay: true})
  // const [audio, _, controls] = useAudio({src: '/correct.wav'})
  // const [audio, _, controls] = useAudio({src: '/MemesAudio/meme-right-chetko.WAV'})


  const t_lessonProgressThisLesson =  t_lessonProgress.filter(lessonProgress => lessonProgress.t_lessonId == t_lessonId)
  

  const PTLByMonth = t_lessonProgressThisLesson.map(el => (
    {
      doneRight: el.doneRight,
      doneWrong: el.doneWrong,
      month: el.dateDone.getMonth(),
      trainingPts: el.trainingPts,
      doneRightPercent: el.doneRightPercent,
    }
  ))



  const uniqueMonths = PTLByMonth.map(item => item.month)
  .filter((value, index, self) => self.indexOf(value) === index)




  const doneRightSumList = uniqueMonths.map(month => (
    PTLByMonth.filter(el => el.month == month).reduce((total, elem) => {
      return (
        total + elem.doneRight
      )
    }, 0)
  ))

  const doneWrongSumList = uniqueMonths.map(month => (
    PTLByMonth.filter(el => el.month == month).reduce((total, elem) => {
      return (
        total + elem.doneWrong
      )
    }, 0)
  ))

  const monthTable = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрб', 'Ноябрь', 'Декарбрь']
  const TrainingProgressMonth = uniqueMonths.map((m, index) => ({
    month: monthTable[m],
    doneRight: doneRightSumList[index],
    doneWrong: doneWrongSumList[index],
  }))

  const totalDR = TrainingProgressMonth.reduce((total, elem) => {
  return (
    total + elem.doneRight
  )}, 0)
  const totalDW = TrainingProgressMonth.reduce((total, elem) => {
    return (
      total + elem.doneWrong
    )}, 0)
  
  let totalPercentDR = 0
  const totalD = totalDR+totalDW
  if (totalDR > 0) {
    totalPercentDR = totalDR/(totalD)
  }
  



  












  // const Icon = title.slice(-1) === '3' ? Skull 
  // : title.slice(-1) === '4' ? Cake 
  // : isLast ? Crown 
  // : Star


  const [randomStartLottie, setRandomStartLottie] = useState(LottieStartList[0])
  const [randomStartButton, setRandomStartButton] = useState(startButton[0])
  
  useEffect(()=>{
    setRandomStartLottie([...LottieStartList].sort(() => 0.5 - Math.random())[0])
    setRandomStartButton([...startButton].sort(() => 0.5 - Math.random())[0])
  }, [])













  // let questions = t_lesson.map(t_challenge => (
  //   {
  //     question: t_challenge.question,
  //     options: Shuffle2(t_challenge.t_challengeOptions.map(el => el.text)),
  //     correctAnswer: t_challenge.t_challengeOptions[0].text,
  //     timeLimit: 10,
  //   }))





  // useEffect(()=>{
  //     let questions = t_lesson.map(t_challenge => (
  //   {
  //     question: t_challenge.question,
  //     options: Shuffle2(t_challenge.t_challengeOptions.map(el => el.text)),
  //     correctAnswer: t_challenge.t_challengeOptions[0].text,
  //     timeLimit: 10,
  //   }))

  // }, [currentQuestionIndex])



  // let questionShuffled = [...questions].sort(() => 0.5 - Math.random());
  // questions = questionShuffled


  // const questions = questions1
  const questions = allQuestions
  // allQuestions
  

  const initialState:number[] = questions.map((el, index) => index == 0 ? 3 : 0)
  
  const [isRightList, setIsRightList] = useState(initialState)
  const IconList = {
      right: BadgeCheck,
      wrong: BadgeAlert,
      empty: Badge,
  }

  









//   const handleClick = useCallback(()=>{
//     // if (disabled) return


//     controls.play()
//     // onClick()

//     // open()


// },[
//     disabled, 
//     onClick, 
//     // controls
// ])

// useKey(shortcut, handleClick, {}, [handleClick])






  
  const startQuiz = () => {
    setQuizStarted(true)
    setCurrentQuestionIndex(0)
    setScore(0)
    setQuizCompleted(false)
    setAnsweredQuestions(0)
    setIsRightList(initialState)

  }

  // let newArr = [0]

  const handleAnswer = (answer: string) => {
    

    
    
    setAnsweredQuestions(answeredQuestions + 1)

    if (answer === questions[currentQuestionIndex].correctAnswer) {






      // РЕШЕНО ПРАВИЛЬНО  1
      //
      controlsCorrect.play()

      setScore(score + 1)

      let newArr = [...isRightList]
      newArr[currentQuestionIndex] = 1


      if (currentQuestionIndex < questions.length - 1){
        newArr[currentQuestionIndex+1] = 3
      }
      
      
      setIsRightList(newArr)








    } else {
      // РЕШЕНО НЕПРАВИЛЬНО  2
      
      controlsInCorrect.play()

      let newArr = [...isRightList]
      newArr[currentQuestionIndex] = 2


      if (currentQuestionIndex < questions.length - 1){
        newArr[currentQuestionIndex+1] = 3
      }

      setIsRightList(newArr)

    }












    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      

    } else {


      // TODO:    обновляем БД
      
      setQuizCompleted(true)


      upsertTrainerLessonProgress(t_lessonId, doneRightPercent, trainingPts, score + 1, questions.length - score - 1)
      .catch(()=>toast.error('Что-то пошло не так! Результат не добавлен в базу данных.'))
  
    }
  }

  const handleTimeout = () => {
    
    controlsInCorrect.play()
    setAnsweredQuestions(answeredQuestions + 1)


    let newArr = [...isRightList]
    newArr[currentQuestionIndex] = 2
    if (currentQuestionIndex < questions.length - 1){
      newArr[currentQuestionIndex+1] = 3
    }
    setIsRightList(newArr)


    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setQuizCompleted(true)


      // TODO: (если на последний вопрос не дал ответа) 
      // upsert БД но ОДИН раз (почему-то делает 2 раза)


    }
  }







  //TODO:     ЕЩЕ НЕ СТАРТАНУЛИ
  //
  if (!quizStarted) {
    return (
      <div className="text-center content-center mx-auto">
        
        <h1 className="text-3xl font-bold mb-6 mt-6">
          {t_lessonTitle}
        </h1>
        
        {/* <h1 className="text-xl font-bold mb-6">
          {questions.length} вопросов
        </h1>
 */}



      <ChartComponent TrainingProgressMonth = {TrainingProgressMonth}/>


      <div className="mt-4 flex justify-center gap-8">
        <div className="flex">
        <Check
          className={cn("h-8 w-8 stroke-gray-600")}
        />
        <p className="pt-1 pl-2">{totalD}</p>
      </div>
      
      {/* fill-green-400 stroke-red-400 */}

      <div className="flex">

        {Math.round(totalPercentDR*100) > 80 
        
        ? 
        
        <TrendingUp
          className={cn("h-8 w-8  stroke-green-600")}
        />

        :

        <TrendingDown
          className={cn("h-8 w-8  stroke-red-600")}
        /> 
        }
        

 


        <p className="pt-1 pl-2">{Math.round(totalPercentDR*100)} %</p>
        </div>
      </div>


        <Lottie                
          animationData={ randomStartLottie } 
        className="h-40 w-40 mt-4 mx-auto"
        />


        <p className="text-sm mt-5">
          заданий
        </p>
        <div className="flex gap-3 justify-center mt-2">
          <Button className="gap-2" variant={numQuestionsButton == 0 ? 'super' : 'default'} onClick={()=>{handleNumQuestions(0)}}>
            <Baby />
            {Math.round(questions1.length*0.3)}
          </Button>

          <Button className="gap-2" variant={numQuestionsButton == 1 ? 'super' : 'default'} onClick={()=>{handleNumQuestions(1)}}>
            <Pizza />
            {Math.round(questions1.length*0.6)}
          </Button>

          <Button className="gap-2" variant={numQuestionsButton == 2 ? 'super' : 'default'} onClick={()=>{handleNumQuestions(2)}}>
            
            {questions1.length}
            <Crown />
          </Button>

        </div>

        <div className="flex gap-3 justify-center mt-6">



        <Button 
                // className='ml-4'
                // size='sm' 
                // variant='danger'
                onClick={()=>window.location.href = `/trainer`}
                >
                  <div className="gap-2 flex">
                    <ArrowLeft />
                    {/* <Image
                      src='/menu/trainer.svg'
                      height='30'
                      width='30'
                      alt='trainer'
                    /> */}
                    
                    {/* <Home /> */}
                  
                  </div>
                {/* {t_lesson.title} */}
        </Button>
        <Button
          // className="ml-4"
          variant='primary'
          onClick={startQuiz}
        >
          {randomStartButton}
        </Button>

        </div>
      </div>
    )
  }




  const doneRightPercent = 100

  const trainingPts = 200




  // if (quizCompleted && !isDbUpdated) {

  //   const isPerfectScore = score === questions.length

  //   startTransition(()=> {

  //     if (pending) return;
  //     // openR()

  //     // upsertChallengeProgress(challenge.id, TrueValue, oldCourseProgress, activeCourseTitle, challenge.points, isDoneChallenge)

  //     upsertTrainerLessonProgress(t_lessonId, doneRightPercent, trainingPts)
  //     // .then(()=>{setIsDbUpdated(true)})
  //     .catch(()=>toast.error('Что-то пошло не так! Результат не добавлен в базу данных.'))
  //   })




  // TODO:  Завершили 

  if (quizCompleted) {

    const isPerfectScore = score === questions.length

    
    return (
      <>
      {finishAudio}
      <div className="text-center content-center mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          {t_lessonTitle}
        </h1>
        
        <h2 className="text-2xl font-bold mb-4">
          Завершено!
        </h2>
        
        {isPerfectScore && 
          <Confetti width={width} height={height} />
        }
        
        <p className={`text-xl ${isPerfectScore ? "text-green-600 font-bold" : ""}`}>
          Правильно {score} из {questions.length}
        </p>



        <Lottie 
                animationData={ score / questions.length < 0.8 ? LottieTrainerSharkFailDNO : LottieTrainerSharkFinalWin } 
        className="h-80 w-80"
        />





        <Button
          onClick={startQuiz}
          className="mt-4"
          variant='primary'
        >
          Давай ещё раз
        </Button>

        <div>
          <Button 
                  className='mt-4'
                  // size='sm' 
                  variant='primaryOutline'
                  onClick={()=>window.location.href = `/t-lesson/${t_lessonId}`}
                  >
                      Завершить
                  {/* {t_lesson.title} */}
          </Button>
        </div>
      </div>
      </>
    )
  }




  // TODO:    идёт КВИЗ
  return (
    
    <>
    {audioCorrect}
    {audioInCorrect}
    

    <div className="w-full max-w-xl mx-auto text-center">
      <h1 className="text-xl font-bold mt-6">
        {t_lessonTitle}
      </h1>
      
      
      
      <TrainerQuestion 
        questions={questions}
        question={questions[currentQuestionIndex]} 
        onAnswer={handleAnswer} 
        onTimeout={handleTimeout} 
        isRightList={isRightList}
      />
      
     

      <p className="mt-4 text-center">
        <Button 
          variant='dangerOutline'
          className="gap-2"
          onClick={()=>window.location.href = `/t-lesson/${t_lessonId}`}
        >
          <X size='18'/>
          завершить
        </Button>
      </p>


    </div>
    </>
  )
}


















