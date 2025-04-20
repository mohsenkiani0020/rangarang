import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleHelp } from "lucide-react";

interface TooltipLabelProps {
  data: {
    description?: string | null;
    label?: string;
  };
  size?: number;
  className?: string;
}

function TooltipLabel({ data, size, className }: TooltipLabelProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <CircleHelp {...(size ? { size } : {})} className={className} />
        </TooltipTrigger>
        <TooltipContent>
          <p>{data.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default TooltipLabel;
