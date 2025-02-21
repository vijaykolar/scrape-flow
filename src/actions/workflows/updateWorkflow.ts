"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { WorkflowStatus } from "@/types/workflow";
import { revalidatePath } from "next/cache";

export const updateWorkflow = async ({
  id,
  definition,
}: {
  id: string;
  definition: string;
}) => {
  try {
    const userId = await auth();
    if (!userId) {
      throw new Error("User is unauthorized");
    }
    if (!id) {
      throw new Error("No workflow id provided");
    }
    if (!definition) {
      throw new Error("No workflow definition provided");
    }

    const workflow = await prisma.workflow.findUnique({
      where: {
        id,
      },
    });

    if (!workflow) {
      throw new Error("Workflow not found");
    }
    if (workflow.status !== WorkflowStatus.DRAFT) {
      throw new Error("Workflow is not a draft");
    }

    await prisma.workflow.update({
      where: {
        id,
      },
      data: {
        definition,
      },
    });
    revalidatePath("/workflows");
  } catch (error) {
    throw new Error("An error occurred while updating the workflow");
  }
};
