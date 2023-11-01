import Image from 'next/image';
import { Todos } from '@/components/todos';

export default async function Page() {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-secondary -z-10"></div>
      <main className="flex flex-col w-full max-w-[736px] mt-[70px] mx-8 items-center">
        <div className="flex flex-row items-center gap-3 mb-[43px] ">
          <Image src="/logo.svg" width={22} height={36} alt={'Logo'} />
          <h1 className="text-xl font-black">
            <span className="text-blue">to</span>
            <span className="text-purple">dum</span>
          </h1>
        </div>
        <Todos />
      </main>
    </>
  );
}
