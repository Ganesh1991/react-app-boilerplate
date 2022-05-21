import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("app component", () => {
  test("app component renders with default ", async () => {
    render(<App />);
    const countHeader = screen.getByText(/count/i);
    expect(countHeader).toHaveTextContent("Count: 0");
    const incrementBtn = screen.getByRole("button", { name: "+" });
    await userEvent.click(incrementBtn);
    expect(countHeader).toHaveTextContent("Count: 1");
    const decrementBtn = screen.getByRole("button", { name: "-" });
    await userEvent.click(decrementBtn);
    expect(countHeader).toHaveTextContent("Count: 0");
  });
});
