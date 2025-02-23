"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useExecutionPlan } from "@/hooks/useExecutionPlan";
import { useMutation } from "@tanstack/react-query";
import { RunWorkflow } from "@/actions/workflows/runWorkflow";
import toast from "react-hot-toast";
import { useReactFlow } from "@xyflow/react";

type Props = {
  workflowId: string;
};

export const ExecuteBtn = ({ workflowId }: Props) => {
  const generatePlan = useExecutionPlan();
  const { toObject } = useReactFlow();

  const mutation = useMutation({
    // mutationKey: ["runWorkflow"],
    mutationFn: RunWorkflow,
    onSuccess: () => {
      toast.success("Workflow executed!");
    },
    onError: () => {
      toast.error("Error executing workflow");
    },
  });

  return (
    <Button
      variant="outline"
      size="sm"
      disabled={mutation.isPending}
      onClick={() => {
        const plan = generatePlan();
        if (!plan) return;

        mutation.mutate({
          workflowId: workflowId,
          flowDefinition: JSON.stringify(toObject()),
        });
      }}
    >
      <Play className="stroke-orange-500" size={16} />
      Execute
    </Button>
  );
};
