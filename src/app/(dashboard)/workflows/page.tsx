import { GetWorkflowForUser } from "@/actions/workflows/getWorkflowsForUser";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { waitFor } from "@/lib/helpers/waitFor";
import { AlertCircle, InboxIcon } from "lucide-react";
import { Suspense } from "react";

export default function WorkflowsPage() {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Workflows</h1>
          <p className="text-muted-foreground">Manage your workflows</p>
        </div>
      </div>
      <div className="h-full py-6">
        <Suspense fallback={<UserWorkflowSkeleton />}>
          <UserWorkflows />
        </Suspense>
      </div>
    </div>
  );
}

function UserWorkflowSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3, 4, 5].map((item) => (
        <Skeleton key={item} className="h-32 w-full " />
      ))}
    </div>
  );
}

async function UserWorkflows() {
  try {
    await waitFor(2000);
    const workflows = await GetWorkflowForUser();
    console.log(workflows);

    if (workflows.length === 0) {
      return (
        <div className="flex flex-col gap-4 items-center justify-center h-full">
          <div className="rounded-full bg-accent size-20 flex items-center justify-center">
            <InboxIcon size={32} className="stroke-primary" />
          </div>
          <div className="flex flex-col gap-1 text-center">
            <p className="font-bold">No workflows created yet.</p>
            <p className="text-sm text-muted-foreground">
              Click on the button below to create a new workflow.
            </p>
            <Button>Create</Button>
          </div>
        </div>
      );
    }
    return <div>dd</div>;
  } catch (error: unknown) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {error instanceof Error ? error.message : "An unknown error occurred"}
        </AlertDescription>
      </Alert>
    );
  }
}
