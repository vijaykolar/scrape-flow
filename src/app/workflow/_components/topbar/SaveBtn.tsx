import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReactFlow } from "@xyflow/react";
import { updateWorkflow } from "@/actions/workflows/updateWorkflow";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

type SaveBtnProps = {
  workflowId: string;
};

export const SaveBtn = ({ workflowId }: SaveBtnProps) => {
  const { toObject } = useReactFlow();

  const saveMutation = useMutation({
    mutationKey: ["updateWorkflow"],
    mutationFn: updateWorkflow,
  });

  const handleSave = async () => {
    const workflowDefinition = JSON.stringify(toObject());

    await toast.promise(
      () =>
        saveMutation.mutateAsync({
          id: workflowId,
          definition: workflowDefinition,
        }),
      {
        loading: "Saving workflow...",
        success: "Workflow saved!",
        error: "Error saving workflow",
      },
    );
  };

  return (
    <Button
      disabled={saveMutation.isPending}
      color="primary"
      size="sm"
      className="flex items-center gap-2 capitalize"
      variant="outline"
      onClick={handleSave}
    >
      <CheckIcon className="stroke-green-400" />
      save
    </Button>
  );
};
