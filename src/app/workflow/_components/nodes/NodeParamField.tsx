"use client";

import { type TaskParam, TaskParamType } from "@/types/task";
import { StringParam } from "@/app/workflow/_components/nodes/param/StringParam";

type NodeParamFieldProps = {
  param: TaskParam;
};

export const NodeParamField = ({ param }: NodeParamFieldProps) => {
  switch (param.type) {
    case TaskParamType.STRING:
      return <StringParam param={param} />;
    default:
      return (
        <div className="w-full">
          <p className="text-xs text-muted-foreground">Not implemented</p>
        </div>
      );
  }
};
