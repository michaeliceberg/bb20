// 'use client'

// import { Button } from "@/components/ui/button"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react"
// import { PopoverClose } from "@radix-ui/react-popover";

// type Props = {
// 	text: string,
// }

// export const TypeRussianText = async ({
// 	text,
// }: Props) => {


// 	// const text = "Т*а|о*инстве*нн|н*ый луч*/|ь* NL лу*нн|н*ой доро*ж|ш*кой"


// 	const textNL = text.split('NL')
// 	const textListNL = textNL.map(el => el.split("*"))


// 	console.log(textListNL)


// 	type btnListType = 
// 	{
// 		rightAnswer: string,
// 		allVariantsThisBtn: string[],
// 		selectedVariant: string,
// 		rowInd: number,
// 		colInd: number,
// 	}[]

// 	let textBtnsInitial: btnListType = []


// 	let index_element = 0
// 	const textWithBtnNumbersNL = textListNL.map((this_line_textList, index_line) => {

// 		const textWithBtnNumbers = this_line_textList.map((el, index) => {
// 			index_element += 1

// 			if (el.includes("|"))
// 				{
// 					textBtnsInitial.push
// 						(
// 							{
// 								rightAnswer: el.split("|")[0],
// 								//
// 								// перемешиваем варианты
// 								allVariantsThisBtn: el.split("|").sort(() => 0.5 - Math.random()),
																
// 								selectedVariant: "🌼", 

// 								rowInd: index_line,
// 								colInd: index,

// 								//"🍟",
// 							}
// 						)
// 					return('BTN')
					
// 				} 
// 			else 
// 				{
// 					return (el)
// 				}
			
			
	
	
// 		})

// 		return( 
// 			{
// 				textWithBtnNumbers: textWithBtnNumbers,
// 				index_line: index_line,
// 			}
// 		)

// 	})



// 	console.log('textBtnsInitialtextBtnsInitialtextBtnsInitial', textBtnsInitial)
// 	// const [textBtnsState, setTextBtnsState] = useState(textBtnsInitial)




// 	// Inside your component:
// // const [textBtnsState, setTextBtnsState] = useState(() => {
// // 	const initial: btnListType = [];
// // 	let index_element = 0;
  
// // 	textListNL.forEach((lineArr, index_line) => {
// // 	  lineArr.forEach((el) => {
// // 		if (el.includes("|")) {
// // 		  index_element++;
// // 		  initial.push({
// // 			rightAnswer: el.split("|")[0],
// // 			allVariantsThisBtn: el.split("|").sort(() => Math.random() - 0.5),
// // 			btnIndex: index_element,
// // 			selectedVariant: "🌼",
// // 		  });
// // 		}
// // 	  });
// // 	});
// // 	return initial;
// //   });





// // const [textBtnsState, setTextBtnsState] = useState(() => {
// // 	const initial: btnListType = [];
// // 	let index_element = 0;
  
// // 	textListNL.forEach((lineArr) => {
// // 	  lineArr.forEach((el) => {
// // 		if (el.includes("|")) {
// // 		  index_element++;
// // 		  initial.push({
// // 			rightAnswer: el.split("|")[0],
// // 			allVariantsThisBtn: el.split("|").sort(() => Math.random() - 0.5),
// // 			btnIndex: index_element,
// // 			selectedVariant: "🌼",

// // 			rowInd: 1,
// // 			colInd: 2,

// // 		  });
// // 		}
// // 	  });
// // 	});
// // 	return initial;
// //   });


// const [textBtnsState, setTextBtnsState] = useState(textBtnsInitial)





// 	const [doneRight, setDoneRight] = useState(false)
	
	
	

// 	// const handleClickVariant = (index_btn: number, variant: string) => {
// 	// 	setTextBtnsState(prevState =>
// 	// 	  prevState.map(btn =>
// 	// 		btn.btnIndex === index_btn ? { ...btn, selectedVariant: variant } : btn
// 	// 	  )
// 	// 	);
// 	//   }

// 	// const handleClickVariant = (index_btn: number, variant: string) => {
// 	// 	setTextBtnsState(prev =>
// 	// 	  prev.map(btn =>
// 	// 		btn.btnIndex === index_btn ? { ...btn, selectedVariant: variant } : btn
// 	// 	  )
// 	// 	);
// 	//   }

// 	  const handleClickVariant = (rowInd: number, colInd: number, variant: string) => {
// 		setTextBtnsState(prev =>
// 		  prev.map(btn =>
// 			(btn.rowInd === rowInd && btn.colInd === colInd) ? { ...btn, selectedVariant: variant } : btn
// 		  )
// 		);
// 	  };
	  


// 	useEffect(() => {
// 		const allCorrect = textBtnsState.every(btn => btn.rightAnswer === btn.selectedVariant);
// 		setDoneRight(allCorrect);
// 		console.log('doneRight:', allCorrect);
// 	}, [textBtnsState]);



// 	return (
// 		<div className="text-2xl">

// 			{
			
// 			textWithBtnNumbersNL.map((textWithBtnNumbers, index_line) => 
				
// 				{
// 					return (
					
					
					
					
// 					<div key={index_line + 7000} className="flex">
					
// 					{
					
// 					textWithBtnNumbers.textWithBtnNumbers.map((el, index_btn) => {
// 						if (el == 'BTN') 
// 						{return (					
							
// 							<Popover key={303030 + index_btn}>
// 								<PopoverTrigger asChild>
		
		
// 									<motion.div 
// 										whileHover={{ scale: 1.2 }}
// 										whileTap={{ scale: 0.8 }}
// 										className="font-bold text-sky-500 border-dashed border-sky-500 border-b-2  cursor-pointer"
		
// 									>									
// 											{/* {textBtnsState.filter(btn => btn.btnIndex == index_btn)[0].selectedVariant} */}
// 											{textBtnsState.filter(btn => (btn.rowInd == index_line && btn.colInd == index_btn))[0]?.selectedVariant}
		
// 									</motion.div>
		
		
		
// 								</PopoverTrigger>
		
// 								<PopoverContent className="w-80">
		
// 								<PopoverClose asChild>
				
// 									<div className="flex justify-center gap-x-4">
		
									
// 											{/* {textBtnsState.filter(btn => btn.btnIndex == index_btn)[0].allVariantsThisBtn.map((variant, index_variant) => ( */}
// 											{textBtnsState.filter(btn => (btn.rowInd == index_line && btn.colInd == index_btn))[0]?.allVariantsThisBtn.map((variant, index_variant) => (
// 												// <Button onClick={()=>{handleClickVariant(index_btn, variant)}} key={202020 + index_variant}>
// 												<Button onClick={()=>{handleClickVariant(index_line, index_btn, variant)}} key={202020 + index_variant}>
// 													{variant}
// 												</Button>
// 											))}
											
		
// 									</div>
// 									</PopoverClose>
// 								</PopoverContent>
// 							</Popover>
		
		
// 						)} else {
// 							return(el)
// 						}
// 					})}


// 				</div>





// 				)}







				
// 			)











			
			
// 			}



// 		</div>

		
// 	)
// }














// // На ст*а|о*ри*нн|н*ые улицы зам*и|е*рающего города л*о|а*жился 
// // бл*и|е*стающий п*о|а*кров ночи. Т*а|о*инстве*нн|н*ый луч*/|ь* лу*нн|н*ой
// // доро*ж|ш*кой ро*б|п*ко блес*/|т*нул на тр*а|о*вянистом ковре, пр*и|е*чудл*и|е*во
// // оз*а|о*рил р*а|о*вни*нн|н*ую гла*д|т*ь на окраин*е|и*. Его не* |/*уверенный*,| * а 
// // застенч*и|е*вый свет пр*е|и*вратил р*а|о**сс|с|зс*тилающееся про*о|а*стран*/|т*ство
// // в светло*-|/| *серебр*я|е**н|нн*ое обл*а|о*ко*,| * праз*д| *нич*/|ь*но осв*е|я*тил всё
// // вокруг гиган*т|/*ским прожектором*,| как* |/|-*буд*/| |-*то со*нн|н*ая тиш*ь|/*
// // в*с|з*кинула пр*и|е*крытые рес*/т*ниц*ы|и*. Камыш*о|ё*вые зар*о|а*сли в
// // окрес*т|/*ностях пер*е|и*ш*ё|о*птывают*/|ъ|ь*ся ш*е|и*лестящей л*и|е*ствой, 
// // пр*и|е*к*а|о*сают*/|ъ|ь*ся к чу*в|/*свтительным тр*а|о*винкам, р*о|а*ня*ю|я*т
// // ст*е|и*кля*нн|н*ые р*о|а*синки на зелё*н|нн*ую пор*о|а*сль. Пол*/|-*ноч*/|ь|ъ*ный
// // час ура о внавешенно дыш*и|е|ы*т далеко не* |/*х*о|а*лодным воздухом. Ночь *-|,* 
// // время ра*з|с*думий. Мир свеж*/|ъ|ь* и могуч*ъ|ь*. Открываеш*ь|ъ|/* настеж*ь|ъ|/*
// // д*е|и*р*е|и*вя*нн|н*ую раму, в*зс|c*матр*и|е*ва*е|и*ш*ь|ъ|/*ся в вовсе 
// // не*/| *бе*з|с*гранич*/|ъ|ь*ную даль, страс*т|/*но гл*о|а*таеш*ь|ъ|/* зап*а|о*хи
// // бл*а|о*гоухающих трав и вопр*о|а*шаеш*ь|ъ|/* у кого*-|/*нибудь : Почему* |/*же так 
// // ск*о|а*ротеч*ь|ъ*ны и так пр*е|и*крас*/|т*ны в*е|и*се*нн|н*ие сум*е|и*рки. А потом
// // ещ*ё|о* не много посмотр*и|е*ш*ь|ъ|/* на пр*и|е*гнувшиеся д*е|и*рев*ь|ъ*я , на
// // пр*и|е*крытые  коло*д|т|/*ц*ы|и* с ключ*е|и*вой водой, на не*/| *глубокий овраж*е|и*к
// // с земл*я|е**н|нн*ым мостом  - на всё, что в*и|е*дне*е|и*т*ь|ъ/*ся из окошка.

// // В меж*ъ|ь/*ярусных пер*е|и*крытиях что*-/*то хрус*т/*нет, когда 
// // подветре*нн|н*ой ст*о|а*р*о|а*ны к дому подб*и|е*ра*е|и|я*т*/|ь|ъ*ся мес*|/наяя
// // собач*о|ё*нка. Она выт*и|е*рает лапки о глин*я|е**н|нн*ую пл*а|о*стинку,
// // которую кое*-|/*кто забыл на крыльц*е|э*, и дом ей кажет*/|ъ|ь*ся 
// // гиган*т|/*ск*и|е*м, громоз*д|/*к*и|е*м *з|с*дан*и|е*ем. Вдрг, вып*а|о*д*е|и*т из гн*е|и*зда
// // г*а|о*лч*о|ё*нок и поп*а|о*дёт прямо на холщ*о|ё*вый мешок, который
// // р*а|о**сс|зс|с*т*е|и*лили вечером хозяева, но собач*ь|ъ|/*ка никогда
// // не*/| *трон*е|и*т птенц*о|ё*в, а лиш*ь|/* пр*и|е*гл*я|и*дит*/|ъ|ь*ся с сер*ь|ъ|/*ёзност*ь|ъ*ю
// // к малышу и стер*е|и*ж*ё|о*т его до утр*е|и**нн|н**е|и*й з*а|о*ри. Румя*н|нн*ое
// // марево р*а|о**сс|с|зс*вета осв*е|я*ща*е|и*т чугу*нн|н*ую изг*о|а*ро*д|т*ь. Лик
// // тума*нн|н*ых крыш*/|ь|ъ* соч*е|и*таются вместе, сл*и|е*вают*/|ь|ъ*ся в свинц*о|ё*вый
// // г*о|а*р*и|е*зонт и уча*/|в*ству*ю|я*т в спектакл*е|и* о начал*е|и* нового дня.



// // в(3,с)кинула прикрытые ресницы/. Камышовые заро сли в
// // окрестностях перешептываются шЕлестящей листвой
// // прикасаются к чу Вствительным трАвинкам , РОНЯЮТ ст кля(н,нные ре синки на зелё(н, нн)ую поре сль. (Пол)ноч_
// // ный
// // час урф вновешенно дышит далеко (не) х лодным воздухом. Ночь время р А(з,с)думий. Мир свеж и могуч_. Открываеш настежь дЕ рЕ вя(н,нн)ую
// // pamy,
// // B(3,C)MaTpBaEwbc B BoBce
// // (не)бе(з,с)гр д. нич_
// // ную даль, страстноз гл_отаешь запА хи
// // блд гоухающих трав и вопре шаеше у кого(нибудь) Почему(же) так
// // ск о ротеч
// // ны и так прЕ крас _Ны ВЕсе(Н,НН)не сум Е рки? А потом
// // еще (нериного посмотришь на пр(е,и)гнувшиеся дЕ ревь я, на
// // npLKpaiTble konot UAL C KTOYE BOH BOAOi, Ha (Herny6okui oBpanE
// // с земля (н,нным мостом-на всё что виднеется из окошка.
// // в межьярусных пере крытиях что(то) хрус нет, когда
// // подветре(н,нн)ой стороны
// // к дому подбирается мест ная
// // собач @нка. Она вытирает лапки о глиня (н,нную плА стинку которую (кое)кто забыл на крыльце, и дом ей кажет с
// // СЯ
// // гиган т ским громоздким (з,с)дан и ем. Вдруг выпА де тиз гне зда гАлченок и попАдёт прямо на холщовый мешок, который рА (с, зс,сс)тЕ лили вечером
// // хозяева, но собач_ка никогд
// // (не/тронЕт птенцев, а лиш ? придглядится с серёзность и
// // к малышу и стер ЕжЕт его до утрЕ(н,нн) ей з Ари. Румя(н,нн)о марево рА(с,зс,сс)вета освЕща Ет чугу(н,нн)ую изгородь. Лик
// // тума(н,нн)ых крыш сочЕтаются вместе, сливают ся в свинце вы горизонт и уча_ствуют в спектакл Е о началЕ нового дня.
    



