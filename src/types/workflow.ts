import React from "react";
import { LucideProps } from "lucide-react";
import { TaskParam, TaskType } from "@/types/task";
import { AppNode } from "@/types/appNode";

export enum WorkflowStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}

export type WorkflowTask = {
  label: string;
  icon: React.FC<LucideProps>;
  type: TaskType;
  isEntryPoint?: boolean;
  inputs: TaskParam[];
  outputs: TaskParam[];
  credits: number;
};

export type WorkflowExecutionPlanPhase = {
  phase: number;
  nodes: AppNode[];
};

export type WorkflowExecutionPlan = WorkflowExecutionPlanPhase[];

export enum FlowToExecutionPlanValidationError {
  "NO_ENTRY_POINT" = "NO_ENTRY_POINT",
  "INVALID_INPUTS" = "INVALID_INPUTS",
}
