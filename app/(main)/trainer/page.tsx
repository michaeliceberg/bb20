import { FeedWrapper } from '@/components/feed-wrapper';
import { StickyWrapper } from '@/components/sticky-wrapper';
import { UserProgress } from '@/components/user-progress';
import { getChallengeProgress, getCourseProgress, getCourses, getTCourses, getTLessonProgress, getTUnits, getUnits, getUserProgress } from '@/db/queries';
import { redirect } from 'next/navigation';
import { Header } from './header';
import { auth, currentUser } from "@clerk/nextjs/server"
import { TabTCourses } from '@/components/tab-t-courses';



const LearnPage = async () => {
	const { userId } = await auth();
	const user = await currentUser();

	if (!userId || !user) {
		throw new Error('Вы не авторизированны!');
	}


	// const coursesData = getCourses();
	const t_coursesData = getTCourses();

	const userProgressData = getUserProgress()
	const courseProgressData = getCourseProgress()
	const challengeProgressData = getChallengeProgress()

	const t_unitsData = getTUnits()
	const userTLessonProgressData = getTLessonProgress()
	
	const [
		t_courses,
		userProgress,
		t_units,
		courseProgress,
		challengeProgress,
		t_lessonProgress,

	] = await Promise.all([
		t_coursesData,
		userProgressData,
		t_unitsData,
		courseProgressData,
		challengeProgressData,
		userTLessonProgressData,
	]);

	if (!userProgress || !userProgress.activeCourse) {
		redirect('/courses');
	}

	if (!courseProgress) {
		redirect('/courses')
	}

	if (!challengeProgress){
        redirect('/learn')
    }



	return (
		<div className='flex flex-row-reverse gap-[48px] px-6'>
			<StickyWrapper>
				<UserProgress 
					activeCourse={userProgress.activeCourse} 
					hearts={10} 
					points={11} 
					gems={12}
					
					hasActiveSubscription={false} 
				/>

			{/* <Promo YourDaysLate={YourDaysLate} formattedDate={formattedDate}/> */}
			{/* <Quests points={Points} hwList={hwList} /> */}
				
			</StickyWrapper>


			<FeedWrapper>
				<Header title={userProgress.activeCourse.title} />



				<TabTCourses 
					t_courses={t_courses} 
					t_units={t_units} 
					t_lessonProgress={t_lessonProgress}
				/>


				
			
			</FeedWrapper>
		</div>
	);
};

export default LearnPage;
