import { CheckBoxOrderProps } from "@/models/CheckBoxOrderProps";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function RadioButtonOrder({ field }: CheckBoxOrderProps) {
  return (
    <div className="flex justify-start w-full">
      <RadioGroup
        disabled={!field.enabled}
        required={field.required}
        defaultValue={field.defaultValue}
        className="flex  items-start"
      >
        {field.options?.map((item) => (
          <div key={item.value} className="flex items-center space-x-2">
            <Label htmlFor={item.value}>{item.display}</Label>
            <RadioGroupItem value={item.value} id={item.value} />
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

export default RadioButtonOrder;
