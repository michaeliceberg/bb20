import { SuperType, progressType, t_lessonProgress } from './db/schema';

type Props = {
    hearts: number;
    userId: string;
    userName: string;
    userImageSrc: string;
    activeCourseId: number | null;
    points: number;
    courseProgress: SuperType;
    activeCourse: {
        id: number;
        title: string;
        imageSrc: string;
    } | null;}


export const getUserPointsHearts = (userProgress: Props) => {

  
	var today = new Date();
    var dd:number = today.getDate();
    var mm:number = today.getMonth()+1; 
    var yyyy:number = today.getFullYear();
    var TodayStr = dd + "."  + mm + "." + yyyy
    let Points = 0
    let Hearts = 0
    let Gems = 0
    let oldCourseProgress = userProgress.courseProgress
	if (oldCourseProgress instanceof Array) {
        let indexCourse = oldCourseProgress.findIndex( el => el.course === userProgress.activeCourse?.title );
        //
        if (indexCourse > -1){
            //
            // Эта книга УЖЕ есть в прогрессе,
            // ищем индекс Сегодняшней ДАТЫ
            //
            let currentProgress:progressType = oldCourseProgress[indexCourse].progress
            if (currentProgress instanceof Array) {
                let indexDate = currentProgress.findIndex( el => el.date === TodayStr );
                if (indexDate > -1){
					//
					Points = oldCourseProgress[indexCourse].progress[indexDate].pts
					Hearts = oldCourseProgress[indexCourse].progress[indexDate].hearts
					Gems = oldCourseProgress[indexCourse].progress[indexDate].gems
                }
            }
        }
    }
  
  
    return [Points, Hearts, Gems]
}



export const Shuffle2 = (array: string[]) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 





export const GetLessonStat = (

    t_lP:  typeof t_lessonProgress.$inferSelect[],
    t_lessonId: number,

) => {


    const t_lessonProgressThisLesson =  t_lP.filter(lessonProgress => lessonProgress.t_lessonId == t_lessonId)
    
    // const PTLByMonth = t_lessonProgressThisLesson.map(el => (
    //     {
    //     doneRight: el.doneRight,
    //     doneWrong: el.doneWrong,
    //     month: el.dateDone.getMonth(),
    //     trainingPts: el.trainingPts,
    //     doneRightPercent: el.doneRightPercent,
    //     }
    // ))

    // const uniqueMonths = PTLByMonth.map(item => item.month)
    // .filter((value, index, self) => self.indexOf(value) === index)

    // const doneRightSumList = uniqueMonths.map(month => (
    //     PTLByMonth.filter(el => el.month == month).reduce((total, elem) => {
    //     return (
    //         total + elem.doneRight
    //     )
    //     }, 0)
    // ))

    // const doneWrongSumList = uniqueMonths.map(month => (
    //     PTLByMonth.filter(el => el.month == month).reduce((total, elem) => {
    //     return (
    //         total + elem.doneWrong
    //     )
    //     }, 0)
    // ))

    // const monthTable = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрб', 'Ноябрь', 'Декарбрь']
    // const TrainingProgressMonth = uniqueMonths.map((m, index) => ({
    //     month: monthTable[m],
    //     doneRight: doneRightSumList[index],
    //     doneWrong: doneWrongSumList[index],
    // }))

    

    // const totalDR = TrainingProgressMonth.reduce((total, elem) => {
    //     return (
    //         total + elem.doneRight
    //     )}, 0)
    // const totalDW = TrainingProgressMonth.reduce((total, elem) => {
    //     return (
    //     total + elem.doneWrong
    //     )}, 0)
        

    const totalDR = t_lessonProgressThisLesson.reduce((total, elem) => {
    return (
        total + elem.doneRight
    )}, 0)
    const totalDW = t_lessonProgressThisLesson.reduce((total, elem) => {
        return (
        total + elem.doneWrong
        )}, 0)
    
    let totalPercentDR = 0
    const totalD = totalDR+totalDW
    if (totalDR > 0) {
        totalPercentDR = totalDR/(totalD)
    }

    return ({
        totalPercentDR: totalPercentDR,
        totalDR: totalDR,
    })

}