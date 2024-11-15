'use client'

import Image from 'next/image'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle

} from '@/components/ui/dialog'


import { Button } from '../ui/button'

import { useEffect, useState } from 'react';
import { usePracticeModal } from '@/store/use-practice-modal'


export const PracticeModal = () => {
    const [isClient, setIsClient] = useState(false)
    const {isOpen, close} = usePracticeModal()
    useEffect(()=>setIsClient(true),[]) 

    if (!isClient){
        return null
    }

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className='max-w-md'>
                <DialogHeader>
                    <div className='flex items-center w-full justify-center mb-5'>
                            <Image
                            src='/heart.svg'
                            alt='Heart'
                            height={100}
                            width={100}
                            />
                    </div>
                    <DialogTitle className='text-center font-bold text-2xl'>
                        Практические занятия
                    </DialogTitle>
                    <DialogDescription className='text-center text-base'>
                      Вы не тратите жизни и энергию, проходя практические занятия
                    </DialogDescription>   
                </DialogHeader>

                <DialogFooter className='mb-4'>
                    <div className='flex flex-col gap-y-4 w-full'>
                        <Button 
                            variant='primary' 
                            className='w-full' 
                            size='lg' 
                            onClick={close}
                        >
                            ОК
                        </Button>
                    </div>
                </DialogFooter>

            </DialogContent>
        </Dialog>    
    )
}