"use client"
import * as React from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

const fruits = [
  { id: "apple", label: "Apple" },
  { id: "banana", label: "Banana" },
  { id: "blueberry", label: "Blueberry" },
  { id: "grapes", label: "Grapes" },
  { id: "pineapple", label: "Pineapple" },
]

export function MultiSelect() {
  const [selected, setSelected] = React.useState<string[]>([])

  const toggleSelection = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[200px] justify-start">
          {selected.length > 0 ? selected.join(", ") : "Select fruits"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px]">
        <div className="grid gap-2">
          {fruits.map((fruit) => (
            <label
              key={fruit.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Checkbox
                checked={selected.includes(fruit.id)}
                onCheckedChange={() => toggleSelection(fruit.id)}
              />
              <span>{fruit.label}</span>
            </label>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
