import { TaskParamType, TaskType } from "@/types/task";
import { CodeIcon, LucideProps } from "lucide-react";

export const PageToHtmlTask = {
  type: TaskType.PAGE_TO_HTML,
  label: "Get HTML from page",
  icon: (props: LucideProps) => <CodeIcon {...props} />,
  isEntryPoint: false,
  inputs: [
    {
      name: "Webpage",
      type: TaskParamType.BROWSER_INSTANCE,
      required: true,
    },
  ],
  outputs: [
    {
      name: "HTML",
      type: TaskParamType.STRING,
    },
    {
      name: "Web page",
      type: TaskParamType.BROWSER_INSTANCE,
    },
  ],
};
