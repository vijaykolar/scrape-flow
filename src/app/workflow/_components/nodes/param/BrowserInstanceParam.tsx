"use client";

import { StringParamProps } from "@/types/appNode";

export const BrowserInstanceParam = ({ param }: StringParamProps) => {
  return <p className="text-xs">{param.name}</p>;
};
