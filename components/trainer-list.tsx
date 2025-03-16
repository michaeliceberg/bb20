'use client'


import { challengeProgress, challenges, t_challenges, t_lessonProgress, t_lessons, units } from '@/db/schema'
import React from 'react'
import { Button } from './ui/button'
import { Check, CornerRightUp, Landmark, TrendingDown, TrendingUp } from 'lucide-react'
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
    t_lessonProgress: typeof t_lessonProgress.$inferSelect[]
    
}






export const TrainerLessonItem = ({
    t_lesson,
    t_lessonProgress,
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
