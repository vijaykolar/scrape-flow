"use client";

import { TooltipWrapper } from "@/components/TooltipWrapper";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { SaveBtn } from "@/app/workflow/_components/topbar/SaveBtn";

type TopbarProps = {
  title?: string;
  description?: string;
  workflowId?: string;
};

export const Topbar = ({ title, description, workflowId }: TopbarProps) => {
  console.log(description);
  const router = useRouter();
  return (
    <header className="justify-between sticky top-0 flex p-2  border-b-2 border-separate w-full h-[60px] bg-background z-10">
      <div className="flex gap-1 flex-1">
        <TooltipWrapper side="right" content="Back to home">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ChevronLeftIcon />
            <span className="hidden">Back</span>
          </Button>
        </TooltipWrapper>
        <div>
          <p className="font-bold text-ellipsis truncate">{title}</p>
          <p className="text-muted-foreground text-xs">{description}</p>
        </div>
      </div>
      <div>
        <SaveBtn workflowId={workflowId!} />
      </div>
    </header>
  );
};
