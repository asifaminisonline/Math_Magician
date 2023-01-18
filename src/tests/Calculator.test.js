import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Calculator from "../components/Calculator";

it("Calculator renders correctly", () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();
});
