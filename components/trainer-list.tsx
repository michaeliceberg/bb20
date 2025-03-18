'use client'


import { challengeProgress, challenges, t_challenges, t_lessonProgress, t_lessons, units } from '@/db/schema'
import React from 'react'
import { Button } from './ui/button'
import { Axe, Check, CornerRightUp, Crown, DollarSign, Landmark, Skull, TrendingDown, TrendingUp, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { GetTLessonStat } from '@/usefulFunctions'

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
            DR_DRP: number;
            user_id: string | undefined;
        }[];
    }[],
    
}






export const TrainerLessonItem = ({
    t_lesson,
    t_lessonProgress,
    TRatingUsers,
} : Props) => {


  const {totalPercentDR, totalDR} = GetTLessonStat(t_lessonProgress, t_lesson.id)


  return (
        <div className='flex flex-1 pb-8 justify-between'>
            <div>
                <p className='text-lg text-gray-800'>{t_lesson.title}</p>


                <div className='flex gap-7'>
                
                    <div className="flex">
                        <Check
                        className={cn("h-5 w-5 pt-1 stroke-gray-400")}
                        />
                        <p className="pt-1 pl-1 text-gray-500 text-sm">
                            {totalDR}
                        </p>
                    </div>
                



                    {Math.round(totalPercentDR*100) > 80 
                    
                    ? 
                    <div className="flex">
                        <TrendingUp
                        className={cn("h-5 w-5 pt-1 stroke-green-600")}
                        />
                        <p className="pt-1 pl-1 text-green-600 text-sm">{Math.round(totalPercentDR*100)}%</p>
                    </div>
                    :
                    <div className="flex">
                        <TrendingDown
                        className={cn("h-5 w-5 pt-1 stroke-red-600")}
                        /> 
                        <p className="pt-1 pl-1 text-red-600 text-sm">{Math.round(totalPercentDR*100)}%</p>
                    </div>
                    }    
                


                </div>






            </div>



            <div className='mt-1'>
            {   
                TRatingUsers.filter(el=>el.t_lesson_id == t_lesson.id)[0] ?
                
                <div>
                    <div className='flex flex-1 gap-2'>
                        <Crown                              
                        className= "h-6 w-6 fill-yellow-300 stroke-neutral-700 mx-auto" />
                        {TRatingUsers.filter(el=>el.t_lesson_id == t_lesson.id)[0]?.usersSortedStat[0].user_id}
        
                    </div>

                    <div className='flex flex-1 gap-1 mx-auto text-center content-center justify-center'>
                        <Zap 
                        className= "h-5 w-5 fill-yellow-300 stroke-neutral-700" />
                        {TRatingUsers.filter(el=>el.t_lesson_id == t_lesson.id)[0]?.usersSortedStat[0].DR_DRP}
                        
                    </div>

                </div>



                :
                <div>
                    <Skull 
                    className= "h-6 w-6 stroke-neutral-500 mx-auto" />
                </div>




            }
       
            </div>
            
                    




            <Button 
                className='ml-4'
                size='sm' 
                variant='primary'
                onClick={()=>window.location.href = `/t-lesson/${t_lesson.id}`}
                >
                    <CornerRightUp />
            </Button>
        </div>

  )
}
