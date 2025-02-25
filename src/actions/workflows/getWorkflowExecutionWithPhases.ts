"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export const GetWorkflowExecutionWithPhases = async (executionId: string) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User is unauthorized");
  }

  return prisma.workflowExecution.findUnique({
    where: {
      id: executionId,
      userId,
    },
    include: {
      phases: {
        orderBy: {
          number: "asc",
        },
      },
    },
  });
};
