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


// // import { useExitModal } from '@/store/use-exit-modal'
// import { useWrongAnswerModal } from '@/store/use-wronganswer-modal'
// import { useEffect, useState } from 'react';
// // import Lottie from 'lottie-react'
// // import LottieKapiThink from '@/public/Lottie/LottieKapiThink.json'
// import LottieDeathHeart from '@/public/Lottie/wrongAnswer/LottieDeathHeart.json'
// import LottieDeathWrongCoffin from '@/public/Lottie/wrongAnswer/LottieDeathWrongCoffin.json'
// import LottieDeathWrongCry from '@/public/Lottie/wrongAnswer/LottieDeathWrongCry.json'
// import LottieDeathWrongDoor from '@/public/Lottie/wrongAnswer/LottieDeathWrongDoor.json'
// import LottieDeathWrongHeartsSteel from '@/public/Lottie/wrongAnswer/LottieDeathWrongHeartsSteel.json'
// import LottieDeathWrongShakeHead from '@/public/Lottie/wrongAnswer/LottieDeathWrongShakeHead.json'
// import { Button } from './ui/button'

// export const DialogWrongAnswer = () => {

//     // console.log('THATS WRONG MODAL')




//     const doneWrongImage = ['/memes/meme-wrong-kid.jpg', '/memes/meme-wrong-sharish.jpeg']

//     const [randomWrongImage, setRandomWrongImage] = useState(doneWrongImage[0]);
//     useEffect(() => {
        
//         const randomizeArray = [...doneWrongImage].sort(() => 0.5 - Math.random());
//         setRandomWrongImage(randomizeArray[0]);
//     }, []);






//     const phoneRef = useRef<LottieRefCurrentProps>(null)

//     const [isClient, setIsClient] = useState(false)
//     const {isOpen, close} = useWrongAnswerModal()


//     useEffect(()=>setIsClient(true),[]) 
//     if (!isClient){
//         return null
//     }

//     const WrongLottieList = [LottieDeathHeart, LottieDeathWrongCoffin, LottieDeathWrongCry ,LottieDeathWrongDoor, LottieDeathWrongHeartsSteel, LottieDeathWrongShakeHead]
//     const WrongLottie = WrongLottieList[Math.floor(Math.random()*WrongLottieList.length)]

//     const WrongMessageList = ['О нет!', 'Вжик!', 'АхХахахАх!', 'Почти угадал!']
//     const WrongMessage = WrongMessageList[Math.floor(Math.random()*WrongMessageList.length)]

//     return (
//         <Dialog open={isOpen} onOpenChange={close}>
//             <DialogContent className='max-w-md'>
//                 <DialogHeader>
//                 {/* <div className='flex items-center w-full justify-center mb-5'> */}
//                 <div className='items-center w-full justify-center mb-5'>




//                         <Lottie className="h-50 w-50"
//                             animationData={ WrongLottie } 
//                             lottieRef={phoneRef }
//                             loop={false}  
//                             onComplete={()=>{
//                                 phoneRef.current?.stop
//                                 close()
//                             }}
//                         />

//             <Image 
//             src={randomWrongImage}
//             // src='/memes/mem-wrong-sharish.jpeg'
//             alt='Mascot'
//                 height={200}
//                 width={200}
//                 className="border-r-8 w-full mx-auto"
//             />

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