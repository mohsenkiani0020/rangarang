"use client";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "@/components/MultiSelect";

import TooltipLabel from "@/components/TooltipLabel";

import CheckBoxOrder from "@/components/CheckBoxOrder";
import SelectOrder from "@/components/SelectOrder";
import { CheckBoxOrderProps } from "@/models/CheckBoxOrderProps";

function FormFieldRenderer({ field }: CheckBoxOrderProps) {
  const wrapperClass = `grid grid-cols-12 gap-7 ${
    field.isVisible ? "" : "hidden"
  }`;

  const renderLabel = () =>
    field.description ? (
      <TooltipLabel data={field} className="text-sm col-span-2" />
    ) : (
      <h3 className="text-sm col-span-2">{field.label}</h3>
    );

  switch (field.inputType) {
    case "Dropdown":
      return (
        <div className={wrapperClass} key={field.fieldId}>
          {renderLabel()}
          <div className="col-span-10">
            <SelectOrder field={field} />
          </div>
        </div>
      );

    case "Text":
      return (
        <div className={wrapperClass} key={field.fieldId}>
          {renderLabel()}
          <Input
            placeholder={field.style?.placeholder || "place holder"}
            disabled={!field.enabled}
            required={field.required}
            type="text"
            className="col-span-10 border border-gray-300 invalid:border-red-400"
          />
        </div>
      );

    case "Textarea":
      return (
        <div className={wrapperClass} key={field.fieldId}>
          {renderLabel()}
          <Textarea
            disabled={!field.enabled}
            required={field.required}
            className="col-span-10 border border-gray-300 invalid:border-red-400"
          />
        </div>
      );

    case "File":
      return (
        <div className={wrapperClass} key={field.fieldId}>
          {renderLabel()}
          <Input
            disabled={!field.enabled}
            required={field.required}
            type="file"
            className="col-span-10 border border-gray-300 invalid:border-red-400"
          />
        </div>
      );

    case "CheckBox":
      return (
        <div className={wrapperClass} key={field.fieldId}>
          <CheckBoxOrder field={field} />
        </div>
      );

    case "Radio":
      return (
        <div className={wrapperClass} key={field.fieldId}>
          <p className="col-span-12">Radio (coming soon)</p>
        </div>
      );

    case "MultiSelect":
      return (
        <div className={wrapperClass} key={field.fieldId}>
            {renderLabel()}
          <MultiSelect field={field}/>
        </div>
      );

    default:
      return null;
  }
}

export default FormFieldRenderer;
