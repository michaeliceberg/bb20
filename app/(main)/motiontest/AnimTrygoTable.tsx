// 'use client'


// import { RefObject, useEffect, useLayoutEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { SnapPointsType, useSnap } from "./useSnap";
// import 'katex/dist/katex.min.css';
// import Latex from 'react-latex-next';

// type Props = {
//     ButtonList: {
//         id: number;
//         text: string;
//         buttonRef: RefObject<HTMLButtonElement>;
//     }[]
// }

// export const AnimTrygoTable = ({ ButtonList }: Props) => {


//     const deltaX = 150
//     const deltaY = 150

//     const x1 = 150
//     const y1 = 200
    
//     const x2 = x1 + deltaX
//     const y2 = y1

//     const x3 = x1 + 2 * deltaX
//     const y3 = y1





//     const x4 = x1
//     const y4 = y1 + deltaY
    
//     const x5 = x1 + deltaX
//     const y5 = y1 + deltaY

//     const x6 = x1 + 2 * deltaX
//     const y6 = y1 + deltaY



//     const x7 = x1
//     const y7 = y1 + 2 * deltaY
    
//     const x8 = x1 + deltaX
//     const y8 = y1 +  2 * deltaY

//     const x9 = x1 + 2 * deltaX
//     const y9 = y1 + 2 * deltaY


//     const strokeWidth = 4


//     const colorLine = "#cbd5e1"  // slate300
    
//     const colorCircle = "#94a3b8"  // slate400

//     const colorCircle1 = "#16a34a"  // green600
//     const colorCircle2 = "#0284c7"  // sky600
//     const colorCircle3 = "#9333ea"  // purple600
    


//     const multiplier = 0.9
//     const handleWidth = deltaX * multiplier
//     const handleHeight = deltaY * multiplier


//     const containerRef = useRef<HTMLDivElement>(null);

//     const [width, setWidth] = useState(0);
//     const [height, setHeight] = useState(0);
 
//     useLayoutEffect(() => {
//         setWidth(containerRef.current?.getBoundingClientRect().width ?? 0);
//         setHeight(containerRef.current?.getBoundingClientRect().height ?? 0);
//     }, []);
 
//     type PointsInitial = {
//         y?: number;
//         x?: number;
//     }[] 
//     // | undefined

//     const pointsInitial:PointsInitial = [
//         { y: 0 },   // верхний магнит
//         // { x: x1, y: y1 },
//         // { x: x2, y: y2 },
//         // { x: x3, y: y3 },        
        
//         { x: x4, y: y4 },
//         { x: x5, y: y5 },
//         { x: x6, y: y6 },   

//         { x: x7, y: y7 },
//         { x: x8, y: y8 },
//         { x: x9, y: y9 },   
//     ]

//     const [points, setPoints] = useState(pointsInitial)

 
//     const snapPoints:SnapPointsType = {

//         type: 'constraints-box',
//         // unit: 'percent',
//         unit: 'pixel',
//         points: points
//             // [
//             //     { x: 0.1, y: 0.1 }, 
//             //     { x: 0.3, y: 0.2 }, 
//             //     { y: 0.5 }, 
//             //     { x: 0.75 }, 
//             //     { x: 0.9, y: 0.9 }, 
//             //     { x: 1, y: 1 },
//             //     { x: 0.3, y: 0.3 },
//             // ],

//             // [
//             //     { y: 0 },   // верхний магнит
//             //     { x: (x1+x2)/2, y: (y1+y2)/2 },
//             //     { x: (x2+x3)/2, y: (y2+y3)/2 },
//             //     { x: (x1+x3)/2, y: (y1+y3)/2 },              
//             // ],







//             // [
//             //     { y: 0 },   // верхний магнит
//             //     // { x: x1, y: y1 },
//             //     // { x: x2, y: y2 },
//             //     // { x: x3, y: y3 },        
                
//             //     { x: x4, y: y4 },
//             //     { x: x5, y: y5 },
//             //     { x: x6, y: y6 },   

//             //     { x: x7, y: y7 },
//             //     { x: x8, y: y8 },
//             //     { x: x9, y: y9 },   
//             // ],






//     };
 



//     const useSnapList = ButtonList.map((button, index) => {

//         const spanResult  = useSnap(
//             {
//                 direction: 'both',
//                 ref: button.buttonRef,
//                 constraints: containerRef,
    
//                 snapPoints: 
//                 { 
//                     type: snapPoints.type,
//                     unit: snapPoints.unit,
//                     points: snapPoints.points,
//                 },
                
//             })

//         return (
//             {
//                 buttonId: button.id,
//                 buttonIndex: index,
//                 dragProps: spanResult.dragProps,
//                 currentSnappointIndex: spanResult.currentSnappointIndex       
//             }
//         )
//     })





//     const draw = {
//         hidden: { pathLength: 0, opacity: 0 },
//         visible: (i: number) => {
//             const delay = i * 0.5
//             return {
//                 pathLength: 1,
//                 opacity: 1,
//                 transition: {
//                     pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
//                     opacity: { delay, duration: 0.01 },
//                 },
//             }
//         },
//     }

   
    
   





//     function placeDiv(x_pos: number, y_pos: number, elementId: string) {
//         var d = document.getElementById(elementId);
//         if (d) 
//             {
//                 d.style.position = "absolute";
//                 d.style.left = x_pos+'px';
//                 d.style.top = y_pos+'px';
//             }
//     }

//     useEffect(()=>{
//         placeDiv(x1 + deltaX/2 * multiplier  - 10, y1 + deltaY/2 * multiplier - 10, 'pi6')
//         placeDiv(x2 + deltaX/2 * multiplier  - 10, y2 + deltaY/2 * multiplier - 10, 'pi4')
//         placeDiv(x3 + deltaX/2 * multiplier  - 10, y3 + deltaY/2 * multiplier - 10, 'pi3')

//         placeDiv(x1 - deltaX/2, y1 + 3*deltaY/2 * multiplier - 10, 'sin')
//         placeDiv(x1 - deltaX/2, y1 + 5*deltaY/2 * multiplier - 10, 'cos')
//     }, [])
        








//     // TODO:
//     //
//     // Проверяем Правильно ИЛИ нет
//     //
//     const [isDoneRight, setIsDoneRight] = useState(false)
//     const [isDone, setIsDone] = useState(false)

//     useEffect(()=>{

//         const LifeSaver = useSnapList.map(useSnapResult => (
//             {
//                 currentSnappointIndex: useSnapResult.currentSnappointIndex || -1,
//                 buttonId: useSnapResult.buttonId,

//             })
//         )

//         // console.log(LifeSaver)
        
//         // Делаем так чтобы Занятые точки НЕ магнитились
//         // в Магнит пихаем вместо координаты точки  pointsInitial[0]
//         //
//         const OccupiedPointsObject = LifeSaver.filter(el => el.currentSnappointIndex > 0)
//         const OccupiedPointsList = OccupiedPointsObject.map(el => el.currentSnappointIndex)
//         console.log('OccupiedPointsList: ', OccupiedPointsList)

//         let freeList:PointsInitial = []
//         pointsInitial.map((point, index) => {
//                 if (!OccupiedPointsList.includes(index)) {
//                     freeList.push(point)
//                     return {
//                 point
//               } 
//             } 
//             else {
//                 // вместо занятой точки, пихаем магнит {y: 0}
//                 freeList.push(pointsInitial[0])
//             }
//         });
//         setPoints(freeList)




        
//         // Проверяем, получен ли ответ
//         //
//         // сортируем по Snap point'ам  от 1 до 6
//         //
//         LifeSaver.sort((a, b) => a.currentSnappointIndex - b.currentSnappointIndex)
//         //
//         // смотрим, какие кнопки лежат по порядку snap Point'ов
//         //
//         if (
//             LifeSaver[0].buttonId == 0 && 
//             LifeSaver[1].buttonId == 1 &&
//             LifeSaver[2].buttonId == 2 && 
//             LifeSaver[3].buttonId == 2 && 
//             LifeSaver[4].buttonId == 1 && 
//             LifeSaver[5].buttonId == 0  

//         ) {
//             setIsDoneRight(true)

//         } else {

//             setIsDoneRight(false)

//         }      
        
//         const checkIsDone = LifeSaver.filter(el => el.currentSnappointIndex == -1)

//         // console.log('checkIsDone: ', checkIsDone)

//         if (checkIsDone.length = 0 ) {
//             setIsDone(true)
//         } else {
//             setIsDone(false)
//         }
        
//         // console.log(isDone)
//         // console.log(isDoneRight)

//         // Зависимости useEffect - список (map) snapPoints
//         //
//     }, useSnapList.map(el => el.currentSnappointIndex))






//     return (
        
        
//         <motion.div 
//             className="SnappingExample" 
//             ref={containerRef}
//         >
//             {snapPoints.points.map((p, ind) => (
//                 <div
//                     key={ind} // Array is static so it's fine to use index as key
//                     className="snappoint"
//                     style={{
//                         top: p.y === undefined ? '0' : (height - handleHeight) * p.y,
//                         bottom: p.y === undefined ? '0' : undefined,
//                         left: p.x === undefined ? '0' : (width - handleWidth) * p.x,
//                         right: p.x === undefined ? '0' : undefined,
//                         width: p.x === undefined ? undefined : p.y === undefined ? 4 : 8,
//                         height: p.y === undefined ? undefined : p.x === undefined ? 4 : 8,
//                     }}
//                 />
//             ))}
 

//             {isDone &&
//                 <div className="absolute">
//                     {isDone}
//                 </div>
//             }

//             {isDoneRight &&
//                 <div className="absolute">
//                     {isDoneRight}
//                 </div>
//             }

//             {/* TODO:  pi6 pi4 pi3 */}


            
            
            
//             <motion.div
//                 id='pi6'
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{
//                     duration: 0.4,
//                     scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
//                 }}
//                 className="absolute text-3xl"
//             >
//                 <Latex>
//                     {' $ \\frac{ \\pi } {6}  $ '}
//                 </Latex>
//             </motion.div>



//             <motion.div
//                 id='pi4'
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{
//                     duration: 0.4,
//                     scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
//                 }}
//                 className="absolute text-3xl"
//             >
//                 <Latex>
//                     {' $ \\frac{ \\pi } {4}  $ '}
//                 </Latex>
//             </motion.div>



//             <motion.div
//                 id='pi3'
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{
//                     duration: 0.4,
//                     scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
//                 }}
//                 className="absolute text-3xl"
//             >
//                 <Latex>
//                     {' $ \\frac{ \\pi } {3}  $ '}
//                 </Latex>
//             </motion.div>






//             {/* TODO:  sin cos*/}


//             <motion.div
//                 id='sin'
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{
//                     duration: 0.4,
//                     scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
//                 }}
//                 className="absolute text-3xl"
//             >
//                sin
//             </motion.div>



//             <motion.div
//                 id='cos'
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{
//                     duration: 0.4,
//                     scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
//                 }}
//                 className="absolute text-3xl"
//             >
               
//                 cos
                
//             </motion.div>








//             {/* TODO:  options BUTTONS */}



//             {ButtonList.map( (button, index) => 

//                 <motion.button 
//                     key={index*5350912}
//                     ref={button.buttonRef}
//                     className="text-3xl rounded bg-gray-600 text-primary-foreground"
//                     style={{ width: handleWidth, height: handleHeight }} 
//                     drag 
//                     dragConstraints={containerRef}
//                     {...useSnapList[index].dragProps}
                    
//                     whileHover={{
//                         scale: 1.2,
//                         rotate: 2,
//                         backgroundColor: "#2BB95D",
//                         transition: { duration: 0.2 },
//                         opacity: 0.7,
//                     }}
//                     whileTap={{
//                         scale: 0.8,
//                         rotate: -2,
//                         backgroundColor: "#1A7A3E",
//                         opacity: 0.7,
//                     }}
//                     transition={{
//                         type: "spring",
//                         stiffness: 400,
//                         damping: 17,
//                     }}
//                     >
                    
//                     <Latex>
//                         {button.text}
//                     </Latex>


//                 </motion.button>
                
//             )}






//             <motion.svg
//                 width="600"
//                 height="600"
//                 viewBox="0 0 600 600"
//                 initial="hidden"
//                 animate="visible"
//                 style={{ maxWidth: "80vw" }}
//             >

            

//                 {/* TODO:  Horizontal Lines */}


//                 <motion.line
//                     x1 = {x1}
//                     y1 = {y1}
//                     x2 = {x1 + 4 *  deltaX}
//                     y2 = {y3}
//                     stroke = {colorLine}
//                     variants = {draw}
//                     custom={1}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
//                 />


//                 <motion.line
//                     x1 = {x1}
//                     y1 = {y1 + deltaY}
//                     x2 = {x1 + 4 *  deltaX}
//                     y2 = {y3 + deltaY}
//                     stroke = {colorLine}
//                     variants = {draw}
//                     custom={1}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
//                 />



//                 <motion.line
//                     x1 = {x1}
//                     y1 = {y1 + 2 * deltaY}
//                     x2 = {x1 + 4 *  deltaX}
//                     y2 = {y3 + 2 * deltaY}
//                     stroke = {colorLine}
//                     variants = {draw}
//                     custom={1}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
//                 />




//                 {/* TODO:  Vertical Lines */}

//                 <motion.line
//                     x1 = {x1 + deltaX * multiplier}
//                     y1 = {y1 - deltaY / 2}
//                     x2 = {x1 + deltaX * multiplier}
//                     y2 = {y1 + 2 * deltaY}
//                     stroke = {colorLine}
//                     variants = {draw}
//                     custom={1}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
//                 />


//                 <motion.line
//                     x1 = {x1 + 2 * deltaX}
//                     y1 = {y1 - deltaY / 2}
//                     x2 = {x1 + 2 * deltaX}
//                     y2 = {y1 + 2 * deltaY}
//                     stroke = {colorLine}
//                     variants = {draw}
//                     custom={1}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
//                 />


               




//                 {/* TODO: circles */}




//                 <motion.circle  
//                     cx={x4 + deltaX/2 * multiplier}
//                     cy={y4 - deltaY/2 * multiplier}
//                     r="4"
//                     stroke= {colorCircle1}
//                     variants={draw}
//                     custom={2}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
//                 />


//                 <motion.circle
//                     cx={x5 + deltaX/2 * multiplier}
//                     cy={y5 - deltaY/2 * multiplier}
//                     r="4"
//                     stroke= {colorCircle2}
//                     variants={draw}
//                     custom={2.5}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
//                 />



//                 <motion.circle
//                     cx={x6 + deltaX/2 * multiplier}
//                     cy={y6 - deltaY/2 * multiplier}
//                     r="4"
//                     stroke = {colorCircle}
//                     variants={draw}
//                     custom={3}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
//                 />








//                 <motion.circle  
//                     cx={x7 + deltaX/2 * multiplier}
//                     cy={y7 - deltaY/2 * multiplier}
//                     r="4"
//                     stroke= {colorCircle1}
//                     variants={draw}
//                     custom={3.5}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
//                 />


//                 <motion.circle
//                     cx={x8 + deltaX/2 * multiplier}
//                     cy={y8 - deltaY/2 * multiplier}
//                     r="4"
//                     stroke= {colorCircle2}
//                     variants={draw}
//                     custom={4}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
//                 />



//                 <motion.circle
//                     cx={x9 + deltaX/2 * multiplier}
//                     cy={y9 - deltaY/2 * multiplier}
//                     r="4"
//                     stroke = {colorCircle}
//                     variants={draw}
//                     custom={4.5}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
//                 />





//             </motion.svg> 


            

            


//         </motion.div>
//     );
// };



