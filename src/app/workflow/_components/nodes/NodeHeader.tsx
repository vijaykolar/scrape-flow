"use client";

import { TaskType } from "@/types/task";
import { TaskRegistry } from "@/lib/workflow/task/registry";
import { Badge } from "@/components/ui/badge";
import { CoinsIcon, GripVerticalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type NodeHeaderProps = {
  taskType: TaskType;
};

export const NodeHeader = ({ taskType }: NodeHeaderProps) => {
  const task = TaskRegistry[taskType];

  return (
    <div className="flex items-center gap-2 p-2">
      <task.icon className="stroke-pink-400" size={16} />
      <div className={"justify-between flex items-center w-full"}>
        <p className="text-xs font-bold uppercase text-muted-foreground">
          {task?.label}
        </p>
        <div className="flex items-center gap-1">
          {task?.isEntryPoint && (
            <Badge className="rounded-full">Entry point</Badge>
          )}
          <Badge className="gap-2  flex items-center text-xs rounded-full">
            <CoinsIcon size={16} /> TODO
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            className="drag-handle cursor-grab"
          >
            <GripVerticalIcon size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};
