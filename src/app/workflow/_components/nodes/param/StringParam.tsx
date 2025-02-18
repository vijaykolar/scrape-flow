"use client";

import { Label } from "@/components/ui/label";
import { ChangeEvent, useId, useState } from "react";
import { Input } from "@/components/ui/input";

import { StringParamProps } from "@/types/appNode";

export const StringParam = ({
  param,
  value,
  updateNodeParamValue,
}: StringParamProps) => {
  const id = useId();
  const [internalValue, setInternalValue] = useState<string>(value);

  return (
    <div className="space-y-1 p-1 w-full">
      <Label htmlFor={id} className="text-xs flex">
        {param.name}
        {param.required && <p className="text-red-400 px-1">*</p>}
      </Label>
      <Input
        id={id}
        className="text-xs md:text-xs"
        value={internalValue}
        placeholder="Enter value here"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInternalValue(e.target.value)
        }
        onBlur={(e) => updateNodeParamValue(e.target.value)}
      />
      {param.helperText && (
        <p className="text-xs text-muted-foreground px-1">{param.helperText}</p>
      )}
    </div>
  );
};
