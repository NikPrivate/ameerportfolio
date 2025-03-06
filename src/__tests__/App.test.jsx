import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders portfolio title", () => {
  render(<App />);
  const title = screen.getByText(/welcome to my portfolio/i);
  expect(title).toBeInTheDocument();
});
