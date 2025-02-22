import { useReactFlow } from "@xyflow/react";
import { useCallback } from "react";
import { flowToExecutionPlan } from "@/lib/workflow/executionPlan";
import { AppNode } from "@/types/appNode";
import { useFlowValidation } from "@/hooks/useFlowValidation";

export const useExecutionPlan = () => {
  const { toObject } = useReactFlow();
  const { setInvalidInputs, clearErrors } = useFlowValidation();

  const generateExecutionPlan = useCallback(() => {
    const { nodes, edges } = toObject();
    const { executionPlan, error } = flowToExecutionPlan(
      nodes as AppNode[],
      edges,
    );

    return executionPlan;
  }, [toObject]);

  return generateExecutionPlan;
};
