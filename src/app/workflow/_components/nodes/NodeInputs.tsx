import { ReactNode } from "react";
import { Handle, Position, useEdges } from "@xyflow/react";
import { cn } from "@/lib/utils";
import { TaskParam } from "@/types/task";
import { NodeParamField } from "@/app/workflow/_components/nodes/NodeParamField";
import { ColorForHandle } from "@/app/workflow/_components/nodes/Common";

export const NodeInputs = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col divide-y gap-2">{children}</div>;
};

export const NodeInput = ({
  input,
  nodeId,
}: {
  input: TaskParam;
  nodeId: string;
}) => {
  const edges = useEdges();

  const isConnected = edges.some(
    (edge) => edge.target === nodeId && edge.targetHandle === input.name,
  );

  return (
    <div className="flex justify-start relative p-3 gap-2 bg-secondary/60 w-ful">
      <NodeParamField disabled={isConnected} param={input} nodeId={nodeId} />

      {!input.hideHandle && (
        <Handle
          isConnectable={!isConnected}
          id={input.name}
          type="target"
          position={Position.Left}
          className={cn(
            "!bg-muted-foreground !border-2 !border-background !-left-2 !size-4",
            ColorForHandle[input.type],
          )}
        />
      )}
    </div>
  );
};
