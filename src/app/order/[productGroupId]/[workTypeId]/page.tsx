import { Input } from "@/components/ui/input";
import { ParamsModel } from "@/models/paramsModel";
import productServices from "@/services/product";

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
          className={`flex flex-col justify-center gap-4${
            item.collapsible ? "border-2" : ""
          }`}
        >
          <h2 className="border-r-2 border-red-500 pr-1 font-bold text-gray-400 ">
            {item.title}
          </h2>
          {item.fields.map((field) => {
            switch (field.inputType) {
              case "Dropdown":
                return <div key={field.fieldId}>Dropdown</div>;
              case "Text":
                return (
                  <div className="flex items-center gap-7" key={field.fieldId}>
                    <h3>{field.label}</h3>
                    <Input type="text" />
                  </div>
                );
              case "Textarea":
                return <div key={field.fieldId}>Textarea</div>;
              case "File":
                return <div key={field.fieldId}>File</div>;
              case "CheckBox":
                return <div key={field.fieldId}>CheckBox</div>;
              case "Radio":
                return <div key={field.fieldId}>Radio</div>;
              case "MultiSelect":
                return <div key={field.fieldId}>MultiSelect</div>;
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
