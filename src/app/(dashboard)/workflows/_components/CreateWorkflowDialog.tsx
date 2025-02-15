"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Layers2Icon } from "lucide-react";
import { CustomDialogHeader } from "@/components/CustomDialogHeader";

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
      <DialogContent className="p-0">
        <CustomDialogHeader
          icon={Layers2Icon}
          title="Create workflow"
          subTitle="Start building your workflow"
        />
        <DialogDescription>Dialog Content</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
