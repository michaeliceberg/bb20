import { neon } from '@neondatabase/serverless';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../db/schema';

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });
const main = async () => {
	try {
		console.log('Seeding Trainer DB Math');

		await db.delete(schema.t_courses);
		await db.delete(schema.t_units);
		await db.delete(schema.t_lessons);
		await db.delete(schema.t_challenges);
		await db.delete(schema.t_challengeOptions);
		// await db.delete(schema.challengeProgress);

		//тетрис

		// собирается фигурка из лего

		// ADD COURSES
		//
		// await db.insert(schema.courses).values([{id:1,title:'ЛНИП Физика 7',imageSrc:'lnip_phy_7.svg'},
		// {id:2,title:'ЛНИП Математика 7',imageSrc:'lnip_mat_7.svg'},
		// {id:3,title:'ЛНИП Математика 6',imageSrc:'lnip_mat_6.svg'},]);


		


		await db.insert(schema.t_courses).values([
			{id:1,title:'М1',imageSrc:'lnip_mat_6.svg'},
		]);






















		await db.insert(schema.t_units).values([{id:101,t_courseId:1,title:'Счёт',description:'Описание 1',order:101,imageSrc:'LottieUnit1',},
{id:102,t_courseId:1,title:'Откройте скобки',description:'Описание 2',order:102,imageSrc:'LottieUnit2',},

]);






await db.insert(schema.t_lessons).values([{id:101,t_unitId:101,title:'Пропорции',order:101,},
{id:102,t_unitId:101,title:'SUPER дроби',order:102,},
{id:103,t_unitId:102,title:'Было-стало',order:103,},
{id:104,t_unitId:102,title:'Полегче',order:104,},



]);
		
		

















		
		


	








await db.insert(schema.t_challenges).values([{id:101101001,t_lessonId:101,type:'ASSIST',order:101101001,question:'$ \\huge  \\frac{a}{b} = c \\quad \\color{green} b=? $',points:10,author:'М 1',},
{id:101101002,t_lessonId:101,type:'ASSIST',order:101101002,question:'$ \\huge  \\frac{a}{b} = c \\quad \\color{green} a=? $',points:10,author:'М 1',},
{id:101101003,t_lessonId:101,type:'ASSIST',order:101101003,question:'$ \\huge  a=\\frac{b}{c} \\quad \\color{green}  b=? $ ',points:10,author:'М 1',},
{id:101101004,t_lessonId:101,type:'ASSIST',order:101101004,question:'$ \\huge  a=\\frac{b}{c} \\quad \\color{green}  c=? $ ',points:10,author:'М 1',},
{id:101101005,t_lessonId:101,type:'ASSIST',order:101101005,question:'$ \\huge  \\frac{a}{d}=\\frac{c}{b} \\color{green}  \\quad c=? $ ',points:10,author:'М 1',},
{id:101101006,t_lessonId:101,type:'ASSIST',order:101101006,question:'$ \\huge  \\frac{a}{d}=\\frac{c}{b} \\color{green}  \\quad b=? $ ',points:10,author:'М 1',},
{id:101101007,t_lessonId:101,type:'ASSIST',order:101101007,question:'$ \\huge \\frac{a}{d}=\\frac{c}{b} \\color{green}  \\quad a=? $ ',points:10,author:'М 1',},
{id:101101008,t_lessonId:101,type:'ASSIST',order:101101008,question:'$ \\huge  \\frac{a}{d}=\\frac{c}{b} \\color{green}  \\quad d=? $ ',points:10,author:'М 1',},
{id:101101009,t_lessonId:101,type:'ASSIST',order:101101009,question:'$ \\huge  x \\cdot \\frac{1}{7}=\\frac{c}{b} \\color{green}  \\quad c=? $',points:10,author:'М 1',},
{id:101101010,t_lessonId:101,type:'ASSIST',order:101101010,question:'$ \\huge  x \\cdot \\frac{1}{7}=\\frac{c}{b} \\color{green}  \\quad x=? $',points:10,author:'М 1',},
{id:101101011,t_lessonId:101,type:'ASSIST',order:101101011,question:'$ \\huge  x \\cdot \\frac{1}{7}=\\frac{c}{b} \\color{green}  \\quad b=? $',points:10,author:'М 1',},
{id:101102001,t_lessonId:102,type:'ASSIST',order:101102001,question:'$ \\huge0,75 * 20 =$',points:10,author:'М 1',},
{id:101102002,t_lessonId:102,type:'ASSIST',order:101102002,question:'$ \\huge0,75 * 120 =$',points:10,author:'М 1',},
{id:101102003,t_lessonId:102,type:'ASSIST',order:101102003,question:'$ \\huge0,75 * 40 =$',points:10,author:'М 1',},
{id:101102004,t_lessonId:102,type:'ASSIST',order:101102004,question:'$ \\huge0,75 * 80 =$',points:10,author:'М 1',},
{id:101102005,t_lessonId:102,type:'ASSIST',order:101102005,question:'$ \\huge0,75 * 24 =$',points:10,author:'М 1',},
{id:101102006,t_lessonId:102,type:'ASSIST',order:101102006,question:'$ \\huge0,5 * 20 =$',points:10,author:'М 1',},
{id:101102007,t_lessonId:102,type:'ASSIST',order:101102007,question:'$ \\huge0,5 * 100 =$',points:10,author:'М 1',},
{id:101102008,t_lessonId:102,type:'ASSIST',order:101102008,question:'$ \\huge0,5 * 40 =$',points:10,author:'М 1',},
{id:101102009,t_lessonId:102,type:'ASSIST',order:101102009,question:'$ \\huge0,5 * 80 =$',points:10,author:'М 1',},
{id:101102010,t_lessonId:102,type:'ASSIST',order:101102010,question:'$ \\huge0,5 * 88 =$',points:10,author:'М 1',},
{id:101102011,t_lessonId:102,type:'ASSIST',order:101102011,question:'$ \\huge0,25 * 20 =$',points:10,author:'М 1',},
{id:101102012,t_lessonId:102,type:'ASSIST',order:101102012,question:'$ \\huge0,25 * 120 =$',points:10,author:'М 1',},
{id:101102013,t_lessonId:102,type:'ASSIST',order:101102013,question:'$ \\huge0,25 * 40 =$',points:10,author:'М 1',},
{id:101102014,t_lessonId:102,type:'ASSIST',order:101102014,question:'$ \\huge0,25 * 80 =$',points:10,author:'М 1',},
{id:101102015,t_lessonId:102,type:'ASSIST',order:101102015,question:'$ \\huge0,25 * 24 =$',points:10,author:'М 1',},
{id:101102016,t_lessonId:102,type:'ASSIST',order:101102016,question:'$ \\huge0,125 * 24 =$',points:10,author:'М 1',},
{id:101102017,t_lessonId:102,type:'ASSIST',order:101102017,question:'$ \\huge0,125 * 160 =$',points:10,author:'М 1',},
{id:101102018,t_lessonId:102,type:'ASSIST',order:101102018,question:'$ \\huge0,125 * 40 =$',points:10,author:'М 1',},
{id:101102019,t_lessonId:102,type:'ASSIST',order:101102019,question:'$ \\huge0,125 * 80 =$',points:10,author:'М 1',},
{id:101102020,t_lessonId:102,type:'ASSIST',order:101102020,question:'$ \\huge0,125 * 120=$',points:10,author:'М 1',},
{id:101102021,t_lessonId:102,type:'ASSIST',order:101102021,question:'$ \\huge0,2 * 20 =$',points:10,author:'М 1',},
{id:101102022,t_lessonId:102,type:'ASSIST',order:101102022,question:'$ \\huge0,2 * 150 =$',points:10,author:'М 1',},
{id:101102023,t_lessonId:102,type:'ASSIST',order:101102023,question:'$ \\huge0,2 * 40 =$',points:10,author:'М 1',},
{id:101102024,t_lessonId:102,type:'ASSIST',order:101102024,question:'$ \\huge0,2 * 80 =$',points:10,author:'М 1',},
{id:101102025,t_lessonId:102,type:'ASSIST',order:101102025,question:'$ \\huge0,2 * 25 =$',points:10,author:'М 1',},
{id:101102026,t_lessonId:102,type:'ASSIST',order:101102026,question:'$ \\huge21 ÷ 0,75 =$',points:10,author:'М 1',},
{id:101102027,t_lessonId:102,type:'ASSIST',order:101102027,question:'$ \\huge120 ÷ 0,75 =$',points:10,author:'М 1',},
{id:101102028,t_lessonId:102,type:'ASSIST',order:101102028,question:'$ \\huge60 ÷ 0,75 =$',points:10,author:'М 1',},
{id:101102029,t_lessonId:102,type:'ASSIST',order:101102029,question:'$ \\huge90 ÷ 0,75 =$',points:10,author:'М 1',},
{id:101102030,t_lessonId:102,type:'ASSIST',order:101102030,question:'$ \\huge24 ÷ 0,75 =$',points:10,author:'М 1',},
{id:101102031,t_lessonId:102,type:'ASSIST',order:101102031,question:'$ \\huge20 ÷ 0,5 =$',points:10,author:'М 1',},
{id:101102032,t_lessonId:102,type:'ASSIST',order:101102032,question:'$ \\huge100 ÷ 0,5 =$',points:10,author:'М 1',},
{id:101102033,t_lessonId:102,type:'ASSIST',order:101102033,question:'$ \\huge40 ÷ 0,5 =$',points:10,author:'М 1',},
{id:101102034,t_lessonId:102,type:'ASSIST',order:101102034,question:'$ \\huge80 ÷ 0,5 =$',points:10,author:'М 1',},
{id:101102035,t_lessonId:102,type:'ASSIST',order:101102035,question:'$ \\huge50 ÷ 0,5 =$',points:10,author:'М 1',},
{id:101102036,t_lessonId:102,type:'ASSIST',order:101102036,question:'$ \\huge20 ÷ 0,25 =$',points:10,author:'М 1',},
{id:101102037,t_lessonId:102,type:'ASSIST',order:101102037,question:'$ \\huge100 ÷ 0,25 =$',points:10,author:'М 1',},
{id:101102038,t_lessonId:102,type:'ASSIST',order:101102038,question:'$ \\huge40 ÷ 0,25 =$',points:10,author:'М 1',},
{id:101102039,t_lessonId:102,type:'ASSIST',order:101102039,question:'$ \\huge80 ÷ 0,25 =$',points:10,author:'М 1',},
{id:101102040,t_lessonId:102,type:'ASSIST',order:101102040,question:'$ \\huge24 ÷ 0,25 =$',points:10,author:'М 1',},
{id:101102041,t_lessonId:102,type:'ASSIST',order:101102041,question:'$ \\huge20 ÷ 0,125 =$',points:10,author:'М 1',},
{id:101102042,t_lessonId:102,type:'ASSIST',order:101102042,question:'$ \\huge100 ÷ 0,125 =$',points:10,author:'М 1',},
{id:101102043,t_lessonId:102,type:'ASSIST',order:101102043,question:'$ \\huge40 ÷ 0,125 =$',points:10,author:'М 1',},
{id:101102044,t_lessonId:102,type:'ASSIST',order:101102044,question:'$ \\huge80 ÷ 0,125 =$',points:10,author:'М 1',},
{id:101102045,t_lessonId:102,type:'ASSIST',order:101102045,question:'$ \\huge15 ÷ 0,125 =$',points:10,author:'М 1',},
{id:101102046,t_lessonId:102,type:'ASSIST',order:101102046,question:'$ \\huge20 ÷ 0,2 =$',points:10,author:'М 1',},
{id:101102047,t_lessonId:102,type:'ASSIST',order:101102047,question:'$ \\huge100 ÷ 0,2 =$',points:10,author:'М 1',},
{id:101102048,t_lessonId:102,type:'ASSIST',order:101102048,question:'$ \\huge40 ÷ 0,2 =$',points:10,author:'М 1',},
{id:101102049,t_lessonId:102,type:'ASSIST',order:101102049,question:'$ \\huge80 ÷ 0,2 =$',points:10,author:'М 1',},
{id:101102050,t_lessonId:102,type:'ASSIST',order:101102050,question:'$ \\huge24 ÷ 0,2 =$',points:10,author:'М 1',},
{id:101102051,t_lessonId:102,type:'ASSIST',order:101102051,question:'$ \\huge 30 ÷ 0,375 =$',points:10,author:'М 1',},
{id:101102052,t_lessonId:102,type:'ASSIST',order:101102052,question:'$ \\huge 120 ÷ 0,375 =$',points:10,author:'М 1',},
{id:101102053,t_lessonId:102,type:'ASSIST',order:101102053,question:'$ \\huge 60 ÷ 0,375 =$',points:10,author:'М 1',},
{id:101102054,t_lessonId:102,type:'ASSIST',order:101102054,question:'$ \\huge 24 ÷ 0,375 =$',points:10,author:'М 1',},
{id:101102055,t_lessonId:102,type:'ASSIST',order:101102055,question:'$ \\huge 12 ÷ 0,375 =$',points:10,author:'М 1',},
{id:101102056,t_lessonId:102,type:'ASSIST',order:101102056,question:'$ \\huge 21 ÷ 0,375 =$',points:10,author:'М 1',},
{id:101102057,t_lessonId:102,type:'ASSIST',order:101102057,question:'$ \\huge 32 * 0,375 =$',points:10,author:'М 1',},
{id:101102058,t_lessonId:102,type:'ASSIST',order:101102058,question:'$ \\huge 120 * 0,375 =$',points:10,author:'М 1',},
{id:101102059,t_lessonId:102,type:'ASSIST',order:101102059,question:'$ \\huge 64 * 0,375 =$',points:10,author:'М 1',},
{id:101102060,t_lessonId:102,type:'ASSIST',order:101102060,question:'$ \\huge 24 * 0,375 =$',points:10,author:'М 1',},
{id:101102061,t_lessonId:102,type:'ASSIST',order:101102061,question:'$ \\huge 8 * 0,375 =$',points:10,author:'М 1',},
{id:101102062,t_lessonId:102,type:'ASSIST',order:101102062,question:'$ \\huge 40 * 0,375 =$',points:10,author:'М 1',},
{id:102103001,t_lessonId:103,type:'ASSIST',order:102103001,question:'В детский дом была доставлена гуманитарная помощь - контейнер с шоколадом. Если каждому ребенку дать по три плитки шоколада, то останется 24 плитки, а если каждому ребенку дать по 4 плитки, то не хватит 28 плиток. Сколько детей в детском доме и сколько плиток шоколада было в контейнере?',points:15,author:'М 1',},
{id:102103002,t_lessonId:103,type:'ASSIST',order:102103002,question:'В двух овощехранилищах было 540 т картофеля. Когда в одно овощехранилище добавили 70 т, а из другого вывезли 50 т, то в первом овощехранилище картофеля стало в 4 раза больше, чем во втором. Определите, в каком хранилище было больше картофеля и на сколько.',points:15,author:'М 1',},
{id:102103003,t_lessonId:103,type:'ASSIST',order:102103003,question:'В двух селах было 900 жителей. Через год число жителей в первом селе уменьшилось на 10%, а во втором уменьшилось на 30%. В результате в этих двух селах стало 740 жителей. Сколько жителей было в каждом селе первоначально?',points:15,author:'М 1',},
{id:102103004,t_lessonId:103,type:'ASSIST',order:102103004,question:'В первый день фермер продал 20% привезенной картошки, во второй 3/4 остатка, а в третий день продал оставшиеся 120 кг. Сколько картошки привёз фермер на продажу? Сколько картошки продал фермер во второй день?',points:15,author:'М 1',},
{id:102103005,t_lessonId:103,type:'ASSIST',order:102103005,question:'В двух селах было 800 жителей. Через год в одном селе число жителей уменьшилось на 10 %, а в другом увеличилось на 10%. В результате общее число жителей в двух селах увеличилось на 10 человек. Сколько жителей было в каждом селе первоначально?',points:15,author:'М 1',},
{id:102103006,t_lessonId:103,type:'ASSIST',order:102103006,question:'Объемы ежегодной добычи нефти первой, второй и третьей скважинами относятся как 7:6:5. Планируется уменьшить годовую добычу нефти из первой скважины на 4%, а из второй уменьшить на 2%. На сколько процентов нужно увеличить годовую добычу нефти из третьей скважины, чтобы суммарный объем добываемый за год нефти не изменился и был равен 1800 тыс. тонн?',points:15,author:'М 1',},
{id:102103007,t_lessonId:103,type:'ASSIST',order:102103007,question:'Объемы ежегодной добычи нефти первой, второй и третьей скважинами относятся как 6:7:10. Планируется уменьшить годовую добычу нефти из первой скважины на10%, из второй уменьшить на 10%. На сколько процентов нужно увеличить годовую добычу нефти из третьей скважины, чтобы суммарный объем, добываемой за год нефти не изменился и был равен 2300 тыс. тонн?',points:15,author:'М 1',},
{id:102104001,t_lessonId:104,type:'ASSIST',order:102104001,question:'В детский дом была доставлена гуманитарная помощь - контейнер с шоколадом. Если каждому ребенку дать по три плитки шоколада, то останется 24 плитки, а если каждому ребенку дать по 4 плитки, то не хватит 28 плиток. Сколько детей в детском доме и сколько плиток шоколада было в контейнере?',points:15,author:'М 1',},
{id:102104002,t_lessonId:104,type:'ASSIST',order:102104002,question:'В двух овощехранилищах было 540 т картофеля. Когда в одно овощехранилище добавили 70 т, а из другого вывезли 50 т, то в первом овощехранилище картофеля стало в 4 раза больше, чем во втором. Определите, в каком хранилище было больше картофеля и на сколько.',points:15,author:'М 1',},
{id:102104003,t_lessonId:104,type:'ASSIST',order:102104003,question:'В двух селах было 900 жителей. Через год число жителей в первом селе уменьшилось на 10%, а во втором уменьшилось на 30%. В результате в этих двух селах стало 740 жителей. Сколько жителей было в каждом селе первоначально?',points:15,author:'М 1',},
{id:102104004,t_lessonId:104,type:'ASSIST',order:102104004,question:'В первый день фермер продал 20% привезенной картошки, во второй 3/4 остатка, а в третий день продал оставшиеся 120 кг. Сколько картошки привёз фермер на продажу? Сколько картошки продал фермер во второй день?',points:15,author:'М 1',},
{id:102104005,t_lessonId:104,type:'ASSIST',order:102104005,question:'В двух селах было 800 жителей. Через год в одном селе число жителей уменьшилось на 10 %, а в другом увеличилось на 10%. В результате общее число жителей в двух селах увеличилось на 10 человек. Сколько жителей было в каждом селе первоначально?',points:15,author:'М 1',},
{id:102104006,t_lessonId:104,type:'ASSIST',order:102104006,question:'Объемы ежегодной добычи нефти первой, второй и третьей скважинами относятся как 7:6:5. Планируется уменьшить годовую добычу нефти из первой скважины на 4%, а из второй уменьшить на 2%. На сколько процентов нужно увеличить годовую добычу нефти из третьей скважины, чтобы суммарный объем добываемый за год нефти не изменился и был равен 1800 тыс. тонн?',points:15,author:'М 1',},
{id:102104007,t_lessonId:104,type:'ASSIST',order:102104007,question:'Объемы ежегодной добычи нефти первой, второй и третьей скважинами относятся как 6:7:10. Планируется уменьшить годовую добычу нефти из первой скважины на10%, из второй уменьшить на 10%. На сколько процентов нужно увеличить годовую добычу нефти из третьей скважины, чтобы суммарный объем, добываемой за год нефти не изменился и был равен 2300 тыс. тонн?',points:15,author:'М 1',},]);








await db.insert(schema.t_challengeOptions).values([{t_challengeId:101101001,correct:true,text:'$ \\huge  \\frac{a}{c} $'},{t_challengeId:101101001,correct:false,text:'$ \\huge  \\frac{c}{a} $'},{t_challengeId:101101001,correct:false,text:'$ \\huge  c \\cdot a $'},{t_challengeId:101101001,correct:false,text:'$ \\huge  c + a $'},{t_challengeId:101101001,correct:false,text:'$ \\huge  c - a $'},{t_challengeId:101101001,correct:false,text:'$ \\huge  a - c $'},
{t_challengeId:101101002,correct:true,text:'$ \\huge b \\cdot c $'},{t_challengeId:101101002,correct:false,text:'$ \\huge  \\frac{b}{c} $'},{t_challengeId:101101002,correct:false,text:'$ \\huge  \\frac{c}{a} $'},{t_challengeId:101101002,correct:false,text:'$ \\huge  c + a $'},{t_challengeId:101101002,correct:false,text:'$ \\huge  c - a $'},{t_challengeId:101101002,correct:false,text:'$ \\huge  a - c $'},
{t_challengeId:101101003,correct:true,text:'$ \\huge  a \\cdot c $'},{t_challengeId:101101003,correct:false,text:'$ \\huge  \\frac{c}{a} $'},{t_challengeId:101101003,correct:false,text:'$ \\huge  \\frac{a}{c} $'},{t_challengeId:101101003,correct:false,text:'$ \\huge  c + a $'},{t_challengeId:101101003,correct:false,text:'$ \\huge  c - a $'},{t_challengeId:101101003,correct:false,text:'$ \\huge  a - c $'},
{t_challengeId:101101004,correct:true,text:'$ \\huge  \\frac{b}{a} $'},{t_challengeId:101101004,correct:false,text:'$ \\huge  \\frac{a}{b} $'},{t_challengeId:101101004,correct:false,text:'$ \\huge  b \\cdot a $'},{t_challengeId:101101004,correct:false,text:'$ \\huge  b + a $'},{t_challengeId:101101004,correct:false,text:'$ \\huge  b - a $'},{t_challengeId:101101004,correct:false,text:'$ \\huge  a - b $'},
{t_challengeId:101101005,correct:true,text:'$ \\huge  \\frac{a \\cdot b }{d} $'},{t_challengeId:101101005,correct:false,text:'$ \\huge  \\frac{a \\cdot d }{b} $'},{t_challengeId:101101005,correct:false,text:'$ \\huge  \\frac{d \\cdot b }{a} $'},{t_challengeId:101101005,correct:false,text:'$ \\huge  \\frac{a}{d \\cdot b } $'},{t_challengeId:101101005,correct:false,text:'$ \\huge  \\frac{b}{d \\cdot a } $'},{t_challengeId:101101005,correct:false,text:'$ \\huge  \\frac{d}{b \\cdot a } $'},
{t_challengeId:101101006,correct:true,text:'$ \\huge  \\frac{c \\cdot d }{a} $'},{t_challengeId:101101006,correct:false,text:'$ \\huge  \\frac{a \\cdot c }{d} $'},{t_challengeId:101101006,correct:false,text:'$ \\huge  \\frac{d \\cdot a }{d} $'},{t_challengeId:101101006,correct:false,text:'$ \\huge  \\frac{a}{c \\cdot d } $'},{t_challengeId:101101006,correct:false,text:'$ \\huge  \\frac{d}{c \\cdot a } $'},{t_challengeId:101101006,correct:false,text:'$ \\huge  \\frac{c}{d \\cdot a } $'},
{t_challengeId:101101007,correct:true,text:'$ \\huge  \\frac{c \\cdot d }{b} $'},{t_challengeId:101101007,correct:false,text:'$ \\huge  \\frac{b \\cdot c }{d} $'},{t_challengeId:101101007,correct:false,text:'$ \\huge  \\frac{d \\cdot a }{d} $'},{t_challengeId:101101007,correct:false,text:'$ \\huge  \\frac{b}{c \\cdot d } $'},{t_challengeId:101101007,correct:false,text:'$ \\huge  \\frac{d}{c \\cdot b } $'},{t_challengeId:101101007,correct:false,text:'$ \\huge  \\frac{c}{d \\cdot b } $'},
{t_challengeId:101101008,correct:true,text:'$ \\huge  \\frac{a \\cdot b }{c} $'},{t_challengeId:101101008,correct:false,text:'$ \\huge  \\frac{c \\cdot a }{b} $'},{t_challengeId:101101008,correct:false,text:'$ \\huge  \\frac{c \\cdot b }{a} $'},{t_challengeId:101101008,correct:false,text:'$ \\huge  \\frac{a}{b \\cdot c } $'},{t_challengeId:101101008,correct:false,text:'$ \\huge  \\frac{b}{c \\cdot a } $'},{t_challengeId:101101008,correct:false,text:'$ \\huge  \\frac{c}{a \\cdot b } $'},
{t_challengeId:101101009,correct:true,text:'$ \\huge  \\frac{x \\cdot b }{7} $'},{t_challengeId:101101009,correct:false,text:'$ \\huge  \\frac{7 \\cdot x }{b} $'},{t_challengeId:101101009,correct:false,text:'$ \\huge  \\frac{7 \\cdot b }{x} $'},{t_challengeId:101101009,correct:false,text:'$ \\huge  \\frac{b}{7 \\cdot x } $'},{t_challengeId:101101009,correct:false,text:'$ \\huge  \\frac{7}{x \\cdot b } $'},{t_challengeId:101101009,correct:false,text:'$ \\huge  \\frac{x}{7 \\cdot b } $'},
{t_challengeId:101101010,correct:true,text:'$ \\huge  \\frac{7 \\cdot c }{b} $'},{t_challengeId:101101010,correct:false,text:'$ \\huge  \\frac{7 \\cdot b }{c} $'},{t_challengeId:101101010,correct:false,text:'$ \\huge  \\frac{c \\cdot b }{7} $'},{t_challengeId:101101010,correct:false,text:'$ \\huge  \\frac{b}{7 \\cdot c } $'},{t_challengeId:101101010,correct:false,text:'$ \\huge  \\frac{7}{c \\cdot b } $'},{t_challengeId:101101010,correct:false,text:'$ \\huge  \\frac{c}{7 \\cdot b } $'},
{t_challengeId:101101011,correct:true,text:'$ \\huge  \\frac{7 \\cdot c }{x} $'},{t_challengeId:101101011,correct:false,text:'$ \\huge  \\frac{7 \\cdot x }{c} $'},{t_challengeId:101101011,correct:false,text:'$ \\huge  \\frac{c \\cdot x }{7} $'},{t_challengeId:101101011,correct:false,text:'$ \\huge  \\frac{x}{7 \\cdot c } $'},{t_challengeId:101101011,correct:false,text:'$ \\huge  \\frac{7}{c \\cdot x } $'},{t_challengeId:101101011,correct:false,text:'$ \\huge  \\frac{c}{7 \\cdot x } $'},
{t_challengeId:101102001,correct:true,text:'15'},{t_challengeId:101102001,correct:false,text:'10'},{t_challengeId:101102001,correct:false,text:'8'},{t_challengeId:101102001,correct:false,text:'12'},{t_challengeId:101102001,correct:false,text:'16'},{t_challengeId:101102001,correct:false,text:'4'},
{t_challengeId:101102002,correct:true,text:'90'},{t_challengeId:101102002,correct:false,text:'75'},{t_challengeId:101102002,correct:false,text:'80'},{t_challengeId:101102002,correct:false,text:'60'},{t_challengeId:101102002,correct:false,text:'90'},{t_challengeId:101102002,correct:false,text:'65'},
{t_challengeId:101102003,correct:true,text:'30'},{t_challengeId:101102003,correct:false,text:'20'},{t_challengeId:101102003,correct:false,text:'35'},{t_challengeId:101102003,correct:false,text:'40'},{t_challengeId:101102003,correct:false,text:'25'},{t_challengeId:101102003,correct:false,text:'60'},
{t_challengeId:101102004,correct:true,text:'60'},{t_challengeId:101102004,correct:false,text:'50'},{t_challengeId:101102004,correct:false,text:'40'},{t_challengeId:101102004,correct:false,text:'10'},{t_challengeId:101102004,correct:false,text:'20'},{t_challengeId:101102004,correct:false,text:'16'},
{t_challengeId:101102005,correct:true,text:'18'},{t_challengeId:101102005,correct:false,text:'16'},{t_challengeId:101102005,correct:false,text:'12'},{t_challengeId:101102005,correct:false,text:'4'},{t_challengeId:101102005,correct:false,text:'8'},{t_challengeId:101102005,correct:false,text:'1'},
{t_challengeId:101102006,correct:true,text:'10'},{t_challengeId:101102006,correct:false,text:'8'},{t_challengeId:101102006,correct:false,text:'5'},{t_challengeId:101102006,correct:false,text:'12'},{t_challengeId:101102006,correct:false,text:'9'},{t_challengeId:101102006,correct:false,text:'6'},
{t_challengeId:101102007,correct:true,text:'50'},{t_challengeId:101102007,correct:false,text:'40'},{t_challengeId:101102007,correct:false,text:'60'},{t_challengeId:101102007,correct:false,text:'45'},{t_challengeId:101102007,correct:false,text:'55'},{t_challengeId:101102007,correct:false,text:'58'},
{t_challengeId:101102008,correct:true,text:'20'},{t_challengeId:101102008,correct:false,text:'35'},{t_challengeId:101102008,correct:false,text:'25'},{t_challengeId:101102008,correct:false,text:'30'},{t_challengeId:101102008,correct:false,text:'18'},{t_challengeId:101102008,correct:false,text:'22'},
{t_challengeId:101102009,correct:true,text:'40'},{t_challengeId:101102009,correct:false,text:'45'},{t_challengeId:101102009,correct:false,text:'42'},{t_challengeId:101102009,correct:false,text:'38'},{t_challengeId:101102009,correct:false,text:'37'},{t_challengeId:101102009,correct:false,text:'50'},
{t_challengeId:101102010,correct:true,text:'44'},{t_challengeId:101102010,correct:false,text:'22'},{t_challengeId:101102010,correct:false,text:'11'},{t_challengeId:101102010,correct:false,text:'55'},{t_challengeId:101102010,correct:false,text:'33'},{t_challengeId:101102010,correct:false,text:'77'},
{t_challengeId:101102011,correct:true,text:'5'},{t_challengeId:101102011,correct:false,text:'4'},{t_challengeId:101102011,correct:false,text:'6'},{t_challengeId:101102011,correct:false,text:'7'},{t_challengeId:101102011,correct:false,text:'3'},{t_challengeId:101102011,correct:false,text:'8'},
{t_challengeId:101102012,correct:true,text:'30'},{t_challengeId:101102012,correct:false,text:'20'},{t_challengeId:101102012,correct:false,text:'30'},{t_challengeId:101102012,correct:false,text:'35'},{t_challengeId:101102012,correct:false,text:'15'},{t_challengeId:101102012,correct:false,text:'22'},
{t_challengeId:101102013,correct:true,text:'10'},{t_challengeId:101102013,correct:false,text:'8'},{t_challengeId:101102013,correct:false,text:'12'},{t_challengeId:101102013,correct:false,text:'6'},{t_challengeId:101102013,correct:false,text:'15'},{t_challengeId:101102013,correct:false,text:'11'},
{t_challengeId:101102014,correct:true,text:'20'},{t_challengeId:101102014,correct:false,text:'1'},{t_challengeId:101102014,correct:false,text:'18'},{t_challengeId:101102014,correct:false,text:'15'},{t_challengeId:101102014,correct:false,text:'25'},{t_challengeId:101102014,correct:false,text:'10'},
{t_challengeId:101102015,correct:true,text:'6'},{t_challengeId:101102015,correct:false,text:'5'},{t_challengeId:101102015,correct:false,text:'7'},{t_challengeId:101102015,correct:false,text:'8'},{t_challengeId:101102015,correct:false,text:'9'},{t_challengeId:101102015,correct:false,text:'4'},
{t_challengeId:101102016,correct:true,text:'3'},{t_challengeId:101102016,correct:false,text:'1'},{t_challengeId:101102016,correct:false,text:'4'},{t_challengeId:101102016,correct:false,text:'8'},{t_challengeId:101102016,correct:false,text:'12'},{t_challengeId:101102016,correct:false,text:'6'},
{t_challengeId:101102017,correct:true,text:'20'},{t_challengeId:101102017,correct:false,text:'15'},{t_challengeId:101102017,correct:false,text:'10'},{t_challengeId:101102017,correct:false,text:'16'},{t_challengeId:101102017,correct:false,text:'12'},{t_challengeId:101102017,correct:false,text:'14'},
{t_challengeId:101102018,correct:true,text:'5'},{t_challengeId:101102018,correct:false,text:'4'},{t_challengeId:101102018,correct:false,text:'6'},{t_challengeId:101102018,correct:false,text:'3'},{t_challengeId:101102018,correct:false,text:'7'},{t_challengeId:101102018,correct:false,text:'8'},
{t_challengeId:101102019,correct:true,text:'10'},{t_challengeId:101102019,correct:false,text:'12'},{t_challengeId:101102019,correct:false,text:'8'},{t_challengeId:101102019,correct:false,text:'9'},{t_challengeId:101102019,correct:false,text:'11'},{t_challengeId:101102019,correct:false,text:'15'},
{t_challengeId:101102020,correct:true,text:'15'},{t_challengeId:101102020,correct:false,text:'10'},{t_challengeId:101102020,correct:false,text:'20'},{t_challengeId:101102020,correct:false,text:'25'},{t_challengeId:101102020,correct:false,text:'30'},{t_challengeId:101102020,correct:false,text:'40'},
{t_challengeId:101102021,correct:true,text:'4'},{t_challengeId:101102021,correct:false,text:'5'},{t_challengeId:101102021,correct:false,text:'3'},{t_challengeId:101102021,correct:false,text:'6'},{t_challengeId:101102021,correct:false,text:'2'},{t_challengeId:101102021,correct:false,text:'7'},
{t_challengeId:101102022,correct:true,text:'30'},{t_challengeId:101102022,correct:false,text:'20'},{t_challengeId:101102022,correct:false,text:'18'},{t_challengeId:101102022,correct:false,text:'25'},{t_challengeId:101102022,correct:false,text:'40'},{t_challengeId:101102022,correct:false,text:'75'},
{t_challengeId:101102023,correct:true,text:'8'},{t_challengeId:101102023,correct:false,text:'6'},{t_challengeId:101102023,correct:false,text:'10'},{t_challengeId:101102023,correct:false,text:'12'},{t_challengeId:101102023,correct:false,text:'4'},{t_challengeId:101102023,correct:false,text:'1'},
{t_challengeId:101102024,correct:true,text:'16'},{t_challengeId:101102024,correct:false,text:'15'},{t_challengeId:101102024,correct:false,text:'10'},{t_challengeId:101102024,correct:false,text:'20'},{t_challengeId:101102024,correct:false,text:'4'},{t_challengeId:101102024,correct:false,text:'8'},
{t_challengeId:101102025,correct:true,text:'5'},{t_challengeId:101102025,correct:false,text:'5'},{t_challengeId:101102025,correct:false,text:'10'},{t_challengeId:101102025,correct:false,text:'20'},{t_challengeId:101102025,correct:false,text:'1'},{t_challengeId:101102025,correct:false,text:'8'},
{t_challengeId:101102026,correct:true,text:'28'},{t_challengeId:101102026,correct:false,text:'25'},{t_challengeId:101102026,correct:false,text:'30'},{t_challengeId:101102026,correct:false,text:'21'},{t_challengeId:101102026,correct:false,text:'35'},{t_challengeId:101102026,correct:false,text:'40'},
{t_challengeId:101102027,correct:true,text:'160'},{t_challengeId:101102027,correct:false,text:'120'},{t_challengeId:101102027,correct:false,text:'140'},{t_challengeId:101102027,correct:false,text:'150'},{t_challengeId:101102027,correct:false,text:'125'},{t_challengeId:101102027,correct:false,text:'210'},
{t_challengeId:101102028,correct:true,text:'80'},{t_challengeId:101102028,correct:false,text:'50'},{t_challengeId:101102028,correct:false,text:'40'},{t_challengeId:101102028,correct:false,text:'120'},{t_challengeId:101102028,correct:false,text:'150'},{t_challengeId:101102028,correct:false,text:'90'},
{t_challengeId:101102029,correct:true,text:'120'},{t_challengeId:101102029,correct:false,text:'50'},{t_challengeId:101102029,correct:false,text:'40'},{t_challengeId:101102029,correct:false,text:'80'},{t_challengeId:101102029,correct:false,text:'150'},{t_challengeId:101102029,correct:false,text:'90'},
{t_challengeId:101102030,correct:true,text:'32'},{t_challengeId:101102030,correct:false,text:'64'},{t_challengeId:101102030,correct:false,text:'28'},{t_challengeId:101102030,correct:false,text:'42'},{t_challengeId:101102030,correct:false,text:'56'},{t_challengeId:101102030,correct:false,text:'12'},
{t_challengeId:101102031,correct:true,text:'40'},{t_challengeId:101102031,correct:false,text:'20'},{t_challengeId:101102031,correct:false,text:'60'},{t_challengeId:101102031,correct:false,text:'120'},{t_challengeId:101102031,correct:false,text:'200'},{t_challengeId:101102031,correct:false,text:'100'},
{t_challengeId:101102032,correct:true,text:'200'},{t_challengeId:101102032,correct:false,text:'20'},{t_challengeId:101102032,correct:false,text:'60'},{t_challengeId:101102032,correct:false,text:'120'},{t_challengeId:101102032,correct:false,text:'80'},{t_challengeId:101102032,correct:false,text:'100'},
{t_challengeId:101102033,correct:true,text:'80'},{t_challengeId:101102033,correct:false,text:'160'},{t_challengeId:101102033,correct:false,text:'60'},{t_challengeId:101102033,correct:false,text:'120'},{t_challengeId:101102033,correct:false,text:'40'},{t_challengeId:101102033,correct:false,text:'100'},
{t_challengeId:101102034,correct:true,text:'160'},{t_challengeId:101102034,correct:false,text:'20'},{t_challengeId:101102034,correct:false,text:'60'},{t_challengeId:101102034,correct:false,text:'120'},{t_challengeId:101102034,correct:false,text:'40'},{t_challengeId:101102034,correct:false,text:'80'},
{t_challengeId:101102035,correct:true,text:'100'},{t_challengeId:101102035,correct:false,text:'20'},{t_challengeId:101102035,correct:false,text:'60'},{t_challengeId:101102035,correct:false,text:'160'},{t_challengeId:101102035,correct:false,text:'40'},{t_challengeId:101102035,correct:false,text:'80'},
{t_challengeId:101102036,correct:true,text:'80'},{t_challengeId:101102036,correct:false,text:'20'},{t_challengeId:101102036,correct:false,text:'60'},{t_challengeId:101102036,correct:false,text:'160'},{t_challengeId:101102036,correct:false,text:'40'},{t_challengeId:101102036,correct:false,text:'100'},
{t_challengeId:101102037,correct:true,text:'400'},{t_challengeId:101102037,correct:false,text:'20'},{t_challengeId:101102037,correct:false,text:'80'},{t_challengeId:101102037,correct:false,text:'200'},{t_challengeId:101102037,correct:false,text:'40'},{t_challengeId:101102037,correct:false,text:'100'},
{t_challengeId:101102038,correct:true,text:'160'},{t_challengeId:101102038,correct:false,text:'20'},{t_challengeId:101102038,correct:false,text:'80'},{t_challengeId:101102038,correct:false,text:'200'},{t_challengeId:101102038,correct:false,text:'40'},{t_challengeId:101102038,correct:false,text:'100'},
{t_challengeId:101102039,correct:true,text:'320'},{t_challengeId:101102039,correct:false,text:'20'},{t_challengeId:101102039,correct:false,text:'60'},{t_challengeId:101102039,correct:false,text:'200'},{t_challengeId:101102039,correct:false,text:'40'},{t_challengeId:101102039,correct:false,text:'160'},
{t_challengeId:101102040,correct:true,text:'96'},{t_challengeId:101102040,correct:false,text:'48'},{t_challengeId:101102040,correct:false,text:'32'},{t_challengeId:101102040,correct:false,text:'16'},{t_challengeId:101102040,correct:false,text:'8'},{t_challengeId:101102040,correct:false,text:'6'},
{t_challengeId:101102041,correct:true,text:'160'},{t_challengeId:101102041,correct:false,text:'20'},{t_challengeId:101102041,correct:false,text:'60'},{t_challengeId:101102041,correct:false,text:'200'},{t_challengeId:101102041,correct:false,text:'40'},{t_challengeId:101102041,correct:false,text:'100'},
{t_challengeId:101102042,correct:true,text:'800'},{t_challengeId:101102042,correct:false,text:'500'},{t_challengeId:101102042,correct:false,text:'60'},{t_challengeId:101102042,correct:false,text:'200'},{t_challengeId:101102042,correct:false,text:'40'},{t_challengeId:101102042,correct:false,text:'100'},
{t_challengeId:101102043,correct:true,text:'320'},{t_challengeId:101102043,correct:false,text:'800'},{t_challengeId:101102043,correct:false,text:'60'},{t_challengeId:101102043,correct:false,text:'200'},{t_challengeId:101102043,correct:false,text:'640'},{t_challengeId:101102043,correct:false,text:'100'},
{t_challengeId:101102044,correct:true,text:'640'},{t_challengeId:101102044,correct:false,text:'800'},{t_challengeId:101102044,correct:false,text:'600'},{t_challengeId:101102044,correct:false,text:'240'},{t_challengeId:101102044,correct:false,text:'300'},{t_challengeId:101102044,correct:false,text:'100'},
{t_challengeId:101102045,correct:true,text:'120'},{t_challengeId:101102045,correct:false,text:'240'},{t_challengeId:101102045,correct:false,text:'360'},{t_challengeId:101102045,correct:false,text:'200'},{t_challengeId:101102045,correct:false,text:'180'},{t_challengeId:101102045,correct:false,text:'10'},
{t_challengeId:101102046,correct:true,text:'100'},{t_challengeId:101102046,correct:false,text:'50'},{t_challengeId:101102046,correct:false,text:'150'},{t_challengeId:101102046,correct:false,text:'250'},{t_challengeId:101102046,correct:false,text:'500'},{t_challengeId:101102046,correct:false,text:'10'},
{t_challengeId:101102047,correct:true,text:'500'},{t_challengeId:101102047,correct:false,text:'250'},{t_challengeId:101102047,correct:false,text:'100'},{t_challengeId:101102047,correct:false,text:'150'},{t_challengeId:101102047,correct:false,text:'250'},{t_challengeId:101102047,correct:false,text:'50'},
{t_challengeId:101102048,correct:true,text:'200'},{t_challengeId:101102048,correct:false,text:'250'},{t_challengeId:101102048,correct:false,text:'100'},{t_challengeId:101102048,correct:false,text:'150'},{t_challengeId:101102048,correct:false,text:'250'},{t_challengeId:101102048,correct:false,text:'50'},
{t_challengeId:101102049,correct:true,text:'400'},{t_challengeId:101102049,correct:false,text:'200'},{t_challengeId:101102049,correct:false,text:'250'},{t_challengeId:101102049,correct:false,text:'100'},{t_challengeId:101102049,correct:false,text:'600'},{t_challengeId:101102049,correct:false,text:'250'},
{t_challengeId:101102050,correct:true,text:'120'},{t_challengeId:101102050,correct:false,text:'12'},{t_challengeId:101102050,correct:false,text:'48'},{t_challengeId:101102050,correct:false,text:'6'},{t_challengeId:101102050,correct:false,text:'180'},{t_challengeId:101102050,correct:false,text:'240'},
{t_challengeId:101102051,correct:true,text:'80'},{t_challengeId:101102051,correct:false,text:'60'},{t_challengeId:101102051,correct:false,text:'120'},{t_challengeId:101102051,correct:false,text:'90'},{t_challengeId:101102051,correct:false,text:'160'},{t_challengeId:101102051,correct:false,text:'320'},
{t_challengeId:101102052,correct:true,text:'320'},{t_challengeId:101102052,correct:false,text:'80'},{t_challengeId:101102052,correct:false,text:'160'},{t_challengeId:101102052,correct:false,text:'120'},{t_challengeId:101102052,correct:false,text:'90'},{t_challengeId:101102052,correct:false,text:'40'},
{t_challengeId:101102053,correct:true,text:'160'},{t_challengeId:101102053,correct:false,text:'80'},{t_challengeId:101102053,correct:false,text:'60'},{t_challengeId:101102053,correct:false,text:'120'},{t_challengeId:101102053,correct:false,text:'90'},{t_challengeId:101102053,correct:false,text:'40'},
{t_challengeId:101102054,correct:true,text:'64'},{t_challengeId:101102054,correct:false,text:'16'},{t_challengeId:101102054,correct:false,text:'32'},{t_challengeId:101102054,correct:false,text:'24'},{t_challengeId:101102054,correct:false,text:'48'},{t_challengeId:101102054,correct:false,text:'128'},
{t_challengeId:101102055,correct:true,text:'32'},{t_challengeId:101102055,correct:false,text:'64'},{t_challengeId:101102055,correct:false,text:'56'},{t_challengeId:101102055,correct:false,text:'128'},{t_challengeId:101102055,correct:false,text:'24'},{t_challengeId:101102055,correct:false,text:'48'},
{t_challengeId:101102056,correct:true,text:'56'},{t_challengeId:101102056,correct:false,text:'32'},{t_challengeId:101102056,correct:false,text:'64'},{t_challengeId:101102056,correct:false,text:'48'},{t_challengeId:101102056,correct:false,text:'128'},{t_challengeId:101102056,correct:false,text:'24'},
{t_challengeId:101102057,correct:true,text:'16'},{t_challengeId:101102057,correct:false,text:'12'},{t_challengeId:101102057,correct:false,text:'24'},{t_challengeId:101102057,correct:false,text:'8'},{t_challengeId:101102057,correct:false,text:'4'},{t_challengeId:101102057,correct:false,text:'48'},
{t_challengeId:101102058,correct:true,text:'45'},{t_challengeId:101102058,correct:false,text:'15'},{t_challengeId:101102058,correct:false,text:'35'},{t_challengeId:101102058,correct:false,text:'40'},{t_challengeId:101102058,correct:false,text:'80'},{t_challengeId:101102058,correct:false,text:'20'},
{t_challengeId:101102059,correct:true,text:'24'},{t_challengeId:101102059,correct:false,text:'16'},{t_challengeId:101102059,correct:false,text:'12'},{t_challengeId:101102059,correct:false,text:'48'},{t_challengeId:101102059,correct:false,text:'8'},{t_challengeId:101102059,correct:false,text:'4'},
{t_challengeId:101102060,correct:true,text:'9'},{t_challengeId:101102060,correct:false,text:'6'},{t_challengeId:101102060,correct:false,text:'12'},{t_challengeId:101102060,correct:false,text:'18'},{t_challengeId:101102060,correct:false,text:'1'},{t_challengeId:101102060,correct:false,text:'3'},
{t_challengeId:101102061,correct:true,text:'3'},{t_challengeId:101102061,correct:false,text:'9'},{t_challengeId:101102061,correct:false,text:'6'},{t_challengeId:101102061,correct:false,text:'12'},{t_challengeId:101102061,correct:false,text:'18'},{t_challengeId:101102061,correct:false,text:'1'},
{t_challengeId:101102062,correct:true,text:'15'},{t_challengeId:101102062,correct:false,text:'5'},{t_challengeId:101102062,correct:false,text:'30'},{t_challengeId:101102062,correct:false,text:'20'},{t_challengeId:101102062,correct:false,text:'25'},{t_challengeId:101102062,correct:false,text:'35'},
{t_challengeId:102103001,correct:true,text:'72; 288 плиток'},{t_challengeId:102103001,correct:false,text:'70; 250 плиток'},{t_challengeId:102103001,correct:false,text:'75; 300 плиток'},{t_challengeId:102103001,correct:false,text:'80; 320 плиток'},{t_challengeId:102103001,correct:false,text:'65; 270 плиток'},{t_challengeId:102103001,correct:false,text:'60; 280 плиток'},
{t_challengeId:102103002,correct:true,text:'В первом на 70 т больше'},{t_challengeId:102103002,correct:false,text:'В первом на 60 т больше'},{t_challengeId:102103002,correct:false,text:'В первом на 80 т больше'},{t_challengeId:102103002,correct:false,text:'В первом на 90 т больше'},{t_challengeId:102103002,correct:false,text:'В первом на 100 т больше'},{t_challengeId:102103002,correct:false,text:'В первом на 110 т больше'},
{t_challengeId:102103003,correct:true,text:'В первом 600, во втором 300'},{t_challengeId:102103003,correct:false,text:'В первом 550, во втором 350'},{t_challengeId:102103003,correct:false,text:'В первом 650, во втором 250'},{t_challengeId:102103003,correct:false,text:'В первом 700, во втором 200'},{t_challengeId:102103003,correct:false,text:'В первом 600, во втором 400'},{t_challengeId:102103003,correct:false,text:'В первом 650, во втором 350'},
{t_challengeId:102103004,correct:true,text:'600 кг, 450 кг'},{t_challengeId:102103004,correct:false,text:'500 кг, 400 кг'},{t_challengeId:102103004,correct:false,text:'650 кг, 500 кг'},{t_challengeId:102103004,correct:false,text:'700 кг, 550 кг'},{t_challengeId:102103004,correct:false,text:'650 кг, 450 кг'},{t_challengeId:102103004,correct:false,text:'620 кг, 470 кг'},
{t_challengeId:102103005,correct:true,text:'В первом 400 , во втором  400'},{t_challengeId:102103005,correct:false,text:'В первом 450, во втором 350'},{t_challengeId:102103005,correct:false,text:'В первом 420, во втором 380'},{t_challengeId:102103005,correct:false,text:'В первом 450, во втором 450'},{t_challengeId:102103005,correct:false,text:'В первом 500, во втором 400'},{t_challengeId:102103005,correct:false,text:'В первом 400, во втором 450'},
{t_challengeId:102103006,correct:true,text:'3,75%'},{t_challengeId:102103006,correct:false,text:'2,50%'},{t_challengeId:102103006,correct:false,text:'4%'},{t_challengeId:102103006,correct:false,text:'3%'},{t_challengeId:102103006,correct:false,text:'3,20%'},{t_challengeId:102103006,correct:false,text:'4,50%'},
{t_challengeId:102103007,correct:true,text:'5,88%'},{t_challengeId:102103007,correct:false,text:'6,20%'},{t_challengeId:102103007,correct:false,text:'7%'},{t_challengeId:102103007,correct:false,text:'6,50%'},{t_challengeId:102103007,correct:false,text:'5,50%'},{t_challengeId:102103007,correct:false,text:'6%'},
{t_challengeId:102104001,correct:true,text:'72; 288 плиток'},{t_challengeId:102104001,correct:false,text:'70; 250 плиток'},{t_challengeId:102104001,correct:false,text:'75; 300 плиток'},{t_challengeId:102104001,correct:false,text:'80; 320 плиток'},{t_challengeId:102104001,correct:false,text:'65; 270 плиток'},{t_challengeId:102104001,correct:false,text:'60; 280 плиток'},
{t_challengeId:102104002,correct:true,text:'В первом на 70 т больше'},{t_challengeId:102104002,correct:false,text:'В первом на 60 т больше'},{t_challengeId:102104002,correct:false,text:'В первом на 80 т больше'},{t_challengeId:102104002,correct:false,text:'В первом на 90 т больше'},{t_challengeId:102104002,correct:false,text:'В первом на 100 т больше'},{t_challengeId:102104002,correct:false,text:'В первом на 110 т больше'},
{t_challengeId:102104003,correct:true,text:'В первом 600, во втором 300'},{t_challengeId:102104003,correct:false,text:'В первом 550, во втором 350'},{t_challengeId:102104003,correct:false,text:'В первом 650, во втором 250'},{t_challengeId:102104003,correct:false,text:'В первом 700, во втором 200'},{t_challengeId:102104003,correct:false,text:'В первом 600, во втором 400'},{t_challengeId:102104003,correct:false,text:'В первом 650, во втором 350'},
{t_challengeId:102104004,correct:true,text:'600 кг, 450 кг'},{t_challengeId:102104004,correct:false,text:'500 кг, 400 кг'},{t_challengeId:102104004,correct:false,text:'650 кг, 500 кг'},{t_challengeId:102104004,correct:false,text:'700 кг, 550 кг'},{t_challengeId:102104004,correct:false,text:'650 кг, 450 кг'},{t_challengeId:102104004,correct:false,text:'620 кг, 470 кг'},
{t_challengeId:102104005,correct:true,text:'В первом 400 , во втором  400'},{t_challengeId:102104005,correct:false,text:'В первом 450, во втором 350'},{t_challengeId:102104005,correct:false,text:'В первом 420, во втором 380'},{t_challengeId:102104005,correct:false,text:'В первом 450, во втором 450'},{t_challengeId:102104005,correct:false,text:'В первом 500, во втором 400'},{t_challengeId:102104005,correct:false,text:'В первом 400, во втором 450'},
{t_challengeId:102104006,correct:true,text:'3,75%'},{t_challengeId:102104006,correct:false,text:'2,50%'},{t_challengeId:102104006,correct:false,text:'4%'},{t_challengeId:102104006,correct:false,text:'3%'},{t_challengeId:102104006,correct:false,text:'3,20%'},{t_challengeId:102104006,correct:false,text:'4,50%'},
{t_challengeId:102104007,correct:true,text:'5,88%'},{t_challengeId:102104007,correct:false,text:'6,20%'},{t_challengeId:102104007,correct:false,text:'7%'},{t_challengeId:102104007,correct:false,text:'6,50%'},{t_challengeId:102104007,correct:false,text:'5,50%'},{t_challengeId:102104007,correct:false,text:'6%'},]);








		console.log('Seeding Finished');
	} catch (error) {
		console.error(error);
		throw new Error('Не получилось получить БД');
	}
};

main();
