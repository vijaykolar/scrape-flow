"use client";

import { Workflow } from "@prisma/client";
import React from "react";
import { ReactFlowProvider } from "@xyflow/react";
import { FlowEditor } from "./FlowEditor";
import { Topbar } from "@/app/workflow/_components/topbar/Topbar";
import { TaskMenu } from "@/app/workflow/_components/TaskMenu";
import { FlowValidationContextProvider } from "@/context/FlowValidationContext";

export const Editor = ({ workflow }: { workflow: Workflow }) => {
  return (
    <FlowValidationContextProvider>
      <ReactFlowProvider>
        <div className="flex flex-col h-full w-full overflow-hidden">
          <Topbar
            workflowId={workflow.id}
            title={"Workflow editor"}
            description={workflow.name!}
          />
          <section className="flex h-full overflow-auto">
            <TaskMenu />
            <FlowEditor workflow={workflow} />
          </section>
        </div>
      </ReactFlowProvider>
    </FlowValidationContextProvider>
  );
};
