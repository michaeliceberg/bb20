'use server'

import db from "@/db/drizzle"
import { classesHw } from "@/db/schema"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

export const upsertClassHW = async (
        classId: number, 
        lessonsIdsHw: number[], 
        challengeIdsHw: number[],
    ) => {
    
    const {userId} = await auth()  
    if (!userId) {
        throw new Error("Вы не авторизированы")
    }

    // ВСТАВЛЯЕМ hw (обычный) и hw-trainer (тренажер)
    //
    await db.insert(classesHw).values({
        classId,
        taskTrainer: lessonsIdsHw.toString(),
        task: challengeIdsHw.toString(),
    })
}

