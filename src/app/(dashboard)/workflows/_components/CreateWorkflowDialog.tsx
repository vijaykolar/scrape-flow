"use client";

import { useCallback, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Layers2Icon, Loader2 } from "lucide-react";
import { CustomDialogHeader } from "@/components/CustomDialogHeader";
import { useForm } from "react-hook-form";
import {
  CreateWorkflowSchemaType,
  createWorkflowSchema,
} from "@/schema/workflow";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { createWorkflow } from "@/actions/workflows/createWorkflow";
import toast from "react-hot-toast";

// import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

type CreateWorkflowDialogProps = {
  triggerText?: string;
};

export const CreateWorkflowDialog = ({
  triggerText,
}: CreateWorkflowDialogProps) => {
  const [open, setOpen] = useState(false);

  const form = useForm<CreateWorkflowSchemaType>({
    resolver: zodResolver(createWorkflowSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createWorkflow,
  });

  const onSubmit = useCallback(
    (values: CreateWorkflowSchemaType) => {
      mutate(values, {
        onSuccess: () => {
          toast.success("Workflow created successfully");
        },
        onError: (error) => {
          toast.error(error.message || "Failed create workflow");
        },
      });
    },
    [mutate]
  );

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
        <DialogDescription asChild>
          <div className="p-6 pt-0">
            <Form {...form}>
              <form
                className="space-y-5 w-full"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex gap-1 items-center font-semibold text-muted-foreground">
                        Name <p className="text-xs text-primary">(required)</p>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Choose a descriptive and unique name for your workflow.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex gap-1 items-center font-semibold text-muted-foreground">
                        Description
                        <p className="text-xs text-primary">(optional)</p>
                      </FormLabel>
                      <FormControl>
                        <Textarea className="resize-none" {...field} />
                      </FormControl>
                      <FormDescription>
                        Provide a brief description of your workflow does. This
                        is optional but can help you remember workflow&apos;s
                        purpose.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button disabled={isPending} type="submit" className="w-full">
                  {isPending && <Loader2 className="animate-spin" />}
                  Proceed
                </Button>
              </form>
            </Form>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
