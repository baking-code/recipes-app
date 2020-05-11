import React from "react";
import { render } from "@testing-library/react";
import List from ".";

const items = [{ title: "abc" }, { title: "def" }];
test("renders List", async () => {
  const { getByText } = render(<List items={items} />);
  const list = getByText(/abc/i);
  expect(list).toBeInTheDocument();
  const list2 = getByText(/def/i);
  expect(list2).toBeInTheDocument();
});
