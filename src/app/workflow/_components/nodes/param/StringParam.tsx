"use client";

import { Label } from "@/components/ui/label";
import { useId } from "react";
import { Input } from "@/components/ui/input";

import { StringParamProps } from "@/types/appNode";

export const StringParam = ({ param }: StringParamProps) => {
  console.log(param, "D");
  const id = useId();
  return (
    <div className="space-y-1 p-1 w-full">
      <Label htmlFor={id} className="text-xs flex">
        {param.name}
        {param.required && <p className="text-red-400 px-1">*</p>}
      </Label>
      <Input id={id} />
      {param.helperText && (
        <p className="text-xs text-muted-foreground px-1">{param.helperText}</p>
      )}
    </div>
  );
};
