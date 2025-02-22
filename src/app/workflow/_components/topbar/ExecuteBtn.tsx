"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useExecutionPlan } from "@/hooks/useExecutionPlan";

type Props = {
  workflowId: string;
};

export const ExecuteBtn = ({ workflowId }: Props) => {
  const generatePlan = useExecutionPlan();
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => {
        const plan = generatePlan();
        console.log("---------plan---------");
        console.table(plan);
      }}
    >
      <Play className="stroke-orange-500" size={16} />
      Execute
    </Button>
  );
};
