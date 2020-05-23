import React from "react";
import { render } from "../../test-utils";
import Recipe from "./index";

test("renders recipe", async () => {
  const { getByText, findByText } = render(<Recipe />, { route: "/a" });
  // const header = getByText(/blah/i);
  // expect(header).toBeInTheDocument();
  const blah = await findByText(/blah/i);
  expect(blah).toBeInTheDocument();
});
