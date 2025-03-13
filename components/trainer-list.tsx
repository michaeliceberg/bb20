'use client'


import { challengeProgress, challenges, t_lessons, units } from '@/db/schema'
import React from 'react'
import { Button } from './ui/button'
import { Check, CornerRightUp, Landmark, TrendingDown, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
    t_lesson: { 
        id: number; 
        title: string; 
        order: number; 
        unitId: number; 
        challenges: typeof challenges.$inferSelect[]
    }
    
}


export const TrainerList = ({t_lesson} : Props) => {
  return (
        <div className='flex flex-1 pb-8 justify-between'>
            <div>
                <p className='text-lg text-gray-800'>{t_lesson.title}</p>


                <div className='flex gap-7'>
                
                    <div className="flex">
                        <Check
                        className={cn("h-5 w-5 pt-1 stroke-gray-400")}
                        />
                        <p className="pt-1 pl-1 text-gray-500 text-sm">{22}</p>
                    </div>
                



                    {Math.round(12*100) > 80 
                    
                    ? 
                    <div className="flex">
                        <TrendingUp
                        className={cn("h-5 w-5 pt-1 stroke-green-600")}
                        />
                        <p className="pt-1 pl-1 text-green-600 text-sm">{48}</p>
                    </div>
                    :
                    <div className="flex">
                        <TrendingDown
                        className={cn("h-5 w-5 pt-1 stroke-red-600")}
                        /> 
                        <p className="pt-1 pl-1 text-red-600 text-sm">{48}</p>
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
                {/* {t_lesson.title} */}
            </Button>
        </div>

  )
}
