
"use client"

import { useEffect, useState, useTransition } from "react"
import Confetti from "react-confetti"
import { useAudio, useWindowSize } from "react-use"
import TrainerQuestion from "./trainer-question"
import { t_challenges, t_lessonProgress } from "@/db/schema"
import { Button } from "./ui/button"
import Lottie from "lottie-react"
import { Avatar, AvatarImage } from "./ui/avatar";


import LottieTrainerSharkFailDNO from '@/public/Lottie/trainer/LottieTrainerSharkFailDNO.json'

import LottieTrainerSharkStart from '@/public/Lottie/trainer/LottieTrainerSharkStart.json'
import LottieTrainerSharkStartUdachi from '@/public/Lottie/trainer/LottieTrainerSharkStartUdachi.json'
// import LottieStartDots from '@/public/Lottie/trainer/LottieStartDots.json'
import LottieStartMorning from '@/public/Lottie/trainer/LottieStartMorning.json'
import LottieStartPrivet from '@/public/Lottie/trainer/LottieStartPrivet.json'
import LottieStartYesCapitan from '@/public/Lottie/trainer/LottieStartYesCapitan.json'
import LottieTrainerSharkFinalWin from '@/public/Lottie/trainer/LottieTrainerSharkFinalWin.json'


import LottieTrainerSharkThinkin from '@/public/Lottie/trainer/LottieTrainerSharkThinkin.json'
import LottieTrainerSharkFailCry from '@/public/Lottie/trainer/LottieTrainerSharkFailCry.json'
import LottieStartDots from '@/public/Lottie/trainer/LottieStartDots.json'
import LottieTrainerSharkFinalNoo from '@/public/Lottie/trainer/LottieTrainerSharkFinalNoo.json'
import LottieTrainerSharkFasterPistol from '@/public/Lottie/trainer/LottieTrainerSharkFasterPistol.json'
import LottieTrainerSharkFinalWinClap from '@/public/Lottie/trainer/LottieTrainerSharkFinalWinClap.json'







import { toast } from "sonner"
import { upsertTrainerLessonProgress } from "@/actions/user-progress"
import { ArrowLeft, Badge, BadgeAlert, BadgeCheck, Check, TrendingDown, TrendingUp, X, Baby, Crown, Pizza, Zap, Trophy, Heart } from "lucide-react"
import { ShuffleTS } from "@/usefulFunctions"
import { ChartComponent } from "./chart-comp"
import { cn } from "@/lib/utils"
import { Separator } from "./ui/separator"
import { FinishTrainerStat } from "./finish-trainer-stat"
import { TgSendMsgCom } from "./tg-send-msg-com"
import { QuestionType } from "@/app/t-lesson/[t_lessonId]/page"






const LottieStartList = [
  LottieTrainerSharkStart, 
  LottieTrainerSharkStartUdachi,
  // LottieStartDots,
  LottieStartMorning,
  LottieStartPrivet,
  LottieStartYesCapitan,
]



const LottieEmotionRightList = [
  LottieStartDots, 
  LottieTrainerSharkThinkin,
  LottieTrainerSharkFinalWinClap,

]

const LottieEmotionWrongList = [
  LottieTrainerSharkFailCry, 
  LottieTrainerSharkFinalNoo,
  LottieTrainerSharkFasterPistol,

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
  
  t_lesson: typeof t_challenges.$inferSelect[]
  t_lessonProgress: typeof t_lessonProgress.$inferSelect[],

  questions1: QuestionType[],

  usersStat: {
    DR_DRP: number;
    user_id: string | undefined;
    user_name: string | undefined;
    user_imgSrc: string | undefined;
  }[],
  finishAudioSrc: string,
  userId: string,
  userName: string,
}


export default function TQuiz(
  {
    t_lessonId,
    t_lessonTitle, 
    t_lesson,
    t_lessonProgress,

    questions1,
    usersStat,
    finishAudioSrc,
    userId,
    userName,

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
  



  let finishAudioSrcList = [
    '/MemesAudio/meme-right-chetko.WAV',
    '/MemesAudio/meme-right-chinazes.WAV',
    '/MemesAudio/meme-right-umeetemogete.WAV',
  ]
  // let finishAudioSrc2 = ShuffleTS(finishAudioSrcList)[0]

  const [finishA, setFinishA] = useState(finishAudioSrcList[0])

  
  useEffect(()=>{
    setFinishA(ShuffleTS(finishAudioSrcList)[0])
  },[])



  //
  // Выбор сколько задач выдать в Lesson'e
  //
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

  }



  // const [righthAudio] = useAudio({src:'/correct.mp3', autoPlay: true})
  const [audioCorrect, _, controlsCorrect] = useAudio({src: '/correct.wav'})
  const [audioInCorrect, _c, controlsInCorrect] = useAudio({src: '/incorrect.wav'})





  const [finishAudio] = useAudio({src: finishA, autoPlay: true})
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

  // const [randomEmotionRightLottie, setRandomEmotionRightLottie] = useState(LottieEmotionRightList[0])
  // const [randomEmotionWrongLottie, setRandomEmotionWrongLottie] = useState(LottieEmotionWrongList[0])
  
  const [randomEmotionLottie, setRandomEmotionLottie] = useState(LottieEmotionRightList[0])
  // const [randomEmotionWrongLottie, setRandomEmotionWrongLottie] = useState(LottieEmotionWrongList[0])

  useEffect(()=>{
    setRandomStartLottie([...LottieStartList].sort(() => 0.5 - Math.random())[0])
    setRandomStartButton([...startButton].sort(() => 0.5 - Math.random())[0])
  }, [])







  const [isRightPrevious, setIsRightPrevious] = useState(true)





  const questions = allQuestions
  

  const initialState:number[] = questions.map((el, index) => index == 0 ? 3 : 0)
  
  const [isRightList, setIsRightList] = useState(initialState)
  
  const [finishList, setFinishList] = useState([{
    question: '',
    answer: '',
    rightAnswer: '',
    isRight: true,
  }])




  




  const startQuiz = () => {
    setQuizStarted(true)
    setCurrentQuestionIndex(0)
    setScore(0)
    setQuizCompleted(false)
    setAnsweredQuestions(0)
    setIsRightList(initialState)

    // setFinishList([{
    //   question: '',
    //   answer: '',
    //   rightAnswer: '',
    //   isRight: true,
    // }])


    setFinishList([])

  }



  function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }


  const handleAnswer = async (answer: string) => {
    
    setAnsweredQuestions(answeredQuestions + 1)




    let answerIsRight = false
    questions[currentQuestionIndex].questionType == 'ASSIST'
    ?
    answerIsRight = answer === questions[currentQuestionIndex].correctAnswer
    :
    answerIsRight = answer === "right"




    
    if (answerIsRight) {

      setIsRightPrevious(true)
      setRandomEmotionLottie([...LottieEmotionRightList].sort(() => 0.5 - Math.random())[0])


      // Анимация Зеленым фоном вверх при правильном ответе
      //
      const body = document.querySelector("body")
      body?.classList.add("trainer-slide-up-transition")

      await sleep(200)
    
    



      // РЕШЕНО ПРАВИЛЬНО  1
      //
      if (questions[currentQuestionIndex].questionType == 'ASSIST') {
        controlsCorrect.play()
      }
      // controlsCorrect.play()

      setFinishList(oldArray => [...oldArray, {
        question: questions[currentQuestionIndex].question,
        answer: answer,
        rightAnswer: questions[currentQuestionIndex].correctAnswer,
        isRight: true,
      }])


      setScore(score + 1)

      let newArr = [...isRightList]
      newArr[currentQuestionIndex] = 1


      if (currentQuestionIndex < questions.length - 1){
        newArr[currentQuestionIndex+1] = 3
      }
      
      
      setIsRightList(newArr)



      await sleep(200)

      body?.classList.remove ("trainer-slide-up-transition")




    } else 
    
    {
      // РЕШЕНО НЕПРАВИЛЬНО  2

      setIsRightPrevious(false)
      // setRandomEmotionLottie([...LottieEmotionWrongList].sort(() => 0.5 - Math.random())[0])
      setRandomEmotionLottie([...LottieEmotionRightList].sort(() => 0.5 - Math.random())[0])


      // Анимация Красным фоном вниз при НЕправильном ответе
      //
      const body = document.querySelector("body")
      body?.classList.add("trainer-slide-down-transition")
      await sleep(200)



      if (questions[currentQuestionIndex].questionType == 'ASSIST') {
        controlsInCorrect.play()
      }
      // controlsInCorrect.play()

      setFinishList(oldArray => [...oldArray, {
        question: questions[currentQuestionIndex].question,
        answer: answer,
        rightAnswer: questions[currentQuestionIndex].correctAnswer,
        isRight: false,
      }])

      let newArr = [...isRightList]
      newArr[currentQuestionIndex] = 2


      if (currentQuestionIndex < questions.length - 1){
        newArr[currentQuestionIndex+1] = 3
      }

      setIsRightList(newArr)



      await sleep(200)

      body?.classList.remove ("trainer-slide-down-transition")
    
    }



    











    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      

    } else {


      // TODO:    обновляем БД
      
      setQuizCompleted(true)

      let doneRightPercent =  Math.round( (score + 1) / ( questions.length ) * 100 )

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
        


        <ChartComponent TrainingProgressMonth = {TrainingProgressMonth}/>


        <div className="mt-4 flex justify-center gap-8">
          <div className="flex">
            <Check
              className={cn("h-8 w-8 stroke-gray-600")}
            />
            <p className="pt-1 pl-2">{totalD}</p>
          </div>
        

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
          количество заданий
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

          <Button onClick={()=>window.location.href = `/trainer`} >
            <div className="gap-2 flex">
              <ArrowLeft />
            </div>
          </Button>

          <Button variant='primary' onClick={startQuiz} >
            {randomStartButton}
          </Button>

        </div>

        <Separator className="mt-12 h-0.5 rounded-full w-full" />


        <div className="mt-6 mb-20 w-full">
            
            
            

              <ul className="grid grid-cols-5 gap-y-4 ">

                <li key={3313} className="col-span-2 flex justify-center ">
                  <Trophy
                    className= {cn("h-7 w-7 pt-1  fill-yellow-300 stroke-yellow-400")}
                  />
                </li>

                  

                <li key={33132} className="col-span-2 flex justify-center">
                  <Heart
                    className= {cn("h-7 w-7 pt-1  fill-yellow-300 stroke-yellow-400")}
                  />  
                </li>


                  
                <li key={33131} className="flex justify-center">
                  <Zap
                    className={cn("h-7 w-7 pt-1  fill-yellow-300 stroke-yellow-400")}
                  />
                </li>

                

                {usersStat.map((el, index)=> 

                  <>

                    <li className="pt-5 col-span-2 flex justify-center" key={index*722137}>
                      {index + 1}
                    </li>

                      
                    <li className="col-span-2 flex justify-center" key={index*7137}>
                      <div key={index*18} className={el.user_id == userId 
                      ? "flex flex-1 gap-2 items-center border-dashed border-2 border-gray-300 rounded-lg p-2"
                      : "flex flex-1 gap-2 items-center rounded-lg p-3"
                      }>

                        <Avatar>
                          <AvatarImage 
                              className="object-cover"
                              src={el.user_imgSrc}
                          />
                        </Avatar>  

                        {el.user_name}
                      </div>
                    </li>



                    <li className="pt-5 flex justify-center" key={index*73437}>
                      {el.DR_DRP}
                    </li>

                  </>

                )}


              </ul>

            </div>


        


      </div>
    )}




  // let doneRightPercent = 100
  const trainingPts = 200


  



  // TODO:  Завершили 

  if (quizCompleted) {

    const isPerfectScore = score === questions.length

    
  
    const numQuestions = finishList.length
    const numQuestionsRight = finishList.filter(el => el.isRight).length
    const message = `✅ ${userName}  ${t_lessonTitle} ${numQuestionsRight-1} / ${numQuestions-1}`

   


    return (
      <>
      {finishAudio}
      <div className="text-center content-center mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          {t_lessonTitle}
        </h1>


        <TgSendMsgCom message={message} />




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
        className="h-80 w-80 mx-auto"
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

        <div className="pt-8">
          <Separator />
        </div>

         <FinishTrainerStat finishList = {finishList} />
       


        






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

      {/* <h1 className="text-xl font-bold mt-6">
        {t_lessonTitle}
      </h1> */}
      
      
      
      <TrainerQuestion 
        questions={questions}
        question={questions[currentQuestionIndex]} 
        onAnswer={handleAnswer} 
        onTimeout={handleTimeout} 
        isRightList={isRightList}

        isRightPrevious={isRightPrevious}
        randomEmotionLottie={randomEmotionLottie}
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



