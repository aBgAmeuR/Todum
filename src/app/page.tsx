import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <h1>Todum</h1>
      <Button text="Ajouter" />
      <Input type="text" placeholder="Ajouter une nouvelle tâche"/>
    </>
  )
}
