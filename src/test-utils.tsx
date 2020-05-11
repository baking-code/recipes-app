// test-utils.js
import React from "react";
import { render } from "@testing-library/react";
import Firebase from "./firebase";
const fakebase = {
  once: (str: string) => Promise.resolve({ a: { title: "blah" } }),
};

const AllTheProviders = ({ children }: any) => {
  return <Firebase.Provider value={fakebase}>{children}</Firebase.Provider>;
};

const customRender = (ui: any, options?: object) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
