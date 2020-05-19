import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { MemoryRouter as Router } from "react-router-dom";
// test utils file
function renderWithRouter(
  ui: any,
  {
    route: any = "/",
    history = createMemoryHistory({ initialEntries: ["/"] })
  } = {}
) {
  const Wrapper = ({ children }: any) => <Router>{children}</Router>;
  return render(ui, { wrapper: Wrapper });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithRouter as render };
