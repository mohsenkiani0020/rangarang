import { ParamsModel } from "@/models/paramsModel";
import product from "@/services/product";

async function ProductId({ params }: ParamsModel) {
  const { productGroupId, workTypeId } = await params;

  const data =await product.getProducts(productGroupId, workTypeId);

  console.log("god", data);
  

  return <div>ProductId</div>;
}

export default ProductId;
