"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { WorkflowExecutionPlan } from "@/types/workflow";
import { flowToExecutionPlan } from "@/lib/workflow/executionPlan";

export async function RunWorkflow(form: {
  workflowId: string;
  flowDefinition?: string;
}) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User unauthorized from runWorkflow");
  }

  const { workflowId, flowDefinition } = form;

  if (!workflowId) {
    throw new Error("Workflow id is required");
  }

  const workflow = await prisma.workflow.findUnique({
    where: {
      id: workflowId,
      userId,
    },
  });

  if (!workflow) {
    throw new Error("Workflow not found");
  }

  let executionPlan: WorkflowExecutionPlan;

  if (!flowDefinition) {
    throw new Error("Flow definition is defined");
  }
  const flow = JSON.parse(flowDefinition);

  const result = flowToExecutionPlan(flow.nodes, flow.edges);

  if (result.error) {
    throw new Error("flow definition not valid");
  }

  if (result.executionPlan?.length === 0) {
    throw new Error("no execution plan generated");
  }

  executionPlan = result.executionPlan!;
  console.log("@EXECUTION PLAN:", executionPlan);
  return executionPlan;
}
