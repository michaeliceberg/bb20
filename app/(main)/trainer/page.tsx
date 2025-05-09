import { FeedWrapper } from '@/components/feed-wrapper';
import { StickyWrapper } from '@/components/sticky-wrapper';
import { UserProgress } from '@/components/user-progress';
import { getAllTLessonProgress, getAllUsersProgress, getChallengeProgress, getCourseProgress, getCourses, getTCourses, getTLessonProgress, getTUnits, getUnits, getUserProgress } from '@/db/queries';
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
	
	const userAllTLessonProgressData = getAllTLessonProgress()
	

	const allUsersProgressData = getAllUsersProgress()



	const [
		t_courses,
		userProgress,
		t_units,
		courseProgress,
		challengeProgress,
		t_lessonProgress,

		all_t_lessonProgress,
		allUsersProgress,

	] = await Promise.all([
		t_coursesData,
		userProgressData,
		t_unitsData,
		courseProgressData,
		challengeProgressData,
		userTLessonProgressData,

		userAllTLessonProgressData,
		allUsersProgressData,
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

	if (!t_units) {
		redirect('/learn')
	}

	// для сравнения рейтинга в trainer-list
	//
	const user_id = userProgress.userId

	// отфильтровать последние по дате
	//
	// all_t_lessonProgress.map(lesson => (
	// 	console.log(lesson)
	// ))


	// const data = [
	// 	{ group: 'A', name: 'SD' }, 
	// 	{ group: 'B', name: 'FI' }, 
	// 	{ group: 'A', name: 'MM' },
	// 	{ group: 'B', name: 'CO'}
	//   ];
	//   const unique = [...new Set<typeof>(t_lessonProgress.map(item => item.userId))];



	const UniqueLessonIds = all_t_lessonProgress.map(el => el.t_lessonId)
	  .filter(
		  (value, index, current_value) => current_value.indexOf(value) === index
	  );

	const TRatingUsers = UniqueLessonIds.map(t_lesson_id => {

		const currentLessonProgress = all_t_lessonProgress.filter(progress => progress.t_lessonId == t_lesson_id)

		const UniqueUserIds = currentLessonProgress.map(el => el.userId)
		.filter(
			(value, index, current_value) => current_value.indexOf(value) === index
		);


		const usersStat = UniqueUserIds.map(user_id => {
			//
			// current lesson   current user
			//
			const CLCUProgress = currentLessonProgress.filter(progress => progress.userId == user_id)



			let DRP = 0

			const doneRight = CLCUProgress.reduce((total, elem) => {
				return (
					total + elem.doneRight
				)
			}, 0)

			const doneWrong = CLCUProgress.reduce((total, elem) => {
				return (
					total + elem.doneWrong
				)
			}, 0)

			if (doneRight + doneWrong > 0) {
				DRP = doneRight/(doneRight + doneWrong)
			}
			const DR_DRP = doneRight * DRP

			return  {
				DRP: Math.round(DRP * 100),
				DR_DRP: DR_DRP,
				user_id: allUsersProgress?.filter(pr => pr.userId==user_id)[0].userId,
				user_name: allUsersProgress?.filter(pr => pr.userId==user_id)[0].userName,
			}
		
		})

		usersStat.sort((a, b) => b.DR_DRP - a.DR_DRP)

		return {t_lesson_id: t_lesson_id, usersSortedStat: usersStat}

	}

		

	 )
	

	//  console.log(TRatingUsers[0].usersSortedStat)
	//  console.log(TRatingUsers[1])


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
				
			</StickyWrapper>


			<FeedWrapper>
				<Header title="Тренажёр" />



				<TabTCourses 
					t_courses={t_courses} 
					t_units={t_units} 
					t_lessonProgress={t_lessonProgress}
					TRatingUsers={TRatingUsers}
					user_id={user_id}
				/>


				{/* <ScrollTriggered /> */}

			</FeedWrapper>
		</div>
	);
};

export default LearnPage;
