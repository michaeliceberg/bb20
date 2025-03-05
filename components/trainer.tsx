
"use client"

import { useState } from "react"
import Confetti from "react-confetti"
import { useWindowSize } from "react-use"
import TrainerQuestion from "./trainer-question"
import { t_challengeOptions } from "@/db/schema"
import { Button } from "./ui/button"
import Lottie from "lottie-react"


import LottieTrainerSharkFailDNO from '@/public/Lottie/trainer/LottieTrainerSharkFailDNO.json'




type Props = {
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
    }[]
}




export default function TQuiz(
  {
    t_lessonTitle, 
    t_lesson
  } : Props) {
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState(0)
  const { width, height } = useWindowSize()


  let questions = t_lesson.map(t_challenge => (
    {
      question: t_challenge.question,
      // options: ['1','2','3'], 
      options: t_challenge.t_challengeOptions.map(el => el.text),
      correctAnswer: "Paris",
      timeLimit: 15,
    }))



  let questionShuffled = [...questions].sort(() => 0.5 - Math.random());

  questions = questionShuffled

  
  const startQuiz = () => {
    setQuizStarted(true)
    setCurrentQuestionIndex(0)
    setScore(0)
    setQuizCompleted(false)
    setAnsweredQuestions(0)
  }

  const handleAnswer = (answer: string) => {
    setAnsweredQuestions(answeredQuestions + 1)

    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleTimeout = () => {
    setAnsweredQuestions(answeredQuestions + 1)

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  if (!quizStarted) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Quiz App</h1>
        <Button
          onClick={startQuiz}
          // className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
        >
          Start Quiz
        </Button>
      </div>
    )
  }

  if (quizCompleted) {
    const isPerfectScore = score === questions.length

    return (
      <div className="text-center content-center mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Quiz App
        </h1>
        
        <h2 className="text-2xl font-bold mb-4">
          Quiz Completed!
        </h2>
        
        {isPerfectScore && 
          <Confetti width={width} height={height} />
        }
        
        <p className={`text-xl ${isPerfectScore ? "text-green-600 font-bold" : ""}`}>
          Правильно {score} из {questions.length}
        </p>



        <Lottie 
                
                // animationData={ isLate ? LottieTriangle3 : LottieTriangle3 } 
                animationData={ score > 1 ? LottieTrainerSharkFailDNO : LottieTrainerSharkFailDNO } 
        className="h-80 w-80"
        />





        <Button
          onClick={startQuiz}
          className="mt-4"
          variant='primary'
          // className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
        >
          Давай ещё раз
        </Button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-xl mx-auto text-center">
      <h1 className="text-xl font-bold mt-6">
        {t_lessonTitle}
      </h1>
      
      <TrainerQuestion 
        question={questions[currentQuestionIndex]} 
        onAnswer={handleAnswer} 
        onTimeout={handleTimeout} 
      />
      
      <p className="mt-4 text-center">
        Вопрос {currentQuestionIndex + 1} из {questions.length}
      </p>
    </div>
  )
}