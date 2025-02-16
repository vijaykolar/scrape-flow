import { Button } from "@/components/ui/button";
import { Tv2Icon } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-2">Home page</h1>
      <Button>
        <Tv2Icon />
        Watch demo
      </Button>
    </div>
  );
}
