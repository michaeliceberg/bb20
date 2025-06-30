'use client'


import { t_challenges, t_lessonProgress } from '@/db/schema'
import React from 'react'
import { Block } from './block'
import { motion, useAnimationControls } from 'framer-motion'
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { Button } from './ui/button'
import { ArrowUpRight, CircleCheckBig, CircleX, Layers, Star, ToyBrick, 

        Cat,
        // Scull,
        Heart,
        Gem,
        HandMetal,
        HandPlatter,
        Ham,
        // Hamburger,
        Hammer,
        IceCreamCone,
        IceCreamBowl,
        Laugh,
        Landmark,
        Pickaxe,
        Pizza,
        Puzzle,
        Pyramid,
        Rat,
        Rabbit,
        Radiation,
        // PopSlice,
        Sailboat,
        Salad,
        Sandwich,
        Sprout,
        SprayCan,
        Sword,
        Swords,
        Sun,
        Telescope,
        ThumbsUp,
        TreePalm,
        TreePine,
        Umbrella,
        Waves,
        Apple,
        LucideProps,
        Lock,



} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import ScrollTriggered from './framer-card'

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
    indexLesson: number,
    isDisabled: boolean,
    
}






export const TrainerLessonItemRound = ({
    t_lesson,
    t_lessonProgress,
    TRatingUsers,
    user_id,
    indexLesson,
    isDisabled,
} : Props) => {



    




const cycleLength = 8
const cycleIndex = indexLesson % cycleLength

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

    const isFirst = indexLesson === 0
    const isLast = indexLesson === 1 // totalCount
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
    

        
    const locked = isDisabled


    // console.log('DR_thisL_thisU')
    // console.log(DR_thisL_thisU)
    // console.log('t_lessonProgress')
    // console.log(t_lessonProgress)




    // type randomIconType = React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>[]

    const randomIconList = [
        Cat,
        // Scull,
        // Hert,
        Gem,
        HandMetal,
        HandPlatter,
        Ham,
        // Hamburger,
        Hammer,
        IceCreamCone,
        IceCreamBowl,
        Laugh,
        Landmark,
        Pickaxe,
        Pizza,
        Puzzle,
        Pyramid,
        Rat,
        Rabbit,
        Radiation,
        // Popslice,
        Sailboat,
        Salad,
        Sandwich,
        Sprout,
        SprayCan,
        Sword,
        Swords,
        Sun,
        Telescope,
        ThumbsUp,
        TreePalm,
        TreePine,
        Umbrella,
        Waves,
        Apple,
    ]





    // const icons = [Home, Settings, User, Bell];
    const randomIndex = Math.floor(Math.random() * randomIconList.length);
    const RandomIcon = randomIconList[randomIndex];





    return (




    <Link 
    //
    // ПРИ НАЖАТИИ - переходим в ТРЕНАЖЕР     /t-lesson/${t_lesson.id}
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

                                :locked
                                ? 'locked' 

                                : 'default'
                                }
                                className="h-[70px] w-[70px] border-b-8
                                
                                group relative overflow-hidden px-4 py-2 transition-colors"
                        >
                            {percentage > 90 && 
                            //
                            // ЗОЛОТЫМ ЦВЕТОМ ЕСЛИ РЕШЕНО
                            //
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



                            {!locked 
                            ? 
                            <RandomIcon

                            // РАЗЛИЧНЫЕ ИКОНКИ 

                                className={cn(
                                    "h-10 w-10",
                                    
                                percentage > 1 
                                // ? 'fill-primary-foreground text-primary-foreground' 
                                ? 'text-primary-foreground' 

                                : ' text-slate-200 '

                                )}
                            />
                            
                            : 
                            <Lock

                            // РАЗЛИЧНЫЕ ИКОНКИ 

                                className={cn(
                                    "h-10 w-10",
                                    
                                'text-primary-foreground' 

                                )}
                            />
                            }




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



            {/* <ScrollTriggered someText={t_lesson.title}/> */}
            
            <button className="ml-4 rounded-2xl border-2 border-dashed border-neutral-400 bg-white 
                                px-6 py-3 uppercase text-sm font-semibold text-neutral-400 transition-all duration-300 
                                hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md 
                                hover:shadow-[4px_4px_0px_gray] 
                                active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                {t_lesson.title}    
                
            </button>


            


        </div>
          
    </Link>
    )
}






                                    // ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                                    // // : "fill-primary-foreground text-primary-foreground",
                                    // : "fill-primary-foreground text-primary-foreground",
                                    // // isCompleted && "fill-none stroke-[4]"
                                    // isCompleted && "fill-none stroke-[2]"
