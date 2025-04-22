import { ParamsModel } from "@/models/paramsModel";
import productServices from "@/services/product";

import TooltipLabel from "@/components/TooltipLabel";

import FormFieldRenderer from "@/components/FormFieldRenderer";

async function ProductId({ params }: ParamsModel) {
  const { productGroupId, workTypeId } = await params;
  const data = await productServices.getProducts(productGroupId, workTypeId);

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
            <TooltipLabel data={item} size={20} className="text-gray-500 " />
          </div>
          {item.fields.map((field) => {
            return <FormFieldRenderer field={field} key={field.fieldId}/>;
          })}
        </div>
      ))}
    </>
  );
}

export default ProductId;
