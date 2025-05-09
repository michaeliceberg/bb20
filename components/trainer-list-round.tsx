'use client'


import { t_challenges, t_lessonProgress } from '@/db/schema'
import React from 'react'
import { Block } from './block'
import { motion, useAnimationControls } from 'framer-motion'
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { Button } from './ui/button'
import { ArrowUpRight, CircleCheckBig, CircleX, Layers, Star, ToyBrick } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'

type Props = {
    t_lesson: { 
        id: number; 
        title: string; 
        order: number; 
        t_unitId: number; 
        t_challenges: typeof t_challenges.$inferSelect[]
        
    },
    t_lessonProgress: typeof t_lessonProgress.$inferSelect[],
    
    TRatingUsers: {
        t_lesson_id: number;
        usersSortedStat: {
            DRP: number,
            DR_DRP: number;
            user_id: string | undefined;
            user_name: string | undefined;
        }[];
    }[],
    
    user_id: string,
    index: number,
    
}






export const TrainerLessonItemRound = ({
    t_lesson,
    t_lessonProgress,
    TRatingUsers,
    user_id,
    index,
} : Props) => {



    




const cycleLength = 8
const cycleIndex = index % cycleLength

let indentationLevel

if (cycleIndex <= 2){
    indentationLevel = cycleIndex
} else if (cycleIndex <= 4){
    indentationLevel = 4 - cycleIndex
} else if (cycleIndex <= 6) {
    indentationLevel = 4 - cycleIndex
} else {
    indentationLevel = cycleIndex - 8
}
    const rightPosition = indentationLevel * 40

    const isFirst = index === 0
    const isLast = index === 1 // totalCount
    const isCompleted = 1 // !locked


    // const Icon = title.slice(-1) === '3' ? Skull 
    //     : title.slice(-1) === '4' ? Cake 
    //     : isLast ? Crown 
    //     : Star

    const Icon = Star
    
    // const href = isCompleted ? `/lesson/${id}` : "/lesson"
    
    
    
    const href = `/t-lesson/${t_lesson.id}`
    











    const controls = useAnimationControls()
    const controls_small = useAnimationControls()



    let ratingPosition_inThisLesson = -1
    let DR_thisL_thisU = 0
    //
    if (TRatingUsers.filter(el=>el.t_lesson_id == t_lesson.id)[0]) {
        let usersSortedStat_inThisLesson = TRatingUsers.filter(el=>el.t_lesson_id == t_lesson.id)[0].usersSortedStat.filter(el=>el.user_id == user_id)
        ratingPosition_inThisLesson = usersSortedStat_inThisLesson.findIndex(x => x.user_id === user_id) + 1;

        // DR_thisL_thisU = usersSortedStat_inThisLesson.filter(x => x.user_id === user_id)[0].DR;

        usersSortedStat_inThisLesson.filter(x => x.user_id === user_id) instanceof Array 
        ? DR_thisL_thisU = usersSortedStat_inThisLesson.filter(x => x.user_id === user_id)[0]?.DRP
        : DR_thisL_thisU = 0
    }


    const hoverHandleStart = () => {
        controls.start("flip")
        // controls.start("flip_small")
    }
    const hoverHandleEnd = () => {
        controls.start("initial")
        // controls.start("initial_small")
    }





    const percentage = DR_thisL_thisU

    const color =  

        percentage > 90
        ? "#f8E164"
        
        : percentage > 60
        ? "#4ade80"
        
        : percentage > 1
        ? "#e77975"

        : "#fff"
    


    const locked = false


    // console.log(DR_thisL_thisU)

    return (




    <Link 
        href={href} 
        aria-disabled={locked} 
        style={{pointerEvents: locked?"none":"auto"}}
        >
            <div className="relative flex flex-1 ml-12" style={{
                right: `${-30 + rightPosition}px`,
                marginTop: isFirst && !isCompleted ? 60 : 24,
                }}
            >
                { 1 ? (
                    <div className="h-[102px] w-[102px] relative">
     
                        <CircularProgressbarWithChildren
                            value={Number.isNaN(percentage) ? 0:percentage}
                            styles={{
                                path:{
                                    stroke: color
                                    },
                                trail:{
                                    stroke: "#e5e7eb",
                                    },
                                
                            }}
                        >

                            <Button
                                size='rounded'
                                // variant={locked ? "locked" : "secondary"}

                                variant= {
                                    percentage > 90  
                                    ? 'trainer_best' 
                                    
                                    :percentage > 60 
                                    ? 'trainer_better' 
                                    
                                    :percentage > 1 
                                    ? 'trainer_bad' 

                                    : 'default'
                                    }
                                    className="h-[70px] w-[70px] border-b-8
                                    
                                    group relative overflow-hidden px-4 py-2 transition-colors"
                            >
                                    {percentage > 90 && 
                                        <motion.span
                                            initial={{
                                            y: "100%",
                                            }}
                                            animate={{
                                            y: "-100%",
                                            }}
                                            transition={{
                                            repeat: Infinity,
                                            repeatType: "mirror",
                                            duration: 1,
                                            ease: "linear",
                                            }}
                                            className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t 
                                            
                                            from-yellow-400/0 from-40% 
                                            via-white/100 
                                            to-indigo-400/0 to-60% 
                                            
                                            transition-opacity "
                                        />
                                    }
{/* from-indigo-400/0 from-40% 
via-indigo-400/100 
to-indigo-400/0 to-60%  

opacity-0 transition-opacity group-hover:opacity-100"
*/}


                                <Icon
                                    className={cn(
                                        "h-10 w-10",
                                     
                                    percentage > 1 
                                    ? 'fill-primary-foreground text-primary-foreground' 

                                    : ' text-slate-200 '

                                        // ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                                        // // : "fill-primary-foreground text-primary-foreground",
                                        // : "fill-primary-foreground text-primary-foreground",
                                        // // isCompleted && "fill-none stroke-[4]"
                                        // isCompleted && "fill-none stroke-[2]"
                                    )}
                                />
                            </Button>
                        </CircularProgressbarWithChildren>
                    </div>
                ): (
                    <Button
                        size='rounded'
                        variant={locked?"locked" : "secondary"}
                        className="h-[70px] w-[70px] border-b-8"
                    >
                        <Icon
                            className={cn(
                                "h-10 w-10",
                                locked
                                ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                                : "fill-primary-foreground text-primary-foreground",
                                // isCompleted && "fill-none stroke-[4]"
                                isCompleted && "fill-none stroke-[2]"
                            )}
                        />
                    </Button>
                )}   

{/* text-neutral-400
border-slate-500 */}
            <button className="ml-4 rounded-2xl border-2 border-dashed border-neutral-400 bg-white 
                                px-6 py-3 uppercase text-sm font-semibold text-neutral-400 transition-all duration-300 
                                hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md 
                                hover:shadow-[4px_4px_0px_gray] 
                                active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                {t_lesson.title}     
            </button>


            {/* <div className="pt-8 hover:translate-x-4 transition-transform duration-500 ease-in-out">
                <div>
                    <h1 className="px-3 py-0.5 border-2 font-bold text-green-500 bg-white rounded-xl tracking-white z-10">
                    {t_lesson.title}                
                    </h1>
                </div>    
                <div>
                    
                    <h1 className="px-3 py-0.5 font-bold text-green-500 bg-white rounded-xl tracking-white z-10">
                
                        <div className="flex flex-1">
                            {currentLessonStat[0].done[1] > 0 && 
                                <div className="flex mr-1">
                                    <CircleCheckBig className='h-5 w-5 stroke-2 text-green-500 mr-1' />
                                    <p className='mr-2 text-green-500 text-center font-bold '>{currentLessonStat[0].done[1]}</p>
                            </div>
                            }

                            {currentLessonStat[0].done[2] > 0 && 
                                <div className="flex mr-1">
                                    <CircleX className='h-5 w-5 stroke-2 text-rose-500 mr-1' />
                                    <p className='mr-2 text-rose-500 text-center font-bold '>{currentLessonStat[0].done[2]}</p>
                            </div>
                            }

                            {currentLessonStat[0].done[0] > 0 && 
                                <div className="flex mr-1">
                                    <Layers className='h-5 w-5 stroke-2 text-neutral-400 mr-1' />
                                    <p className='text-neutral-400 mr-2 text-center font-bold '>{currentLessonStat[0].done[0]}</p>
                            </div>
                            }

                        </div>
                    
                    </h1>
                </div>    
            </div> */}

            </div>
          
    </Link>
    )
}
































        // <div className=
        //         'flex justify-between mt-3 border-2 border-slate-100 rounded-xl '
        // >


        //     <div className='flex'>

        //         <p className='m-2'>
        //                     #{index+1}
        //         </p>

        //         <p className=
        //             {
        //                 DR_thisL_thisU > 90 
        //                 ? 'bg-green-400/90 text-white font-bold h-full m-auto align-middle pt-2 pl-2 pr-2 rounded-r-xl'
                    
        //                 : DR_thisL_thisU > 50
        //                 ? 'bg-amber-500/90 text-white font-bold h-full m-auto align-middle pt-2 pl-2 pr-2 rounded-r-xl'

        //                 : 'bg-pink-500/90 text-white font-bold h-full m-auto align-middle pt-2 pl-2 pr-2 rounded-r-xl'

                    
        //             } 
        //         >
        //             {DR_thisL_thisU}%
        //         </p>

        //     </div>



        //     <p className='mt-2'>
        //                 {t_lesson.title}
        //     </p>

        //     <Button
        //         variant=
        //         { DR_thisL_thisU > 90 
        //             ? 'trainer_best'

        //             : DR_thisL_thisU > 50
        //             ? 'trainer_better'

        //             : 'trainer_bad'
        //         }
                
        //         onClick={()=>window.location.href = `/t-lesson/${t_lesson.id}`}
        //         className=''   
        //     >
        //         <p className='text-lg'>
        //             <ToyBrick />
        //         </p>
        //     </Button>
        // </div>























