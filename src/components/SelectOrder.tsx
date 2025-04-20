"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckBoxOrderProps } from "@/models/CheckBoxOrderProps";
import FormFieldRenderer from "./FormFieldRenderer";

function SelectOrder({ field }: CheckBoxOrderProps) {
  const [selectedValue, setSelectedValue] = useState<string>(
    String(field.defaultValue ?? "")
  );

  const selectedOption = field.options?.find(
    (opt) => opt.value === selectedValue
  );

  const hasDependentFields =
    selectedOption?.dependentFields &&
    selectedOption.dependentFields.length > 0;

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <>
      <Select
        value={selectedValue}
        onValueChange={handleSelectChange}
        disabled={!field.enabled}
        required={field.required}
      >
        <SelectTrigger className="w-full border border-gray-300 invalid:border-red-400">
          <SelectValue placeholder={field.options?.[0]?.display ?? "Select"} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {field.options?.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.display}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {hasDependentFields && (
        <div className=" mt-4">
          {selectedOption?.dependentFields?.map((item, index) => (
            <FormFieldRenderer field={item} key={index} />
          ))}
        </div>
      )}
    </>
  );
}

export default SelectOrder;
