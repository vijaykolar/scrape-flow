import { memo } from "react";
import { NodeProps } from "@xyflow/react";
import { NodeCard } from "@/app/workflow/_components/nodes/NodeCard";
import { NodeHeader } from "@/app/workflow/_components/nodes/NodeHeader";
import { AppNodeData } from "@/types/appNode";
import { TaskRegistry } from "@/lib/workflow/task/registry";

import {
  NodeInput,
  NodeInputs,
} from "@/app/workflow/_components/nodes/NideInputs";

const NodeComponent = memo((props: NodeProps) => {
  const nodeData = props.data as AppNodeData;
  const task = TaskRegistry[nodeData.type];
  return (
    <NodeCard isSelected={props.selected} nodeId={props.id}>
      <NodeHeader taskType={nodeData.type} />
      <NodeInputs>
        {task.inputs.map((input) => (
          <NodeInput key={input.name} input={input} nodeId={props.id} />
        ))}
      </NodeInputs>
    </NodeCard>
  );
});

export default NodeComponent;
NodeComponent.displayName = "NodeComponent";
