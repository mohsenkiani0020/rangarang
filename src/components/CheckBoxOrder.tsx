"use client";
import React, { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { CheckBoxOrderProps } from "@/models/CheckBoxOrderProps";
import FormFieldRenderer from "./FormFieldRenderer";

function CheckBoxOrder({ field }: CheckBoxOrderProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <>
      <div className="items-top flex space-x-2 col-span-4">
        <Checkbox
          id={field.fieldId}
          disabled={!field.enabled}
          required={field.required}
          checked={isChecked}
          onCheckedChange={handleCheckboxChange}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor={field.fieldId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <h3 className="text-sm">{field.label}</h3>
          </label>
        </div>
      </div>

      {isChecked && (
        <div className="col-span-8">
          {field.options?.map((optionItem) => {
            return optionItem.dependentFields?.map((dependentItem, index) => {
              return <FormFieldRenderer field={dependentItem} key={index} />;
            });
          })}
        </div>
      )}
    </>
  );
}

export default CheckBoxOrder;
