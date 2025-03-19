'use client'


import { t_challenges, t_lessonProgress } from '@/db/schema'
import React from 'react'
import { Button } from './ui/button'
import { CornerRightUp, Crown, Skull, Trophy, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

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
            user_name: string | undefined;
        }[];
    }[],
    
    user_id: string,
    
}






export const TrainerLessonItem = ({
    t_lesson,
    t_lessonProgress,
    TRatingUsers,
    user_id,
} : Props) => {


    // const {totalPercentDR, totalDR} = GetTLessonStat(t_lessonProgress, t_lesson.id)


    let ratingPosition_inThisLesson = -1
    //
    if (TRatingUsers.filter(el=>el.t_lesson_id == t_lesson.id)[0]) {
        let usersSortedStat_inThisLesson = TRatingUsers.filter(el=>el.t_lesson_id == t_lesson.id)[0].usersSortedStat.filter(el=>el.user_id == user_id)
        ratingPosition_inThisLesson = usersSortedStat_inThisLesson.findIndex(x => x.user_id === user_id) + 1;
    }



    return (
            <div className='flex flex-1 pb-8 justify-between'>
                <div>
                    <p className='text-lg text-gray-800'>{t_lesson.title}</p>


                    <div className='flex gap-4'>
                    
                        <div className="flex">

                            <Trophy
                            className={ratingPosition_inThisLesson == 1 
                                ? cn("h-5 w-5 pt-1  fill-yellow-300 stroke-gray-500") 
                                : cn("h-5 w-5 pt-1 stroke-gray-500")} 
                            />

                            <p className="pt-1 pl-1 text-gray-500 text-sm">
                               {ratingPosition_inThisLesson > 0 ? ratingPosition_inThisLesson : ""}
                            </p>
                        </div>
                    




                        <div className="flex">
                            <Zap
                            className={cn("h-5 w-5 pt-1 stroke-gray-500")}
                            />
                            
                            {TRatingUsers.filter(el=>el.t_lesson_id == t_lesson.id)[0] 
                                ?
                                    <div className='text-gray-500'>
                                        {
                                            TRatingUsers.filter(el=>el.t_lesson_id == t_lesson.id)[0].usersSortedStat.filter(el=>el.user_id == user_id)[0] 
                                            ?
                                            TRatingUsers.filter(el=>el.t_lesson_id == t_lesson.id)[0].usersSortedStat.filter(el=>el.user_id == user_id)[0].DR_DRP
                                            : ""  
                                        } 
                                    </div>
                                :
                                    <div>

                                    </div>
                                
                            }
                            {/* <p className="pt-1 pl-1 text-gray-500 text-sm">{Math.round(totalPercentDR*100)}%</p> */}
                        </div>



                    </div>






                </div>



                <div className='mt-1'>
                {   
                    TRatingUsers.filter(el=>el.t_lesson_id == t_lesson.id)[0] ?
                    
                    <div>
                        <div className='flex flex-1 gap-2'>
                            <Crown                              
                            className= "h-6 w-6 fill-yellow-300 stroke-yellow-400 mx-auto" />
                            {TRatingUsers.filter(el=>el.t_lesson_id == t_lesson.id)[0]?.usersSortedStat[0].user_name}
            
                        </div>

                        <div className='flex flex-1 gap-1 mx-auto text-center content-center justify-center'>
                            <Zap 
                            className= "h-5 w-5 fill-yellow-300 stroke-yellow-400" />
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
