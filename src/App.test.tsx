import React from "react";
import { render } from "./test-utils";
import App from "./App";

test("renders app header", async () => {
  const { getByText, findByText } = render(<App />);
  const header = getByText(/recipeasy/i);
  expect(header).toBeInTheDocument();
  const blah = await findByText(/blah/i);
  expect(blah).toBeInTheDocument();
});
