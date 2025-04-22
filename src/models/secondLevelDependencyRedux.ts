import { Option } from "@/models/productModel";

export interface SecondLevelDependency {
  fieldId: string;
  option: Option | null;
}

export interface SecondLevelDependencyRedux {
  data: SecondLevelDependency[];
}


