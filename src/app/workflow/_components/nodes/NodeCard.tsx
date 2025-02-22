"use client";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReactFlow } from "@xyflow/react";

type NodeCardProps = {
  children: ReactNode;
  nodeId: string;
  isSelected: boolean;
};

export function NodeCard({ children, nodeId, isSelected }: NodeCardProps) {
  const { getNode, setCenter } = useReactFlow();

  const handleAlignCenter = () => {
    const node = getNode(nodeId);
    if (!node) return;
    const { position, measured } = node;
    if (!position || !measured) return;
    const { height, width } = measured;
    const x = position.x + width! / 2;
    const y = position.y + height! / 2;

    if (x == undefined || y === undefined) return;

    setCenter(x, y, {
      zoom: 1,
      duration: 500,
    }).then((r) => console.log(r));
  };
  return (
    <div
      onDoubleClick={handleAlignCenter}
      className={cn(
        "w-[435px] text-sm gap-1 flex flex-col rounded-md cursor-pointer bg-background border-2 border-separate",
        isSelected && "border-primary",
      )}
    >
      {children}
    </div>
  );
}
