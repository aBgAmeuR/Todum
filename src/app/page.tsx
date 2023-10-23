import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-secondary -z-10"></div>
      <main className="flex flex-col w-full max-w-[736px] mt-[70px] mx-8 gap-[43px] items-center">
        <div className="flex flex-row items-center gap-3">
          <Image src="/logo.svg" width={22} height={36} alt={"Logo"} />
          <h1 className="text-xl font-black">
            <span className="text-blue">to</span>
            <span className="text-purple">dum</span>
          </h1>
        </div>
        <div className="flex flex-row gap-2 items-center w-full">
          <Input placeholder="Ajouter une nouvelle tâche" className="h-[54px]" />
          <Button className="h-[54px]">Ajouter</Button>
        </div>
      </main>
    </>
  )
}
