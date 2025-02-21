"use client";

import { type TaskParam, TaskParamType } from "@/types/task";
import { StringParam } from "@/app/workflow/_components/nodes/param/StringParam";
import { useReactFlow } from "@xyflow/react";
import { AppNode } from "@/types/appNode";
import { useCallback } from "react";
import { BrowserInstanceParam } from "@/app/workflow/_components/nodes/param/BrowserInstanceParam";

type NodeParamFieldProps = {
  param: TaskParam;
  nodeId: string;
};

export const NodeParamField = ({ param, nodeId }: NodeParamFieldProps) => {
  const { updateNodeData, getNode } = useReactFlow();
  const node = getNode(nodeId) as AppNode;
  const value = node?.data?.inputs?.[param.name];

  const updateNodeParamValue = useCallback(
    (value: string) => {
      updateNodeData(nodeId, {
        inputs: {
          ...node.data.inputs,
          [param.name]: value,
        },
      });
    },
    [updateNodeData, nodeId, node?.data.inputs, param?.name],
  );

  switch (param.type) {
    case TaskParamType.STRING:
      return (
        <StringParam
          param={param}
          value={value}
          updateNodeParamValue={updateNodeParamValue}
        />
      );

    case TaskParamType.BROWSER_INSTANCE:
      return (
        <BrowserInstanceParam
          param={param}
          value={""}
          updateNodeParamValue={updateNodeParamValue}
        />
      );
    default:
      return (
        <div className="w-full">
          <p className="text-xs text-muted-foreground">Not implemented</p>
        </div>
      );
  }
};
