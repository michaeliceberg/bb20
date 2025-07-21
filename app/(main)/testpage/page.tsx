'use client'

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { motion } from "framer-motion";
import { useEffect, useState } from "react"
import { PopoverClose } from "@radix-ui/react-popover";


const TestPage = async () => {


// На ст*а%о*ри*нн%н*ые улицы зам*и%е*рающего NLгорода л*о%а*жился бл*и%е*стающий п*о%а*кров ночи.
// Т*а%о*инстве*нн%н*ый луч*/%ь* лу*нн%н*ой доро*ж%ш*кой ро*б%п*ко NLблес*␣%т*нул на тр*а%о*вянистом ковре, пр*и%е*чудл*и%е*во NLоз*а%о*рил р*а%о*вни*нн%н*ую гла*д%т*ь на окраин*е%и*.
// Его  не*|%/*уверенный, а застенч*и%е*вый свет пр*е%и*вратил NLр*а%о**сс%с%зс*тилающееся про*о%а*стран*␣%т*ство в  NLсветло*-%/%|*серебр*я%е**н%нн*ое обл*а%о*ко*,% * NLпраз*д%␣*нич*␣%ь*но осв*е%я*тил всё вокруг NLгиган*т%␣*ским прожектором,  как*|%/%-*буд*/%|%-*то NLсо*нн%н*ая тиш*ь%␣* в*с%з*кинула пр*и%е*крытые рес*␣%т*ниц*ы%и*.
// Камыш*о%ё*вые зар*о%а*сли в окрес*т%␣*ностях NL пер*е%и*ш*ё%о*птывают*␣%ъ%ь*ся ш*е%и*лестящей л*и%е*ствой, NLпр*и%е*к*а%о*сают*␣%ъ%ь*ся к чу*в%␣*свтительным NLтр*а%о*винкам, р*о%а*ня*ю%я*т ст*е%и*кля*нн%н*ые NLр*о%а*синки на зелё*н%нн*ую пор*о%а*сль.
// Пол*/%-%|*ноч*␣%ь%ъ*ный час ур*а%о*внавешенно дыш*и%е%ы*т далеко  не*|%/*х*о%а*лодным воздухом.
// Ночь - время ра*з%с*думий.
// Мир свеж*␣%ъ%ь* и могуч*␣%ъ%ь*.
// Открываеш*ь%ъ%␣* настеж*ь%ъ%␣* д*е%и*р*е%и*вя*нн%н*ую NLраму, в*зс%c*матр*и%е*ва*е%и*ш*ь%ъ%␣*ся в вовсе NLне*/%|*бе*з%с*гранич*␣%ъ%ь*ную даль, NLстрас*т%␣*но гл*о%а*таеш*ь%ъ%␣* зап*а%о*хи NLбл*а%о*гоухающих трав и вопр*о%а*шаеш*ь%ъ%␣* NLу  кого*-%/%|*нибудь: «Почему*|%/%-*же так NLск*о%а*ротеч*␣%ь%ъ*ны и так пр*е%и*крас*␣%т*ны NLв*е%и*се*нн%н*ие сум*е%и*рки?»
// А потом ещ*ё%о* не много посмотр*и%е*ш*ь%ъ%␣* NLна пр*и%е*гнувшиеся д*е%и*рев*ь%ъ%␣*я, на пр*и%е*крытые  NLколо*д%т%␣*ц*ы%и%а* с ключ*е%и*вой водой, на  NLне*/%|*глубокий овраж*е%и*к с земл*я%е**н%нн*ым NLмостом  - на всё, что в*и%е*дне*е%и*т*ь%ъ%␣*ся NLиз окошка.
// В меж*ъ%ь%␣*ярусных пер*е%и*крытиях NLчто*-%/%|*то хрус*т%␣*нет, когда подветре*нн%н*ой NLст*о%а*р*о%а*ны к дому NLподб*и%е*ра*е%и*т*␣%ь%ъ*ся мес*т%␣*ная NLсобач*о%ё*нка.
// Она выт*и%е*рает лапки о NLглин*я%е**н%нн*ую пл*а%о*стинку, которую  NLкое*-%/%|*кто забыл на крыльц*е%э*, и NLдом ей кажет*␣%ъ%ь*ся гиган*т%␣*ск*и%е*м, NLгромоз*д%␣%т*к*и%е*м *з%с*дан*и%е*ем.
// Вдрг, вып*а%о*д*е%и*т из гн*е%и*зда NLг*а%о*лч*о%ё*нок и поп*а%о*дёт прямо на NLхолщ*о%ё*вый мешок, который р*а%о**сс%зс%с*т*е%и*лили NLвечером хозяева, но собач*ь%ъ%␣*ка никогда NLне*|%/*трон*е%и*т птенц*о%ё*в, NLа лиш*ь%␣* пр*и%е*гл*я%и*дит*␣%ъ%ь*ся с NLсер*ь%ъ%␣*ёзност*ь%ъ*ю к малышу и NLстер*е%и*ж*ё%о*т его до NLутр*е%и**нн%н**е%и*й з*а%о*ри.
// Румя*н%нн*ое марево р*а%о**сс%с%зс*вета осв*е%я*ща*е%и*т чугу*нн%н*ую изг*о%а*ро*д%т*ь.
// Лики тума*нн%н*ых крыш*␣%ь%ъ* соч*е%и*таются NLвместе, сл*и%е*вают*␣%ь%ъ*ся в свинц*о%ё*вый NLг*о%а*р*и%е*зонт и уча*␣%в*ству*ю%я*т в NLспектакл*е%и* о начал*е%и* нового дня.
//  



	const text = ""


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



	console.log('textBtnsInitialtextBtnsInitialtextBtnsInitial', textBtnsInitial)





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

		
	)
}

    
export default TestPage





