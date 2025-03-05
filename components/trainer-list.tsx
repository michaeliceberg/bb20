'use client'


import { challengeProgress, challenges, t_lessons, units } from '@/db/schema'
import React from 'react'
import { Button } from './ui/button'

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
    <div>
        {/* <p className='flex flex-col'> */}
            {/* <div className='grid grid-cols-2 '> */}
                <Button 
                    className='mb-2'
                    size='sm' 
                    onClick={()=>window.location.href = `/t-lesson/${t_lesson.id}`}
                    >
                    {t_lesson.title}
                </Button>
            {/* </div> */}
        {/* </p> */}
    </div>
  )
}
