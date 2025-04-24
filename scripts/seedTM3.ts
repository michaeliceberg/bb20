// import { neon } from '@neondatabase/serverless';
// import 'dotenv/config';
// import { drizzle } from 'drizzle-orm/neon-http';
// import * as schema from '../db/schema';

// const sql = neon(process.env.DATABASE_URL!);
// // @ts-ignore
// const db = drizzle(sql, { schema });
// const main = async () => {
// 	try {
// 		console.log('Seeding Trainer DB Math 3');




// 		await db.insert(schema.t_courses).values([
// 			{id:3,title:'М3',imageSrc:'lnip_mat_6.svg'},
// 		]);




















		
		



// 		await db.insert(schema.t_units).values([{id:301,t_courseId:3,title:'sin cos tg ctg',description:'Описание 1',order:301,imageSrc:'LottieUnit1',},



// ]);

// await db.insert(schema.t_lessons).values([{id:301,t_unitId:301,title:'Ответы',order:301,},




// ]);





// await db.insert(schema.t_challenges).values([{id:301301001,t_lessonId:301,type:'ASSIST',order:301301001,question:'$ \\large  sin(x) = \\frac{\\sqrt{3}}{2} \\quad \\color{green} x=? $',points:10,author:'М 3',imageSrc:'',},
// {id:301301002,t_lessonId:301,type:'ASSIST',order:301301002,question:'$ \\large  sin(x) = -\\frac{\\sqrt{3}}{2} \\quad \\color{green} x=? $',points:10,author:'М 3',imageSrc:'',},
// {id:301301003,t_lessonId:301,type:'ASSIST',order:301301003,question:'$ \\large  sin(x) = \\frac{\\sqrt{2}}{2} \\quad \\color{green} x=? $',points:10,author:'М 3',imageSrc:'',},
// {id:301301004,t_lessonId:301,type:'ASSIST',order:301301004,question:'$ \\large  sin(x) = -\\frac{\\sqrt{2}}{2} \\quad \\color{green} x=? $',points:10,author:'М 3',imageSrc:'',},
// {id:301301005,t_lessonId:301,type:'ASSIST',order:301301005,question:'$ \\large  sin(x) = \\frac{1}{2} \\quad \\color{green} x=? $',points:10,author:'М 3',imageSrc:'',},
// {id:301301006,t_lessonId:301,type:'ASSIST',order:301301006,question:'$ \\large  sin(x) = -\\frac{1}{2} \\quad \\color{green} x=? $',points:10,author:'М 3',imageSrc:'',},
// {id:301301007,t_lessonId:301,type:'ASSIST',order:301301007,question:'$ \\large  cos(x) = \\frac{\\sqrt{3}}{2} \\quad \\color{green} x=? $',points:10,author:'М 3',imageSrc:'',},
// {id:301301008,t_lessonId:301,type:'ASSIST',order:301301008,question:'$ \\large  cos(x) = -\\frac{\\sqrt{3}}{2} \\quad \\color{green} x=? $',points:10,author:'М 3',imageSrc:'',},
// {id:301301009,t_lessonId:301,type:'ASSIST',order:301301009,question:'$ \\large  cos(x) = \\frac{\\sqrt{2}}{2} \\quad \\color{green} x=? $',points:10,author:'М 3',imageSrc:'',},
// {id:301301010,t_lessonId:301,type:'ASSIST',order:301301010,question:'$ \\large  cos(x) = -\\frac{\\sqrt{2}}{2} \\quad \\color{green} x=? $',points:10,author:'М 3',imageSrc:'',},
// {id:301301011,t_lessonId:301,type:'ASSIST',order:301301011,question:'$ \\large  cos(x) = \\frac{1}{2} \\quad \\color{green} x=? $',points:10,author:'М 3',imageSrc:'',},
// {id:301301012,t_lessonId:301,type:'ASSIST',order:301301012,question:'$ \\large  cos(x) = -\\frac{1}{2} \\quad \\color{green} x=? $',points:10,author:'М 3',imageSrc:'',},
// {id:301301013,t_lessonId:301,type:'ASSIST',order:301301013,question:'$ \\large  sin(x) = \\pm \\frac{\\sqrt{3}}{2} \\quad \\color{green} x=? $',points:10,author:'М 3',imageSrc:'',},
// {id:301301014,t_lessonId:301,type:'ASSIST',order:301301014,question:'$ \\large  sin(x) = \\pm \\frac{\\sqrt{2}}{2} \\quad \\color{green} x=? $',points:10,author:'М 3',imageSrc:'',},
// {id:301301015,t_lessonId:301,type:'ASSIST',order:301301015,question:'$ \\large  sin(x) = \\pm \\frac{1}{2} \\quad \\color{green} x=? $',points:10,author:'М 3',imageSrc:'',},
// {id:301301016,t_lessonId:301,type:'ASSIST',order:301301016,question:'$ \\large  cos(x) = \\pm \\frac{\\sqrt{3}}{2} \\quad \\color{green} x=? $',points:10,author:'М 3',imageSrc:'',},
// {id:301301017,t_lessonId:301,type:'ASSIST',order:301301017,question:'$ \\large  cos(x) = \\pm \\frac{\\sqrt{2}}{2} \\quad \\color{green} x=? $',points:10,author:'М 3',imageSrc:'',},
// {id:301301018,t_lessonId:301,type:'ASSIST',order:301301018,question:'$ \\large  cos(x) = \\pm \\frac{1}{2} \\quad \\color{green} x=? $',points:10,author:'М 3',imageSrc:'',},]);



// await db.insert(schema.t_challengeOptions).values([{t_challengeId:301301001,correct:true,text:'$\\left[ \\begin{gathered}  \\frac{\\pi}{3} + 2 \\pi k \\newline   \\frac{2 \\pi}{3} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301001,correct:false,text:'$\\left[ \\begin{gathered} - \\frac{\\pi}{3} + 2 \\pi k \\newline  - \\frac{2 \\pi}{3} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301001,correct:false,text:'$\\left[ \\begin{gathered}  \\frac{\\pi}{4} + 2 \\pi k \\newline   \\frac{3 \\pi}{4} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301001,correct:false,text:'$\\left[ \\begin{gathered} - \\frac{\\pi}{4} + 2 \\pi k \\newline  - \\frac{3 \\pi}{4} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301001,correct:false,text:'$\\left[ \\begin{gathered}  \\frac{\\pi}{6} + 2 \\pi k \\newline   \\frac{5 \\pi}{6} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301001,correct:false,text:'$\\left[ \\begin{gathered} - \\frac{\\pi}{6} + 2 \\pi k \\newline  - \\frac{5 \\pi}{6} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},
// {t_challengeId:301301002,correct:true,text:'$\\left[ \\begin{gathered} - \\frac{\\pi}{3} + 2 \\pi k \\newline  - \\frac{2 \\pi}{3} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301002,correct:false,text:'$\\left[ \\begin{gathered}  \\frac{\\pi}{4} + 2 \\pi k \\newline   \\frac{3 \\pi}{4} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301002,correct:false,text:'$\\left[ \\begin{gathered} - \\frac{\\pi}{4} + 2 \\pi k \\newline  - \\frac{3 \\pi}{4} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301002,correct:false,text:'$\\left[ \\begin{gathered}  \\frac{\\pi}{6} + 2 \\pi k \\newline   \\frac{5 \\pi}{6} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301002,correct:false,text:'$\\left[ \\begin{gathered} - \\frac{\\pi}{6} + 2 \\pi k \\newline  - \\frac{5 \\pi}{6} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301002,correct:false,text:'$\\left[ \\begin{gathered}  \\frac{\\pi}{3} + 2 \\pi k \\newline   \\frac{2 \\pi}{3} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},
// {t_challengeId:301301003,correct:true,text:'$\\left[ \\begin{gathered}  \\frac{\\pi}{4} + 2 \\pi k \\newline   \\frac{3 \\pi}{4} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301003,correct:false,text:'$\\left[ \\begin{gathered} - \\frac{\\pi}{4} + 2 \\pi k \\newline  - \\frac{3 \\pi}{4} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301003,correct:false,text:'$\\left[ \\begin{gathered}  \\frac{\\pi}{6} + 2 \\pi k \\newline   \\frac{5 \\pi}{6} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301003,correct:false,text:'$\\left[ \\begin{gathered} - \\frac{\\pi}{6} + 2 \\pi k \\newline  - \\frac{5 \\pi}{6} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301003,correct:false,text:'$\\left[ \\begin{gathered}  \\frac{\\pi}{3} + 2 \\pi k \\newline   \\frac{2 \\pi}{3} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301003,correct:false,text:'$\\left[ \\begin{gathered} - \\frac{\\pi}{3} + 2 \\pi k \\newline  - \\frac{2 \\pi}{3} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},
// {t_challengeId:301301004,correct:true,text:'$\\left[ \\begin{gathered} - \\frac{\\pi}{4} + 2 \\pi k \\newline  - \\frac{3 \\pi}{4} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301004,correct:false,text:'$\\left[ \\begin{gathered}  \\frac{\\pi}{6} + 2 \\pi k \\newline   \\frac{5 \\pi}{6} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301004,correct:false,text:'$\\left[ \\begin{gathered} - \\frac{\\pi}{6} + 2 \\pi k \\newline  - \\frac{5 \\pi}{6} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301004,correct:false,text:'$\\left[ \\begin{gathered}  \\frac{\\pi}{3} + 2 \\pi k \\newline   \\frac{2 \\pi}{3} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301004,correct:false,text:'$\\left[ \\begin{gathered} - \\frac{\\pi}{3} + 2 \\pi k \\newline  - \\frac{2 \\pi}{3} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301004,correct:false,text:'$\\left[ \\begin{gathered}  \\frac{\\pi}{4} + 2 \\pi k \\newline   \\frac{3 \\pi}{4} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},
// {t_challengeId:301301005,correct:true,text:'$\\left[ \\begin{gathered}  \\frac{\\pi}{6} + 2 \\pi k \\newline   \\frac{5 \\pi}{6} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301005,correct:false,text:'$\\left[ \\begin{gathered} - \\frac{\\pi}{6} + 2 \\pi k \\newline  - \\frac{5 \\pi}{6} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301005,correct:false,text:'$\\left[ \\begin{gathered}  \\frac{\\pi}{3} + 2 \\pi k \\newline   \\frac{2 \\pi}{3} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301005,correct:false,text:'$\\left[ \\begin{gathered} - \\frac{\\pi}{3} + 2 \\pi k \\newline  - \\frac{2 \\pi}{3} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301005,correct:false,text:'$\\left[ \\begin{gathered}  \\frac{\\pi}{4} + 2 \\pi k \\newline   \\frac{3 \\pi}{4} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301005,correct:false,text:'$\\left[ \\begin{gathered} - \\frac{\\pi}{4} + 2 \\pi k \\newline  - \\frac{3 \\pi}{4} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},
// {t_challengeId:301301006,correct:true,text:'$\\left[ \\begin{gathered} - \\frac{\\pi}{6} + 2 \\pi k \\newline  - \\frac{5 \\pi}{6} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301006,correct:false,text:'$\\left[ \\begin{gathered}  \\frac{\\pi}{3} + 2 \\pi k \\newline   \\frac{2 \\pi}{3} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301006,correct:false,text:'$\\left[ \\begin{gathered} - \\frac{\\pi}{3} + 2 \\pi k \\newline  - \\frac{2 \\pi}{3} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301006,correct:false,text:'$\\left[ \\begin{gathered}  \\frac{\\pi}{4} + 2 \\pi k \\newline   \\frac{3 \\pi}{4} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301006,correct:false,text:'$\\left[ \\begin{gathered} - \\frac{\\pi}{4} + 2 \\pi k \\newline  - \\frac{3 \\pi}{4} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},{t_challengeId:301301006,correct:false,text:'$\\left[ \\begin{gathered}  \\frac{\\pi}{6} + 2 \\pi k \\newline   \\frac{5 \\pi}{6} + 2 \\pi k    \\end{gathered} \\right.$',imageSrc:''},
// {t_challengeId:301301007,correct:true,text:'$\\pm \\frac{\\pi}{6} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301007,correct:false,text:'$\\pm \\frac{5\\pi}{6} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301007,correct:false,text:'$\\pm \\frac{\\pi}{4} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301007,correct:false,text:'$\\pm \\frac{3\\pi}{4} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301007,correct:false,text:'$\\pm \\frac{\\pi}{3} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301007,correct:false,text:'$\\pm \\frac{2\\pi}{3} + 2 \\pi k $',imageSrc:''},
// {t_challengeId:301301008,correct:true,text:'$\\pm \\frac{5\\pi}{6} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301008,correct:false,text:'$\\pm \\frac{\\pi}{4} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301008,correct:false,text:'$\\pm \\frac{3\\pi}{4} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301008,correct:false,text:'$\\pm \\frac{\\pi}{3} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301008,correct:false,text:'$\\pm \\frac{2\\pi}{3} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301008,correct:false,text:'$\\pm \\frac{\\pi}{6} + 2 \\pi k $',imageSrc:''},
// {t_challengeId:301301009,correct:true,text:'$\\pm \\frac{\\pi}{4} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301009,correct:false,text:'$\\pm \\frac{3\\pi}{4} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301009,correct:false,text:'$\\pm \\frac{\\pi}{3} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301009,correct:false,text:'$\\pm \\frac{2\\pi}{3} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301009,correct:false,text:'$\\pm \\frac{\\pi}{6} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301009,correct:false,text:'$\\pm \\frac{5\\pi}{6} + 2 \\pi k $',imageSrc:''},
// {t_challengeId:301301010,correct:true,text:'$\\pm \\frac{3\\pi}{4} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301010,correct:false,text:'$\\pm \\frac{\\pi}{3} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301010,correct:false,text:'$\\pm \\frac{2\\pi}{3} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301010,correct:false,text:'$\\pm \\frac{\\pi}{6} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301010,correct:false,text:'$\\pm \\frac{5\\pi}{6} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301010,correct:false,text:'$\\pm \\frac{\\pi}{4} + 2 \\pi k $',imageSrc:''},
// {t_challengeId:301301011,correct:true,text:'$\\pm \\frac{\\pi}{3} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301011,correct:false,text:'$\\pm \\frac{2\\pi}{3} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301011,correct:false,text:'$\\pm \\frac{\\pi}{6} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301011,correct:false,text:'$\\pm \\frac{5\\pi}{6} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301011,correct:false,text:'$\\pm \\frac{\\pi}{4} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301011,correct:false,text:'$\\pm \\frac{3\\pi}{4} + 2 \\pi k $',imageSrc:''},
// {t_challengeId:301301012,correct:true,text:'$\\pm \\frac{2\\pi}{3} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301012,correct:false,text:'$\\pm \\frac{\\pi}{6} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301012,correct:false,text:'$\\pm \\frac{5\\pi}{6} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301012,correct:false,text:'$\\pm \\frac{\\pi}{4} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301012,correct:false,text:'$\\pm \\frac{3\\pi}{4} + 2 \\pi k $',imageSrc:''},{t_challengeId:301301012,correct:false,text:'$\\pm \\frac{\\pi}{3} + 2 \\pi k $',imageSrc:''},
// {t_challengeId:301301013,correct:true,text:'$\\pm \\frac{\\pi}{3} + \\pi k $',imageSrc:''},{t_challengeId:301301013,correct:false,text:'$\\pm \\frac{\\pi}{4} + \\pi k $',imageSrc:''},{t_challengeId:301301013,correct:false,text:'$\\pm \\frac{\\pi}{6} + \\pi k $',imageSrc:''},{t_challengeId:301301013,correct:false,text:'$\\pm \\frac{\\pi}{6} + \\pi k $',imageSrc:''},{t_challengeId:301301013,correct:false,text:'$\\pm \\frac{\\pi}{4} + \\pi k $',imageSrc:''},{t_challengeId:301301013,correct:false,text:'$\\pm \\frac{\\pi}{3} + \\pi k $',imageSrc:''},
// {t_challengeId:301301014,correct:true,text:'$\\pm \\frac{\\pi}{4} + \\pi k $',imageSrc:''},{t_challengeId:301301014,correct:false,text:'$\\pm \\frac{\\pi}{6} + \\pi k $',imageSrc:''},{t_challengeId:301301014,correct:false,text:'$\\pm \\frac{\\pi}{6} + \\pi k $',imageSrc:''},{t_challengeId:301301014,correct:false,text:'$\\pm \\frac{\\pi}{4} + \\pi k $',imageSrc:''},{t_challengeId:301301014,correct:false,text:'$\\pm \\frac{\\pi}{3} + \\pi k $',imageSrc:''},{t_challengeId:301301014,correct:false,text:'$\\pm \\frac{\\pi}{3} + \\pi k $',imageSrc:''},
// {t_challengeId:301301015,correct:true,text:'$\\pm \\frac{\\pi}{6} + \\pi k $',imageSrc:''},{t_challengeId:301301015,correct:false,text:'$\\pm \\frac{\\pi}{6} + \\pi k $',imageSrc:''},{t_challengeId:301301015,correct:false,text:'$\\pm \\frac{\\pi}{4} + \\pi k $',imageSrc:''},{t_challengeId:301301015,correct:false,text:'$\\pm \\frac{\\pi}{3} + \\pi k $',imageSrc:''},{t_challengeId:301301015,correct:false,text:'$\\pm \\frac{\\pi}{3} + \\pi k $',imageSrc:''},{t_challengeId:301301015,correct:false,text:'$\\pm \\frac{\\pi}{4} + \\pi k $',imageSrc:''},
// {t_challengeId:301301016,correct:true,text:'$\\pm \\frac{\\pi}{6} + \\pi k $',imageSrc:''},{t_challengeId:301301016,correct:false,text:'$\\pm \\frac{\\pi}{4} + \\pi k $',imageSrc:''},{t_challengeId:301301016,correct:false,text:'$\\pm \\frac{\\pi}{3} + \\pi k $',imageSrc:''},{t_challengeId:301301016,correct:false,text:'$\\pm \\frac{\\pi}{3} + \\pi k $',imageSrc:''},{t_challengeId:301301016,correct:false,text:'$\\pm \\frac{\\pi}{4} + \\pi k $',imageSrc:''},{t_challengeId:301301016,correct:false,text:'$\\pm \\frac{\\pi}{6} + \\pi k $',imageSrc:''},
// {t_challengeId:301301017,correct:true,text:'$\\pm \\frac{\\pi}{4} + \\pi k $',imageSrc:''},{t_challengeId:301301017,correct:false,text:'$\\pm \\frac{\\pi}{3} + \\pi k $',imageSrc:''},{t_challengeId:301301017,correct:false,text:'$\\pm \\frac{\\pi}{3} + \\pi k $',imageSrc:''},{t_challengeId:301301017,correct:false,text:'$\\pm \\frac{\\pi}{4} + \\pi k $',imageSrc:''},{t_challengeId:301301017,correct:false,text:'$\\pm \\frac{\\pi}{6} + \\pi k $',imageSrc:''},{t_challengeId:301301017,correct:false,text:'$\\pm \\frac{\\pi}{6} + \\pi k $',imageSrc:''},
// {t_challengeId:301301018,correct:true,text:'$\\pm \\frac{\\pi}{3} + \\pi k $',imageSrc:''},{t_challengeId:301301018,correct:false,text:'$\\pm \\frac{\\pi}{3} + \\pi k $',imageSrc:''},{t_challengeId:301301018,correct:false,text:'$\\pm \\frac{\\pi}{4} + \\pi k $',imageSrc:''},{t_challengeId:301301018,correct:false,text:'$\\pm \\frac{\\pi}{6} + \\pi k $',imageSrc:''},{t_challengeId:301301018,correct:false,text:'$\\pm \\frac{\\pi}{6} + \\pi k $',imageSrc:''},{t_challengeId:301301018,correct:false,text:'$\\pm \\frac{\\pi}{4} + \\pi k $',imageSrc:''},]);





// 		console.log('Seeding Finished');
// 	} catch (error) {
// 		console.error(error);
// 		throw new Error('Не получилось получить БД');
// 	}
// };

// main();
