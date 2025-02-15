"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GetWorkflowForUser() {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User unauthorized from getWorkflowsForUser");
  }

  return await prisma.workflow.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
}
