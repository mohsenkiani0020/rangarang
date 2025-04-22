"use client";
import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CheckBoxOrderProps } from "@/models/CheckBoxOrderProps";

export function MultiSelect({ field }: CheckBoxOrderProps) {
  const [selected, setSelected] = React.useState<string[]>([]);

  const toggleSelection = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="col-span-10 relative mb-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-start">
            {selected.length > 0
              ? selected
                  .map(
                    (val) =>
                      field.options?.find((opt) => opt.value === val)?.display
                  )
                  .join(", ")
              : "انتخاب کنید"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full">
          <div className="grid gap-2">
            {field.options?.map((item) => (
              <label
                key={item.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Checkbox
                  value={item.value}
                  checked={selected.includes(item.value)}
                  onCheckedChange={() => toggleSelection(item.value)}
                />
                <span>{item.display}</span>
              </label>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
