
"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
// import { Shuffle } from "../../useful"
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import Lottie from "lottie-react"
import LottieOclock from '@/public/Lottie/trainer/LottieOclock.json'


interface QuestionProps {
  question: {
    question: string
    options: string[]
    correctAnswer: string
    timeLimit: number
  }
  onAnswer: (answer: string) => void
  onTimeout: () => void
}

export default function TrainerQuestion({ question, onAnswer, onTimeout }: QuestionProps) {
  const [timeLeft, setTimeLeft] = useState(question.timeLimit)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

//   question.options = Shuffle(question.options)

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
        return prevTime - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [question, onTimeout])

  return (
    <div className="bg-white shadow-md rounded-lg p-6">



      <div className="grid grid-cols-12">
        
        <div className="w-full bg-gray-200 rounded-full h-4 mt-4 col-span-10">
          <div
            className="bg-yellow-400 h-4 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${(timeLeft / question.timeLimit) * 100}%` }}
          />
        </div>


        <div className="flex flex-1 content-center mx-auto justify-center text-center col-span-2">
          <Lottie 
              className="h-10 w-10" 
              animationData={LottieOclock}
              // loop={false}
          /> 
          <p className="text-lg font-bold pt-2">
            {timeLeft}
          </p>
        </div>

      </div>





      <h2 className="text-xl font-semibold mt-10">
        <Latex>          
          {question.question}
        </Latex>
      
      </h2>
      


      




      <div className="grid grid-cols-2 gap-x-2 gap-y-2 mt-10">

        {question.options.map((option, index) => (

            <Button
              key={index}
              onClick={() => onAnswer(option)}
              className="w-full text-left justify-start"
            >
              {option}
            </Button>
        ))}
      </div>



      {/* <div className="mt-4 text-center">
        <div className="flex flex-1 content-center mx-auto justify-center text-center">
          <Lottie 
              className="h-10 w-10" 
              animationData={LottieOclock}
              // loop={false}
          /> 
          <p className="text-lg font-bold pt-2">
            {timeLeft}
          </p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
          <div
            className="bg-yellow-400 h-4 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${(timeLeft / question.timeLimit) * 100}%` }}
          />
        </div>
      </div> */}



      



    </div>
  )
}