import { neon } from '@neondatabase/serverless';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../db/schema';

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });
const main = async () => {
	try {
		console.log('Seeding Trainer DB Trainer Phys Form');

		// await db.delete(schema.t_courses);
		// await db.delete(schema.t_units);
		// await db.delete(schema.t_lessons);
		// await db.delete(schema.t_challenges);
		// await db.delete(schema.t_challengeOptions);
		// await db.delete(schema.challengeProgress);

		//тетрис

		// собирается фигурка из лего

		// ADD COURSES
		//
		// await db.insert(schema.courses).values([{id:1,title:'ЛНИП Физика 7',imageSrc:'lnip_phy_7.svg'},
		// {id:2,title:'ЛНИП Математика 7',imageSrc:'lnip_mat_7.svg'},
		// {id:3,title:'ЛНИП Математика 6',imageSrc:'lnip_mat_6.svg'},]);


		


		await db.insert(schema.t_courses).values([
			{id:2,title:'Тренажер Физика Формулы',imageSrc:'lnip_mat_6.svg'},
		]);











		await db.insert(schema.t_units).values([{id:201,t_courseId:2,title:'11 класс',description:'Описание 1',order:201,imageSrc:'LottieUnit1',},
		{id:202,t_courseId:2,title:'9 класс',description:'Описание 2',order:202,imageSrc:'LottieUnit2',},
		
		
		
		
		
		
		]);



		await db.insert(schema.t_lessons).values([{id:201,t_unitId:201,title:'Динамика',order:201,},
		{id:202,t_unitId:201,title:'Кинематика',order:202,},
		{id:203,t_unitId:202,title:'Электричество',order:203,},
		{id:204,t_unitId:202,title:'Нагрев',order:204,},
		

		
		]);




















		await db.insert(schema.t_challenges).values([{id:201201001,t_lessonId:201,type:'ASSIST',order:201201001,question:'Энергия $\\quad \\huge \\color{green} E_{кин}=? $',points:10,author:'Физика Формулы',},
{id:201201002,t_lessonId:201,type:'ASSIST',order:201201002,question:'Энергия $ \\quad \\huge \\color{green} E_{пот}=? $',points:10,author:'Физика Формулы',},
{id:201201003,t_lessonId:201,type:'ASSIST',order:201201003,question:'Энергия $ \\quad \\huge \\color{green} E_{пруж}=? $',points:10,author:'Физика Формулы',},
{id:201201004,t_lessonId:201,type:'ASSIST',order:201201004,question:'импульс $ \\quad \\huge \\color{green} p=? $',points:10,author:'Физика Формулы',},
{id:201201005,t_lessonId:201,type:'ASSIST',order:201201005,question:'давление $\\quad \\huge \\color{green} P=? $',points:10,author:'Физика Формулы',},
{id:201201006,t_lessonId:201,type:'ASSIST',order:201201006,question:'давление $ \\quad \\huge \\color{green} P=? $',points:10,author:'Физика Формулы',},
{id:201201007,t_lessonId:201,type:'ASSIST',order:201201007,question:'Сила $ \\quad \\huge \\color{green} F_{тяж}=? $',points:10,author:'Физика Формулы',},
{id:201201008,t_lessonId:201,type:'ASSIST',order:201201008,question:'Сила $ \\quad \\huge \\color{green} F_{Арх}=? $',points:10,author:'Физика Формулы',},
{id:201201009,t_lessonId:201,type:'ASSIST',order:201201009,question:'Сила $\\quad  \\huge \\color{green} F_{упр}=? $',points:10,author:'Физика Формулы',},
{id:201201010,t_lessonId:201,type:'ASSIST',order:201201010,question:'$ \\huge \\color{green} ЗСИ $',points:10,author:'Физика Формулы',},
{id:201201011,t_lessonId:201,type:'ASSIST',order:201201011,question:'$ \\huge \\color{green} ЗСЭ $',points:10,author:'Физика Формулы',},
{id:201201012,t_lessonId:201,type:'ASSIST',order:201201012,question:'2-ой закон Ньютона $\\quad \\huge \\color{green} F=? $',points:10,author:'Физика Формулы',},
{id:201201013,t_lessonId:201,type:'ASSIST',order:201201013,question:'Вес в лифте $\\uparrow \\quad \\huge \\color{green} P=? $',points:10,author:'Физика Формулы',},
{id:201201014,t_lessonId:201,type:'ASSIST',order:201201014,question:'Вес в лифте $\\downarrow \\quad \\huge \\color{green} P=? $',points:10,author:'Физика Формулы',},
{id:201202001,t_lessonId:202,type:'ASSIST',order:201202001,question:'Координата $ \\quad \\huge \\color{green} x=? $',points:10,author:'Физика Формулы',},
{id:201202002,t_lessonId:202,type:'ASSIST',order:201202002,question:'Ускорение $\\quad \\huge \\color{green} a=? $',points:10,author:'Физика Формулы',},
{id:201202003,t_lessonId:202,type:'ASSIST',order:201202003,question:'Путь $\\quad \\huge \\color{green} S=? $',points:10,author:'Физика Формулы',},
{id:201202004,t_lessonId:202,type:'ASSIST',order:201202004,question:'Частота, окружность $ \\quad \\huge \\color{green} \\nu=? $',points:10,author:'Физика Формулы',},
{id:201202005,t_lessonId:202,type:'ASSIST',order:201202005,question:'Ускорение, окружность $ \\quad \\huge \\color{green} a_{цс}=? $',points:10,author:'Физика Формулы',},
{id:201202006,t_lessonId:202,type:'ASSIST',order:201202006,question:'Ускорение, окружность  $ \\quad \\huge \\color{green} a_{цс}=? $',points:10,author:'Физика Формулы',},
{id:201202007,t_lessonId:202,type:'ASSIST',order:201202007,question:'Угл. скорость, окружность $ \\quad \\huge \\color{green} \\omega=? $',points:15,author:'Физика Формулы',},
{id:201202008,t_lessonId:202,type:'ASSIST',order:201202008,question:'Дальность броска $ \\quad \\huge \\color{green} L_{max}=? $',points:15,author:'Физика Формулы',},
{id:201202009,t_lessonId:202,type:'ASSIST',order:201202009,question:'Высота броска $ \\quad \\huge \\color{green} H_{max}=? $',points:15,author:'Физика Формулы',},
{id:201202010,t_lessonId:202,type:'ASSIST',order:201202010,question:'Угл. скорость, окружность $ \\quad \\huge \\color{green} \\omega=? $',points:15,author:'Физика Формулы',},
{id:202203001,t_lessonId:203,type:'ASSIST',order:202203001,question:'В детский дом была доставлена гуманитарная помощь - контейнер с шоколадом. Если каждому ребенку дать по три плитки шоколада, то останется 24 плитки, а если каждому ребенку дать по 4 плитки, то не хватит 28 плиток. Сколько детей в детском доме и сколько плиток шоколада было в контейнере?',points:15,author:'Физика Формулы',},
{id:202203002,t_lessonId:203,type:'ASSIST',order:202203002,question:'В двух овощехранилищах было 540 т картофеля. Когда в одно овощехранилище добавили 70 т, а из другого вывезли 50 т, то в первом овощехранилище картофеля стало в 4 раза больше, чем во втором. Определите, в каком хранилище было больше картофеля и на сколько.',points:15,author:'Физика Формулы',},
{id:202203003,t_lessonId:203,type:'ASSIST',order:202203003,question:'В двух селах было 900 жителей. Через год число жителей в первом селе уменьшилось на 10%, а во втором уменьшилось на 30%. В результате в этих двух селах стало 740 жителей. Сколько жителей было в каждом селе первоначально?',points:15,author:'Физика Формулы',},
{id:202203004,t_lessonId:203,type:'ASSIST',order:202203004,question:'В первый день фермер продал 20% привезенной картошки, во второй 3/4 остатка, а в третий день продал оставшиеся 120 кг. Сколько картошки привёз фермер на продажу? Сколько картошки продал фермер во второй день?',points:15,author:'Физика Формулы',},
{id:202203005,t_lessonId:203,type:'ASSIST',order:202203005,question:'В двух селах было 800 жителей. Через год в одном селе число жителей уменьшилось на 10 %, а в другом увеличилось на 10%. В результате общее число жителей в двух селах увеличилось на 10 человек. Сколько жителей было в каждом селе первоначально?',points:15,author:'Физика Формулы',},
{id:202203006,t_lessonId:203,type:'ASSIST',order:202203006,question:'Объемы ежегодной добычи нефти первой, второй и третьей скважинами относятся как 7:6:5. Планируется уменьшить годовую добычу нефти из первой скважины на 4%, а из второй уменьшить на 2%. На сколько процентов нужно увеличить годовую добычу нефти из третьей скважины, чтобы суммарный объем добываемый за год нефти не изменился и был равен 1800 тыс. тонн?',points:15,author:'Физика Формулы',},
{id:202203007,t_lessonId:203,type:'ASSIST',order:202203007,question:'Объемы ежегодной добычи нефти первой, второй и третьей скважинами относятся как 6:7:10. Планируется уменьшить годовую добычу нефти из первой скважины на10%, из второй уменьшить на 10%. На сколько процентов нужно увеличить годовую добычу нефти из третьей скважины, чтобы суммарный объем, добываемой за год нефти не изменился и был равен 2300 тыс. тонн?',points:15,author:'Физика Формулы',},
{id:202204001,t_lessonId:204,type:'ASSIST',order:202204001,question:'В детский дом была доставлена гуманитарная помощь - контейнер с шоколадом. Если каждому ребенку дать по три плитки шоколада, то останется 24 плитки, а если каждому ребенку дать по 4 плитки, то не хватит 28 плиток. Сколько детей в детском доме и сколько плиток шоколада было в контейнере?',points:15,author:'Физика Формулы',},
{id:202204002,t_lessonId:204,type:'ASSIST',order:202204002,question:'В двух овощехранилищах было 540 т картофеля. Когда в одно овощехранилище добавили 70 т, а из другого вывезли 50 т, то в первом овощехранилище картофеля стало в 4 раза больше, чем во втором. Определите, в каком хранилище было больше картофеля и на сколько.',points:15,author:'Физика Формулы',},
{id:202204003,t_lessonId:204,type:'ASSIST',order:202204003,question:'В двух селах было 900 жителей. Через год число жителей в первом селе уменьшилось на 10%, а во втором уменьшилось на 30%. В результате в этих двух селах стало 740 жителей. Сколько жителей было в каждом селе первоначально?',points:15,author:'Физика Формулы',},
{id:202204004,t_lessonId:204,type:'ASSIST',order:202204004,question:'В первый день фермер продал 20% привезенной картошки, во второй 3/4 остатка, а в третий день продал оставшиеся 120 кг. Сколько картошки привёз фермер на продажу? Сколько картошки продал фермер во второй день?',points:15,author:'Физика Формулы',},
{id:202204005,t_lessonId:204,type:'ASSIST',order:202204005,question:'В двух селах было 800 жителей. Через год в одном селе число жителей уменьшилось на 10 %, а в другом увеличилось на 10%. В результате общее число жителей в двух селах увеличилось на 10 человек. Сколько жителей было в каждом селе первоначально?',points:15,author:'Физика Формулы',},
{id:202204006,t_lessonId:204,type:'ASSIST',order:202204006,question:'Объемы ежегодной добычи нефти первой, второй и третьей скважинами относятся как 7:6:5. Планируется уменьшить годовую добычу нефти из первой скважины на 4%, а из второй уменьшить на 2%. На сколько процентов нужно увеличить годовую добычу нефти из третьей скважины, чтобы суммарный объем добываемый за год нефти не изменился и был равен 1800 тыс. тонн?',points:15,author:'Физика Формулы',},
{id:202204007,t_lessonId:204,type:'ASSIST',order:202204007,question:'Объемы ежегодной добычи нефти первой, второй и третьей скважинами относятся как 6:7:10. Планируется уменьшить годовую добычу нефти из первой скважины на10%, из второй уменьшить на 10%. На сколько процентов нужно увеличить годовую добычу нефти из третьей скважины, чтобы суммарный объем, добываемой за год нефти не изменился и был равен 2300 тыс. тонн?',points:15,author:'Физика Формулы',},
]);
await db.insert(schema.t_challengeOptions).values([{t_challengeId:201201001,correct:true,text:'$ \\huge \\frac{mv^{2}}{2}$'},{t_challengeId:201201001,correct:false,text:'$ \\huge mgh$'},{t_challengeId:201201001,correct:false,text:'$ \\huge \\frac{ k \\triangle x^{2}  }{2} $'},{t_challengeId:201201001,correct:false,text:'$ \\huge  m \\cdot v$'},{t_challengeId:201201001,correct:false,text:'$ \\huge  \\frac{F}{S} $'},{t_challengeId:201201001,correct:false,text:'$ \\huge  \\rho gh $'},
{t_challengeId:201201002,correct:true,text:'$ \\huge mgh$'},{t_challengeId:201201002,correct:false,text:'$ \\huge \\frac{ k \\triangle x^{2}  }{2} $'},{t_challengeId:201201002,correct:false,text:'$ \\huge  m \\cdot v$'},{t_challengeId:201201002,correct:false,text:'$ \\huge  \\frac{F}{S} $'},{t_challengeId:201201002,correct:false,text:'$ \\huge  \\rho gh $'},{t_challengeId:201201002,correct:false,text:'$ \\huge  mg$'},
{t_challengeId:201201003,correct:true,text:'$ \\huge \\frac{ k \\triangle x^{2}  }{2} $'},{t_challengeId:201201003,correct:false,text:'$ \\huge  m \\cdot v$'},{t_challengeId:201201003,correct:false,text:'$ \\huge  \\frac{F}{S} $'},{t_challengeId:201201003,correct:false,text:'$ \\huge  \\rho gh $'},{t_challengeId:201201003,correct:false,text:'$ \\huge  mg$'},{t_challengeId:201201003,correct:false,text:'$ \\huge  \\rho gV_{пч} $'},
{t_challengeId:201201004,correct:true,text:'$ \\huge  m \\cdot v$'},{t_challengeId:201201004,correct:false,text:'$ \\huge  \\frac{F}{S} $'},{t_challengeId:201201004,correct:false,text:'$ \\huge  \\rho gh $'},{t_challengeId:201201004,correct:false,text:'$ \\huge  mg$'},{t_challengeId:201201004,correct:false,text:'$ \\huge  \\rho gV_{пч} $'},{t_challengeId:201201004,correct:false,text:'$ \\huge  k \\cdot \\triangle x $'},
{t_challengeId:201201005,correct:true,text:'$ \\huge  \\frac{F}{S} $'},{t_challengeId:201201005,correct:false,text:'$ \\huge  \\rho gh $'},{t_challengeId:201201005,correct:false,text:'$ \\huge  mg$'},{t_challengeId:201201005,correct:false,text:'$ \\huge  \\rho gV_{пч} $'},{t_challengeId:201201005,correct:false,text:'$ \\huge  k \\cdot \\triangle x $'},{t_challengeId:201201005,correct:false,text:'$ F \\triangle t = \\triangle p \\newline = m \\cdot v $'},
{t_challengeId:201201006,correct:true,text:'$ \\huge  \\rho gh $'},{t_challengeId:201201006,correct:false,text:'$ \\huge  mg$'},{t_challengeId:201201006,correct:false,text:'$ \\huge  \\rho gV_{пч} $'},{t_challengeId:201201006,correct:false,text:'$ \\huge  k \\cdot \\triangle x $'},{t_challengeId:201201006,correct:false,text:'$ F \\triangle t = \\triangle p \\newline = m \\cdot v $'},{t_challengeId:201201006,correct:false,text:'$ E_{мех} = E_{кин} + E_{пот} \\newline = const $'},
{t_challengeId:201201007,correct:true,text:'$ \\huge  mg$'},{t_challengeId:201201007,correct:false,text:'$ \\huge  \\rho gV_{пч} $'},{t_challengeId:201201007,correct:false,text:'$ \\huge  k \\cdot \\triangle x $'},{t_challengeId:201201007,correct:false,text:'$ F \\triangle t = \\triangle p \\newline = m \\cdot v $'},{t_challengeId:201201007,correct:false,text:'$ E_{мех} = E_{кин} + E_{пот} \\newline = const $'},{t_challengeId:201201007,correct:false,text:'$ \\huge  ma$'},
{t_challengeId:201201008,correct:true,text:'$ \\huge  \\rho gV_{пч} $'},{t_challengeId:201201008,correct:false,text:'$ \\huge  k \\cdot \\triangle x $'},{t_challengeId:201201008,correct:false,text:'$ F \\triangle t = \\triangle p \\newline = m \\cdot v $'},{t_challengeId:201201008,correct:false,text:'$ E_{мех} = E_{кин} + E_{пот} \\newline = const $'},{t_challengeId:201201008,correct:false,text:'$ \\huge  ma$'},{t_challengeId:201201008,correct:false,text:'$ \\huge  m (g+a) $'},
{t_challengeId:201201009,correct:true,text:'$ \\huge  k \\cdot \\triangle x $'},{t_challengeId:201201009,correct:false,text:'$ F \\triangle t = \\triangle p \\newline = m \\cdot v $'},{t_challengeId:201201009,correct:false,text:'$ E_{мех} = E_{кин} + E_{пот} \\newline = const $'},{t_challengeId:201201009,correct:false,text:'$ \\huge  ma$'},{t_challengeId:201201009,correct:false,text:'$ \\huge  m (g+a) $'},{t_challengeId:201201009,correct:false,text:'$ \\huge  m (g-a) $'},
{t_challengeId:201201010,correct:true,text:'$ F \\triangle t = \\triangle p \\newline = m \\cdot v $'},{t_challengeId:201201010,correct:false,text:'$ E_{мех} = E_{кин} + E_{пот} \\newline = const $'},{t_challengeId:201201010,correct:false,text:'$ \\huge  ma$'},{t_challengeId:201201010,correct:false,text:'$ \\huge  m (g+a) $'},{t_challengeId:201201010,correct:false,text:'$ \\huge  m (g-a) $'},{t_challengeId:201201010,correct:false,text:'$ \\huge \\frac{mv^{2}}{2}$'},
{t_challengeId:201201011,correct:true,text:'$ E_{мех} = E_{кин} + E_{пот} \\newline = const $'},{t_challengeId:201201011,correct:false,text:'$ \\huge  ma$'},{t_challengeId:201201011,correct:false,text:'$ \\huge  m (g+a) $'},{t_challengeId:201201011,correct:false,text:'$ \\huge  m (g-a) $'},{t_challengeId:201201011,correct:false,text:'$ \\huge \\frac{mv^{2}}{2}$'},{t_challengeId:201201011,correct:false,text:'$ \\huge mgh$'},
{t_challengeId:201201012,correct:true,text:'$ \\huge  ma$'},{t_challengeId:201201012,correct:false,text:'$ \\huge  m (g+a) $'},{t_challengeId:201201012,correct:false,text:'$ \\huge  m (g-a) $'},{t_challengeId:201201012,correct:false,text:'$ \\huge \\frac{mv^{2}}{2}$'},{t_challengeId:201201012,correct:false,text:'$ \\huge mgh$'},{t_challengeId:201201012,correct:false,text:'$ \\huge \\frac{ k \\triangle x^{2}  }{2} $'},
{t_challengeId:201201013,correct:true,text:'$ \\huge  m (g+a) $'},{t_challengeId:201201013,correct:false,text:'$ \\huge  m (g-a) $'},{t_challengeId:201201013,correct:false,text:'$ \\huge \\frac{mv^{2}}{2}$'},{t_challengeId:201201013,correct:false,text:'$ \\huge mgh$'},{t_challengeId:201201013,correct:false,text:'$ \\huge \\frac{ k \\triangle x^{2}  }{2} $'},{t_challengeId:201201013,correct:false,text:'$ \\huge  m \\cdot v$'},
{t_challengeId:201201014,correct:true,text:'$ \\huge  m (g-a) $'},{t_challengeId:201201014,correct:false,text:'$ \\huge \\frac{mv^{2}}{2}$'},{t_challengeId:201201014,correct:false,text:'$ \\huge mgh$'},{t_challengeId:201201014,correct:false,text:'$ \\huge \\frac{ k \\triangle x^{2}  }{2} $'},{t_challengeId:201201014,correct:false,text:'$ \\huge  m \\cdot v$'},{t_challengeId:201201014,correct:false,text:'$ \\huge  \\frac{F}{S} $'},
{t_challengeId:201202001,correct:true,text:'$\\large x_{0} + v_{0}t + \\frac{at^{2}}{2} $'},{t_challengeId:201202001,correct:false,text:'$ \\huge \\frac{ \\triangle v }{ \\triangle t} $'},{t_challengeId:201202001,correct:false,text:'$ \\huge \\frac{ v^{2}_{кон} - v^{2}_{нач}  }{2a} $'},{t_challengeId:201202001,correct:false,text:'$ \\huge \\frac{ 1 }{T} $'},{t_challengeId:201202001,correct:false,text:'$ \\huge  \\frac{v^{2}}{R} $'},{t_challengeId:201202001,correct:false,text:'$ \\huge  \\omega^{2}R $'},
{t_challengeId:201202002,correct:true,text:'$ \\huge \\frac{ \\triangle v }{ \\triangle t} $'},{t_challengeId:201202002,correct:false,text:'$ \\huge \\frac{ v^{2}_{кон} - v^{2}_{нач}  }{2a} $'},{t_challengeId:201202002,correct:false,text:'$ \\huge \\frac{ 1 }{T} $'},{t_challengeId:201202002,correct:false,text:'$ \\huge  \\frac{v^{2}}{R} $'},{t_challengeId:201202002,correct:false,text:'$ \\huge  \\omega^{2}R $'},{t_challengeId:201202002,correct:false,text:'$ \\huge \\frac{2 \\pi }{T} $'},
{t_challengeId:201202003,correct:true,text:'$ \\huge \\frac{ v^{2}_{кон} - v^{2}_{нач}  }{2a} $'},{t_challengeId:201202003,correct:false,text:'$ \\huge \\frac{ 1 }{T} $'},{t_challengeId:201202003,correct:false,text:'$ \\huge  \\frac{v^{2}}{R} $'},{t_challengeId:201202003,correct:false,text:'$ \\huge  \\omega^{2}R $'},{t_challengeId:201202003,correct:false,text:'$ \\huge \\frac{2 \\pi }{T} $'},{t_challengeId:201202003,correct:false,text:'$ \\huge  \\frac{v_{0}^{2} \\cdot sin(2\\alpha)}{g} $'},
{t_challengeId:201202004,correct:true,text:'$ \\huge \\frac{ 1 }{T} $'},{t_challengeId:201202004,correct:false,text:'$ \\huge  \\frac{v^{2}}{R} $'},{t_challengeId:201202004,correct:false,text:'$ \\huge  \\omega^{2}R $'},{t_challengeId:201202004,correct:false,text:'$ \\huge \\frac{2 \\pi }{T} $'},{t_challengeId:201202004,correct:false,text:'$ \\huge  \\frac{v_{0}^{2} \\cdot sin(2\\alpha)}{g} $'},{t_challengeId:201202004,correct:false,text:'$ \\huge \\frac{v_{0}^{2} \\cdot sin^{2} \\alpha}{2g} $'},
{t_challengeId:201202005,correct:true,text:'$ \\huge  \\frac{v^{2}}{R} $'},{t_challengeId:201202005,correct:false,text:'$ \\huge \\frac{ 1 }{T} $'},{t_challengeId:201202005,correct:false,text:'$ \\huge \\frac{2 \\pi }{T} $'},{t_challengeId:201202005,correct:false,text:'$ \\huge  \\frac{v_{0}^{2} \\cdot sin(2\\alpha)}{g} $'},{t_challengeId:201202005,correct:false,text:'$ \\huge \\frac{v_{0}^{2} \\cdot sin^{2} \\alpha}{2g} $'},{t_challengeId:201202005,correct:false,text:'$ \\huge 2 \\pi \\nu $'},
{t_challengeId:201202006,correct:true,text:'$ \\huge  \\omega^{2}R $'},{t_challengeId:201202006,correct:false,text:'$ \\huge \\frac{2 \\pi }{T} $'},{t_challengeId:201202006,correct:false,text:'$ \\huge  \\frac{v_{0}^{2} \\cdot sin(2\\alpha)}{g} $'},{t_challengeId:201202006,correct:false,text:'$ \\huge \\frac{v_{0}^{2} \\cdot sin^{2} \\alpha}{2g} $'},{t_challengeId:201202006,correct:false,text:'$ \\huge 2 \\pi \\nu $'},{t_challengeId:201202006,correct:false,text:'$\\large x_{0} + v_{0}t + \\frac{at^{2}}{2} $'},
{t_challengeId:201202007,correct:true,text:'$ \\huge \\frac{2 \\pi }{T} $'},{t_challengeId:201202007,correct:false,text:'$ \\huge  \\frac{v_{0}^{2} \\cdot sin(2\\alpha)}{g} $'},{t_challengeId:201202007,correct:false,text:'$ \\huge \\frac{v_{0}^{2} \\cdot sin^{2} \\alpha}{2g} $'},{t_challengeId:201202007,correct:false,text:'$ \\huge 2 \\pi \\nu $'},{t_challengeId:201202007,correct:false,text:'$\\large x_{0} + v_{0}t + \\frac{at^{2}}{2} $'},{t_challengeId:201202007,correct:false,text:'$ \\huge \\frac{ \\triangle v }{ \\triangle t} $'},
{t_challengeId:201202008,correct:true,text:'$ \\huge  \\frac{v_{0}^{2} \\cdot sin(2\\alpha)}{g} $'},{t_challengeId:201202008,correct:false,text:'$ \\huge \\frac{v_{0}^{2} \\cdot sin^{2} \\alpha}{2g} $'},{t_challengeId:201202008,correct:false,text:'$ \\huge 2 \\pi \\nu $'},{t_challengeId:201202008,correct:false,text:'$\\large x_{0} + v_{0}t + \\frac{at^{2}}{2} $'},{t_challengeId:201202008,correct:false,text:'$ \\huge \\frac{ \\triangle v }{ \\triangle t} $'},{t_challengeId:201202008,correct:false,text:'$ \\huge \\frac{ v^{2}_{кон} - v^{2}_{нач}  }{2a} $'},
{t_challengeId:201202009,correct:true,text:'$ \\huge \\frac{v_{0}^{2} \\cdot sin^{2} \\alpha}{2g} $'},{t_challengeId:201202009,correct:false,text:'$ \\huge 2 \\pi \\nu $'},{t_challengeId:201202009,correct:false,text:'$\\large x_{0} + v_{0}t + \\frac{at^{2}}{2} $'},{t_challengeId:201202009,correct:false,text:'$ \\huge \\frac{ \\triangle v }{ \\triangle t} $'},{t_challengeId:201202009,correct:false,text:'$ \\huge \\frac{ v^{2}_{кон} - v^{2}_{нач}  }{2a} $'},{t_challengeId:201202009,correct:false,text:'$ \\huge \\frac{ 1 }{T} $'},
{t_challengeId:201202010,correct:true,text:'$ \\huge 2 \\pi \\nu $'},{t_challengeId:201202010,correct:false,text:'$\\large x_{0} + v_{0}t + \\frac{at^{2}}{2} $'},{t_challengeId:201202010,correct:false,text:'$ \\huge \\frac{ \\triangle v }{ \\triangle t} $'},{t_challengeId:201202010,correct:false,text:'$ \\huge \\frac{ v^{2}_{кон} - v^{2}_{нач}  }{2a} $'},{t_challengeId:201202010,correct:false,text:'$ \\huge \\frac{ 1 }{T} $'},{t_challengeId:201202010,correct:false,text:'$ \\huge  \\frac{v^{2}}{R} $'},
{t_challengeId:202203001,correct:true,text:'72; 288 плиток'},{t_challengeId:202203001,correct:false,text:'70; 250 плиток'},{t_challengeId:202203001,correct:false,text:'75; 300 плиток'},{t_challengeId:202203001,correct:false,text:'80; 320 плиток'},{t_challengeId:202203001,correct:false,text:'65; 270 плиток'},{t_challengeId:202203001,correct:false,text:'60; 280 плиток'},
{t_challengeId:202203002,correct:true,text:'В первом на 70 т больше'},{t_challengeId:202203002,correct:false,text:'В первом на 60 т больше'},{t_challengeId:202203002,correct:false,text:'В первом на 80 т больше'},{t_challengeId:202203002,correct:false,text:'В первом на 90 т больше'},{t_challengeId:202203002,correct:false,text:'В первом на 100 т больше'},{t_challengeId:202203002,correct:false,text:'В первом на 110 т больше'},
{t_challengeId:202203003,correct:true,text:'В первом 600, во втором 300'},{t_challengeId:202203003,correct:false,text:'В первом 550, во втором 350'},{t_challengeId:202203003,correct:false,text:'В первом 650, во втором 250'},{t_challengeId:202203003,correct:false,text:'В первом 700, во втором 200'},{t_challengeId:202203003,correct:false,text:'В первом 600, во втором 400'},{t_challengeId:202203003,correct:false,text:'В первом 650, во втором 350'},
{t_challengeId:202203004,correct:true,text:'600 кг, 450 кг'},{t_challengeId:202203004,correct:false,text:'500 кг, 400 кг'},{t_challengeId:202203004,correct:false,text:'650 кг, 500 кг'},{t_challengeId:202203004,correct:false,text:'700 кг, 550 кг'},{t_challengeId:202203004,correct:false,text:'650 кг, 450 кг'},{t_challengeId:202203004,correct:false,text:'620 кг, 470 кг'},
{t_challengeId:202203005,correct:true,text:'В первом 400 , во втором  400'},{t_challengeId:202203005,correct:false,text:'В первом 450, во втором 350'},{t_challengeId:202203005,correct:false,text:'В первом 420, во втором 380'},{t_challengeId:202203005,correct:false,text:'В первом 450, во втором 450'},{t_challengeId:202203005,correct:false,text:'В первом 500, во втором 400'},{t_challengeId:202203005,correct:false,text:'В первом 400, во втором 450'},
{t_challengeId:202203006,correct:true,text:'3,75%'},{t_challengeId:202203006,correct:false,text:'2,50%'},{t_challengeId:202203006,correct:false,text:'4%'},{t_challengeId:202203006,correct:false,text:'3%'},{t_challengeId:202203006,correct:false,text:'3,20%'},{t_challengeId:202203006,correct:false,text:'4,50%'},
{t_challengeId:202203007,correct:true,text:'5,88%'},{t_challengeId:202203007,correct:false,text:'6,20%'},{t_challengeId:202203007,correct:false,text:'7%'},{t_challengeId:202203007,correct:false,text:'6,50%'},{t_challengeId:202203007,correct:false,text:'5,50%'},{t_challengeId:202203007,correct:false,text:'6%'},
{t_challengeId:202204001,correct:true,text:'72; 288 плиток'},{t_challengeId:202204001,correct:false,text:'70; 250 плиток'},{t_challengeId:202204001,correct:false,text:'75; 300 плиток'},{t_challengeId:202204001,correct:false,text:'80; 320 плиток'},{t_challengeId:202204001,correct:false,text:'65; 270 плиток'},{t_challengeId:202204001,correct:false,text:'60; 280 плиток'},
{t_challengeId:202204002,correct:true,text:'В первом на 70 т больше'},{t_challengeId:202204002,correct:false,text:'В первом на 60 т больше'},{t_challengeId:202204002,correct:false,text:'В первом на 80 т больше'},{t_challengeId:202204002,correct:false,text:'В первом на 90 т больше'},{t_challengeId:202204002,correct:false,text:'В первом на 100 т больше'},{t_challengeId:202204002,correct:false,text:'В первом на 110 т больше'},
{t_challengeId:202204003,correct:true,text:'В первом 600, во втором 300'},{t_challengeId:202204003,correct:false,text:'В первом 550, во втором 350'},{t_challengeId:202204003,correct:false,text:'В первом 650, во втором 250'},{t_challengeId:202204003,correct:false,text:'В первом 700, во втором 200'},{t_challengeId:202204003,correct:false,text:'В первом 600, во втором 400'},{t_challengeId:202204003,correct:false,text:'В первом 650, во втором 350'},
{t_challengeId:202204004,correct:true,text:'600 кг, 450 кг'},{t_challengeId:202204004,correct:false,text:'500 кг, 400 кг'},{t_challengeId:202204004,correct:false,text:'650 кг, 500 кг'},{t_challengeId:202204004,correct:false,text:'700 кг, 550 кг'},{t_challengeId:202204004,correct:false,text:'650 кг, 450 кг'},{t_challengeId:202204004,correct:false,text:'620 кг, 470 кг'},
{t_challengeId:202204005,correct:true,text:'В первом 400 , во втором  400'},{t_challengeId:202204005,correct:false,text:'В первом 450, во втором 350'},{t_challengeId:202204005,correct:false,text:'В первом 420, во втором 380'},{t_challengeId:202204005,correct:false,text:'В первом 450, во втором 450'},{t_challengeId:202204005,correct:false,text:'В первом 500, во втором 400'},{t_challengeId:202204005,correct:false,text:'В первом 400, во втором 450'},
{t_challengeId:202204006,correct:true,text:'3,75%'},{t_challengeId:202204006,correct:false,text:'2,50%'},{t_challengeId:202204006,correct:false,text:'4%'},{t_challengeId:202204006,correct:false,text:'3%'},{t_challengeId:202204006,correct:false,text:'3,20%'},{t_challengeId:202204006,correct:false,text:'4,50%'},
{t_challengeId:202204007,correct:true,text:'5,88%'},{t_challengeId:202204007,correct:false,text:'6,20%'},{t_challengeId:202204007,correct:false,text:'7%'},{t_challengeId:202204007,correct:false,text:'6,50%'},{t_challengeId:202204007,correct:false,text:'5,50%'},{t_challengeId:202204007,correct:false,text:'6%'},
]);









		console.log('Seeding Finished');
	} catch (error) {
		console.error(error);
		throw new Error('Не получилось получить БД');
	}
};

main();
