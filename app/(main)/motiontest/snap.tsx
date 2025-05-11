'use client'


import { BoundingBox, MotionProps, DragHandlers, animate, SpringOptions, DragElastic } from "framer-motion";
import { RefObject, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export type Point = {
    x?: number,
    y?: number,
};
 
export type SnapPointsType =
    | { type: 'absolute', points: Point[] }
    | {
          // Based on constraints box
          type: 'constraints-box',
          unit: 'pixel' | 'percent',
          points: Point[],
      }
    | {
          // Relative to initial position
          type: 'relative-to-initial',
          points: Point[],
      };
 
export type SnapOptions = {
    direction: 'x' | 'y' | 'both',
    ref: RefObject<Element | null>,
    snapPoints: SnapPointsType,
    springOptions?: Omit<SpringOptions, 'velocity'>,
    constraints?: Partial<BoundingBox> | RefObject<Element | null>,
    dragElastic?: DragElastic,
    onDragStart?: MotionProps['onDragStart'],
    onDragEnd?: MotionProps['onDragEnd'],
    onMeasureDragConstraints?: MotionProps['onMeasureDragConstraints'],
};
 
export type UseSnapResult = {
    dragProps: Pick<MotionProps, 'drag' | 'onDragStart' | 'onDragEnd' | 'onMeasureDragConstraints' | 'dragMomentum'> & Partial<Pick<MotionProps, 'dragConstraints'>>,
    snapTo: (index: number) => void,
    currentSnappointIndex: number | null,
};
 
const minmax = (num: number, min: number, max: number) => Math.max(Math.min(max, num), min);
 
export const useSnap = ({
    direction, 
    snapPoints, 
    ref, 
    springOptions = {}, 
    constraints, 
    dragElastic = 0.5,
    onDragStart, 
    onDragEnd, 
    onMeasureDragConstraints,
}: SnapOptions): UseSnapResult => {

    const resolveConstraints = () => {
        if (constraints === undefined) {
            return null;
        };
 
        if (!ref.current) {
            throw new Error('Element ref is empty')
        };
 
        const box = 'current' in constraints ? constraintsBoxRef.current : constraints;
        if (!box) {
            throw new Error("Constraints wasn't measured");
        }
 
 
        const elementBox = ref.current.getBoundingClientRect();
        const style = window.getComputedStyle(ref.current);
        const transformMatrix = new DOMMatrixReadOnly(style.transform);
        const baseX = window.scrollX + elementBox.x - transformMatrix.e;
        const baseY = window.scrollY + elementBox.y - transformMatrix.f;
 
        const left = box.left !== undefined ? baseX + box.left : undefined;
        const top = box.top !== undefined ? baseY + box.top : undefined;
 
        const right = box.right !== undefined ? baseX + box.right : undefined;
        const bottom = box.bottom !== undefined ? baseY + box.bottom : undefined;
 
        const width = (left !== undefined && right !== undefined) ? right - left : undefined;
        const height = (top !== undefined && bottom !== undefined) ? bottom - top : undefined;
 
        return {
            left,
            top,
            width,
            height,
            right,
            bottom,
        };
    };
 
    const convertSnappoints = (snapPoints: SnapPointsType) => {
        if (!ref.current) return null;
 
        if (snapPoints.type === 'absolute') {
            return snapPoints.points;
        }
 
        if (snapPoints.type === 'relative-to-initial') {
            const elementBox = ref.current.getBoundingClientRect();
            const style = window.getComputedStyle(ref.current);
            const transformMatrix = new DOMMatrixReadOnly(style.transform);
            const translateX = transformMatrix.e;
            const translateY = transformMatrix.f;
            const baseX = window.scrollX + elementBox.x - translateX;
            const baseY = window.scrollY + elementBox.y - translateY;
 
            return snapPoints.points.map(p => {
                return {
                    x: p.x === undefined ? undefined : baseX + p.x,
                    y: p.y === undefined ? undefined : baseY + p.y,
                }
            });
        } else if (snapPoints.type === 'constraints-box') {
            if (constraints === undefined) {
                throw new Error(`When using snapPoints type constraints-box, you must provide 'constraints' property`);
            }
 
            const box = resolveConstraints();
            if (!box) {
                throw new Error(`constraints weren't provided`);
            }
 
            if (['x', 'both'].includes(direction) && (box.left === undefined || box.right === undefined)) {
                throw new Error(`constraints should describe both sides for each used drag direction`);
            }
            if (['y', 'both'].includes(direction) && (box.top === undefined || box.bottom === undefined)) {
                throw new Error(`constraints should describe both sides for each used drag direction`);
            }
 
            return snapPoints.points.map(p => {
                const result: Point = {};
                if (p.x !== undefined) {
                    if (snapPoints.unit === 'pixel') {
                        result.x = box.left! + p.x;
                    } else {
                        result.x = box.left! + (box.width! * p.x);
                    }
                }
                if (p.y !== undefined) {
                    if (snapPoints.unit === 'pixel') {
                        result.y = box.top! + p.y;
                    } else {
                        result.y = box.top! + (box.height! * p.y);
                    }
                }
                return result;
            });
        } else {
            throw new Error('Unknown snapPoints type');
        }
    };
 
    const onDragEndHandler: DragHandlers["onDragEnd"] = (event, info) => {
        onDragEnd?.(event, info);
 
        if (!ref.current) {
            throw new Error('element ref is not set');
        }
 
        const points = convertSnappoints(snapPoints);
        console.log('Converted snappoints', points);
        if (!points) {
            throw new Error(`snap point weren't calculated on drag start`);
        }
 
        const constraintsBox = resolveConstraints();
        const elementBox = ref.current.getBoundingClientRect();
        const style = window.getComputedStyle(ref.current);
        const transformMatrix = new DOMMatrixReadOnly(style.transform);
        const translate = { x: transformMatrix.e, y: transformMatrix.f };
        const base = {
            x: window.scrollX + elementBox.x - translate.x,
            y: window.scrollY + elementBox.y - translate.y,
        };
 
        const dropCoordinates = {
            x: window.scrollX + elementBox.x,
            y: window.scrollY + elementBox.y,
        };
 
        const power = 0.15;
 
        const afterInertia = {
            x: dropCoordinates.x + (power * info.velocity.x),
            y: dropCoordinates.y + (power * info.velocity.y),
        };
 
        const distances = points.map((p) => {
            if (p.x !== undefined && p.y !== undefined) {
                return Math.sqrt(Math.pow(p.x - afterInertia.x, 2) + Math.pow(p.y - afterInertia.y, 2));
            }
            if (p.x !== undefined) return Math.abs(p.x - afterInertia.x);
            if (p.y !== undefined) return Math.abs(p.y - afterInertia.y);
            return 0;
        });
        const minDistance = Math.min(...distances);
        const minDistanceIndex = distances.indexOf(minDistance);
        setCurrentSnappointIndex(minDistanceIndex);
        const selectedPoint = points[minDistanceIndex];
 
        const afterInertiaClamped = {
            x: minmax(
                afterInertia.x,
                constraintsBox?.left ?? -Infinity,
                constraintsBox?.right ?? Infinity,
            ),
            y: minmax(
                afterInertia.y,
                constraintsBox?.top ?? -Infinity,
                constraintsBox?.bottom ?? Infinity,
            ),
        };
 
        const dragElasticResolved = (() => {
            if (typeof dragElastic === 'number') return { top: dragElastic, left: dragElastic, right: dragElastic, bottom: dragElastic };
            if (typeof dragElastic === 'object') return { top: 0, left: 0, right: 0, bottom: 0, ...dragElastic };
            if (dragElastic === false) return { top: 0, left: 0, right: 0, bottom: 0 };
            else return { top: 0.5, left: 0.5, right: 0.5, bottom: 0.5 };
        })();
        const overshootCoefficient = { x: 1, y: 1 };
        const overshootDecreaseCoefficient = 0.999;
 
        if (constraintsBox?.left !== undefined && afterInertia.x < constraintsBox.left) {
            overshootCoefficient.x = Math.pow(overshootDecreaseCoefficient, Math.abs(constraintsBox.left - afterInertia.x)) * dragElasticResolved.left;
        }
        if (constraintsBox?.right !== undefined && afterInertia.x > constraintsBox.right) {
            overshootCoefficient.x = Math.pow(overshootDecreaseCoefficient, Math.abs(constraintsBox.right - afterInertia.x)) * dragElasticResolved.right;
        }
        if (constraintsBox?.top !== undefined && afterInertia.y < constraintsBox.top) {
            overshootCoefficient.y = Math.pow(overshootDecreaseCoefficient, Math.abs(constraintsBox.top - afterInertia.y)) * dragElasticResolved.top;
        }
        if (constraintsBox?.bottom !== undefined && afterInertia.y > constraintsBox.bottom) {
            overshootCoefficient.y = Math.pow(overshootDecreaseCoefficient, Math.abs(constraintsBox.bottom - afterInertia.y)) * dragElasticResolved.bottom;
        }
 
        const velocity = {
            x: info.velocity.x * overshootCoefficient.x,
            y: info.velocity.y * overshootCoefficient.y,
        };
 
        const target = {
            x: selectedPoint.x !== undefined
                ? selectedPoint.x - base.x
                : afterInertiaClamped.x - base.x,
            y: selectedPoint.y !== undefined
                ? selectedPoint.y - base.y
                : afterInertiaClamped.y - base.y,
        };
 
        console.log('Snapping result', { target, velocity, afterInertia, afterInertiaClamped, selectedPoint });
 
        if (direction === 'x' || direction === 'both') {
            animate(
                ref.current,
                { x: target.x },
                {
                    ...springOptions,
                    type: 'spring',
                    velocity: velocity.x,
                }
            );
        }
        if (direction === 'y' || direction === 'both') {
            animate(
                ref.current,
                { y: target.y },
                {
                    ...springOptions,
                    type: 'spring',
                    velocity: velocity.y,
                }
            );
        }
    };
 
    const snapTo = (index: number) => {
        const converted = convertSnappoints(snapPoints);
        if (!converted || !ref.current) return;
        const convertedPoint = converted[index];
        if (!convertedPoint) return;
 
        const elementBox = ref.current.getBoundingClientRect();
        // Thanks Claude Opus and this question on SO https://stackoverflow.com/questions/53866942/css-transform-matrix-to-pixel
        const style = window.getComputedStyle(ref.current);
        const transformMatrix = new DOMMatrixReadOnly(style.transform);
        const translate = { x: transformMatrix.e, y: transformMatrix.f };
        const base = {
            x: window.scrollX + elementBox.x - translate.x,
            y: window.scrollY + elementBox.y - translate.y,
        };
 
        setCurrentSnappointIndex(index);
        if (convertedPoint.x !== undefined) {
            animate(
                ref.current,
                { x: convertedPoint.x - base.x },
                {
                    ...springOptions,
                    type: 'spring',
                }
            );
        }
        if (convertedPoint.y !== undefined) {
            animate(
                ref.current,
                { y: convertedPoint.y - base.y },
                {
                    ...springOptions,
                    type: 'spring',
                }
            );
        }
    };
 
    const constraintsBoxRef = useRef<BoundingBox | null>(null);
 
    const [currentSnappointIndex, setCurrentSnappointIndex] = useState<null | number>(null);
 
    const dragProps: Partial<MotionProps> = {
        drag: direction === 'both' ? true : direction,
        onDragStart: (event, info) => {
            setCurrentSnappointIndex(null);
            onDragStart?.(event, info);
        },
        onDragEnd: onDragEndHandler,
        onMeasureDragConstraints(constraints) {
            constraintsBoxRef.current = constraints;
            onMeasureDragConstraints?.(constraints);
        },
 
        dragMomentum: true, // This is needed to work correctly in latest versions of Motion
        dragConstraints: constraints,
        dragElastic,
    };
 
    return {
        dragProps,
        snapTo,
        currentSnappointIndex
    };
 
};
 









export const VanillaDrag = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);


    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
 
    useLayoutEffect(() => {
        setWidth(containerRef.current?.getBoundingClientRect().width ?? 0);
        setHeight(containerRef.current?.getBoundingClientRect().height ?? 0);
    }, []);
 
    const handleWidth = 100;
    const handleHeight = 40;
 
    // This later will be used in the hook
    const snapPoints:SnapPointsType = {

        type: 'constraints-box',
        unit: 'percent',
        // unit: 'pixel',
        points: 
            // [
            //     { x: 0.1, y: 0.1 }, 
            //     { x: 0.3, y: 0.2 }, 
            //     { y: 0.5 }, 
            //     { x: 0.75 }, 
            //     { x: 0.9, y: 0.9 }, 
            //     { x: 1, y: 1 },
            //     { x: 0.3, y: 0.3 },
            // ],
            // [
            //     { x: 100, y: 100 }, 
            //     // { x: 400, y: 480 }, 
            //     { x: 350, y: 350 }, 
            //     // { y: 100 }, 
            //     // { x: 200 }, 
                
            // ],
            [
                { x: 0.1, y: 0.1 }, 
                { x: 0.3, y: 0.2 }, 
                { y: 0.5 }, 
                { x: 0.75 }, 
                { x: 0.9, y: 0.9 }, 
                { x: 1, y: 1 },
                { x: 0.3, y: 0.3 },
            ],
    };
 



    const { dragProps, currentSnappointIndex } = useSnap(
        {
            direction: 'both',
            ref: buttonRef,
            constraints: containerRef,

            snapPoints: //snapPoints,
            { 
                type: snapPoints.type,
                unit: snapPoints.unit,
                points: snapPoints.points,
            },
            
        })

        
        console.log(currentSnappointIndex)






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

        

        // animate={{ backgroundColor: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)'] }}.

        const maxView = 600
        const minView = 0








    //     type constrType = {
    //         constraints: Partial<BoundingBox> | RefObject<Element | null>,
    //         ref: RefObject<Element | null>,
    //     }

    //     const resolveConstraintsMini = ({constraints, ref }: constrType) => {
    //         if (constraints === undefined) {
    //             return null;
    //         };
                        
    //         if (!ref.current) {
    //             throw new Error('Element ref is empty')
    //         };

    //         const constraintsBoxRef = useRef<BoundingBox | null>(null);
    //         const box = 'current' in constraints ? constraintsBoxRef.current : constraints;
    //         if (!box) {
    //             throw new Error("Constraints wasn't measured");
    //         }
     
     
    //         const elementBox = ref.current.getBoundingClientRect();
    //         const style = window.getComputedStyle(ref.current);
    //         const transformMatrix = new DOMMatrixReadOnly(style.transform);
    //         const baseX = window.scrollX + elementBox.x - transformMatrix.e;
    //         const baseY = window.scrollY + elementBox.y - transformMatrix.f;
     
    //         const left = box.left !== undefined ? baseX + box.left : undefined;
    //         const top = box.top !== undefined ? baseY + box.top : undefined;
     
    //         const right = box.right !== undefined ? baseX + box.right : undefined;
    //         const bottom = box.bottom !== undefined ? baseY + box.bottom : undefined;
     
    //         const width = (left !== undefined && right !== undefined) ? right - left : undefined;
    //         const height = (top !== undefined && bottom !== undefined) ? bottom - top : undefined;
     
    //         return {
    //             left,
    //             top,
    //             width,
    //             height,
    //             right,
    //             bottom,
    //         };
    //     };

    // const box = resolveConstraintsMini(
    //     {
    //         constraints: containerRef,
    //         ref: containerRef,
    //     }
    // )

        
    return (
        <motion.div 
            className="SnappingExample" 
            ref={containerRef}
        >
            {snapPoints.points.map((p, ind) => (
                <div
                    key={ind} // Array is static so it's fine to use index as key
                    className="snappoint"
                    style={{
                        top: p.y === undefined ? '0' : (height - handleHeight) * p.y,
                        bottom: p.y === undefined ? '0' : undefined,
                        left: p.x === undefined ? '0' : (width - handleWidth) * p.x,
                        right: p.x === undefined ? '0' : undefined,
                        width: p.x === undefined ? undefined : p.y === undefined ? 4 : 8,
                        height: p.y === undefined ? undefined : p.x === undefined ? 4 : 8,
                    }}
                />
            ))}
 
            <motion.button 
                ref={buttonRef}
                className="drag-handle" 
                style={{ width: handleWidth, height: handleHeight }} 
                drag 
                dragConstraints={containerRef}
                {...dragProps}
            >
                Drag me!
            </motion.button>




            <motion.svg
                width="600"
                height="600"
                viewBox="0 0 600 600"
                initial="hidden"
                animate="visible"
                style={{ maxWidth: "80vw" }}
            >


            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0.08571429550647736 15.300000190734863 23.614286422729492 35.70000076293945" data-asc="1.011" width="23.614286422729492" height="35.70000076293945"><defs/><g><g><g transform="translate(0, 0)"><path d="M11.80 51Q8.95 51 6.13 50.15Q3.30 49.30 1 47.50Q0.40 47.10 0.20 46.55Q0 46 0.15 45.45Q0.30 44.90 0.70 44.52Q1.10 44.15 1.67 44.10Q2.25 44.05 2.90 44.50Q4.95 45.95 7.15 46.65Q9.35 47.35 11.75 47.35Q14.20 47.35 15.98 46.42Q17.75 45.50 18.68 43.82Q19.60 42.15 19.60 39.90Q19.60 36.45 17.60 34.25Q15.60 32.05 12.10 32.05Q9.95 32.05 8.15 32.85Q6.35 33.65 4.85 35.40Q4.50 35.80 4.03 36.07Q3.55 36.35 2.95 36.35Q2.10 36.35 1.63 35.88Q1.15 35.40 1.15 34.60L1.15 17.20Q1.15 16.25 1.65 15.77Q2.15 15.30 3.05 15.30L20.05 15.30Q21.00 15.30 21.48 15.75Q21.95 16.20 21.95 17.05Q21.95 17.90 21.48 18.35Q21.00 18.80 20.05 18.80L5.20 18.80L5.20 32.85L4.10 32.85Q5.40 30.75 7.70 29.62Q10 28.50 12.85 28.50Q16.20 28.50 18.63 29.90Q21.05 31.30 22.38 33.82Q23.70 36.35 23.70 39.70Q23.70 43 22.25 45.55Q20.80 48.10 18.15 49.55Q15.50 51 11.80 51Z"/></g></g></g></svg> */}

            

          
          



                {/* <motion.circle
                    cx="100"
                    cy="100"
                    // cx="0.2"
                    // cy="0.2"
                    r="80"
                    stroke=   {currentSnappointIndex == 0 ? "#FF0055" : "#7700FF"}
                    variants={draw}
                    custom={1}
                    style={{
                        strokeWidth: 10,
                        strokeLinecap: "round",
                        fill: "transparent",
                    }}
                /> */}



                <motion.line
                    x1="300"
                    y1="200"
                    x2="400"
                    y2="400"
                    stroke="#7700FF"
                    variants={draw}
                    custom={2}
                    style={{
                        strokeWidth: 10,
                        strokeLinecap: "round",
                        fill: "transparent",
                    }}
                />

               




            </motion.svg> 


        </motion.div>
    );
};



