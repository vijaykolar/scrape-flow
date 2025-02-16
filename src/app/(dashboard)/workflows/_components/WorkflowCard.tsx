"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { WorkflowStatus } from "@/types/workflow";
import { Workflow } from "@prisma/client";
import {
  FileTextIcon,
  MoreVerticalIcon,
  PlayIcon,
  ShuffleIcon,
  TrashIcon,
} from "lucide-react";
import Link from "next/link";

import { TooltipWrapper } from "@/components/TooltipWrapper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, Fragment } from "react";
import { DeleteWorkflowDialog } from "./DeleteWorkflowDialog";

const statusColors = {
  [WorkflowStatus.DRAFT]: "bg-yellow-300 text-yellow-600",
  [WorkflowStatus.PUBLISHED]: "bg-primary",
};

export const WorkflowCard = ({ workflow }: { workflow: Workflow }) => {
  const isDraft = workflow.status === WorkflowStatus.DRAFT;
  console.log("workflow", isDraft);

  return (
    <Card className="border border-separate shadow-sm rounded-lg overflow-hidden hover:shadow-md dark:shadow-primary/30">
      <CardContent className="p-4 flex items-center justify-between h-[100px]">
        <div className="flex items-center justify-end space-x-2">
          <div
            className={cn(
              "size-10 rounded-full flex justify-center items-center bg-red-200",
              statusColors[workflow.status as WorkflowStatus]
            )}
          >
            {isDraft ? (
              <FileTextIcon className="h-5 w-5" />
            ) : (
              <PlayIcon className="h-5 w-5 text-white" />
            )}
          </div>
          <div>
            <h3 className="text-base flex items-center text-muted-foreground font-bold capitalize">
              <Link
                className="flex items-center hover:underline"
                href={`/workflow/editor/${workflow.id}`}
              >
                {workflow.name}
              </Link>
              {isDraft && (
                <span className="ml-2 px-2 py-.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                  Draft
                </span>
              )}
            </h3>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Link
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "sm",
              }),
              "flex items-center"
            )}
            href={`/workflow/editor/${workflow.id}`}
          >
            <ShuffleIcon size={16} className="h-4 w-4" />
            Edit
          </Link>
          <WorkflowActions
            workflowName={workflow.name}
            workflowId={workflow.id}
          />
        </div>
      </CardContent>
    </Card>
  );
};

function WorkflowActions({
  workflowName,
  workflowId,
}: {
  workflowName: string;
  workflowId: string;
}) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleShowDeleteDialog = () => {
    setShowDeleteDialog((prev) => !prev);
  };
  return (
    <Fragment>
      {showDeleteDialog && (
        <DeleteWorkflowDialog
          open={showDeleteDialog}
          setOpen={setShowDeleteDialog}
          workflowName={workflowName}
          workflowId={workflowId}
        />
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="outline">
            <TooltipWrapper content="More options">
              <div className="flex items-center w-full justify-center h-full">
                <MoreVerticalIcon size={18} />
              </div>
            </TooltipWrapper>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={handleShowDeleteDialog}
            className="text-destructive flex items-center gap-2"
          >
            <TrashIcon size={16} /> Delete
          </DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Fragment>
  );
}
