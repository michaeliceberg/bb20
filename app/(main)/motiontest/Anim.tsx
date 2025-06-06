// 'use client'


// import { useAnimationControls } from "framer-motion";
// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { ArrowDownLeft } from "lucide-react";
// import { SnapPointsType, useSnap } from "./useSnap";



// type Props = {
//     threeCoordinates: number[],
// }

// export const Anim = ({threeCoordinates}: Props) => {

//     const [x1, y1, x2, y2, x3, y3] = threeCoordinates


//     const strokeWidth = 6


//     const colorLine = "#cbd5e1"  // slate300
    
//     const colorLineSnap1 = "#22c55e"  // green500
//     const colorLineSnap2 = "#0ea5e9"  // sky500
//     const colorLineSnap3 = "#a855f7"  // purple500

//     const colorCircle = "#94a3b8"  // slate400

//     const colorCircle1 = "#16a34a"  // green600
//     const colorCircle2 = "#0284c7"  // sky600
//     const colorCircle3 = "#9333ea"  // purple600
    

//     const handleWidth = 130;
//     const handleHeight = 60;

//     const ButtonList =  [
//         {
//             id: 0,
//             text: 'a',
//             buttonRef: useRef<HTMLButtonElement>(null),
//         },
//         {
//             id: 1,
//             text: 'b',
//             buttonRef: useRef<HTMLButtonElement>(null),
//         },
//         {
//             id: 2,
//             text: 'c',
//             buttonRef: useRef<HTMLButtonElement>(null),
//         },

//     ]



//     const containerRef = useRef<HTMLDivElement>(null);

//     const [width, setWidth] = useState(0);
//     const [height, setHeight] = useState(0);
 
//     useLayoutEffect(() => {
//         setWidth(containerRef.current?.getBoundingClientRect().width ?? 0);
//         setHeight(containerRef.current?.getBoundingClientRect().height ?? 0);
//     }, []);
 

 
//     const snapPoints:SnapPointsType = {

//         type: 'constraints-box',
//         // unit: 'percent',
//         unit: 'pixel',
//         points: 
//             // [
//             //     { x: 0.1, y: 0.1 }, 
//             //     { x: 0.3, y: 0.2 }, 
//             //     { y: 0.5 }, 
//             //     { x: 0.75 }, 
//             //     { x: 0.9, y: 0.9 }, 
//             //     { x: 1, y: 1 },
//             //     { x: 0.3, y: 0.3 },
//             // ],

//             [
//                 { y: 0 },   // верхний магнит
//                 { x: (x1+x2)/2, y: (y1+y2)/2 },
//                 { x: (x2+x3)/2, y: (y2+y3)/2 },
//                 { x: (x1+x3)/2, y: (y1+y3)/2 },  
                
//                 { x: (x1+x3), y: (y1+y3) },  
//             ],


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

    
//     const controlsColor1 = useAnimationControls()
//     const controlsColor2 = useAnimationControls()
//     const controlsColor3 = useAnimationControls()
    


//     useEffect(()=>{
//         //        
//         // Идем по всем snapPoint'ам
//         //


//         snapPoints.points.map((curPoint, pointIndex) => {
//             //
//             let pointSelected = 0            
//             //
//             // смотрим где все Кнопки
//             //
            
//             useSnapList.map((useSnapResult, indexButton) => {

//                 if (useSnapResult.currentSnappointIndex == pointIndex) {
                    
//                     pointSelected += 1
//                     //
//                     // если эта кнопка в curPoint'е
//                     // то окрашиваем в цвет этой кнопки
//                     //
//                     if (useSnapResult.currentSnappointIndex == 1) {
//                         controlsColor1.start('initial')

//                     } else if (useSnapResult.currentSnappointIndex == 2){
//                         controlsColor2.start('initial')

//                     } else if (useSnapResult.currentSnappointIndex == 3){
//                         controlsColor3.start('initial')
//                     }
            
//                 }
//             })

//             if (pointSelected == 0) {
//                 //
//                 // в этом snapPoint'е нет ни одной кнопки
//                 // поэтому убираем цвет
//                 if (pointIndex == 1) {
//                     controlsColor1.start('snapColor')

//                 } else if (pointIndex == 2){
//                     controlsColor2.start('snapColor')

//                 } else if (pointIndex == 3){
//                     controlsColor3.start('snapColor')
//                 }
        
//             }

//        } )
        
//     }, useSnapList.map(el => el.currentSnappointIndex)
// )


    
   



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
 




//             {ButtonList.map( (button, index) => 

//                 <motion.button 
//                     key={index*401941}
//                     ref={button.buttonRef}
//                     className="text-xl rounded bg-gray-600 text-primary-foreground hover:bg-gray-500/70"
//                     style={{ width: handleWidth, height: handleHeight }} 
//                     drag 
//                     dragConstraints={containerRef}
//                     // {...dragProps}
//                     {...useSnapList[index].dragProps}
//                     >
                        
//                     {button.text}

//                     <motion.div className="absolute bottom-0 -pt-4  text-white text-2xl">

//                         <ArrowDownLeft size='20' />

//                     </motion.div>

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





//                 {/* TODO:  LINES */}

//                 <motion.line
//                     x1 = {x1}
//                     y1 = {y1}
//                     x2 = {x2}
//                     y2 = {y2}
//                     stroke = {colorLine}
//                     variants = {draw}
//                     custom={2}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}


//                     whileHover={{
//                         scale: 1.2,
//                         rotate: 5,
//                         backgroundColor: "#2BB95D",
//                         transition: { duration: 0.2 },
//                     }}

//                 />



//                 <motion.line
//                     x1 = {x2}
//                     y1 = {y2}
//                     x2 = {x3}
//                     y2 = {y3}
//                     stroke= {colorLine}
//                     variants = {draw}
//                     custom={3.5}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
//                 />

//                 <motion.line
//                     x1= {x3}
//                     y1= {y3}
//                     x2= {x1}
//                     y2= {y1}
//                     stroke= {colorLine}
//                     variants={draw}
//                     custom={5}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
//                 /> 











//                 <motion.line
                    
//                     x1 = {x1}
//                     y1 = {y1}
//                     x2 = {x2}
//                     y2 = {y2}
//                     stroke= {colorLineSnap1}
//                     variants = {{
//                         initial: {
//                             opacity: '0',
//                         },
//                         snapColor: {
//                             opacity: '1',
//                         }
//                     }}
//                     custom={0}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
//                     initial = 'initial'
//                     animate = {controlsColor1}
//                     // transition={{ duration: 1 }}
//                     // transition={{ type: "spring" }}
//                 />


//                 <motion.line
//                     x1 = {x2}
//                     y1 = {y2}
//                     x2 = {x3}
//                     y2 = {y3}
//                     stroke= {colorLineSnap2}
//                     variants = {{
//                         initial: {
//                             opacity: '0'
//                         },
//                         snapColor: {
//                             opacity: '1'
//                         }
//                     }}
//                     custom={0}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
//                     initial = 'initial'
//                     animate = {controlsColor2}
//                 />



//                 <motion.line
//                     x1 = {x1}
//                     y1 = {y1}
//                     x2 = {x3}
//                     y2 = {y3}
//                     stroke= {colorLineSnap3}
//                     variants = {{
//                         initial: {
//                             opacity: '0'
//                         },
//                         snapColor: {
//                             opacity: '1'
//                         }
//                     }}
//                     custom={0}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
//                     initial = 'initial'
//                     animate = {controlsColor3}
//                 />


               
               


                    















//                 {/* TODO: CIRCLE */}


//                 <motion.circle  
//                     cx={(x1+x2)/2}
//                     cy={(y1+y2)/2}
//                     r="4"
//                     stroke= {colorCircle1}
//                     variants={draw}
//                     custom={6.5}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
//                 />


//                 <motion.circle
//                     cx={(x3+x2)/2}
//                     cy={(y3+y2)/2}
//                     r="4"
//                     stroke= {colorCircle2}
//                     variants={draw}
//                     custom={6.5}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
//                 />



//                 <motion.circle
//                     cx={(x1+x3)/2}
//                     cy={(y1+y3)/2}
//                     r="4"
//                     stroke = {colorCircle}
//                     variants={draw}
//                     custom={6.5}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
//                 />





//                 {/* TODO:  circle SNAP */}





//                 <motion.circle  
//                     cx={(x1+x2)/2}
//                     cy={(y1+y2)/2}
//                     r="4"
//                     stroke= {colorCircle1}

//                     variants = {{
//                         initial: {
//                             opacity: '0'
//                         },
//                         snapColor: {
//                             opacity: '1'
//                         }
//                     }}

//                     custom={6.5}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
                    
//                     initial = 'initial'
//                     animate = {controlsColor1}
//                 />





                    


//                 <motion.circle
//                     cx={(x3+x2)/2}
//                     cy={(y3+y2)/2}
//                     r="4"
//                     stroke= {colorCircle2}

//                     variants = {{
//                         initial: {
//                             opacity: '0'
//                         },
//                         snapColor: {
//                             opacity: '1'
//                         }
//                     }}

//                     custom={6.5}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
                    
//                     initial = 'initial'
//                     animate = {controlsColor2}
//                 />



//                 <motion.circle
//                     cx={(x1+x3)/2}
//                     cy={(y1+y3)/2}
//                     r="4"
//                     stroke= {colorCircle3}

//                     variants = {{
//                         initial: {
//                             opacity: '0'
//                         },
//                         snapColor: {
//                             opacity: '1'
//                         }
//                     }}

//                     custom={6.5}
//                     style={{
//                         strokeWidth: strokeWidth,
//                         strokeLinecap: "round",
//                         fill: "transparent",
//                     }}
                    
//                     initial = 'initial'
//                     animate = {controlsColor3}
//                 />






//             </motion.svg> 


            

//         </motion.div>
//     );
// };
























//     //     type constrType = {
//     //         constraints: Partial<BoundingBox> | RefObject<Element | null>,
//     //         ref: RefObject<Element | null>,
//     //     }

//     //     const resolveConstraintsMini = ({constraints, ref }: constrType) => {
//     //         if (constraints === undefined) {
//     //             return null;
//     //         };
                        
//     //         if (!ref.current) {
//     //             throw new Error('Element ref is empty')
//     //         };

//     //         const constraintsBoxRef = useRef<BoundingBox | null>(null);
//     //         const box = 'current' in constraints ? constraintsBoxRef.current : constraints;
//     //         if (!box) {
//     //             throw new Error("Constraints wasn't measured");
//     //         }
     
     
//     //         const elementBox = ref.current.getBoundingClientRect();
//     //         const style = window.getComputedStyle(ref.current);
//     //         const transformMatrix = new DOMMatrixReadOnly(style.transform);
//     //         const baseX = window.scrollX + elementBox.x - transformMatrix.e;
//     //         const baseY = window.scrollY + elementBox.y - transformMatrix.f;
     
//     //         const left = box.left !== undefined ? baseX + box.left : undefined;
//     //         const top = box.top !== undefined ? baseY + box.top : undefined;
     
//     //         const right = box.right !== undefined ? baseX + box.right : undefined;
//     //         const bottom = box.bottom !== undefined ? baseY + box.bottom : undefined;
     
//     //         const width = (left !== undefined && right !== undefined) ? right - left : undefined;
//     //         const height = (top !== undefined && bottom !== undefined) ? bottom - top : undefined;
     
//     //         return {
//     //             left,
//     //             top,
//     //             width,
//     //             height,
//     //             right,
//     //             bottom,
//     //         };
//     //     };

//     // const box = resolveConstraintsMini(
//     //     {
//     //         constraints: containerRef,
//     //         ref: containerRef,
//     //     }
//     // )








//     // <motion.button 
//     //             ref={buttonRef2}
//     //             className="text-xl rounded bg-gray-600 text-primary-foreground hover:bg-gray-500/70" 
//     //             style={{ width: handleWidth, height: handleHeight }} 
//     //             drag 
//     //             dragConstraints={containerRef}
//     //             {...dragProps2.dragProps}
//     //         >
//     //             катет

//     //             <motion.div className="absolute bottom-0 -pt-4  text-white text-2xl">
//     //             {/* <CircleSmall size='14' /> */}
//     //                 <ArrowDownLeft size='20' />
//     //             </motion.div>

//     //         </motion.button>