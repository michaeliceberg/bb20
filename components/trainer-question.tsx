
"use client"

import { useState, useEffect, useRef } from "react"
import Lottie from "lottie-react"

import LottieOclockBlue from '@/public/Lottie/trainer/LottieOclockBlue.json'

import { Check, Circle, Flame, X } from "lucide-react"
import { cn } from "@/lib/utils";
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';


import { useAudio } from "react-use"

import Image from "next/image"
import { QuestionType } from "@/app/t-lesson/[t_lessonId]/page"
import { TypeAssist } from "@/app/t-lesson/[t_lessonId]/type-assist"
import { TypeSlider } from "@/app/t-lesson/[t_lessonId]/type-slider"
import { TypeConnect } from "@/app/t-lesson/[t_lessonId]/type-connect"
import { TypeWorkbook } from "@/app/t-lesson/[t_lessonId]/type-workbook"
import { TypeConstructor } from "@/app/t-lesson/[t_lessonId]/type-constructor"
import { AnimRightTriangleSin } from "@/app/(main)/motiontest/AnimRightTriangleSin"
import { TypeAssistTRIANGLE } from "@/app/t-lesson/[t_lessonId]/type-assist-triangle"


interface QuestionProps {
  questions: QuestionType[],
  question: QuestionType,

  isRightList: number[]

  onAnswer: (answer: string) => void
  onTimeout: () => void

  isRightPrevious: boolean
  randomEmotionLottie: any
}

export default function TrainerQuestion({
  questions, 
  isRightList, 
  question, 
  onAnswer, 
  onTimeout, 
  isRightPrevious,
  randomEmotionLottie,

}: QuestionProps) {
  


  const [audioCorrect, _, controlsCorrect] = useAudio({src: '/correct.wav'})
  const [audioInCorrect, _c, controlsInCorrect] = useAudio({src: '/incorrect.wav'})

  const [audioConstructAdd, _ca, controlsAudioConstructAdd] = useAudio({src: '/Lottie/trainer/frozen/sounds/soundClick2.mp3'})
  const [audioConstructFire, _cf, controlsAudioConstructFire] = useAudio({src: '/Lottie/trainer/frozen/sounds/soundClickFire1.mp3'})


  const [timeLeft, setTimeLeft] = useState(question.timeLimit)
  const timerRef = useRef<NodeJS.Timeout | null>(null)





  // TODO:

  // START TYPE CONSTRUCTOR 

  const FrozenList = ['unfrozen','unfrozen','unfrozen','unfrozen','frozen','frozen']
  const FrozenTimeList = [3, 4, 5, 6, 7, 8]

  const [randomFrozen, setRandomFrozen] = useState(
    [
      { index: 0, time: FrozenTimeList[Math.floor(Math.random()*FrozenTimeList.length)], status: FrozenList[Math.floor(Math.random()*FrozenList.length)] },
      { index: 1, time: FrozenTimeList[Math.floor(Math.random()*FrozenTimeList.length)], status: FrozenList[Math.floor(Math.random()*FrozenList.length)] },
      { index: 2, time: FrozenTimeList[Math.floor(Math.random()*FrozenTimeList.length)], status: FrozenList[Math.floor(Math.random()*FrozenList.length)] },
      { index: 3, time: FrozenTimeList[Math.floor(Math.random()*FrozenTimeList.length)], status: FrozenList[Math.floor(Math.random()*FrozenList.length)] },
      { index: 4, time: FrozenTimeList[Math.floor(Math.random()*FrozenTimeList.length)], status: FrozenList[Math.floor(Math.random()*FrozenList.length)] },
      { index: 5, time: FrozenTimeList[Math.floor(Math.random()*FrozenTimeList.length)], status: FrozenList[Math.floor(Math.random()*FrozenList.length)] },
    ])
    

  const [constructorList, setConstructorList] = useState<string[]>(['', '', ''])
  
  const handleConstructorAddClick = (option: string ) => {
    
    controlsAudioConstructAdd.play()
    const indexEmpty = constructorList.indexOf('')

    if (indexEmpty > -1) {
      //
      // есть ли -1 ?
      //
      let newList = constructorList
      newList[indexEmpty] = option
      setConstructorList(newList)
  
    
    }
    
  }


  const handleConstructorDelClick = (delIndex: number) => {

      controlsAudioConstructAdd.play()
      let newList = constructorList
      newList[delIndex] = ''
      setConstructorList(newList)
  
    
  }


  const handleConstructButtonClick = (constrList: string[]) => {
    if (constrList[0] == 'a') {
      onAnswer("right")
    } else {
      onAnswer("wrong")
    }
  }

  // END TYPE CONSTRUCTOR 









useEffect(() => {
    setTimeLeft(question.timeLimit) // Reset timer when a new question appears
  }, [question])

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current) // Clear existing timer

    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current!)
          // Defer the call to onTimeout to avoid updating parent state during render
          setTimeout(() => {
            onTimeout()
          }, 0)
          return 0
        }





        // FOR CONSTRUCTOR
        //
        const newFrozen = randomFrozen.map(el => {
          if (el.status === 'frozen' && el.time >= prevTime) {
          // if (el.status === 'frozen') {
            
            // TODO: sound Fire
            // controlsAudioConstructFire.play()
            return {
              // ...el,
              index: 0,
              time: 0,
              status: 'unfrozen',              
            };

          } else {
            // No change
            return el;
           
          }
        });
        // Re-render with the new array

        setRandomFrozen(newFrozen);

        // controlsAudioConstructFire




        return prevTime - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [question, onTimeout, randomFrozen])





  return (

    <div className="bg-white shadow-md rounded-lg p-6">

    {audioCorrect}
    {audioInCorrect}
    {audioConstructAdd}
    {audioConstructFire}




      
      
      <ul className="grid grid-cols-12 justify-between gap-y-1">

        <li key={37113} className="col-span-3 flex justify-center ">

        <Lottie 
              className="h-30 w-30" 
              animationData = {randomEmotionLottie}
              // loop={false}
          /> 

        </li>




        <li key={374412} className="col-span-7 mt-4 ml-4">

          <div className="grid grid-cols-12 justify-between m-2 text-green gap-y-1">

          { 
            questions.map((el, index) => (
              <div key={index*484317} className="fill-red-800">


                {isRightList[index] == 1 
                  // ? <BadgeCheck
                  ? <Check
                  
                      className={cn("pr-2 h-7 w-7 fill-green-100 stroke-green-400")}
                  /> 
                  : isRightList[index] == 2 
                  // ? <BadgeAlert
                  ? <X
                      className={cn("pr-2 h-7 w-7 fill-red-100 stroke-red-400")}
                  />

                  : isRightList[index] == 3 
                  ? <Flame
                    className={cn("pr-2 h-7 w-7 stroke-yellow-400 animate-bounce")}
                    // className={cn("h-6 w-6 fill-yellow-100 stroke-yellow-400 animate-bounce")}
                  />
                  
                  : <Circle
                  // : <Badge 
                      className={cn("pr-2 mt-1 h-4 w-4 fill-neutral-200 stroke-neutral-200")}
                  />
                }
              </div>))
          }
          </div>
        </li>



        <li key={37511} className="col-span-2 flex justify-center ">
          
        </li>
        


      </ul>









      <div>

        <div className="grid grid-cols-12">
          
          <div className="w-full bg-gray-200 rounded-full h-4 mt-4 col-span-10">
            <div
              className=
              {timeLeft > 5
                ? "bg-sky-300 h-4 rounded-full transition-all duration-1000 ease-linear"
                : "bg-red-300 h-4 rounded-full transition-all duration-1000 ease-linear"
              }
              

              style={{ width: `${(timeLeft / question.timeLimit) * 100}%` }}
            />
          </div>


          <div className="ml-1 flex flex-1 content-center col-span-2">
            <Lottie 
                className="size-16 pb-5" 
                animationData={LottieOclockBlue}
            /> 

            <p className="text-lg font-bold pt-2 text-sky-400">
              {timeLeft}
            </p>
          </div>

        </div>










        {question.questionType !== "WORKBOOK" &&
          <h2 className="text-xl font-semibold mt-4">
            <Latex>          
              {question.question}
            </Latex>
          </h2>
        }

      


        {
        question.imageSrc &&  question.imageSrc !== '0' &&
        
          <Image
            className="pt-8 mx-auto"
            // src='/trainer-images/triangle7.svg'
            src={`/trainer-images/${question.imageSrc}`}
            alt='triangle'
            height={90}
            width={90}
          />  
        }





        {
          question.questionType == "ASSIST" 
          // ? <TypeAssist 
          //     question={question} 
          //     onAnswer={onAnswer}
          //   />

            ? <TypeAssistTRIANGLE 
            // question={question} 
            // onAnswer={onAnswer}


            threeCoordinates = {[0.1, 0.1, 0.9, 0.1, 0.1, 0.6]}



            // xCoordinates = {[0.13, 0.47]}
            xCoordinates = {[0.7, 0.11]}
            arcSVG = {"M 440,42 Q 420,80 460,92"}


          />






          : question.questionType == "SLIDER"         
          ? <TypeSlider 
              questions={questions} 
              question={question} 
              onAnswer={onAnswer}
            />

          : question.questionType == "CONNECT" 
          ? <TypeConnect 
              question={question} 
              onAnswer={onAnswer}
            />

          : question.questionType == "WORKBOOK" 
          ? <TypeWorkbook
              question = {question.question}
              options = {question.options} 
            />
                    
    
        //     TypeWorkbookTRIANGLE

        // <AnimRightTriangleSin
        //     threeCoordinates = {[0.1, 0.1, 0.9, 0.1, 0.1, 0.6]}
        //     // xCoordinates = {[0.13, 0.47]}
        //     xCoordinates = {[0.7, 0.11]}
        //     arcSVG = {"M 440,42 Q 420,80 460,92"}

        // />





          : <TypeConstructor
              question={question} 
              onAnswer={onAnswer}
            />


        }


      </div>




    </div>
  )
}





