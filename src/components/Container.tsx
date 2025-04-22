import { ChildrenPropsModel } from "@/models/childrenPropsModel";
import React from "react";

function Container({ children }: ChildrenPropsModel) {
  return (
    <div
      className="w-full px-2 lg:px-0
            max-w-[37.5rem] sm:max-w-[45rem] 
            md:max-w-[60rem] lg:max-w-[75rem] 
            xl:max-w-[90rem] mx-auto"
    >
      {children}
    </div>
  );
}

export default Container;
