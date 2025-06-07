'use client'

import { useRef } from "react";
// import { AnimRightTriangleFindKatetGipo } from "./AnimRightTriangleFindKatetGipo";
// import { AnimTrygoTable } from "./AnimTrygoTable";
import { ShuffleTS } from "@/usefulFunctions";
import { AnimRightTriangleSin } from "./AnimRightTriangleSin";



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

        {/* <AnimRightTriangleFindKatetGipo
            // threeCoordinates = {[100, 100, 550, 100, 100, 400]}
            // threeCoordinates = {RightTriangleList[0].coordinates}          

            threeCoordinates = {RightTriangleList[0]}          
        /> */}





        <AnimRightTriangleSin
            // threeCoordinates = {[40, 40, 550, 40, 40, 350]}
            threeCoordinates = {[0.1, 0.1, 0.9, 0.1, 0.1, 0.6]}

            // xCoordinates = {[50, 295]}
            // arcSVG = {"M 45,290 Q 80,280 90,315"}


            xCoordinates = {[464, 42]}
            arcSVG = {"M 440,42 Q 420,80 460,92"}


            // threeCoordinates = {[40, 40, 550, 40, 550, 350]}

            // xCoordinates = {[115, 45]}
            // arcSVG = {"M 153,42 Q 170,80 140,100"}

            // xCoordinates = {[515, 285]}
            // arcSVG = {"M 480,300 Q 505,265 548,280"}


            // threeCoordinates = {[40, 40, 550, 350, 40, 350]}

            // xCoordinates = {[62, 72]}
            // arcSVG = {"M 43,120 Q 85,130 120,90"}

            // xCoordinates = {[450, 305]}
            // arcSVG = {"M 420,348 Q 410,305 450,290"}



            // threeCoordinates = {[40, 350, 550, 40, 550, 350]}

            // xCoordinates = {[120, 305]}
            // arcSVG = {"M 145,290 Q 175,315 165,348"}

            // xCoordinates = {[505, 85]}
            // arcSVG = {"M 450,105 Q 470,150 550,140"}


        />


        {/* <AnimTrygoTable ButtonList={ButtonList} /> */}


    </div>

)
}



{/* <Image src='/Lottie/trainer/spider/spider.svg' alt='Croatian' height={32} width={40} className='mr-4 rounded-md' /> */}



    // <main className="flex min-h-screen flex-col items-center justify-between p-80">
    // <h1 className="text-4xl font-bold mb-8">Паук и котенок</h1>
    // <SpiderAnimation />