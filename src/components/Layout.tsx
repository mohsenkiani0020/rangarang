"use client"
import { ChildrenPropsModel } from "@/models/childrenPropsModel";
import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

function Layout({ children }: ChildrenPropsModel) {
  return (
    <Provider store={store}>
      <Navbar />
      <Container>{children}</Container>
    </Provider>
  );
}

export default Layout;
