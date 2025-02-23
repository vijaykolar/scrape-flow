"use client";

import { Label } from "@/components/ui/label";
import { ChangeEvent, useEffect, useId, useState } from "react";
import { Input } from "@/components/ui/input";

import { StringParamProps } from "@/types/appNode";
import { Textarea } from "@/components/ui/textarea";

export const StringParam = ({
  param,
  value,
  updateNodeParamValue,
  disabled,
}: StringParamProps) => {
  const id = useId();
  const [internalValue, setInternalValue] = useState<string>(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  let Component: any = Input;

  if (param.variant === "textarea") {
    Component = Textarea;
  }

  return (
    <div className="space-y-1 p-1 w-full">
      <Label htmlFor={id} className="text-xs flex">
        {param.name}
        {param.required && <p className="text-red-400 px-1">*</p>}
      </Label>
      <Component
        id={id}
        disabled={disabled}
        className="text-xs md:text-xs bg-white dark:bg-black/30"
        value={internalValue}
        placeholder="Enter value here"
        onChange={(e: any) => setInternalValue(e.target.value)}
        onBlur={(e: any) => updateNodeParamValue(e.target.value)}
      />
      {param.helperText && (
        <p className="text-xs text-muted-foreground px-1">{param.helperText}</p>
      )}
    </div>
  );
};
