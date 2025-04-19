import { Input } from "@/components/ui/input";
import { ParamsModel } from "@/models/paramsModel";
import productServices from "@/services/product";
import { CircleHelp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "@/components/MultiSelect";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

async function ProductId({ params }: ParamsModel) {
  const { productGroupId, workTypeId } = await params;
  const data = await productServices.getProducts(productGroupId, workTypeId);
  console.log("god", data);

  return (
    <>
      <h1 className="font-bold text-gray-500 border-b-1 pb-4 mb-4 border-gray-300 text-lg">
        {data.title}
      </h1>

      {data.sections.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col justify-center gap-4 mt-7 ${
            item.collapsible ? "border-2" : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <h2 className="border-r-2 border-red-500 pr-1 font-bold text-gray-400 ">
              {item.title}
            </h2>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <CircleHelp size={20} className="text-gray-500 " />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          {item.fields.map((field) => {
            switch (field.inputType) {
              case "Dropdown":
                return (
                  <div
                    className={`grid grid-cols-12 gap-7 ${
                      field.isVisible ? "" : "hidden"
                    }`}
                    key={field.fieldId}
                  >
                    {field.description ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <h3 className="text-sm col-span-2">
                              {field.label}
                            </h3>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{field.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <h3 className="text-sm col-span-2">{field.label}</h3>
                    )}

                    <div className="col-span-10">
                      <Select
                        defaultValue={String(field.defaultValue ?? "")}
                        disabled={!field.enabled}
                        required={field.required}
                      >
                        <SelectTrigger className="w-full border border-gray-300 invalid:border-red-400">
                          <SelectValue
                            placeholder={
                              field.options?.[0]?.display ?? "Select"
                            }
                          />
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
                    </div>
                  </div>
                );
              case "Text":
                return (
                  <div
                    className={`grid grid-cols-12 gap-7 ${
                      field.isVisible ? "" : "hidden"
                    }`}
                    key={field.fieldId}
                  >
                    {field.description ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <h3 className="text-sm col-span-2">
                              {field.label}
                            </h3>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{field.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <h3 className="text-sm col-span-2">{field.label}</h3>
                    )}
                    <Input
                      disabled={!field.enabled}
                      required={field.required}
                      type="text"
                      className="col-span-10 border border-gray-300 invalid:border-red-400"
                    />
                  </div>
                );
              case "Textarea":
                return (
                  <div
                    className={`grid grid-cols-12 gap-7 ${
                      field.isVisible ? "" : "hidden"
                    }`}
                    key={field.fieldId}
                  >
                    {field.description ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <h3 className="text-sm col-span-2">
                              {field.label}
                            </h3>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{field.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <h3 className="text-sm col-span-2">{field.label}</h3>
                    )}

                    <Textarea
                      disabled={!field.enabled}
                      required={field.required}
                      className="col-span-10 border border-gray-300 invalid:border-red-400"
                    />
                  </div>
                );
              case "File":
                return (
                  <div
                    className={`grid grid-cols-12 gap-7 ${
                      field.isVisible ? "" : "hidden"
                    }`}
                    key={field.fieldId}
                  >
                    {field.description ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <h3 className="text-sm col-span-2">
                              {field.label}
                            </h3>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{field.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <h3 className="text-sm col-span-2">{field.label}</h3>
                    )}
                    <Input
                      disabled={!field.enabled}
                      required={field.required}
                      type="file"
                      className="col-span-10 border border-gray-300 invalid:border-red-400"
                    />
                  </div>
                );
              case "CheckBox":
                return <div key={field.fieldId}>CheckBox</div>;
              case "Radio":
                return <div key={field.fieldId}>Radio</div>;
              case "MultiSelect":
                return (
                  <div key={field.fieldId}>
                    <MultiSelect />
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      ))}
    </>
  );
}

export default ProductId;
