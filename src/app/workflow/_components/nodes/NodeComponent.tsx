import { NodeProps } from "@xyflow/react";
import { memo } from "react";

const NodeComponent = memo((props: NodeProps) => {
  return <NodeCard nodeId={props.id} />;
});
