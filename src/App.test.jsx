import {render, screen, fireEvent} from "@testing-library/react";
import App from "./App";

test("Renders correctly", () => {
  render(<App />);

  expect(screen.getByText(/count is 0/i)).toBeInTheDocument();

  fireEvent.click(screen.getByText(/count is 0/i));

  expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
})