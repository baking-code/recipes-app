// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import { get } from "lodash";
import firebase from "./firebase";

jest.doMock("./firebase", () => {
  return {
    database: jest.fn(() => ({
      ref: jest.fn((id: string) => ({
        once: (str: string) =>
          Promise.resolve({
            val: function () {
              const all: object = { a: { name: "blah", id: "1" } };
              if (id) {
                console.error("AAAA", all, id, all[id]);
                return all[id];
              }
              return all;
            }
          })
      }))
    }))
  };
});
