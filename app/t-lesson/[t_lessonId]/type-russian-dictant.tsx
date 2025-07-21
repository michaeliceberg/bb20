import React, { useEffect, useState } from 'react'
import { QuestionType } from './page'
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { motion } from "framer-motion";
import { PopoverClose } from "@radix-ui/react-popover";


type Props = {
    question: QuestionType
    onAnswer: (answer: string) => void
}

export const TypeRussianDictant = ({
    question,
    onAnswer,
}:Props) => {




  const text = question.question


	const textNL = text.split('NL')
	const textListNL = textNL.map(el => el.split("*"))


	console.log(textListNL)


	type btnListType = 
	{
		rightAnswer: string,
		allVariantsThisBtn: string[],
		selectedVariant: string,
		rowInd: number,
		colInd: number,
	}[]

	let textBtnsInitial: btnListType = []


	let index_element = 0
	const textWithBtnNumbersNL = textListNL.map((this_line_textList, index_line) => {

		const textWithBtnNumbers = this_line_textList.map((el, index) => {
			index_element += 1

			if (el.includes("%"))
				{
					textBtnsInitial.push
						(
							{
								rightAnswer: el.split("%")[0],
								//
								// перемешиваем варианты
								allVariantsThisBtn: el.split("%").sort(() => 0.5 - Math.random()),
																
								selectedVariant: "🌼", 

								rowInd: index_line,
								colInd: index,

								//"🍟",
							}
						)
					return('BTN')
					
				} 
			else 
				{
					return (el)

				}
			
			
	
	
		})

		return( 
			{
				textWithBtnNumbers: textWithBtnNumbers,
				index_line: index_line,
			}
		)

	})



  const [textBtnsState, setTextBtnsState] = useState(textBtnsInitial)
	const [doneRight, setDoneRight] = useState(false)
	
	const handleClickVariant = (rowInd: number, colInd: number, variant: string) => {
		setTextBtnsState(prev =>
		  prev.map(btn =>
			(btn.rowInd === rowInd && btn.colInd === colInd) ? { ...btn, selectedVariant: variant } : btn
		  )
		);
  };
	  


	useEffect(() => {
		const allCorrect = textBtnsState.every(btn => btn.rightAnswer === btn.selectedVariant);
		setDoneRight(allCorrect);
		console.log('doneRight:', allCorrect);
	}, [textBtnsState]);



  return (
    
    <div className="grid grid-cols-2 gap-x-2 gap-y-2 mt-10">
          
    
    
          <div className="text-2xl">

{

textWithBtnNumbersNL.map((textWithBtnNumbers, index_line) => 
  
  {
    return (
    
    
    
    
    <div key={index_line + 8000}className="flex">
    
    {
    
    textWithBtnNumbers.textWithBtnNumbers.map((el, index_btn) => {
      if (el == 'BTN') 
      {return (					
        
        <Popover key={303030 + index_btn}>
          <PopoverTrigger asChild>


            <motion.div 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="font-bold text-sky-500 border-dashed border-sky-500 border-b-2  cursor-pointer"

            >									
                {textBtnsState.filter(btn => (btn.rowInd == index_line && btn.colInd == index_btn))[0]?.selectedVariant}

            </motion.div>



          </PopoverTrigger>

          <PopoverContent className="w-80">

          <PopoverClose asChild>
  
            <div className="flex justify-center gap-x-4">

            
                {textBtnsState.filter(btn => (btn.rowInd == index_line && btn.colInd == index_btn))[0]?.allVariantsThisBtn.map((variant, index_variant) => {
                  console.log('variant:', variant, typeof variant);
                  return(
                    <div key={10000 + index_variant}>
                      <Button onClick={()=>{handleClickVariant(index_line, index_btn, variant)}} key={202020 + index_variant}>
                        {variant}
                      </Button>

                      {variant == "|"
                        ?
                        <p className="text-xs -m-3 mt-1">раздельно</p>
                        :
                        variant == "/"
                        ?
                        <p className="text-xs mt-1">слитно</p>
                        :
                        variant == "-"
                        ?
                        <p className="text-xs m-1 mt-1">дефис</p>
                        :
                        variant == "␣"
                        ?
                        <p className="text-xs m-2 mt-1">пусто</p>
                        :
                        <p></p>
                      }
                    </div>
                )}
                
                
                
                )}
                

            </div>
            </PopoverClose>
          </PopoverContent>
        </Popover>


      )} else {
        console.log(el)
        return(
          <p key={18000 + index_btn}style={{ whiteSpace: 'pre' }}>
            {el}
          </p>
        )
      }
    })}


  </div>





  )}







  
)













}



</div>


  
  </div>
  )
}




// Скво[з/с]ь бе(зс,(с)ме(н,нн)ую мглу. Егорушка видел почти всеу
// он с трудом мог р Дагля деть вдАлеке (тускло)сиреневый цвет и
// т.Аинстве(н,нн)ые ОчЕртания склонившихся предметов. В
// (полу)ноч ной т.Емноте всё прЕдстАвля Ется не тем,чем оно
// являЕтся на самом деле. СумЕ рки — время пр 0 буждения
// в ООбр А жения. Иногда
// почудя т ся (не)пролазные заре сли
// бурь яна, иногда подстерЕ жЕт образ ст дрожЕ вого пса, а порой
// начинает кАзаться как(будито) придт/илась (в)сто ронке
// фигура монаха в чЁрном колпаке и шерст Д.(н,нн)ой ризе.
// видение пр/бл Ижает _ся, рА стёт.
// Вот оно поро внялось с
// бричкой, и вы с ужаете глаза и я В ственно види те, что это всего
// лишь р 4(з,с)кидистый куст или гИганТ ский камень. Такие
// (не)подвижные «фигуры» вовсе (не редко мерещ 4т ся на
// /
// поворота. Ты (не)изменно опАсаЕшь ся этих
// видений
// вырАзительно 8(3,/крик Ива Е 6 : Уйди, чудище, (сглаз долой!
// Когда загрится на небе причудливый серпі луны, ночь
// СТ А НОвит_
// _ся бледной и томной. Р Д (зс,ссеянный свет горячо
// блес нёт на каждой трАвинк Е,
// прик оснётся
// р. А(с,сс|тилаемой дали ,оз Арит пространство (от)края(до)края и
// прЕ образит притихшую рАвнину в стекля(н, нн)ую гладь. Душа
// от (неожиданности съёжится,а потом рА (з,с)п Ахнёт ся и
// удИвится такому волшеБству. Воздух так горяч ,но и так
// свеж. БЕ(з,с)конеч ная ширь степи отражаЕ т дли(н,нн)ые
// вереницы облаков, которые движутся за (неублизкий, а
// тума(н,нн)ый ГОРИзонт, гром ездятся и сочетают
// чудесные образы. Взглянешь на звёздоч ки поверх туч
// (,с)делаешь вдох и почуВствуешь празДничный настрой
// замирающей природы. Ты понимаЕшь как важно каждое
// мгновение жизни. О (необъятной глубине и бе(3,с)грд нич ности
// неба можно судить только ноч дю в степи, когда луна озАряет всё
// пространство. Тр.Ескотня насекомых , УДИ вительные фигуры,
// лу(н,нн)ый свет участвуют в этом прЕ лесТ ном торжестве и
// пробуждают страсТную жажду жизни.
// (3 ош.)