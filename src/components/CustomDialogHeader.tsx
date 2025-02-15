import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

type CustomDialogHeaderProps = {
  icon?: LucideIcon;
  title?: string;
  subTitle?: string;

  iconClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
};

export const CustomDialogHeader = ({
  icon: Icon,
  title,
  subTitle,
  iconClassName,
  titleClassName,
  subTitleClassName,
}: CustomDialogHeaderProps) => {
  return (
    <DialogHeader className="py-6">
      <DialogTitle asChild className={cn(titleClassName)}>
        <div className="flex flex-col items-center gap-2 mb-2">
          {Icon && (
            <Icon size={32} className={cn("stroke-primary", iconClassName)} />
          )}

          <p className={cn("text-primary text-xl", titleClassName)}>{title}</p>
          <p
            className={cn(
              "text-muted-foreground text-sm font-normal",
              subTitleClassName
            )}
          >
            {subTitle}
          </p>
        </div>
      </DialogTitle>
      <Separator />
    </DialogHeader>
  );
};
