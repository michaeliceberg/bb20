import { FeedWrapper } from "@/components/feed-wrapper"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { Separator } from "@/components/ui/separator"
import { getAllClassHW, getAllClasses, getAllTLessonProgress, getAllUsers, getChallengeProgress, getCourseProgress, getCourses, getTCourses, getTUnits, getUnits, getUserProgress } from "@/db/queries"
import Image from "next/image"
import { redirect } from "next/navigation"
import { TabUsers } from "./tab-users"

const ClassroomPage = async () => {

    const allUsersData = getAllUsers()
    const allClassesData = getAllClasses()


    const t_coursesData = getTCourses();
	const userProgressData = getUserProgress()
	const courseProgressData = getCourseProgress()
	const challengeProgressData = getChallengeProgress()
	const t_unitsData = getTUnits()

    const userAllTLessonProgressData = getAllTLessonProgress()
    const allClassHWData = getAllClassHW()


    const coursesData = getCourses();
	const unitsData = getUnits()



    
	// const allUsersProgressData = getAllUsersProgress()

    const [
        allUsers,
        allClasses,


        t_courses,
		userProgress,
		t_units,
		courseProgress,
		challengeProgress,

		all_t_lessonProgress,
        allClassHW,

        courses,
        units,

    ] = await Promise.all([
        allUsersData,
        allClassesData,


        t_coursesData,
		userProgressData,
		t_unitsData,
		courseProgressData,
		challengeProgressData,

		userAllTLessonProgressData,
        allClassHWData,


        coursesData,
        unitsData,
    ])

 





    if (!allUsers || !allClasses) {
		redirect('/');
	}

    
    if (!userProgress?.isAdmin) {
		redirect('/');
	}



    if (!userProgress || !userProgress.activeCourse) {
		redirect('/courses');
	}

	if (!courseProgress) {
		redirect('/courses')
	}

	if (!challengeProgress){
        redirect('/learn')
    }

	if (!t_units || !units) {
		redirect('/learn')
	}




    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <div>
                    sidebar
                </div>
            </StickyWrapper>
            <FeedWrapper>
                <div className="w-full flex flex-col items-center">
                    
                    <Image
                        src='/class.svg'
                        alt='Leaderboard'
                        height={90}
                        width={90}
                    />   
                    <h1 className="text-center font-bold text-neural-800 text-2xl my-6">
                        Классы
                    </h1>
                    <p className="text-muted-foreground text-center text-lg mb-6">
                        Организация уроков
                    </p>

                    <Separator className="mb-4 h-0.5 rounded-full" />










                    <TabUsers 
                        // для Tab users
                        allUsers={allUsers}
                        allClasses={allClasses}    

                        // для Tab hw trainer
                        t_courses={t_courses} 
                        t_units={t_units} 

                        // для Tab hw
                        courses={courses} 
                        units={units} 

                        // для статистики учеников (просмотр сделали или нет ДЗ)
                        all_t_lessonProgress={all_t_lessonProgress}
                        allClassHW={allClassHW}
                        challengeProgress={challengeProgress}


                    />





                    



                </div>

            </FeedWrapper>
            
        </div>

)}

export default ClassroomPage


