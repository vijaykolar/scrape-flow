"use client";

import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getSmoothStepPath,
  useReactFlow,
} from "@xyflow/react";
import { Button } from "@/components/ui/button";
import { CircleXIcon, XIcon } from "lucide-react";

export default function DeletableEdge(props: EdgeProps) {
  const [edgePath, labelX, labelY] = getSmoothStepPath(props);
  const { setEdges } = useReactFlow();

  return (
    <>
      <BaseEdge
        path={edgePath}
        markerEnd={props.markerEnd}
        style={props.style}
      />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            pointerEvents: "all",
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
          }}
        >
          <Button
            size="icon"
            variant="outline"
            className="size-5 cursor-pointer border rounded-full  leading-none hover:shadow-lg"
            onClick={() =>
              setEdges((edges) => edges.filter((edge) => edge.id !== props.id))
            }
          >
            <XIcon className="!size-2.5" />
          </Button>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
