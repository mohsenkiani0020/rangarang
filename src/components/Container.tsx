import { ChildrenPropsModel } from "@/models/childrenPropsModel";
import React from "react";

function Container({ children }: ChildrenPropsModel) {
  return <div className="container mx-auto">{children}</div>;
}

export default Container;
