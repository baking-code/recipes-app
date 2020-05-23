import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

function renderWithRouter(ui: any, { route = "/" } = {}) {
  const Wrapper = ({ children }: any) => (
    <Router initialEntries={["/a"]}>{children}</Router>
  );
  return {
    ...render(ui, { wrapper: Wrapper })
  };
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithRouter as render };
