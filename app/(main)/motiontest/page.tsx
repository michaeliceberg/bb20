// app/page.tsx
// import SpiderAnimation from "@/components/SpiderAnimation";

import SpiderAnimation from "./spider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Паук и котенок</h1>
      <SpiderAnimation />
    </main>
  );
}



{/* <Image src='/Lottie/trainer/spider/spider.svg' alt='Croatian' height={32} width={40} className='mr-4 rounded-md' /> */}
