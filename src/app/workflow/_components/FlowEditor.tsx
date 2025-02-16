import { Workflow } from "@prisma/client";
import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
  useNodesState,
} from "@xyflow/react";
import React from "react";

import "@xyflow/react/dist/style.css";
import { createFlowNode } from "@/lib/workflow/createFlowNode";
import { TaskType } from "@/types/task";
import NodeComponent from "@/app/workflow/_components/nodes/NodeComponent";

const nodeTypes = {
  FlowScrapeNode: NodeComponent,
};

// const snapGrid: [number, number] = [50, 50];
const fitViewOptions = { padding: 1 };

export const FlowEditor = ({ workflow }: { workflow: Workflow }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    createFlowNode(TaskType.LAUNCH_BROWSER),
  ]);
  const [edges, setEdges, onEdgesChange] = useNodesState([]);
  return (
    <main className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        colorMode="system"
        nodeTypes={nodeTypes}
        // snapToGrid
        // snapGrid={snapGrid}
        fitView
        fitViewOptions={fitViewOptions}
      >
        <Controls fitViewOptions={fitViewOptions} />
        {/* <MiniMap /> */}
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </main>
  );
};
