"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type CreateWorkflowDialogProps = {
  triggerText?: string;
};

export const CreateWorkflowDialog = ({
  triggerText,
}: CreateWorkflowDialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>{triggerText ?? "Create Workflow"}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="hidden">dd</DialogTitle>
        <DialogDescription>Dialog Content</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
