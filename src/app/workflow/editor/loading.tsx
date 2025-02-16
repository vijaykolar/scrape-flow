import { Loader2Icon } from "lucide-react";
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <Loader2Icon size={30} className="animate-spin stroke-primary" />
    </div>
  );
};

export default Loading;
