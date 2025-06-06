// 'use client'

import { FeedWrapper } from "@/components/feed-wrapper"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { UserProgress } from "@/components/user-progress"
import { getUserProgress, getUserSubscription } from "@/db/queries"
import Image from "next/image"
import { redirect } from "next/navigation"
import { Items } from "./items"
import { getUserPointsHearts } from "@/usefulFunctions"



const ShopPage = async () => {

    const userProgressData = getUserProgress()
    const userSubscriptionData = getUserSubscription()

    const [
        userProgress,
        userSubscription,
    ] = await Promise.all([
        userProgressData,
        userSubscriptionData,
    ])

    if (!userProgress || !userProgress.activeCourse) {
        redirect('/courses')
    }

    const isPro = !!userSubscription?.isActive


    const [Points, Hearts, Gems] = getUserPointsHearts(userProgress)






    
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress 
                    activeCourse={userProgress.activeCourse}
                    // hearts={userProgress.hearts}
                    // points={userProgress.points}
                    hearts={Hearts}
                    points={Points}
                    gems={Gems}
                    hasActiveSubscription={isPro}
                />
            </StickyWrapper>
            <FeedWrapper>
                <div className="w-full flex flex-col items-center">


                    {/* /Users/mac/Downloads/LottieShop.json */}



                    {/* <Lottie 
                        className="h-20 w-20 pb-4" 
                        animationData={LottieShop}
                        loop={false}
                    />  */}


                    <Image
                        src='/shop.svg'
                        alt='Shop'
                        height={90}
                        width={90}
                    />   
                    <h1 className="text-center font-bold text-neural-800 text-2xl my-6">
                        Магазин
                    </h1>
                    <p className="text-muted-foreground text-center text-lg mb-6">
                        Потрать очки на что-то полезное
                    </p>


                    <Items
                        // hearts={userProgress.hearts}
                        // points={userProgress.points}
                        hearts={Hearts}
                        points={Points}
                        gems={Gems}
                        hasActiveSubscription={isPro} 
                    />    
                </div>


                <div>

                {/* <Lottie 
                
                    // animationData={ isLate ? LottieTriangle3 : LottieTriangle3 } 
                    animationData={ AETriangle } 
                    className="h-20 w-20"
                /> */}

                </div>
            </FeedWrapper>
            
        </div>
    )
}

export default ShopPage









// // pages/index.tsx

// const Home = (): JSX.Element => {
//   useEffect(() => {
//     // Пример отправки сообщения после загрузки компонента
//     sendMessageToTelegram("Привет! Это сообщение от вашего бота из Next.js.");
//   }, []);

//   return (
//     <div>
//       <h1>Привет, это Next.js и Telegram бот!</h1>
//     </div>
//   );
// };

// export default Home;