import { Params } from "next/dist/server/request/params";
import { Topbar } from "@/app/workflow/_components/topbar/Topbar";
import { Suspense } from "react";
import { waitFor } from "@/lib/helpers/waitFor";
import { Loader2Icon } from "lucide-react";
import { auth } from "@clerk/nextjs/server";

export default async function ExecutionViewerPage({ params }: any) {
  const { executionId, workflowId } = await params;
  return (
    <div className="h-screen flex flex-col overflow-hidden w-full">
      <Topbar
        workflowId={workflowId}
        title="Workflow run details"
        description={`Run ID: ${executionId}`}
        hideButtons
      />
      <section className="flex h-full overflow-auto">
        <Suspense
          fallback={
            <div className="flex items-center justify-center w-full">
              <Loader2Icon className="animate-spin size-8 stroke-primary" />
            </div>
          }
        >
          <ExecutionViewerWrapper executionId={executionId} />
        </Suspense>
      </section>
    </div>
  );
}

async function ExecutionViewerWrapper({
  executionId,
}: {
  executionId: string;
}) {
  const { userId } = await auth();

  if (!userId) {
    return <div>You must be logged in to view this page</div>;
  }

  return <div>hello</div>;
}
