import Link from "next/link";
import { cn } from "@/lib/utils";
import { SquareDashedMousePointer } from "lucide-react";

type Props = {
  fontSize?: string;
  iconSize?: number;
};
export const Logo = ({ fontSize = "text-2xl", iconSize = 20 }: Props) => {
  return (
    <Link
      href="/"
      className={cn(
        "text-2xl font-extrabold flex items-center gap-2",
        fontSize,
        iconSize,
      )}
    >
      <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-2">
        <SquareDashedMousePointer size={iconSize} className="stroke-white" />
      </div>
      Logo
    </Link>
  );
};
