'use client'

import { useRef } from "react";
// import { AnimRightTriangleFindKatetGipo } from "./AnimRightTriangleFindKatetGipo";
// import { AnimTrygoTable } from "./AnimTrygoTable";
import { ShuffleTS } from "@/usefulFunctions";
import { AnimRightTriangleSin } from "./AnimRightTriangleSin";
import AppWithStyles from "./bounce";



// let RightTriangleList = [
//     {coordinates : [100, 100, 550, 100, 100, 400]},

//     {coordinates : [150, 50, 500, 500, 150, 500]},

//     {coordinates : [100, 100, 450, 100, 450, 500]},

// ]

let RightTriangleList = [
    [100, 100, 550, 100, 100, 400],
    [150, 50, 500, 500, 150, 500],
    [100, 100, 450, 100, 450, 500],
  ]

export default function Home() {



  

  let ButtonList =  [
    {
        id: 0,
        text: ' $ \\frac{ 1 } {2}  $ ',
        buttonRef: useRef<HTMLButtonElement>(null),
    },
    {
        id: 1,
        text: ' $ \\frac{ \\sqrt {2} } {2}  $ ',
        buttonRef: useRef<HTMLButtonElement>(null),
    },
    {
        id: 2,
        text: ' $ \\frac{ \\sqrt {3} } {2}  $ ',
        buttonRef: useRef<HTMLButtonElement>(null),
    },

    {
        id: 0,
        text: ' $ \\frac{ 1 } {2}  $ ',
        buttonRef: useRef<HTMLButtonElement>(null),
    },
    {
        id: 1,
        text: ' $ \\frac{ \\sqrt {2} } {2}  $ ',
        buttonRef: useRef<HTMLButtonElement>(null),
    },
    {
        id: 2,
        text: ' $ \\frac{ \\sqrt {3} } {2}  $ ',
        buttonRef: useRef<HTMLButtonElement>(null),
    },

  ]


  ShuffleTS(ButtonList)
  ShuffleTS(RightTriangleList)

  
  return (
    <div>









    <AppWithStyles />










        {/* <AnimRightTriangleFindKatetGipo
            // threeCoordinates = {[100, 100, 550, 100, 100, 400]}
            // threeCoordinates = {RightTriangleList[0].coordinates}          

            threeCoordinates = {RightTriangleList[0]}          
        /> */}


        
{/*     
        <AnimRightTriangleSin
            threeCoordinates = {[0.1, 0.1, 0.9, 0.1, 0.1, 0.6]}



            // xCoordinates = {[0.13, 0.47]}
            xCoordinates = {[0.7, 0.11]}
            arcSVG = {"M 440,42 Q 420,80 460,92"}

        /> */}


        {/* <AnimTrygoTable ButtonList={ButtonList} /> */}


    </div>

)
}



{/* <Image src='/Lottie/trainer/spider/spider.svg' alt='Croatian' height={32} width={40} className='mr-4 rounded-md' /> */}



    // <main className="flex min-h-screen flex-col items-center justify-between p-80">
    // <h1 className="text-4xl font-bold mb-8">Паук и котенок</h1>
    // <SpiderAnimation />