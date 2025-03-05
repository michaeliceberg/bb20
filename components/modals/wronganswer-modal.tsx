'use client'

import Image from 'next/image'

import Lottie, {LottieRefCurrentProps} from 'lottie-react'
import {useRef} from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle

} from '@/components/ui/dialog'


import { Button } from '../ui/button'
import { useWrongAnswerModal } from '@/store/use-wronganswer-modal'
import { useEffect, useState } from 'react';
import LottieDeathHeart from '@/public/Lottie/wrongAnswer/LottieDeathHeart.json'
import LottieDeathWrongCoffin from '@/public/Lottie/wrongAnswer/LottieDeathWrongCoffin.json'
import LottieDeathWrongCry from '@/public/Lottie/wrongAnswer/LottieDeathWrongCry.json'
import LottieDeathWrongDoor from '@/public/Lottie/wrongAnswer/LottieDeathWrongDoor.json'
import LottieDeathWrongHeartsSteel from '@/public/Lottie/wrongAnswer/LottieDeathWrongHeartsSteel.json'
import LottieDeathWrongShakeHead from '@/public/Lottie/wrongAnswer/LottieDeathWrongShakeHead.json'
import { useAudio } from 'react-use'



const ComboList = {
                    wrongAudioImage: [
                                        ['/MemesAudio/meme-wrong-kid.WAV', '/MemesImage/meme-wrong-kid.jpg'], 
                                        ['/MemesAudio/meme-wrong-sharish.WAV', '/MemesImage/meme-wrong-sharish.jpeg'],
                                        ['/MemesAudio/meme-wrong-polnomochia.WAV', '/MemesImage/meme-wrong-polnomochia.jpeg'],
                                        ['/MemesAudio/meme-wrong-ponovoy.WAV', '/MemesImage/meme-wrong-ponovoy.jpeg'],
                                        ['/MemesAudio/meme-wrong-shirokuiu.WAV', '/MemesImage/meme-wrong-shirokuiu.jpeg'],
                                        ['/MemesAudio/meme-wrong-tivtiraesh.WAV', '/MemesImage/meme-wrong-tivtiraesh.jpeg'],
                                        ['/MemesAudio/meme-wrong-tipereputal.WAV', '/MemesImage/meme-wrong-tipereputal.jpg'],
                                        ['/MemesAudio/meme-wrong-pacankuspehy.WAV', '/MemesImage/meme-wrong-pacankuspehy.jpeg'],
                                        ['/MemesAudio/meme-wrong-shokoladnevinovat.WAV', '/MemesImage/meme-wrong-pacankuspehy.jpeg'],


                                        
                                        
                                     ],
                    rightAudioImage: [
                                        ['/MemesAudio/meme-right-papichlegkaya.WAV', '/memes/meme-right-papich.jpg'], 
                                        ['/MemesAudio/meme-right-chinazes.WAV', '/memes/meme-right-chinazes.jpg']
                                     ],
                    wrongLottie:     [LottieDeathHeart, LottieDeathWrongCoffin, LottieDeathWrongCry ,LottieDeathWrongDoor, LottieDeathWrongHeartsSteel, LottieDeathWrongShakeHead],
                    wrongMessage:    ['О нет!', 'Вжик!', 'АхХахахАх!', 'Почти угадал!']
                    
                }

export const WrongAnswerModal = () => {

    const phoneRef = useRef<LottieRefCurrentProps>(null)

    const [isClient, setIsClient] = useState(false)
    const {isOpen, close} = useWrongAnswerModal()



    const [randomAudio, setRandomAudio] =  useState(ComboList.wrongAudioImage[0][0]);
    const [randomImage, setRandomImage] =  useState(ComboList.wrongAudioImage[0][1]);
    const [randomLottie, setRandomLottie] =  useState(ComboList.wrongLottie[0]);
    const [randomMessage, setRandomMessage] =  useState(ComboList.wrongMessage[0]);
    


    // const [
    //     incorrectAudio,
    //     _i,
    //     incorrectControls,
    // ] = useAudio({ src: ComboList.wrongAudioImage[0][0] })


    // const [
    //     incorrectAudio,

    // ] = useAudio({ src: ComboList.wrongAudioImage[0][0], autoPlay: true})
    



    useEffect(() => {
        const randomizeArray = [...ComboList.wrongAudioImage].sort(() => 0.5 - Math.random());
        setRandomAudio(randomizeArray[0][0]);
        setRandomImage(randomizeArray[0][1]);
    }, [isOpen])


    const [
        incorrectAudio,
        _i,
        incorrectControls,
    ] = useAudio({ src: randomAudio })



    useEffect(() => {

        const randomizeArrayLottie = [...ComboList.wrongLottie].sort(() => 0.5 - Math.random());
        setRandomLottie(randomizeArrayLottie[0])

        const randomizeArrayMessage = [...ComboList.wrongMessage].sort(() => 0.5 - Math.random());
        setRandomMessage(randomizeArrayMessage[0])

        incorrectControls.play()
        // incorrectAudio

    }, [isOpen]);





    useEffect(()=>setIsClient(true),[]) 
    if (!isClient){
        return null
    }
    
    

    return (
        <>
        {incorrectAudio}

        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className='max-w-md'>
                <DialogHeader>
                {/* <div className='flex items-center w-full justify-center mb-5'> */}
                <div className='items-center w-full justify-center mb-5'>




                        <Lottie className="h-50 w-50"
                            animationData={ randomLottie } 
                            lottieRef={phoneRef }
                            loop={false}  
                            onComplete={()=>{
                                phoneRef.current?.stop
                                close()
                            }}
                        />

            <Image 
            src={randomImage}
            // src='/memes/mem-wrong-sharish.jpeg'
            alt='Mascot'
                height={200}
                width={200}
                className="border-r-8 w-full mx-auto"
            />

                    </div>
                    <DialogTitle className='text-center font-bold text-2xl'>
                        {randomMessage}
                    </DialogTitle>
                    <DialogDescription className='text-center text-base'>
                  
                    </DialogDescription>   
                </DialogHeader>

                <DialogFooter className='mb-4'>
                    <div className='flex flex-col gap-y-4 w-full'>
                        <Button 
                            variant='dangerOutline' 
                            className='w-full' 
                            size='lg' 
                            // onClick={close}
                        >
                            - 1 
                            <Image
                    src="/heart.svg"
                    alt='Heart'
                    height={20}
                    width={20}
                />
                        </Button>
                        
                    </div>
                </DialogFooter>

            </DialogContent>
        </Dialog>    
        </>
    )
}