"use client";

import { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { handleAddSecondLevelDependency } from "@/redux/secondLevelDependency";
import { Option } from "@/models/productModel";
import { RootState } from "@/redux/store";

function SelectOrder({ field }: CheckBoxOrderProps) {
  const [selectedValue, setSelectedValue] = useState<string>(
    String(field.defaultValue ?? "")
  );
  const [dependency, setDependency] = useState<Option | null>();
  const dispatch = useDispatch();
  const data = useSelector(
    (state: RootState) => state.secondLevelDependency.data
  );

  const selectedOption = field.options?.find(
    (opt) => opt.value === selectedValue
  );

  const hasDependentFields =
    selectedOption?.dependentFields &&
    selectedOption.dependentFields.length > 0;

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    if (field.dependsOn === null) {
      const option = field.options?.find((item) => {
        return item.value === value;
      });
      dispatch(
        handleAddSecondLevelDependency({
          fieldId: field.fieldId,
          option: option ?? null,
        })
      );
    }
  };

  useEffect(() => {
    if (field.dependsOn) {
      const matched = data.find((item) => item.fieldId === field.dependsOn);

      setDependency(matched?.option ?? null);
    }
  }, [data, field.dependsOn]);

  return (
    <>
      <Select
        value={selectedValue}
        onValueChange={handleSelectChange}
        disabled={!field.enabled}
        required={field.required}
        dir="rtl"
      >
        <SelectTrigger className="w-full border border-gray-300 invalid:border-red-400">
          <SelectValue placeholder={field.options?.[0]?.display ?? "Select"} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {dependency?.dependentFieldOptions
              ? dependency?.dependentFieldOptions?.[field.fieldId].options.map(
                  (opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.display}
                    </SelectItem>
                  )
                )
              : field.options?.map((opt) => (
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
