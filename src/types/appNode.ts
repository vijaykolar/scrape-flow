import { Node } from "@xyflow/react";
import { TaskParam, TaskType } from "./task";

export interface AppNodeData {
  type: TaskType;
  inputs: Record<string, string>;
  [key: string]: unknown;
}

export interface AppNode extends Node {
  data: AppNodeData;
}

export type StringParamProps = {
  param: TaskParam;
  value: string;
  updateNodeParamValue: (value: string) => void;
  disabled?: boolean;
};
