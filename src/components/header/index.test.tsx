import React from "react";
import { render } from "../../test-utils";
import Header from ".";

test("renders app header", async () => {
  const { getByText } = render(<Header header="recipeasy" />);
  const header = getByText(/recipeasy/i);
  expect(header).toBeInTheDocument();
});
