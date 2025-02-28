// 'use client'

// import Image from 'next/image'

// import Lottie, {LottieRefCurrentProps} from 'lottie-react'
// import {useRef} from 'react'

// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle

// } from '@/components/ui/dialog'


// import { Button } from '../ui/button'
// // import { useExitModal } from '@/store/use-exit-modal'
// import { useEffect, useState } from 'react';
// // import Lottie from 'lottie-react'
// // import LottieKapiThink from '@/public/Lottie/LottieKapiThink.json'
// import LottieDeathHeart from '@/public/Lottie/wrongAnswer/LottieDeathHeart.json'
// import LottieDeathWrongCoffin from '@/public/Lottie/wrongAnswer/LottieDeathWrongCoffin.json'
// import LottieDeathWrongCry from '@/public/Lottie/wrongAnswer/LottieDeathWrongCry.json'
// import LottieDeathWrongDoor from '@/public/Lottie/wrongAnswer/LottieDeathWrongDoor.json'
// import LottieDeathWrongHeartsSteel from '@/public/Lottie/wrongAnswer/LottieDeathWrongHeartsSteel.json'
// import LottieDeathWrongShakeHead from '@/public/Lottie/wrongAnswer/LottieDeathWrongShakeHead.json'
// import { useRightAnswerModal } from '@/store/use-rightanswer-modal'

// export const RightAnswerModal = () => {

//     console.log('THATS RIGHT MODAL')

//     // 

//     // const doneRightImage = ['/memes/mem-wrong-sharish.jpeg', '/memes/meme-right-papich']
//     const doneRightImage = ['/memes/meme-right-chinazes.jpg', '/memes/meme-right-papich.jpg']

//     const [randomRightImage, setRandomRightImage] = useState(doneRightImage[0]);
//     useEffect(() => {
        
//         const randomizeArray = [...doneRightImage].sort(() => 0.5 - Math.random());
//         setRandomRightImage(randomizeArray[0]);
//     }, []);




//     const phoneRef = useRef<LottieRefCurrentProps>(null)

//     const [isClient, setIsClient] = useState(false)
//     const {isOpen, close} = useRightAnswerModal()


//     useEffect(()=>setIsClient(true),[]) 
//     if (!isClient){
//         return null
//     }

//     const WrongLottieList = [LottieDeathHeart, LottieDeathWrongCoffin, LottieDeathWrongCry ,LottieDeathWrongDoor, LottieDeathWrongHeartsSteel, LottieDeathWrongShakeHead]
//     const WrongLottie = WrongLottieList[Math.floor(Math.random()*WrongLottieList.length)]

//     const WrongMessageList = ['О нет!', 'Вжик!', 'АхХахахАх!', 'Почти угадал!']
//     const WrongMessage = WrongMessageList[Math.floor(Math.random()*WrongMessageList.length)]



//     // const doneRightImage = ['/memes/mem-wrong-sharish.jpeg', '/memes/meme-right-papich']

//     // const [randomRightImage, setRandomRightImage] = useState(doneRightImage[0]);
//     // useEffect(() => {
        
//     //     const randomizeArray = [...doneRightImage].sort(() => 0.5 - Math.random());
//     //     setRandomRightImage(randomizeArray[0]);
//     // }, []);




//     return (
//         <Dialog open={isOpen} onOpenChange={close}>
//             <DialogContent className='max-w-md'>
//                 <DialogHeader>
//                 {/* <div className='flex items-center w-full justify-center mb-5'> */}
//                 <div className='items-center w-full justify-center mb-5'>


//                     <Lottie className="h-50 w-50"
//                         animationData={ WrongLottie } 
//                         lottieRef={phoneRef }
//                         loop={false}  
//                         onComplete={()=>{
//                             phoneRef.current?.stop
//                             close()
//                         }}
//                     />



//                     <Image 
//                         src={randomRightImage}
//                         alt='Mascot'
//                         height={200}
//                         width={200}
//                         className="border-r-8 w-full mx-auto"
//                     />



//                     </div>
//                     <DialogTitle className='text-center font-bold text-2xl'>
//                         {WrongMessage}
//                     </DialogTitle>
//                     <DialogDescription className='text-center text-base'>
                  
//                     </DialogDescription>   
//                 </DialogHeader>

//                 <DialogFooter className='mb-4'>
//                     <div className='flex flex-col gap-y-4 w-full'>
//                         <Button 
//                             variant='dangerOutline' 
//                             className='w-full' 
//                             size='lg' 
//                             // onClick={close}
//                         >
//                             - 1 
//                             <Image
//                     src="/heart.svg"
//                     alt='Heart'
//                     height={20}
//                     width={20}
//                 />
//                         </Button>
                        
//                     </div>
//                 </DialogFooter>

//             </DialogContent>
//         </Dialog>    
//     )
// }





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
import { useEffect, useState } from 'react';
import LottieDeathHeart from '@/public/Lottie/wrongAnswer/LottieDeathHeart.json'
import LottieDeathWrongCoffin from '@/public/Lottie/wrongAnswer/LottieDeathWrongCoffin.json'
import LottieDeathWrongCry from '@/public/Lottie/wrongAnswer/LottieDeathWrongCry.json'
import LottieDeathWrongDoor from '@/public/Lottie/wrongAnswer/LottieDeathWrongDoor.json'
import LottieDeathWrongHeartsSteel from '@/public/Lottie/wrongAnswer/LottieDeathWrongHeartsSteel.json'
import LottieDeathWrongShakeHead from '@/public/Lottie/wrongAnswer/LottieDeathWrongShakeHead.json'
import { useAudio } from 'react-use'
import { useRightAnswerModal } from '@/store/use-rightanswer-modal'



// const WrongLottieList = [LottieDeathHeart, LottieDeathWrongCoffin, LottieDeathWrongCry ,LottieDeathWrongDoor, LottieDeathWrongHeartsSteel, LottieDeathWrongShakeHead]
// const WrongMessageList = ['О нет!', 'Вжик!', 'АхХахахАх!', 'Почти угадал!']
// const doneWrongAudio = ['/MemesAudio/meme-wrong-kid.WAV','/MemesAudio/meme-wrong-sharish.WAV']
// const doneWrongImage = ['/memes/meme-wrong-kid.jpg', '/memes/meme-wrong-sharish.jpeg']
// const doneRightAudio = ['/MemesAudio/meme-right-papichlegkaya.WAV', '/MemesAudio/meme-right-chinazes.WAV']
// const doneRightImage = ['/memes/meme-right-chinazes.jpg', '/memes/meme-right-papich.jpg']

const ComboList = {
                    // wrongAudioImage: [
                    //                     ['/MemesAudio/meme-wrong-kid.WAV', '/memes/meme-wrong-kid.jpg'], 
                    //                     ['/MemesAudio/meme-wrong-sharish.WAV', '/memes/meme-wrong-sharish.jpeg']
                    //                  ],
                    rightAudioImage: [
                                        ['/MemesAudio/meme-right-papichlegkaya.WAV', '/memes/meme-right-papich.jpg'], 
                                        ['/MemesAudio/meme-right-chinazes.WAV', '/memes/meme-right-chinazes.jpg']
                                     ],
                    wrongLottie:     [LottieDeathHeart, LottieDeathWrongCoffin, LottieDeathWrongCry ,LottieDeathWrongDoor, LottieDeathWrongHeartsSteel, LottieDeathWrongShakeHead],
                    // wrongMessage:    ['О нет!', 'Вжик!', 'АхХахахАх!', 'Почти угадал!'],
                    rightMessage:    ['Молодец!', 'Красавчик!', 'Еееее!', 'Угадал!']
                    
                }

export const RightAnswerModal = () => {


    const phoneRef = useRef<LottieRefCurrentProps>(null)

    const [isClient, setIsClient] = useState(false)
    const {isOpen, close} = useRightAnswerModal()




    const [randomAudio, setRandomAudio] =  useState(ComboList.rightAudioImage[0][0]);
    const [randomImage, setRandomImage] =  useState(ComboList.rightAudioImage[0][1]);
    const [randomLottie, setRandomLottie] =  useState(ComboList.wrongLottie[0]);
    const [randomMessage, setRandomMessage] =  useState(ComboList.rightMessage[0]);
    


    useEffect(() => {
        const randomizeArray = [...ComboList.rightAudioImage].sort(() => 0.5 - Math.random());
        setRandomAudio(randomizeArray[0][0]);
        setRandomImage(randomizeArray[0][1]);
    }, [isOpen])



    const [
        correctAudio,
        _с,
        correctControls,
    ] = useAudio({ src: randomAudio })



    useEffect(() => {
        const randomizeArrayLottie = [...ComboList.wrongLottie].sort(() => 0.5 - Math.random());
        setRandomLottie(randomizeArrayLottie[0])

        const randomizeArrayMessage = [...ComboList.rightMessage].sort(() => 0.5 - Math.random());
        setRandomMessage(randomizeArrayMessage[0])

        correctControls.play()

    }, [isOpen]);



    useEffect(()=>setIsClient(true),[]) 
    if (!isClient){
        return null
    }


     

    return (
        <>
        {correctAudio}

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