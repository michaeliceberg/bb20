import { challengeOptions, challenges } from "@/db/schema"
import { cn } from "@/lib/utils"
import { Card } from "./card"



type Props={
    options: typeof challengeOptions.$inferSelect[]
    onSelect: (id: number) => void
    status: "correct" | "wrong" | "none"
    selectedOption?: number
    disabled?: boolean
    type: typeof challenges.$inferSelect["type"]
    isDoneWrongChallenge: boolean
    isDoneChallenge: boolean
    dateLastDone: Date

}

export const Challenge = ({
    options,
    onSelect,
    status,
    selectedOption,
    disabled,
    type,
    isDoneWrongChallenge,
    isDoneChallenge,
    dateLastDone,
}: Props) => {



    
    var dateNow = new Date()
	var diff = Math.abs(dateLastDone?.getTime() - dateNow.getTime());
	var daysHowLongAgo = Math.ceil(diff / (1000 * 3600 * 24)); 


    return (
        <div className={cn(
            "grid gap-2",
            // type === "ASSIST" && 'grid-cols-1',
            // type === "ASSIST" && 'grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]',
            type === "ASSIST" && 'grid-cols-2',
            type === "SELECT" && 'grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]'
        )}>
            
            {/* {!isDoneChallenge &&  */}

            
            {/* {(isNaN(daysHowLongAgo) || daysHowLongAgo > 1) && 
                (options.map((option, i)=>(
                    <Card 
                        key={option.id}
                        id={option.id}
                        text={option.text}
                        imageSrc={option.imageSrc}
                        shortcut={`${i + 1}`}
                        selected={selectedOption === option.id}
                        onClick={()=>onSelect(option.id)}
                        status={status}
                        audioSrc={option.audioSrc}
                        disabled={disabled}
                        type={type}
                        isDoneWrongChallenge={isDoneWrongChallenge}
                    />   
                )))
            } */}


            {/* РИСОВАТЬ ВАРИАНТЫ ОТВЕТОВ      ЕСЛИ ЗАДАЧА НЕ РЕШЕНА ИЛИ РЕШЕНА ДАВНО > 1 ДНЯ 
            // 
            //
            */}
            {(isNaN(daysHowLongAgo) || daysHowLongAgo > 1) ? 
                (options.map((option, i)=>(
                    <Card 
                        key={option.id}
                        id={option.id}
                        text={option.text}
                        imageSrc={option.imageSrc}
                        shortcut={`${i + 1}`}
                        selected={selectedOption === option.id}
                        onClick={()=>onSelect(option.id)}
                        status={status}
                        audioSrc={option.audioSrc}
                        disabled={disabled}
                        type={type}
                        isDoneWrongChallenge={isDoneWrongChallenge}
                    />   
                )))
                : (


                    isDoneWrongChallenge 
                        ? (    
                                <div className="text-sm lg:text-lg text-start font-bold text-rose-500 pt-10">
                                    <h1>
                                        Задача решена неверно!
                                    </h1>
    
                                    <h1>
                                        Повторно можно решить завтра..
                                    </h1>
                                </div>                         
                        ) 
                        :
                    isDoneChallenge  
                        && !isDoneWrongChallenge && (
                                <h1 className="text-sm lg:text-lg text-start font-bold text-green-500 pt-10">
                                    Задача решена верно.
                                </h1>
                        )
                )
            }

            
                {/* {isDoneWrongChallenge 
                    && (

                            <div className="text-sm lg:text-lg text-start font-bold text-rose-500 pt-10">
                                <h1>
                                    Задача решена неверно!
                                </h1>

                                <h1>
                                    Повторно можно решить завтра..
                                </h1>
                            </div>

                        
                    )
                }

                {isDoneChallenge  
                    && !isDoneWrongChallenge && (
                            <h1 className="text-sm lg:text-lg text-start font-bold text-green-500">
                                Задача решена верно.
                            </h1>
                    )
                } */}


            {/* <h1>{daysHowLongAgo}</h1>
            {isNaN(daysHowLongAgo) 
                && 
                <h2>is nannnnn</h2>
            } */}
            {/* <h2>
                <Latex>{SomeSeven}</Latex>
            </h2> */}
            
        </div>
    )
}