"use client";

import { Workflow } from "@prisma/client";
import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import React, { useEffect } from "react";

import "@xyflow/react/dist/style.css";
import { createFlowNode } from "@/lib/workflow/createFlowNode";
import { TaskType } from "@/types/task";
import NodeComponent from "@/app/workflow/_components/nodes/NodeComponent";
import toast from "react-hot-toast";

const nodeTypes = {
  FlowScrapeNode: NodeComponent,
};

// const snapGrid: [number, number] = [50, 50];
const fitViewOptions = { padding: 1 };

export const FlowEditor = ({ workflow }: { workflow: Workflow }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useNodesState([]);
  const { setViewport } = useReactFlow();

  useEffect(() => {
    try {
      const flow = JSON.parse(workflow.definition);
      if (!flow) return;
      setNodes(flow.nodes || []);
      setEdges(flow.edges || []);

      if (!flow.viewport) return;

      const { x = 0, y = 0, zoom = 1 } = flow.viewport;

      setViewport({ x, y, zoom }).then(() => {
        // toast(`${workflow.name} loaded successfully.`, {
        //   icon: "👏",
        // });
        console.log("viewport set");
      });
    } catch (error) {
      console.error(error);
    }
  }, [setEdges, setNodes, workflow.definition, setViewport]);
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
        // fitView
        fitViewOptions={fitViewOptions}
      >
        <Controls fitViewOptions={fitViewOptions} />
        {/* <MiniMap /> */}
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </main>
  );
};
