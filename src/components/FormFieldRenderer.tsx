
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "@/components/MultiSelect";

import TooltipLabel from "@/components/TooltipLabel";

import CheckBoxOrder from "@/components/CheckBoxOrder";
import SelectOrder from "@/components/SelectOrder";
import { CheckBoxOrderProps } from "@/models/CheckBoxOrderProps";
import RadioButtonOrder from "./RadioButtonOrder";

function FormFieldRenderer({ field }: CheckBoxOrderProps) {
  const wrapperClass = ` ${
    field.isVisible ? "" : "hidden"
  }`;

  const renderLabel = () =>
    field.description ? (
      <TooltipLabel data={field} className="text-sm mb-2" />
    ) : (
      <h3 className="text-sm mb-2">{field.label} :</h3>
    );

  switch (field.inputType) {
    case "Dropdown":
      return (
        <div className={wrapperClass} key={field.fieldId}>
          {renderLabel()}
          <div className="">
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
          <RadioButtonOrder field={field} />
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
