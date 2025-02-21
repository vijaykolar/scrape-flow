"use client";

import { TaskType } from "@/types/task";
import { TaskRegistry } from "@/lib/workflow/task/registry";
import { Badge } from "@/components/ui/badge";
import { CoinsIcon, CopyIcon, GripVerticalIcon, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReactFlow } from "@xyflow/react";
import { AppNode } from "@/types/appNode";
import { createFlowNode } from "@/lib/workflow/createFlowNode";

type NodeHeaderProps = {
  taskType: TaskType;
  nodeId: string;
};

export const NodeHeader = ({ taskType, nodeId }: NodeHeaderProps) => {
  const task = TaskRegistry[taskType];
  const { deleteElements, getNode, addNodes } = useReactFlow();

  return (
    <div className="flex items-center gap-2 p-2">
      <task.icon className="stroke-pink-400" size={16} />
      <div className={"justify-between flex items-center w-full"}>
        <p className="text-xs font-bold text-muted-foreground">{task?.label}</p>
        <div className="flex items-center gap-1">
          {task?.isEntryPoint && (
            <Badge className="rounded-full">Entry point</Badge>
          )}
          <Badge className="gap-2  flex items-center text-xs rounded-full">
            <CoinsIcon size={16} /> TODO
          </Badge>
          {!task?.isEntryPoint && (
            <>
              <Button
                onClick={() => deleteElements({ nodes: [{ id: nodeId }] })}
                variant="ghost"
                size="icon"
              >
                <TrashIcon size={12} />
              </Button>
              <Button
                onClick={() => {
                  const node = getNode(nodeId) as AppNode;
                  const newX = node.position.x;
                  const newY = node.position.y + node.measured?.height! + 20;
                  const newNode = createFlowNode(node.data.type, {
                    x: newX,
                    y: newY,
                  });

                  addNodes([newNode]);
                }}
                variant="ghost"
                size="icon"
              >
                <CopyIcon size={12} />
              </Button>
            </>
          )}
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
