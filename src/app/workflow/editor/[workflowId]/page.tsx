import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Editor } from "../../_components/Editor";

const WorkflowPage = async ({ params }: { params: { workflowId: string } }) => {
  const workflowId = params.workflowId;

  const { userId } = await auth();

  if (!userId) {
    return <div>Unauthenticated</div>;
  }

  const workflow = await prisma.workflow.findFirst({
    where: {
      id: workflowId,
      userId,
    },
  });

  if (!workflow) return <div>No workflow</div>;

  return <Editor workflow={workflow} />;
};

export default WorkflowPage;
