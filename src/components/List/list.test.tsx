import React from "react";
import {
  fireEvent,
  screen,
  waitForElementToBeRemoved
} from "@testing-library/react";
import { render } from "../../test-utils";

import List from "./list";

const items = [
  { name: "abc", id: "1" },
  { name: "def", id: "1" }
];
test("renders List", async () => {
  const { getByText } = render(<List items={items} />);
  const list = getByText(/abc/i);
  expect(list).toBeInTheDocument();
  const list2 = getByText(/def/i);
  expect(list2).toBeInTheDocument();
});

test("renders Search box", async () => {
  const { getByText } = render(<List items={items} />);
  const box = screen.getByTestId("searchbox");
  expect(box).toHaveFocus();
  fireEvent.change(box, {
    target: { value: "aaa" }
  });
  waitForElementToBeRemoved(() => getByText(/abc/i));
});
