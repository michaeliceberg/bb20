import React, { useState } from "react";
import { motion } from "framer-motion";
import Latex from "react-latex-next";
import { Button } from "@/components/ui/button";




type Props = {
    question: string,
    options: string[],
}

export const TypeWorkbook = ({
    question,
    options,
}: Props) => {

  
  const questionWorkbook: string[] = question.split("@")


  const [constructorList, setConstructorList] = useState<string[]>(['', '', '', '', ''])
  


  const handleConstructorAddClick = (option: string ) => {
    
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

    let newList = constructorList
    newList[delIndex] = ''
    setConstructorList(newList)

  
}



  return (


    <div className="items-center justify-center text-neutral-800">

        {questionWorkbook.map((questionPart, index) => 

            <div key={index*1497}>

                {constructorList.indexOf('') >= index &&

                <Typewrite 
                    examples = {questionPart}
                />
                }


                {constructorList[index] !== ''
                    ? <Button 
                        variant='super'
                        size='construct'
                        onClick={()=>handleConstructorDelClick(index)}
                        >
                        {constructorList[index]} 
                        </Button>

                    : <Button 
                        className={constructorList.indexOf('') == index ? "bg-sky-200/90 text-white animate-bounce": ""}
                        variant='construct' 
                        size='construct'
                        > 
                        {index+1}
                        </Button>
                }



                    </div>
                )}

        



    <div>

        {options.map((option, index) => (

        <button
        key={index*28748}
        // onClick={() => onAnswer(option)}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-wide bg-white border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 text-slate-500"
        onClick={() => handleConstructorAddClick(option)}

        >
        <p className="m-4">
            <Latex>
                {option}
            </Latex>
        </p>
        </button>

        ))}

    </div>

    </div>
  );
};




const Typewrite = ({ 
    examples 
}: { examples: string }) => {

  return (

    <div>

 
        hello
        
        

        <PathDrawing />

    </div>
  );
};





 
export default function PathDrawing() {

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => {
            const delay = i * 0.5
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                    opacity: { delay, duration: 0.01 },
                },
            }
        },
    }

    return (
        <div>
            <motion.svg
            width="600"
            height="600"
            viewBox="0 0 600 600"
            initial="hidden"
            animate="visible"
            style={{ maxWidth: "80vw" }}
        >
            <motion.circle
                cx="100"
                cy="100"
                r="80"
                stroke="#FF0055"
                variants={draw}
                custom={1}
                style={{
                    strokeWidth: 10,
                    strokeLinecap: "round",
                    fill: "transparent",
                }}
            />
            <motion.line
                x1="220"
                y1="30"
                x2="360"
                y2="170"
                stroke="#7700FF"
                variants={draw}
                custom={2}
                style={{
                    strokeWidth: 10,
                    strokeLinecap: "round",
                    fill: "transparent",
                }}
            />

            <motion.line
                x1="360"
                y1="170"
                x2="360"
                y2="30"
                stroke="#7700FF"
                variants={draw}
                custom={3}
                style={{
                    strokeWidth: 10,
                    strokeLinecap: "round",
                    fill: "transparent",
                }}
            />

            <motion.line
                x1="360"
                y1="30"
                x2="220"
                y2="30"
                stroke="#7700FF"
                variants={draw}
                custom={4}
                style={{
                    strokeWidth: 10,
                    strokeLinecap: "round",
                    fill: "transparent",
                }}
            />


            {/* More shapes would go here */}
        </motion.svg> 
        </div>
    )
}