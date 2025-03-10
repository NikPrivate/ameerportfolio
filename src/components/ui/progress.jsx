import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

function Progress({ className, value, ...props }) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-6 w-full overflow-hidden rounded border border-blue-500 p-[2px]", // Add p-1 for padding
        className
      )}
      {...props}
    >
      <div className="h-full w-full bg-gray-200 rounded">
        {/* Inner progress fill */}
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="bg-blue-500 h-full transition-all rounded"
          style={{
            width: `${value || 0}%`,
          }}
        />
      </div>
    </ProgressPrimitive.Root>
  );
}

export { Progress };
