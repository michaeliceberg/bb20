
"use client"

import { useState, useEffect, useRef } from "react"
import Lottie from "lottie-react"
import LottieOclock from '@/public/Lottie/trainer/LottieOclock.json'
import { Badge, BadgeAlert, BadgeCheck, BadgeHelp } from "lucide-react"
import { cn } from "@/lib/utils";
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import LottieLightning from '@/public/Lottie/trainer/LottieLightning.json'
import { useAudio } from "react-use"
import { Slider } from "./ui/slider"
import { Button } from "./ui/button"
import { SliderModern } from "./slider-modern"
// import SliderDemo from "./slider-modern"
// import SliderModern from "./slider-modern"
import LottieSkull from '@/public/Lottie/trainer/frozen/LottieSkull.json'


interface QuestionProps {
  questions: {
    questionType: "SELECT" | "ASSIST" | "CONNECT" | "SLIDER" | "CONSTRUCT",
    question: string;
    options: string[]  
    optionsQ : {
      optQ: string;
      pairId: number;
      id: number;
    }[]
    optionsA : {
      optA: string;
      pairId: number;
      id: number;
    }[]

    optionsConstructRight: string[];

    correctAnswer: string;
    timeLimit: number;
}[]

  isRightList: number[]


  question: {
    questionType: "SELECT" | "ASSIST" | "CONNECT" | "SLIDER" | "CONSTRUCT",
    question: string
    options: string[]  
    
    optionsQ : {
      optQ: string;
      pairId: number;
      id: number;
    }[]
    
    optionsA : {
      optA: string;
      pairId: number;
      id: number;
    }[]
    
    optionsConstructRight: string[];

    correctAnswer: string
    timeLimit: number
  }
  onAnswer: (answer: string) => void
  onTimeout: () => void
}

export default function TrainerQuestion({
  questions, 
  isRightList, 
  question, 
  onAnswer, 
  onTimeout 
}: QuestionProps) {
  


  const [audioCorrect, _, controlsCorrect] = useAudio({src: '/correct.wav'})
  const [audioInCorrect, _c, controlsInCorrect] = useAudio({src: '/incorrect.wav'})

  const [audioConstructAdd, _ca, controlsAudioConstructAdd] = useAudio({src: '/Lottie/trainer/frozen/sounds/soundClick2.mp3'})
  // const [audioConstructDel, _cd, controlsAudioConstructDel] = useAudio({src: '/Lottie/trainer/frozen/sounds/soundClick1.mp3'})
  const [audioConstructFire, _cf, controlsAudioConstructFire] = useAudio({src: '/Lottie/trainer/frozen/sounds/soundClickFire1.mp3'})


  const [timeLeft, setTimeLeft] = useState(question.timeLimit)
  const timerRef = useRef<NodeJS.Timeout | null>(null)







  // TODO:

  // START TYPE CONNECT 

  const [selectedOptionAId, setSelectedOptionAId] = useState<number>()
  const [selectedOptionQId, setSelectedOptionQId] = useState<number>()

  const [selectedOptionAPair, setSelectedOptionAPair] = useState<number>()
  const [selectedOptionQPair, setSelectedOptionQPair] = useState<number>()

  const [listOptionsIdDoneRight, setListOptionsIdDoneRight] = useState<number[]>([])


  useEffect(()=>{
    //
    // ЕСЛИ СОБРАЛИ 6 ПРАВИЛЬНЫХ ОТВЕТОВ
    //
    if (listOptionsIdDoneRight.length == 6) {
      setListOptionsIdDoneRight([])
      onAnswer("right")
    }
    
  },[listOptionsIdDoneRight])
  
  

  useEffect(() => {

    if (selectedOptionAId && selectedOptionQId && selectedOptionAId > 0 && selectedOptionQId > 0)  {
      //
      // Если нажат ответ A и Q
      //

      if (selectedOptionAPair == selectedOptionQPair) {

        // Если ответ правильный, Добавляем пару в Список, чтобы собрать 6 ответов
        //
        const newList = listOptionsIdDoneRight.concat(selectedOptionAId).concat(selectedOptionQId);
        setListOptionsIdDoneRight(newList);

        setSelectedOptionAId(-1)
        setSelectedOptionQId(-2)
        setSelectedOptionAPair(-3)
        setSelectedOptionQPair(-4)

        controlsCorrect.play()

      }
      else {

        setSelectedOptionAId(-1)
        setSelectedOptionQId(-2)
        setSelectedOptionAPair(-3)
        setSelectedOptionQPair(-4)

        setListOptionsIdDoneRight([])

        controlsInCorrect.play()
        onAnswer("wrong")

      }


    } else {
      //
      // Если нажат только один ответ ИЛИ A или Q
      //

      return
    }

  },[selectedOptionAId, selectedOptionQId])




  const handleOptionQClick = (id: number, pair: number) => {

    setSelectedOptionQId(id)
    setSelectedOptionQPair(pair)
    
  }


  const handleOptionAClick = (id: number, pair: number) => {

    setSelectedOptionAId(id)
    setSelectedOptionAPair(pair)   

  }


  // END TYPE CONNECT 







  // TODO:

  // START TYPE SLIDER 

  const handleSliderButtonClick = (value: number[]) => {
    if (value[0] < rightAnswer*1.2 && value[0] > rightAnswer*0.8) {
      onAnswer("right")
    } else {
      onAnswer("wrong")
    }
  }

  const [stateForRandom, setStateForRandom] = useState(questions[0].correctAnswer)


  let randomValueForSlider = 0.2
  useEffect(()=>{
    randomValueForSlider = Math.random()
  }, [stateForRandom])
  
  // const [timeLeft, setTimeLeft] = useState(question.correctAnswer)


  // Math.round(num * 100) / 100
  const rightAnswer = Math.round(+(question.correctAnswer.replace(",","."))*10)/10
  const [sliderValue, setSliderValue] = useState([ rightAnswer * randomValueForSlider])
  



  // END TYPE SLIDER 











  // TODO:

  // START TYPE CONSTRUCTOR 

  const FrozenList = ['unfrozen','unfrozen','unfrozen','unfrozen','frozen','frozen']
  const FrozenTimeList = [3, 4, 5, 6, 7, 8]

  // var item = FrozenList[Math.floor(Math.random()*FrozenList.length)];
  // var tt = FrozenTimeList[Math.floor(Math.random()*FrozenTimeList.length)]
  // const [randomFrozen, setRandomFrozen] = useState(
  // [
  //   { index: 0, time: 0, status: 'unfrozen' },
  //   { index: 1, time: 0, status: 'unfrozen' },
  //   { index: 2, time: 3, status: 'frozen' },
  //   { index: 3, time: 0, status: 'unfrozen' },
  //   { index: 4, time: 7, status: 'frozen' },
  //   { index: 5, time: 8, status: 'frozen' },
  // ])
  

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
            
            controlsAudioConstructFire.play()
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

        // console.log("newFrozen: ", newFrozen)
        setRandomFrozen(newFrozen);

        controlsAudioConstructFire




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



      {/* <div className="flex flex-1 justify-between m-2 text-green"> */}
      <div className="grid grid-cols-12 justify-between m-2 text-green gap-y-1">
        { 
          questions.map((el, index) => (
            <div key={index*484317} className="fill-red-800">


              {isRightList[index] == 1 
                ? <BadgeCheck
                    className={cn("h-8 w-8 fill-green-100 stroke-green-400")}
                /> 
                : isRightList[index] == 2 
                ? <BadgeAlert
                    className={cn("h-8 w-8 fill-red-100 stroke-red-400")}
                />

                : isRightList[index] == 3 
                ? <BadgeHelp
                    className={cn("h-8 w-8 fill-yellow-100 stroke-yellow-400 animate-bounce")}
                />
                
                : <Badge 
                    className={cn("h-8 w-8 stroke-neutral-200")}
                />
              }
            </div>))
        }
      </div>





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





      <h2 className="text-xl font-semibold mt-4">
        <Latex>          
          {question.question}
        </Latex>
      
      </h2>
      









      {
        question.questionType == "ASSIST" 
      
        ?

        <div className="grid grid-cols-2 gap-x-2 gap-y-2 mt-10">

        
          {question.options.map((option, index) => (

                <button
                  key={index*28748}
                  onClick={() => onAnswer(option)}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-wide bg-white border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 text-slate-500"
                >
                  <p className="m-4">
                    <Latex>
                      {option}
                    </Latex>
                  </p>
                </button>
                
          ))}

        
        </div>
        













        : question.questionType == "SLIDER" 
      
        ? 

        <div className="mt-24 mb-5 ">
        

        <SliderModern 
          randomValueForSlider={randomValueForSlider}
          rightAnswer={rightAnswer}
          setSliderValue={setSliderValue}
          sliderValue={sliderValue}
        
        />
        <Button
          onClick={()=>{handleSliderButtonClick(sliderValue)}}
          className="mt-12 w-[140px]"
          variant = 'primary'
        >
          <p className="p-4 text-2xl">
            ≈ {sliderValue}
          </p>
        </Button>


        </div>

        
        
        
        
        








        : question.questionType == "CONNECT" 
      
        ? 
      



        <div className="grid grid-cols-7 gap-x-2 gap-y-2 mt-10">


          <div className="grid col-span-3 gap-y-2 ">

            {question.optionsQ.map((option, index) => (

              <button
                disabled={listOptionsIdDoneRight.includes(option.id)}
                key={index*28748}
                onClick={()=>handleOptionQClick(option.id, option.pairId)}
                className= {selectedOptionQId == option.id 
                  ? "bg-cyan-200  border-cyan-300 border-2 border-b-4 active:border-b-2 hover:bg-cyan-200 text-slate-500 inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-wide"

                  : listOptionsIdDoneRight.includes(option.id) ? "bg-green-200  border-green-300 border-2 border-b-4 active:border-b-2 hover:bg-green-200 text-slate-500 inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-wide"

                  : "bg-white  border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 text-slate-500 inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-wide"
                
                  
                }
                >
                <p className="m-4">

                  <Latex>
                    {option.optQ} 
                  </Latex>

                </p>
              </button>
              
            ))}

          </div>




          <div className="grid size-20 mx-auto pt-20">

           <Lottie 
           
               animationData={LottieLightning} 
               loop={false}
           />           
          </div>




          <div className="grid col-span-3 gap-y-2 ">

            {question.optionsA.map((option, index) => (

            <button
              key={index*2874811}
              disabled={listOptionsIdDoneRight.includes(option.id)}
              onClick={()=>handleOptionAClick(option.id, option.pairId)}
              className= {selectedOptionAId == option.id 
                ? "bg-cyan-200  border-cyan-300 border-2 border-b-4 active:border-b-2 hover:bg-cyan-200 text-slate-500 inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-wide "
                
                : listOptionsIdDoneRight.includes(option.id) ? "bg-green-200  border-green-300 border-2 border-b-4 active:border-b-2 hover:bg-green-200 text-slate-500 inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-wide"

                : "bg-white  border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 text-slate-500 inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-wide"
              }
              >
              <p className="m-4">
                <Latex>
                  {option.optA} 
                </Latex>
              </p>
            </button>
            
            ))}

          </div>


        </div>





        :

          



        // TODO: CONSTRUCT

        
        <div>

          <div className="mt-4 mb-4">
            
            {constructorList[0] !== ''
            ? <Button 
                variant='super'
                size='construct'
                onClick={()=>handleConstructorDelClick(0)}
              >
                {constructorList[0]} 
              </Button>
            : <Button 
                className={constructorList.indexOf('') == 0 ? "bg-sky-200/90 text-white": ""}
                // className={indexFirstEmpty == 0 ? "bg-yellow-300": ""}
                variant='construct' 
                size='construct'
              > 
                1 
              </Button>
            }

            {constructorList[1] !== ''
            ? <Button 
                variant='super'
                size='construct' 
                className="ml-4 mr-4"
                onClick={()=>handleConstructorDelClick(1)}
              > 
                {constructorList[1]} 
              </Button>
            : <Button 
                variant='construct' 
                size='construct' 
                className={constructorList.indexOf('') == 1  ? "bg-sky-200/90 text-white ml-4 mr-4 ": "ml-4 mr-4"}
              > 
                2 
              </Button>
            }
            
            {constructorList[2] !== ''
            ? <Button size='construct'
              variant='super'
              onClick={()=>handleConstructorDelClick(2)}
              > 
              {constructorList[2]} 
              </Button>
            : <Button 
                variant='construct' 
                size='construct'
                className={constructorList.indexOf('') == 2  ? "bg-sky-200/90 text-white": ""}
              > 
                3 
              </Button>
            }
            
          </div>









          <div className="grid grid-cols-2 gap-x-2 gap-y-2 mt-10">
          
            {question.options.map((option, index) => (

                  <button

                    disabled= {
                      randomFrozen.filter(el => el.index == index)[0] && randomFrozen.filter(el => el.index == index)[0].status === 'frozen'
                    }

                    key={index*2228748}
                    onClick={() => handleConstructorAddClick(option)}
                    
                    className="h-24 inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-wide bg-white border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 text-slate-500"
                  >
                    {/* <p className="m-4"> */}
                    <p className="m-4">


                    { 
                    randomFrozen.filter(el => el.index == index)[0] && randomFrozen.filter(el => el.index == index)[0].status === 'frozen'  
                    ?
                      <Lottie 
                        className="h-16 w-16 pb-2 content-center" 
                        // className="h-16 w-16 pb-4 content-center" 
                        animationData={LottieSkull}
                        // loop={false}
                      /> 
                    :
                      <Latex>
                        {option}
                      </Latex>
                    }



                    </p>
                  </button>
                  
            ))}

          
          </div>


          <Button 
            className="mt-8" 
            variant= 'primary'
            disabled={constructorList.filter(x => x=='').length !== 0}
            onClick={()=>{handleConstructButtonClick(constructorList)}}
          >
            готово
          </Button>

        </div>












      }

    </div>
  )
}





