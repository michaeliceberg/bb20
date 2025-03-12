import { FeedWrapper } from '@/components/feed-wrapper';
import { StickyWrapper } from '@/components/sticky-wrapper';
import { UserProgress } from '@/components/user-progress';
import { getChallengeProgress, getCourseProgress, getCourses, getTUnits, getUnits, getUserProgress } from '@/db/queries';
import { redirect } from 'next/navigation';
import { Header } from './header';
import { auth, currentUser } from "@clerk/nextjs/server"
import { UnitBanner } from './unit-banner';
import { TrainerList } from '@/components/trainer-list';



const LearnPage = async () => {
	const { userId } = await auth();
	const user = await currentUser();

	if (!userId || !user) {
		throw new Error('Вы не авторизированны!');
	}


	const coursesData = getCourses();

	const userProgressData = getUserProgress()
	const courseProgressData = getCourseProgress()
	const challengeProgressData = getChallengeProgress()

	// const unitsData = getUnits()
	const t_unitsData = getTUnits()

	
	const [
		courses,
		userProgress,
		t_units,
		courseProgress,
		challengeProgress,

	] = await Promise.all([
		coursesData,
		userProgressData,
		t_unitsData,
		courseProgressData,
		challengeProgressData,
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
				{courses.map((course, index)=>(
				
					<div key={index*1389}>

						<UnitBanner 
							title={course.title} 
							description={'something'} 
							imgSrc={course.imageSrc} 
							id={1} 
							percentageDone={20}
						/>
						
						
						<div>
							{t_units.filter(u => u.courseId === course.id)
							.map((t_unit, index) => (
								<div key={index*81872} className='text-green-700'>

									<p className='text-foreground text-xl  text-center'>
										{t_unit.title}
									</p>

									{t_units.filter(ul => ul.id == t_unit.id)[0].lessons.map((t_lesson, index) => (
										
										<div key={index * 2241} className='grid grid-cols-2'>
											<TrainerList t_lesson={t_lesson}/>
										</div>
										
										
										// <div key={index*121} className='flex flex-1'>
										// 	<Button 
										// 		size='sm' 
										// 		onClick={()=>window.location.href = `/lesson/${lessonId}`}
										// 		>
										// 		{lesson.title}
										// 	</Button>
										// </div>




									))}
								</div>
							))}
						</div>


						
						{/* {course.title} */}
					</div>
				))}




				
			
			</FeedWrapper>
		</div>
	);
};

export default LearnPage;
