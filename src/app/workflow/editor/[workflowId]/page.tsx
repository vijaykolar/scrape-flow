import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Editor } from "@/app/workflow/_components/Editor";

const fetchWorkflow = async (workflowId: string, userId: string) => {
  return prisma.workflow.findFirst({
    where: {
      id: workflowId,
      userId,
    },
  });
};

const WorkflowPage = async ({ params }: { params: { workflowId: string } }) => {
  const { workflowId } = params;
  const { userId } = await auth();

  if (!userId) {
    return <div>Unauthenticated</div>;
  }

  const workflow = await fetchWorkflow(workflowId, userId);

  if (!workflow) {
    return <div>No workflow</div>;
  }

  return <Editor workflow={workflow} />;
};

export default WorkflowPage;
