// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

import firebase from "./firebase";

jest.mock("./firebase", () => {
  return {
    database: jest.fn(() => ({
      ref: jest.fn(() => ({
        once: (str: string) =>
          Promise.resolve({
            val: function () {
              return { a: { name: "blah", id: "1" } };
            }
          })
      }))
    }))
  };
});
