'use client'


import { BoundingBox, MotionProps, useAnimationControls } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpLeft, Cog } from "lucide-react";
import { SnapPointsType } from "./useSnap";
import { useSnapFTrue } from "./useSnapFTrue";
import { Button } from "@/components/ui/button";



type Props = {
    threeCoordinates: number[],
    xCoordinates: number[],
    arcSVG: string,
    
}

export const AnimRightTriangleSin = ({
    threeCoordinates,
    xCoordinates,
    arcSVG,
}: Props) => {

    const [x1, y1, x2, y2, x3, y3] = threeCoordinates

    const HEIGHT_FORMULA_COEFF = 0.8


    // const lineCoordinates = [
    //     {
    //         x1: x1,
    //         y1: y1,
    //         x2: x2,
    //         y2: y2,
    //     },
    //     {
    //         x1: x2,
    //         y1: y2,
    //         x2: x3,
    //         y2: y3,
    //     },
    //     {
    //         x1: x3,
    //         y1: y3,
    //         x2: x1,
    //         y2: y1,
    //     },
    // ]



    


    const strokeWidth = 10

    const deltaX = 150
    const deltaY = 150

    const colorLineSlate = "#cbd5e1"  // slate300
    

    const colorLineList = [
        "#22c55e",   // green500
        "#0ea5e9",   // sky500
        "#a855f7",   // purple500
    ]

    const tailwindColorLineList = [
        'bg-green-500', 
        'bg-sky-500', 
        'bg-purple-500'
    ]

    const colorCircle1 = "#16a34a"  // green600
    const colorCircle2 = "#0284c7"  // sky600
    const colorCircle3 = "#9333ea"  // purple600
    

    const handleWidth = 60;
    const handleHeight = 60;

    const containerRef = useRef<HTMLDivElement>(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
 
    useLayoutEffect(() => {
        setWidth(containerRef.current?.getBoundingClientRect().width ?? 0);
        setHeight(containerRef.current?.getBoundingClientRect().height ?? 0);
        setLeft(containerRef.current?.getBoundingClientRect().left ?? 0);
        setTop(containerRef.current?.getBoundingClientRect().top ?? 0);


        
    }, []);

    // Так как вначале width и height не посчиталось, надо через useEffect обновить Snap координаты
    useEffect(()=> {

        setBigSnapListState([

            {
                pointId: 0,
                isFree: true,
                occupiedBy: 0,
                coord: { x: (x1+x2) * width /2, y: (y1+y2) * height /2 }, 
                // coord: { x: tt, y: cc }, 
                // coord: { x: 492, y: 50 }, 
            },
            {
                pointId: 1,
                isFree: true,
                occupiedBy: 1,
                coord: { x: (x2+x3) * width /2, y: (y2+y3) * height /2 },
            },
            {
                pointId: 2,
                isFree: true,
                occupiedBy: 2,
                coord: { x: (x1+x3) * width /2, y: (y1+y3) * height /2 },
            },


            {
                pointId: 3,
                isFree: true,
                occupiedBy: -1,
                coord: { x: x1 * height , y: HEIGHT_FORMULA_COEFF * height},
            },
            {
                pointId: 4,
                isFree: true,
                occupiedBy: -1,
                coord: { x: x1 * height, y: (HEIGHT_FORMULA_COEFF + 0.1) * height},
            },


            

        ])

    }, [width, height])





    const [BigSnapListState, setBigSnapListState] = useState(
        [

            {
                pointId: 0,
                isFree: true,
                occupiedBy: 0,
                coord: { x: (x1+x2) * width /2, y: (y1+y2) * height /2 }, 
                // coord: { x: tt, y: cc }, 
                // coord: { x: 492, y: 50 }, 
            },
            {
                pointId: 1,
                isFree: true,
                occupiedBy: 1,
                coord: { x: (x2+x3) * width /2, y: (y2+y3) * height /2 },
            },
            {
                pointId: 2,
                isFree: true,
                occupiedBy: 2,
                coord: { x: (x1+x3) * width /2, y: (y1+y3) * height /2 },
            },


            {
                pointId: 3,
                isFree: true,
                occupiedBy: -1,
                coord: { x: x1 * height , y: HEIGHT_FORMULA_COEFF * height},
            },
            {
                pointId: 4,
                isFree: true,
                occupiedBy: -1,
                coord: { x: x1 * height, y: (HEIGHT_FORMULA_COEFF + 0.1) * height},
            },


            

        ]
    )

    

    const FormulaDots = [
        {
            id: 'formulaDot1',
            // cx: x1 + deltaX + 20,
            // cy: y3 + deltaY - 90 + 20,
            cx: x1 * width,
            cy: HEIGHT_FORMULA_COEFF * height ,
        },
        {
            id: 'formulaDot2',
            // cx: x1 + deltaX + 20,
            // cy: y3 + deltaY + 4 + 20,
            cx: x1 * width,
            cy: (HEIGHT_FORMULA_COEFF + 0.1) * height,
        },

    ]

    const ButtonList =  [
        {
            id: 0,
            text: 'a',
            buttonRef: useRef<HTMLButtonElement>(null),
        },
        {
            id: 1,
            text: 'b',
            buttonRef: useRef<HTMLButtonElement>(null),
        },
        {
            id: 2,
            text: 'c',
            buttonRef: useRef<HTMLButtonElement>(null),
        },

    ]



    
 



    const lineCoordinates = [
        {
            x1: width * x1,
            y1: height * y1,
            x2: width * x2,
            y2: height * y2,
        },
        {
            x1: width * x2,
            y1: height * y2,
            x2: width * x3,
            y2: height * y3,
        },
        {
            x1: width * x3,
            y1: height * y3,
            x2: width * x1,
            y2: height * y1,
        },
    ]


    type PointsInitialFree = {
        y?: number;
        x?: number;

        // pointId: number;
    }[] 

    type PointsInitialFreeID = {
        coord: 
        {
            y: number;
            x: number;
        }
        pointId: number;
        isFree: boolean;

    }[] 




    const PointsInitialFree:PointsInitialFree = BigSnapListState.filter(el => el.isFree).map(point => point.coord)

    const pointsInitialFreeWithID: PointsInitialFreeID = BigSnapListState.filter(el => el.isFree).map(point => (
        {
        pointId: point.pointId,
        coord: point.coord,
        isFree: true,
        }
    ))

    // console.log('pointsInitialFreeWithID!!!!', pointsInitialFreeWithID)
    

    // const [points, setPoints] = useState(PointsInitialFree)
    const points = PointsInitialFree


 
    const snapPoints:SnapPointsType = {
        type: 'constraints-box',
        // unit: 'percent',

        unit: 'pixel',
        points: points,
    };
 




    type TypeUseSnapList= {
        buttonId: number;
        buttonIndex: number;
        dragProps: Pick<MotionProps, "onDragStart" | "onDragEnd" | "onMeasureDragConstraints" | "drag" | "dragMomentum"> & Partial<Pick<MotionProps, "dragConstraints">>
        currentSnappointIndex: number | null;
    }[]


    let useSnapList: TypeUseSnapList= []

    
    // const useSnapList = ButtonList.map((button, index) => {


        // TODO: FTrue  изначально TRUE (прикреплены к точкам)
        //
        let ii = 0
        let spanResult  = useSnapFTrue(
            
            {
                // initialSnapPoint: index, // к чему изначально прикреплена эта кнопка
                initialSnapPoint: BigSnapListState.filter(el=>el.occupiedBy == ButtonList[ii].id)[0]?.pointId, 

                
                direction: 'both',
                ref: ButtonList[ii].buttonRef,
                constraints: containerRef,
    
                snapPoints: 
                { 
                    type: snapPoints.type,
                    unit: snapPoints.unit,
                    
                    // сюда вставляем СВОБОДНЫЕ snap point
                    points: snapPoints.points,
                },
                
            })



        console.log(spanResult)

        useSnapList[0]=
            {
                buttonId: ButtonList[0].id,
                buttonIndex: ii,
                dragProps: spanResult.dragProps,
                currentSnappointIndex: spanResult.currentSnappointIndex       
            }
        
  





            ii = 1
            spanResult  = useSnapFTrue(
            
                {
                    // initialSnapPoint: index, // к чему изначально прикреплена эта кнопка
                    initialSnapPoint: BigSnapListState.filter(el=>el.occupiedBy == ButtonList[ii].id)[0]?.pointId, 
    
                    
                    direction: 'both',
                    ref: ButtonList[ii].buttonRef,
                    constraints: containerRef,
        
                    snapPoints: 
                    { 
                        type: snapPoints.type,
                        unit: snapPoints.unit,
                        
                        // сюда вставляем СВОБОДНЫЕ snap point
                        points: snapPoints.points,
                    },
                    
                })
    
            useSnapList[ii]=
                {
                    buttonId: ButtonList[ii].id,
                    buttonIndex: ii,
                    dragProps: spanResult.dragProps,
                    currentSnappointIndex: spanResult.currentSnappointIndex       
                }








                ii = 2
                spanResult  = useSnapFTrue(
                
                    {
                        // initialSnapPoint: index, // к чему изначально прикреплена эта кнопка
                        initialSnapPoint: BigSnapListState.filter(el=>el.occupiedBy == ButtonList[ii].id)[0]?.pointId, 
        
                        
                        direction: 'both',
                        ref: ButtonList[ii].buttonRef,
                        constraints: containerRef,
            
                        snapPoints: 
                        { 
                            type: snapPoints.type,
                            unit: snapPoints.unit,
                            
                            // сюда вставляем СВОБОДНЫЕ snap point
                            points: snapPoints.points,
                        },
                        
                    })
        
                useSnapList[ii]=
                    {
                        buttonId: ButtonList[ii].id,
                        buttonIndex: ii,
                        dragProps: spanResult.dragProps,
                        currentSnappointIndex: spanResult.currentSnappointIndex       
                    }









    // const useSnapList = ButtonList.map((button, index) => {


    //     // TODO: FTrue  изначально TRUE (прикреплены к точкам)
    //     //
    //     const spanResult  = useSnapFTrue(
            
    //         {
    //             // initialSnapPoint: index, // к чему изначально прикреплена эта кнопка
    //             initialSnapPoint: BigSnapListState.filter(el=>el.occupiedBy == button.id)[0]?.pointId, 

                
    //             direction: 'both',
    //             ref: button.buttonRef,
    //             constraints: containerRef,
    
    //             snapPoints: 
    //             { 
    //                 type: snapPoints.type,
    //                 unit: snapPoints.unit,
                    
    //                 // сюда вставляем СВОБОДНЫЕ snap point
    //                 points: snapPoints.points,
    //             },
                
    //         })

    //     return (
    //         {
    //             buttonId: button.id,
    //             buttonIndex: index,
    //             dragProps: spanResult.dragProps,
    //             currentSnappointIndex: spanResult.currentSnappointIndex       
    //         }
    //     )
    // })














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

    
    const controlsColor0 = useAnimationControls()
    const controlsColor1 = useAnimationControls()
    const controlsColor2 = useAnimationControls()  

    const controlsColorBG0 = useAnimationControls()
    const controlsColorBG1 = useAnimationControls()
    const controlsColorBG2 = useAnimationControls()

    const listControlsColorLine = [
        controlsColor0,
        controlsColor1,
        controlsColor2,
    ]

    const listControlsColorBG = [
        controlsColorBG0,
        controlsColorBG1,
        controlsColorBG2,
    ]


    const [isAnswered, setIsAnswered] = useState(false)


    
    


    useEffect(()=>{
   
        const LifeSaver = useSnapList.map(useSnapResult => {
            
            return (
            {
                currentSnappointIndex: useSnapResult.currentSnappointIndex || 0,
                buttonId: useSnapResult.buttonId,

            })
        })

       
        // console.log('LifeSaver::::')
        // console.log(LifeSaver)
        
        
        const mega = pointsInitialFreeWithID.map((el, index )=>{

            // ищем, есть ли этот index в занятых LifeSaver
            //
            const isSnapped = LifeSaver.filter(el => el.currentSnappointIndex == index)
            if (isSnapped.length > 0) {
                // console.log(index)
                return( 
                    {
                        isFree: false,
                        coord: el.coord,
                        pointId: el.pointId,
                        occupiedBy: isSnapped[0].buttonId,
                    }
                )
            } else {
                return( 
                    {
                        isFree: true,
                        coord: el.coord,
                        pointId: el.pointId,
                        occupiedBy: -1,
                    }
                )
            }

        })



        // console.log('mega')
        // console.log(mega)


        // 123
        // setBigSnapListState(mega)





        // // Делаем так чтобы Занятые точки НЕ магнитились 123
        // // в Магнит пихаем вместо координаты точки  pointsInitial[0]
        // //
        // // TODO: тут добавляем >= 0 , а не > 0 потому что нет Нулевого магнита
        // const OccupiedPointsObject = LifeSaver.filter(el => el.currentSnappointIndex >= 0)
        // const OccupiedPointsList = OccupiedPointsObject.map(el => el.currentSnappointIndex)

        // console.log('OccupiedPointsList: ', OccupiedPointsList)
        // // console.log('pointsInitial: ', pointsInitial)


        // // pointsInitialFreeWithID.map((pointInitialFree, index )=> {
        // //     LifeSaver.filter(lifePoint => lifePoint.currentSnappointIndex == index)
        // // } )

        // const foundUseful =  LifeSaver.map(lifeP => {
        //     const foundOccupied = pointsInitialFreeWithID.filter((pInitial, index )=> index == lifeP.currentSnappointIndex)

        //     return foundOccupied
        // })

        // console.log(foundUseful)



        // let freeList:PointsInitialFree = []
        // PointsInitialFree.map((point, index) => {
        //         //    
        //         // ЕСЛИ не СОДЕРЖИТ занятые
        //         //
        //         if (!OccupiedPointsList.includes(index)) {
        //             freeList.push(point)
        //             return {
        //         point
        //       } 
        //     } 
        //     else {
        //         // вместо занятой точки, пихаем магнит {y: 0}
        //         // freeList.push(pointsInitial[0])
        //     }
        // });
        // console.log('freeList: ', freeList)





        // setItems(items.map(a => (a.id === 2 ? {...a, data: "c"} : a)))

        // setState(prev => [ ...prev.filter(item => item.id !== 2), { id: 2, data: "c" } ])



        // const updateData = ({ idToUpdate, newData }) => {
        //     setItem(
        //       items.map(({ id, data }) =>
        //         id === idToUpdate ? { id, data: newData } : { id, data }
        //       )
        //     );
        //   }



        // OccupiedPointsList
        // setBigSnapListState
        // BigSnapListState 


        // const indexesWasFreeNowOccInBig = BigSnapListState.filter(el => el.isFree)

        // это все свободные точки в Big
        // const BigSnapListStateFrees = BigSnapListState.filter(el => el.isFree)
        // //
        // // смотрим какие iD заняты
        // //
        // const BigSnapOcc = OccupiedPointsList.map(occPointIdex => {
        //     return BigSnapListStateFrees[occPointIdex]
        // })

        // // console.log('BigSnapOcc::', BigSnapOcc)



        // const BigSnapFree = BigSnapListState.filter((el, index) => !OccupiedPointsList.includes(index) )

        // const BigSnapFree = OccupiedPointsList.filter((el, index) => !OccupiedPointsList.includes(index) )

        // console.log('BigSnapListState>>> ')
        // console.log(BigSnapListState)

        // console.log('BigSnapFree:::---', BigSnapFree)

        // OccupiedPointsList.map(occPointIndex => {

        // })


        // BigSnapListState.filter(el => el.isFree).map((el, indexBig ) => {
        //     OccupiedPointsList.map(occPointIndex => {
        //         if (indexBig == occPointIndex) {
        //             // setBigSnapListState
        //         }
        //     })
        // })




        // BigSnapListState.filter(el => el.isFree).map((el, indexBig ) => {
        //     setBigSnapListState(OccupiedPointsList.map(occPointIndex => {
        //         if (indexBig == occPointIndex) {
        //             return { ...el, isFree: false };
        //         }
        //     }
        // ))
            
            // OccupiedPointsList.map(occPointIndex => {
            //     if (indexBig == occPointIndex) {
            //         // setBigSnapListState
            //     }
            // })


        // })


        // setMyList(myList.map(artwork => {
        //     if (artwork.id === artworkId) {
        //       // Create a *new* object with changes
        //       return { ...artwork, seen: nextSeen };
        //     } else {
        //       // No changes
        //       return artwork;
        //     }
        //   }));




        // const newFrees = BigSnapFree.map(el => el.coord)
        // setPoints(newFrees)


        // setPoints(freeList)















        let isSnapped_3 = false
        let isSnapped_4 = false


        useSnapList.map((useSnapResult, indexButton) => {
                
            // 234
            // Если SnapPoint Не равен индексу Стикера, то перекрашиваем
            //
            if (useSnapResult.currentSnappointIndex != indexButton) 
                {
                    listControlsColorLine[indexButton].start('snapColor') 
                    listControlsColorBG[indexButton].start('snapColorBG')
                } else {
                    listControlsColorLine[indexButton].start('initial') 
                    listControlsColorBG[indexButton].start('initialBG')
                }   


            // Смотрим, был ли дан ответ (заняты ли Snap3 и Snap4)
            //
            if (useSnapResult.currentSnappointIndex == 3) {
                isSnapped_3 = true
            }
            if (useSnapResult.currentSnappointIndex == 4) {
                isSnapped_4 = true
            }        
            if (isSnapped_3 && isSnapped_4) {
                setIsAnswered(true)
            } else {
                setIsAnswered(false)
            }
                

        })

        
    }, useSnapList.map(el => el.currentSnappointIndex)
)







function placeDiv(x_pos: number, y_pos: number, elementId: string) {
    var d = document.getElementById(elementId);
    if (d) 
        {
            d.style.position = "absolute";
            d.style.left = x_pos+'px';
            d.style.top = y_pos+'px';
        }
}

useEffect(()=>{

    // 111

    placeDiv((x1+x2)*width/2, (y1+y2)*height/2, `${ButtonList[0].id}`)
    placeDiv((x3+x2)*width/2, (y3+y2)*height/2, `${ButtonList[1].id}`)
    placeDiv((x1+x3)*width/2, (y1+y3)*height/2, `${ButtonList[2].id}`)



    placeDiv(x1*width, height*0.8 , 'sin')




    
    placeDiv(xCoordinates[0], xCoordinates[1], 'x')
    

    placeDiv(width * 0.5, height * HEIGHT_FORMULA_COEFF, 'btnAnswer')



    FormulaDots.map((dot, index) => {
        placeDiv(width * 0.8, height * HEIGHT_FORMULA_COEFF, dot.id)
      
    })


}, [width, height, left, top])
    

const transition = { duration: 1, yoyo: Infinity, ease: "easeInOut"}














// resolveConstraintsComponent( {containerRef, ButtonList[0].buttonRef})
// const box = resolveConstraintsComponent( containerRef, ButtonList[0].buttonRef)


// console.log(box)



// // TODO: 123

// const ref = ButtonList[0].buttonRef
// // const ref = useRef<HTMLButtonElement>(null)




// const constraintsBoxRef = useRef<BoundingBox | null>(null);
// const constraints = containerRef



// const resolveConstraints = () => {
//     if (constraints === undefined) {
//         return null;
//     };

   
//     if (!ref.current) {
//         throw new Error('Element ref is empty')
//     };

//     const box = 'current' in constraints ? constraintsBoxRef.current : constraints;
//     if (!box) {
//         throw new Error("Constraints wasn't measured");
//     }


//     const elementBox = ref.current.getBoundingClientRect();
//     const style = window.getComputedStyle(ref.current);
//     const transformMatrix = new DOMMatrixReadOnly(style.transform);
//     const baseX = window.scrollX + elementBox.x - transformMatrix.e;
//     const baseY = window.scrollY + elementBox.y - transformMatrix.f;

//     const left = box.left !== undefined ? baseX + box.left : undefined;
//     const top = box.top !== undefined ? baseY + box.top : undefined;

//     const right = box.right !== undefined ? baseX + box.right : undefined;
//     const bottom = box.bottom !== undefined ? baseY + box.bottom : undefined;

//     const width = (left !== undefined && right !== undefined) ? right - left : undefined;
//     const height = (top !== undefined && bottom !== undefined) ? bottom - top : undefined;

//     return {
//         left,
//         top,
//         width,
//         height,
//         right,
//         bottom,
//     };
// };


// useEffect(()=>{
//     const boxx = resolveConstraints();
//     // if (!box) {
//     //     throw new Error(`constraints weren't provided`);
//     // }
//     console.log(boxx)

// },[])




    useEffect(()=>{
        console.log(width)
        console.log(height)
        console.log(left)
        console.log(top)
    },[width, height])










    return (

      
        

        <motion.div 
            className="SnappingExample" 
            ref={containerRef}
        >
            
            
            {/* TODO: 234 СТИКЕРЫ - кнопки,  которые перетягиваем */}

             {ButtonList.map( (button, index) => 

                <motion.button 
                    key={index*51078}
                    id={`${button.id}`}
                    ref={button.buttonRef}
                    className={`text-xl rounded text-primary-foreground `}
                    style={{ width: handleWidth, height: handleHeight }} 
                    drag 
                    dragConstraints={containerRef}
                    {...useSnapList[index].dragProps}

                    custom={13}

                    variants = {{
                        initialBG: {
                            backgroundColor: colorLineSlate,
                            
                        },
                        snapColorBG: {
                            backgroundColor: colorLineList[index],
                        },
                    }}

                    initial = 'initialBG'
                    animate= {listControlsColorBG[index]}
                    

                    whileHover={{
                        scale: 1.2,
                        rotate: 5,
                        transition: { duration: 0.2 },
                    }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -5,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                    }}
                


                >
                        
                    {button.text}

                    <motion.div className="absolute top-0 -pt-4  text-white text-2xl">

                        <ArrowUpLeft size='20' />

                    </motion.div>


                </motion.button>
                
            )} 





        

            {/* TODO: sin  Пишем формулу */}

                
            <motion.div
                id='sin'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                className="absolute text-3xl"
            >
               sin(x) = 

            </motion.div>

            {/* угол X */}
{/*                             
            <motion.div
                id='x'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                className="absolute text-3xl text-slate-300 font-bold"
            >
                x 

            </motion.div>
 */}




            {/* TODO: ОТВЕТ */}

            <Button 
                id = 'btnAnswer'
                disabled = {!isAnswered}
                className = "absolute"
                variant='primary'
            >
                ответить
            </Button>










            <motion.svg
                width= {width}
                height= {height}
                // width="600"
                // height="600"
                // viewBox="0 0 600 600"
                initial="hidden"
                animate="visible"
                style={{ maxWidth: "80vw" }}
            >



{/*  222
<motion.path
    transition={transition}
    initial={{ pathLength: 0.001 }}
    animate={{ pathLength: 1 }}
    // 123
    // threeCoordinates = {[40, 40, 550, 40, 40, 350]}
    d={arcSVG}
    fill="none"
    stroke={colorLineSlate}
    strokeWidth="11"
    strokeLinecap="round" 
    // custom={5}
/> */}









                {/* TODO:  LINES    рисуем серые линии */}

                {lineCoordinates.map((line, index) => (

                    <motion.line
                        key={index*5131078}

                        // x1 = {line.x1}
                        // y1 = {line.y1}
                        // x2 = {line.x2}
                        // y2 = {line.y2}
                        x1 = {line.x1}
                        y1 = {line.y1}
                        x2 = {line.x2}
                        y2 = {line.y2}
                        stroke = {colorLineSlate}
                        variants = {draw}
                        custom={2 + index * 1.5}
                        style={{
                            strokeWidth: strokeWidth,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />

                ))}

{/* 
<motion.polygon
    points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
    // fill="#234236"
    fill="transparent"
    variants = {draw}

    // style={{
    //     strokeWidth: strokeWidth,
    //     strokeLinecap: "round",
    //     fill: "transparent",
    // }}
  /> */}











                {/* TODO: 123 рисуем ЦВЕТНЫЕ SNAP линии (просто меняем Opacity) */}


                {lineCoordinates.map((line, index) => (

                    <motion.line
                        key={index*5107851}

                        x1 = {line.x1}
                        y1 = {line.y1}
                        x2 = {line.x2}
                        y2 = {line.y2}
                        stroke= {colorLineList[index]}
                        variants = {{
                            initial: {
                                opacity: '0',
                            },
                            snapColor: {
                                opacity: [0, 1],
                            }
                        }}
                        custom={0}
                        style={{
                            strokeWidth: strokeWidth,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        initial = 'initial'
                        animate = {listControlsColorLine[index]}
                        // transition={{ duration: 1 }}
                        // transition={{ type: "spring" }}
                    />

                ))}
                





                {/* TODO:  FORMULA LINE (дробь)*/}

                <motion.line
                    x1 = {x1 * width + 120}
                    y1 = {HEIGHT_FORMULA_COEFF * height + 20}
                    // x2 = {x3 + deltaX + 120 }
                    x2 = {x1 * width + 120 + 120 }
                    y2 = {HEIGHT_FORMULA_COEFF * height + 20}
                    stroke= "#404040"
                    variants = {draw}
                    custom={3.5}
                    style={{
                        strokeWidth: 3,
                        strokeLinecap: "round",
                        fill: "transparent",
                    }}
                />


                {/* TODO:  FORMULA snap CIRCLES*/}

                {FormulaDots.map((dot, index) => (


                    <motion.circle  
                        key={index*51075138}

                        cx={dot.cx + handleWidth/2}
                        cy={dot.cy + handleHeight/2}
                        r="4"
                        // stroke= {colorCircle1}
                        stroke= {colorLineSlate}

                        variants={draw}
                        custom={6.5 + index}
                        style={{
                            strokeWidth: strokeWidth,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />


                ))}





                {/* TODO:   GRAY   CIRCLE  на Lines */}

                {lineCoordinates.map((line, index) => (

                    <motion.circle  
                        key={index*55101783}

                        cx={(line.x1+line.x2)/2}
                        cy={(line.y1+line.y2)/2}
                        r="4"
                        // stroke= {colorCircle1}
                        stroke= {colorLineSlate}

                        variants={draw}
                        custom={6.5}
                        style={{
                            strokeWidth: strokeWidth,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />

                ))}




                {/* TODO: COLOR circle SNAP на Lines */}

                {lineCoordinates.map((line, index) => (

                    <motion.circle  
                        key={index*5106378}

                        cx={(line.x1+line.x2)/2}
                        cy={(line.y1+line.y2)/2}
                        r="4"
                        stroke= {colorLineList[index]}

                        variants = {{
                            initial: {
                                opacity: '0'
                            },
                            snapColor: {
                                opacity: [0, 1],
                            }
                        }}

                        custom={0}
                        style={{
                            strokeWidth: strokeWidth,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}

                        initial = 'initial'
                        animate = {listControlsColorLine[index]}
                    />


                ))}

                








            </motion.svg> 


            

        </motion.div>
    );
};


