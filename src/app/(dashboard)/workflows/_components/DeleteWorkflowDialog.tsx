"use client";

import { deleteWorkflow } from "@/actions/workflows/deleteWorkflow";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  //   AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
// import { Button } from "@/components/ui/button";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  workflowName: string;
  workflowId: string;
};

export function DeleteWorkflowDialog({
  open,
  setOpen,
  workflowName,
  workflowId,
}: Props) {
  const [confirmText, setConfirmText] = useState("");

  const { mutate, isPending } = useMutation({
    mutationKey: ["deleteWorkflow", workflowId],
    mutationFn: () => deleteWorkflow(workflowId),
    onSuccess: () => {
      toast.success(`Deleted ${workflowName} successfully.`);
      setConfirmText("");
    },
    onError: () => {
      toast.error(`Something went while deleting ${workflowName}.`);
    },
  });

  const handleDeleteWorkflow = () => {
    if (isPending) return;
    mutate();
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            workflow and remove your data from our servers.
            <span className="flex flex-col gap-2 py-4">
              <span>
                If you are sure, enter <b>{workflowName}</b> to confirm:
              </span>
              <Input
                onChange={(e) => setConfirmText(e.target.value)}
                value={confirmText}
              />
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setConfirmText("")}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            disabled={confirmText !== workflowName || isPending}
            onClick={handleDeleteWorkflow}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
