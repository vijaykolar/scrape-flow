import { ReactNode } from "react";
import { Handle, Position } from "@xyflow/react";
import { cn } from "@/lib/utils";
import { TaskParam } from "@/types/task";
import { NodeParamField } from "@/app/workflow/_components/nodes/NodeParamField";

export const NodeInputs = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col divide-y gap-2">{children}</div>;
};

export const NodeInput = ({ input }: { input: TaskParam }) => {
  return (
    <div className="flex justify-start relative p-3 gap-2 bg-secondary w-ful">
      <NodeParamField param={input} />
      {!input.hideHandle && (
        <Handle
          id={input.name}
          type="target"
          position={Position.Left}
          className={cn(
            "!bg-muted-foreground !border-2 !border-background !-left-2 !size-4",
          )}
        />
      )}
    </div>
  );
};
